/* ============================================================
   HERO-SCENE.JS
   Three.js background scene for the hero section.
   7 floating wireframe geometries that reference the projects.
   Reacts to mouse parallax + theme changes + scroll fade.
   ============================================================ */
(function () {
    'use strict';

    if (typeof THREE === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var canvas = document.getElementById('hero-canvas');
    if (!canvas) return;

    var hero = canvas.parentElement;

    var renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: true
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    var scene  = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
    camera.position.z = 5;

    scene.add(new THREE.AmbientLight(0xffffff, 0.55));
    var dir = new THREE.DirectionalLight(0xffffff, 0.5);
    dir.position.set(3, 5, 4);
    scene.add(dir);

    function wireMat() {
        return new THREE.MeshBasicMaterial({
            color: 0xffffff, wireframe: true, transparent: true, opacity: 0.8
        });
    }

    function buildTargetArrow() {
        var g = new THREE.Group();
        g.add(new THREE.Mesh(new THREE.TorusGeometry(0.45, 0.04, 8, 28), wireMat()));
        g.add(new THREE.Mesh(new THREE.TorusGeometry(0.26, 0.04, 8, 28), wireMat()));
        g.add(new THREE.Mesh(new THREE.SphereGeometry(0.08, 10, 8), wireMat()));
        var arrow = new THREE.Group();
        var tip = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.16, 8), wireMat());
        tip.position.y = -0.08;
        var shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.85, 6), wireMat());
        shaft.position.y = -0.585;
        arrow.add(tip, shaft);
        arrow.rotation.x = -Math.PI / 2;
        g.add(arrow);
        return g;
    }

    /* Floating objects — each one is thematically tied to a project type.
       color key: 'accent' (indigo, PM/Web/Dev) or 'green' (Data/Industry). */
    var defs = [
        { geo: new THREE.OctahedronGeometry(0.55),                 pos: [-2.6,  1.3, -0.5], rx: 0.003, ry: 0.005, color: 'accent' }, // Diamond Counter
        { geo: new THREE.BoxGeometry(0.55, 0.55, 0.55),            pos: [ 2.8,  1.0,  0.2], rx: 0.004, ry: 0.003, color: 'accent' }, // Asset Manager
        { geo: new THREE.TorusGeometry(0.42, 0.14, 16, 48),        pos: [-3.0, -1.2,  1.0], rx: 0.006, ry: 0.004, color: 'green'  }, // KPI dashboard
        { geo: new THREE.IcosahedronGeometry(0.5),                 pos: [ 3.2, -0.8, -1.0], rx: 0.004, ry: 0.006, color: 'accent' }, // SAP migration
        { geo: new THREE.TetrahedronGeometry(0.5),                 pos: [ 0.0,  2.1, -1.6], rx: 0.005, ry: 0.004, color: 'green'  }, // Industry 4.0
        { build: 'target',                                          pos: [ 0.4, -2.1,  0.4], rx: 0,     ry: 0.008, color: 'accent' }, // Target + arrow (only Y-axis)
        { geo: new THREE.CylinderGeometry(0.15, 0.15, 0.85, 16),   pos: [-1.5,  0.2,  1.2], rx: 0.003, ry: 0.005, color: 'green'  }  // Data platform
    ];

    var meshes = defs.map(function (def) {
        var obj = def.build === 'target'
            ? buildTargetArrow()
            : new THREE.Mesh(def.geo, wireMat());
        obj.position.set(def.pos[0], def.pos[1], def.pos[2]);
        obj.userData = def;
        scene.add(obj);
        return obj;
    });

    function applyColors(colors) {
        var opacity = colors.isLight ? 0.9 : 0.75;
        meshes.forEach(function (m) {
            var hex = m.userData.color === 'green' ? colors.green : colors.accent;
            m.traverse(function (c) {
                if (c.isMesh) {
                    c.material.color.set(hex);
                    c.material.opacity = opacity;
                }
            });
        });
    }
    window.ThemeColors.onChange(applyColors);

    function resize() {
        var w = hero.clientWidth;
        var h = hero.clientHeight;
        if (w === 0 || h === 0) return;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
    }
    resize();
    window.addEventListener('resize', resize);

    /* Mouse parallax — camera shifts slightly toward cursor */
    var mouseX = 0, mouseY = 0;
    var targetX = 0, targetY = 0;
    document.addEventListener('mousemove', function (e) {
        targetX = (e.clientX / window.innerWidth  - 0.5) * 0.5;
        targetY = (e.clientY / window.innerHeight - 0.5) * 0.35;
    }, { passive: true });

    /* Animation loop (only active while hero is within viewport) */
    var inView = true;
    var observer = new IntersectionObserver(function (entries) {
        inView = entries[0].isIntersecting;
    }, { threshold: 0 });
    observer.observe(hero);

    function animate() {
        requestAnimationFrame(animate);
        if (!inView) return;
        mouseX += (targetX - mouseX) * 0.04;
        mouseY += (targetY - mouseY) * 0.04;
        camera.position.x = mouseX;
        camera.position.y = -mouseY;
        camera.lookAt(0, 0, 0);
        for (var i = 0; i < meshes.length; i++) {
            meshes[i].rotation.x += meshes[i].userData.rx;
            meshes[i].rotation.y += meshes[i].userData.ry;
        }
        renderer.render(scene, camera);
    }
    animate();
})();
