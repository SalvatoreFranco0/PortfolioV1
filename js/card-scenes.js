/* ============================================================
   CARD-SCENES.JS
   Per-project mini Three.js scenes. Each project card has a
   <canvas class="card-canvas" data-shape="..."> with a shape
   that thematically references that project.
   One-time static render on init + continuous rotation on hover.
   Skipped on mobile and reduced-motion.
   ============================================================ */
(function () {
    'use strict';

    if (typeof THREE === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(max-width: 640px)').matches) return;

    var cards = document.querySelectorAll('.project-card[data-shape]');
    if (!cards.length) return;

    function makeObject(shape) {
        var mat = function (flat) {
            return new THREE.MeshStandardMaterial({
                color: 0xffffff,
                metalness: 0.15,
                roughness: 0.45,
                flatShading: !!flat
            });
        };

        switch (shape) {
            case 'octahedron':
                return new THREE.Mesh(new THREE.OctahedronGeometry(0.95), mat(true));
            case 'sphere':
                return new THREE.Mesh(new THREE.SphereGeometry(0.85, 24, 24), mat(false));
            case 'box':
                return new THREE.Mesh(new THREE.BoxGeometry(1.1, 1.1, 1.1), mat(false));
            case 'bars': {
                var group = new THREE.Group();
                var heights = [0.7, 1.25, 0.95];
                heights.forEach(function (h, i) {
                    var m = new THREE.Mesh(
                        new THREE.BoxGeometry(0.32, h, 0.32),
                        mat(false)
                    );
                    m.position.x = (i - 1) * 0.48;
                    m.position.y = h / 2 - 0.6;
                    group.add(m);
                });
                return group;
            }
            case 'torus':
                return new THREE.Mesh(new THREE.TorusGeometry(0.72, 0.26, 18, 48), mat(false));
            case 'tetrahedron':
                return new THREE.Mesh(new THREE.TetrahedronGeometry(1.0), mat(true));
            case 'icosahedron':
                return new THREE.Mesh(new THREE.IcosahedronGeometry(0.9), mat(true));
            case 'target': {
                var g = new THREE.Group();
                g.add(new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.07, 10, 36), mat(false)));
                g.add(new THREE.Mesh(new THREE.TorusGeometry(0.32, 0.07, 10, 36), mat(false)));
                g.add(new THREE.Mesh(new THREE.SphereGeometry(0.11, 14, 10), mat(false)));
                var arrow = new THREE.Group();
                var tip = new THREE.Mesh(new THREE.ConeGeometry(0.10, 0.20, 12), mat(false));
                tip.position.y = -0.10;
                var shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.90, 10), mat(false));
                shaft.position.y = -0.65;
                arrow.add(tip, shaft);
                arrow.rotation.x = -Math.PI / 2;
                g.add(arrow);
                return g;
            }
            default:
                return new THREE.Mesh(new THREE.OctahedronGeometry(0.9), mat(true));
        }
    }

    function pickColorKey(card) {
        var tag = card.querySelector('.tag');
        if (tag && tag.classList.contains('tag--industry')) return 'green';
        if (tag && tag.classList.contains('tag--report'))   return 'green';
        return 'accent';
    }

    function initCard(card) {
        var canvas = card.querySelector('.card-canvas');
        if (!canvas) return null;

        var renderer;
        try {
            renderer = new THREE.WebGLRenderer({
                canvas: canvas,
                alpha: true,
                antialias: true
            });
        } catch (e) {
            return null; // WebGL unsupported or context limit reached
        }
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

        function sizeRenderer() {
            var w = canvas.clientWidth;
            var h = canvas.clientHeight;
            if (w === 0 || h === 0) { w = 72; h = 72; }
            renderer.setSize(w, h, false);
            cam.aspect = w / h;
            cam.updateProjectionMatrix();
        }

        var scene = new THREE.Scene();
        var cam = new THREE.PerspectiveCamera(45, 1, 0.1, 10);
        cam.position.z = 2.8;

        scene.add(new THREE.AmbientLight(0xffffff, 0.55));
        var dir = new THREE.DirectionalLight(0xffffff, 0.9);
        dir.position.set(2, 3, 4);
        scene.add(dir);

        var shape = card.dataset.shape;
        var yOnly = shape === 'target';
        var obj = makeObject(shape);
        scene.add(obj);

        var colorKey = pickColorKey(card);

        function applyColor(colors) {
            var hex = colorKey === 'green' ? colors.green : colors.accent;
            obj.traverse(function (c) {
                if (c.isMesh) c.material.color.set(hex);
            });
            render();
        }
        window.ThemeColors.onChange(applyColor);

        sizeRenderer();
        window.addEventListener('resize', function () {
            sizeRenderer();
            render();
        });

        var rafId = null;
        var running = false;

        function render() {
            renderer.render(scene, cam);
        }

        function tick() {
            if (!running) return;
            rafId = requestAnimationFrame(tick);
            if (!yOnly) obj.rotation.x += 0.008;
            obj.rotation.y += 0.013;
            render();
        }

        function start() {
            if (running) return;
            running = true;
            tick();
        }
        function stop() {
            running = false;
            if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
        }

        /* Initial static render so shape is visible without hover */
        if (yOnly) {
            obj.rotation.set(0, 0.6, 0);
        } else {
            obj.rotation.set(0.5, 0.6, 0);
        }
        render();

        return { start: start, stop: stop };
    }

    /* Stagger initialization across frames to keep the main thread snappy */
    var i = 0;
    function initNext() {
        if (i >= cards.length) return;
        var card = cards[i++];
        var api = initCard(card);
        if (api) {
            card.addEventListener('mouseenter', api.start);
            card.addEventListener('mouseleave', api.stop);
        }
        requestAnimationFrame(initNext);
    }
    requestAnimationFrame(initNext);
})();
