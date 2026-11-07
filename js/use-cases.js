/* Motion and small behaviours shared by the use case pages.
   Without JS the content stays visible: see the html:not(.js) rules in use-cases.css. */
(function () {
  'use strict';

  var still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function locale() { return document.documentElement.lang === 'en' ? 'en-GB' : 'it-IT'; }

  // Diagrams and figures start when they enter the screen
  var seen = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-in');
      seen.unobserve(entry.target);
      entry.target.querySelectorAll('.dg-pop, .dg-bar').forEach(function (el, i) {
        el.style.transitionDelay = (i * 45) + 'ms';
      });
      if (entry.target.hasAttribute('data-count')) run(entry.target);
    });
  }, { threshold: 0.2 });
  document.querySelectorAll('[data-in], [data-count]').forEach(function (el) { seen.observe(el); });

  // Counters
  function format(el, value) {
    var dec = Number(el.getAttribute('data-dec') || 0);
    return value.toLocaleString(locale(), { minimumFractionDigits: dec, maximumFractionDigits: dec }) + (el.getAttribute('data-suffix') || '');
  }
  function run(el) {
    var end = Number(el.getAttribute('data-count'));
    if (still) { el.textContent = format(el, end); return; }
    var start = performance.now();
    (function step(now) {
      var t = Math.min((now - start) / 1100, 1);
      el.textContent = format(el, end * (1 - Math.pow(1 - t, 3)));
      if (t < 1) requestAnimationFrame(step);
    })(start);
  }
  new MutationObserver(function () {
    document.querySelectorAll('[data-count]').forEach(function (el) {
      el.textContent = format(el, Number(el.getAttribute('data-count')));
    });
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

  if (still) return;

  // Report image that flattens while scrolling
  var show = document.querySelector('[data-untilt]');
  if (show && window.innerWidth > 768) {
    var ticking = false;
    var update = function () {
      ticking = false;
      var top = show.getBoundingClientRect().top;
      var p = Math.max(0, Math.min(1, (top - 90) / (window.innerHeight * 0.7)));
      show.style.setProperty('--untilt', p.toFixed(3));
    };
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    update();
  }

  // Hero picture follows the pointer
  var stage = document.querySelector('[data-stage]');
  if (stage && window.matchMedia('(hover: hover)').matches) {
    stage.closest('.uc-hero').addEventListener('pointermove', function (e) {
      var r = stage.getBoundingClientRect();
      stage.style.setProperty('--mx', (((e.clientX - r.left) / r.width) - 0.5).toFixed(3));
      stage.style.setProperty('--my', (((e.clientY - r.top) / r.height) - 0.5).toFixed(3));
    });
  }

  // Sticky index of the experience stories
  var links = document.querySelectorAll('.story-nav a');
  if (links.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (link) {
          link.setAttribute('aria-current', String(link.getAttribute('href') === '#' + entry.target.id));
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('.story').forEach(function (story) { spy.observe(story); });
  }
})();
