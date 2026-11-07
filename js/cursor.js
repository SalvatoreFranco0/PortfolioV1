/* ============================================================
   CURSOR.JS
   Custom animated cursor — solid dot (follows 1:1) + ring that
   trails with a lerp. Reacts to interactive elements (hover) and
   to clicks (down). Disabled on touch devices and when the user
   prefers reduced motion. Color follows the --accent CSS token,
   so it stays in sync with the light/dark theme.
   ============================================================ */
(function () {
    'use strict';

    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var isTouch       = window.matchMedia('(pointer: coarse)').matches;
    if (reducedMotion || isTouch) return;

    /* ── ELEMENTS ── */
    var dot  = document.createElement('div');
    var ring = document.createElement('div');
    dot.className  = 'cursor-dot';
    ring.className = 'cursor-ring';
    dot.setAttribute('aria-hidden', 'true');
    ring.setAttribute('aria-hidden', 'true');

    function mount() {
        document.body.appendChild(dot);
        document.body.appendChild(ring);
        document.documentElement.classList.add('has-custom-cursor');
        bind();
        requestAnimationFrame(loop);
    }

    /* ── STATE ── */
    var mx = window.innerWidth / 2,  my = window.innerHeight / 2;   /* target (mouse) */
    var rx = mx, ry = my;                                           /* ring position  */
    var scale = 1, scaleTarget = 1;                                 /* click feedback */
    var visible = false;
    var LERP = 0.18;

    function loop() {
        rx += (mx - rx) * LERP;
        ry += (my - ry) * LERP;
        scale += (scaleTarget - scale) * 0.3;
        /* Scale lives in the inline transform (it would override a CSS class). */
        ring.style.transform = 'translate(' + rx + 'px,' + ry + 'px) translate(-50%,-50%) scale(' + scale + ')';
        dot.style.transform  = 'translate(' + mx + 'px,' + my + 'px) translate(-50%,-50%)';
        requestAnimationFrame(loop);
    }

    /* ── INTERACTIVE TARGETS ── */
    var INTERACTIVE = 'a, button, [role="button"], .btn, input, textarea, select, label, summary';

    function bind() {
        window.addEventListener('mousemove', function (e) {
            mx = e.clientX;
            my = e.clientY;
            if (!visible) {
                visible = true;
                dot.classList.add('is-visible');
                ring.classList.add('is-visible');
            }
        }, { passive: true });

        /* Event delegation for hover state */
        document.addEventListener('mouseover', function (e) {
            if (e.target.closest && e.target.closest(INTERACTIVE)) {
                ring.classList.add('cursor-ring--hover');
                dot.classList.add('cursor-dot--hover');
            }
        });
        document.addEventListener('mouseout', function (e) {
            if (e.target.closest && e.target.closest(INTERACTIVE)) {
                ring.classList.remove('cursor-ring--hover');
                dot.classList.remove('cursor-dot--hover');
            }
        });

        /* Click feedback (scale handled in loop, see above) */
        document.addEventListener('mousedown', function () {
            scaleTarget = 0.8;
        });
        document.addEventListener('mouseup', function () {
            scaleTarget = 1;
        });

        /* Fade out when leaving the window */
        document.addEventListener('mouseleave', function () {
            dot.classList.remove('is-visible');
            ring.classList.remove('is-visible');
            visible = false;
        });
        document.addEventListener('mouseenter', function () {
            dot.classList.add('is-visible');
            ring.classList.add('is-visible');
            visible = true;
        });
    }

    if (document.body) {
        mount();
    } else {
        document.addEventListener('DOMContentLoaded', mount);
    }
})();
