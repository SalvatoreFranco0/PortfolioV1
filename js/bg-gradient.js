/**
 * bg-gradient.js — Stripe/Vercel-style WebGL mesh-gradient background.
 *
 * Wraps the vendored Whatamesh `Gradient` class (js/gradient.js, exposed as
 * window.Gradient). Creates a full-viewport fixed canvas behind all content and
 * keeps it theme-reactive: the four mesh colors are CSS variables
 * (--gradient-color-1..4, defined per theme in portfolio.css), and a
 * MutationObserver re-reads them straight into the live shader uniforms whenever
 * the light/dark theme toggles — no rebuild, no flash.
 *
 * Self-contained classic script (no ES-module import) so it also works when the
 * site is opened directly via file://.
 */
(function () {
  'use strict';

  if (typeof window.Gradient !== 'function') {
    console.warn('[bg-gradient] Gradient library not loaded — skipping background.');
    return;
  }

  var gradient;

  // Chrome can drop the WebGL context under GPU load (e.g. heavy images re-rendered on
  // a language switch): the canvas then goes blank and only the plain --bg shows.
  // Ask for the context back and rebuild the gradient on a fresh canvas.
  function onLost(e) { e.preventDefault(); }
  function onRestored() {
    var old = document.getElementById('gradient-canvas');
    if (gradient) { gradient.pause(); gradient.disconnect(); }
    if (old) old.remove();
    start();
  }

  function start() {
  // ── Build the canvas (same role the old #bg-canvas had) ──
  var canvas = document.createElement('canvas');
  canvas.id = 'gradient-canvas';
  canvas.setAttribute('aria-hidden', 'true');
  // Inline fallbacks in case the CSS hasn't applied yet; portfolio.css owns the rest.
  Object.assign(canvas.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    zIndex: '-1',
    pointerEvents: 'none',
  });
  document.body.prepend(canvas);

  // ── Init the gradient ──
  canvas.addEventListener('webglcontextlost', onLost);
  canvas.addEventListener('webglcontextrestored', onRestored);

  gradient = new window.Gradient();
  gradient.initGradient('#gradient-canvas');

  // ── Reduced motion: render a static frame, then pause the animation loop ──
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var g = gradient;
    setTimeout(function () {
      if (typeof g.pause === 'function') g.pause();
    }, 250);
  }
  }
  start();

  // Re-read the --gradient-color-* CSS vars into the running shader uniforms.
  function applyThemeColors() {
    if (typeof gradient.initGradientColors !== 'function') return;
    gradient.initGradientColors(); // repopulates gradient.sectionColors from CSS
    var u = gradient.uniforms;
    if (!u || !gradient.sectionColors) return;
    u.u_baseColor.value = gradient.sectionColors[0];
    for (var i = 1; i < gradient.sectionColors.length; i++) {
      var layer = u.u_waveLayers.value[i - 1];
      if (layer) layer.value.color.value = gradient.sectionColors[i];
    }
  }

  // ── Theme reactivity: watch data-theme on <html> ──
  var observer = new MutationObserver(function (mutations) {
    for (var m = 0; m < mutations.length; m++) {
      if (mutations[m].attributeName === 'data-theme') {
        applyThemeColors();
        break;
      }
    }
  });
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });

})();
