/* ============================================================
   INTERACTIONS.JS
   - 3D tilt on project cards (desktop only, no library)
   - Cursor-follow glow spot via CSS custom properties
   - GSAP ScrollTrigger parallax for hero blobs + hero canvas
   ============================================================ */
(function () {
    'use strict';

    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var isTouch       = window.matchMedia('(pointer: coarse)').matches;

    /* ── 3D CARD TILT ── */
    if (!reducedMotion && !isTouch) {
        var cards = document.querySelectorAll('.project-card');
        cards.forEach(function (card) {
            var rect = null;

            function onEnter() {
                rect = card.getBoundingClientRect();
            }
            function onMove(e) {
                if (!rect) rect = card.getBoundingClientRect();
                var x = e.clientX - rect.left;
                var y = e.clientY - rect.top;
                var px = (x / rect.width)  - 0.5;   /* -0.5 .. +0.5 */
                var py = (y / rect.height) - 0.5;
                card.style.setProperty('--mouse-x', (x / rect.width  * 100) + '%');
                card.style.setProperty('--mouse-y', (y / rect.height * 100) + '%');
                card.style.transform =
                    'perspective(900px) rotateX(' + (-py * 7).toFixed(2) + 'deg)' +
                    ' rotateY(' + (px * 9).toFixed(2) + 'deg) translateY(-3px)';
            }
            function onLeave() {
                rect = null;
                card.style.transform = '';
            }

            card.addEventListener('mouseenter', onEnter);
            card.addEventListener('mousemove',  onMove);
            card.addEventListener('mouseleave', onLeave);
        });
    }


})();
