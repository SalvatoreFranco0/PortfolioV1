/* ============================================================
   THEME-COLORS.JS
   Reads CSS custom properties from :root and notifies subscribers
   whenever [data-theme] changes so Three.js materials stay in
   sync with the light/dark palette.
   ============================================================ */
(function () {
    'use strict';

    var subs = [];

    function read() {
        var cs = getComputedStyle(document.documentElement);
        return {
            accent:   (cs.getPropertyValue('--accent')   || '#818cf8').trim(),
            accentHi: (cs.getPropertyValue('--accent-hi')|| '#a5b4fc').trim(),
            green:    (cs.getPropertyValue('--green')    || '#34d399').trim(),
            bg:       (cs.getPropertyValue('--bg')       || '#09090b').trim(),
            text1:    (cs.getPropertyValue('--text-1')   || '#fafafa').trim(),
            text3:    (cs.getPropertyValue('--text-3')   || '#52525b').trim(),
            isLight:  document.documentElement.getAttribute('data-theme') === 'light'
        };
    }

    var current = read();

    function notify() {
        for (var i = 0; i < subs.length; i++) {
            try { subs[i](current); } catch (e) { /* ignore subscriber errors */ }
        }
    }

    window.ThemeColors = {
        get: function () { return current; },
        onChange: function (fn) {
            subs.push(fn);
            fn(current);
            return function () {
                var i = subs.indexOf(fn);
                if (i >= 0) subs.splice(i, 1);
            };
        }
    };

    new MutationObserver(function () {
        requestAnimationFrame(function () {
            current = read();
            notify();
        });
    }).observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-theme']
    });
})();
