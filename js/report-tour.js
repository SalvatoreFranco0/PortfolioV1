/* Guided tour of the report pages and live panel on the report's fictitious data. */
(function () {
  'use strict';

  var still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Tour ── */
  var tour = document.querySelector('[data-tour]');
  if (tour) {
    var stops = Array.prototype.slice.call(tour.querySelectorAll('.tour__stop'));
    var tabs = Array.prototype.slice.call(tour.querySelectorAll('.tour__tab'));
    var imgs = Array.prototype.slice.call(tour.querySelectorAll('.tour__img'));
    var canvas = tour.querySelector('.tour__canvas');
    var spot = tour.querySelector('.tour__spot');
    var open = tour.querySelector('.tour__open');
    var bar = tour.querySelector('.tour__bar i');
    var countNow = tour.querySelector('[data-now]');
    var prev = tour.querySelector('[data-prev]');
    var next = tour.querySelector('[data-next]');
    var play = tour.querySelector('[data-play]');
    var dotsBox = tour.querySelector('.tour__dots');
    var current = 0;
    var timer = null;

    var dots = stops.map(function (stop, i) {
      var dot = document.createElement('button');
      var name = document.createElement('span');
      var title = stop.querySelector('h3');
      dot.type = 'button';
      dot.className = 'tour__dot';
      dot.appendChild(document.createElement('i'));
      // Accessible name in a span, because i18n.js translates content and not aria-label
      name.style.cssText = 'position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap';
      name.setAttribute('data-i18n', title.getAttribute('data-i18n'));
      name.textContent = title.textContent;
      dot.appendChild(name);
      dot.addEventListener('click', function () { stopPlay(); go(i); });
      dotsBox.appendChild(dot);
      return dot;
    });

    function go(index) {
      current = (index + stops.length) % stops.length;
      var stop = stops[current];
      var page = Number(stop.getAttribute('data-page'));
      var r = stop.getAttribute('data-region').split(',').map(Number);
      var whole = r[2] >= 100 && r[3] >= 100;
      var s = whole ? 1 : Math.min(3, Math.min(100 / r[2], 100 / r[3]) * 0.94);
      var limit = (s - 1) * 50;
      var tx = Math.max(-limit, Math.min(limit, (50 - (r[0] + r[2] / 2)) * s));
      var ty = Math.max(-limit, Math.min(limit, (50 - (r[1] + r[3] / 2)) * s));

      canvas.style.transform = 'translate(' + tx + '%,' + ty + '%) scale(' + s + ')';
      canvas.style.setProperty('--s', s);
      spot.setAttribute('data-on', String(!whole));
      spot.style.left = r[0] + '%';
      spot.style.top = r[1] + '%';
      spot.style.width = r[2] + '%';
      spot.style.height = r[3] + '%';

      imgs.forEach(function (img, i) { img.setAttribute('data-on', String(i === page)); });
      tabs.forEach(function (tab, i) { tab.setAttribute('aria-pressed', String(i === page)); });
      stops.forEach(function (el, i) { el.hidden = i !== current; });
      dots.forEach(function (dot, i) { dot.setAttribute('aria-current', String(i === current)); });
      open.href = imgs[page].getAttribute('data-full');
      countNow.textContent = current + 1;
      bar.style.transform = 'scaleX(' + ((current + 1) / stops.length) + ')';
      prev.disabled = current === 0;
      if (!still && stop.animate) stop.animate([{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'none' }], { duration: 320 });
    }

    function stopPlay() {
      if (timer) { clearInterval(timer); timer = null; }
      play.setAttribute('aria-pressed', 'false');
      play.querySelector('[data-icon-play]').style.display = '';
      play.querySelector('[data-icon-pause]').style.display = 'none';
    }
    function startPlay() {
      play.setAttribute('aria-pressed', 'true');
      play.querySelector('[data-icon-play]').style.display = 'none';
      play.querySelector('[data-icon-pause]').style.display = '';
      timer = setInterval(function () { go(current + 1); }, 5500);
    }

    // On a phone the picture sits above the buttons: keep it in sight when moving on
    function step(by) {
      stopPlay();
      go(current + by);
      if (window.innerWidth <= 1024) {
        var top = tour.querySelector('.tour__viewer').getBoundingClientRect().top;
        // 84px: the fixed navigation bar
        if (top < 84) window.scrollBy({ top: top - 84, behavior: still ? 'auto' : 'smooth' });
      }
    }
    next.addEventListener('click', function () { step(1); });
    prev.addEventListener('click', function () { step(-1); });
    play.addEventListener('click', function () { if (timer) stopPlay(); else { go(current + 1); startPlay(); } });
    tabs.forEach(function (tab, page) {
      tab.addEventListener('click', function () {
        stopPlay();
        for (var i = 0; i < stops.length; i++) {
          if (Number(stops[i].getAttribute('data-page')) === page) { go(i); return; }
        }
      });
    });
    tour.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { e.preventDefault(); stopPlay(); go(current + 1); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); stopPlay(); go(current - 1); }
    });
    // Pointer on the image also moves on: the most obvious gesture on a picture
    tour.querySelector('.tour__viewer').addEventListener('click', function (e) {
      if (e.target.closest('a')) return;
      stopPlay();
      go(current + 1);
    });
    go(0);
    stopPlay();
  }

  /* ── Live panel ── */
  var live = document.querySelector('[data-live]');
  var data = window.REPORT_DATA;
  if (live && data) {
    var year = 'all';
    var line = 'all';
    var CIRC = 2 * Math.PI * 52;

    function fmt(n, dec) {
      var loc = document.documentElement.lang === 'en' ? 'en-GB' : 'it-IT';
      return n.toLocaleString(loc, { minimumFractionDigits: dec || 0, maximumFractionDigits: dec || 0 });
    }
    function sum(rows, key) { return rows.reduce(function (a, r) { return a + r[key]; }, 0); }
    function pick(y, l) {
      return data.rows.filter(function (r) { return (y === 'all' || r.y === y) && (l === 'all' || r.l === l); });
    }
    function setBar(row, ratio, text) {
      row.querySelector('.live__track i').style.transform = 'scaleX(' + Math.max(0, Math.min(1, ratio)) + ')';
      row.querySelector('b').textContent = text;
    }

    function render() {
      var rows = pick(year, line);
      var n = sum(rows, 'n') || 1;
      var oee = sum(rows, 'oeeSum') / n;
      live.querySelector('[data-oee]').textContent = fmt(oee * 100, 1) + '%';
      live.querySelector('.live__gauge .fg').style.strokeDashoffset = CIRC * (1 - oee);
      setBar(live.querySelector('[data-f="avail"]'), sum(rows, 'availSum') / n, fmt(sum(rows, 'availSum') / n * 100, 1) + '%');
      setBar(live.querySelector('[data-f="perf"]'), sum(rows, 'perfSum') / n, fmt(sum(rows, 'perfSum') / n * 100, 1) + '%');
      setBar(live.querySelector('[data-f="qual"]'), sum(rows, 'qualSum') / n, fmt(sum(rows, 'qualSum') / n * 100, 1) + '%');

      var pieces = sum(rows, 'pieces');
      var plan = sum(rows, 'plan');
      var scrap = sum(rows, 'scrap');
      var top = Math.max(pieces, plan, 1);
      setBar(live.querySelector('[data-p="pieces"]'), pieces / top, fmt(pieces));
      setBar(live.querySelector('[data-p="plan"]'), plan / top, fmt(plan));
      setBar(live.querySelector('[data-p="scrap"]'), scrap / top, fmt(scrap));

      var down = data.causes.map(function (c, i) { return rows.reduce(function (a, r) { return a + r.down[i]; }, 0); });
      var maxDown = Math.max.apply(null, down.concat(1));
      var topIndex = down.indexOf(maxDown);
      var order = down.map(function (v, i) { return [v, i]; }).sort(function (a, b) { return b[0] - a[0]; });
      order.forEach(function (pair, position) {
        var row = live.querySelector('[data-c="' + pair[1] + '"]');
        row.style.order = position;
        setBar(row, pair[0] / maxDown, fmt(Math.round(pair[0] / 60)));
      });

      var best = null;
      data.lines.forEach(function (l) {
        var lr = pick(year, l.id);
        var ln = sum(lr, 'n') || 1;
        var value = sum(lr, 'oeeSum') / ln;
        var button = live.querySelector('[data-line="' + l.id + '"]');
        // Close values: the scale starts at 60% so the differences can be seen, and the label keeps the true value
        button.querySelector('.live__track i').style.transform = 'scaleX(' + Math.max(0.05, Math.min(1, (value - 0.6) / 0.2)) + ')';
        button.querySelector('b').textContent = fmt(value * 100, 1) + '%';
        button.setAttribute('aria-pressed', String(line === l.id));
        if (!best || value > best.value) best = { value: value, id: l.id };
      });

      live.querySelector('[data-top-cause]').textContent = live.querySelector('[data-c="' + topIndex + '"] > span').textContent;
      live.querySelector('[data-best-line]').textContent = live.querySelector('[data-line="' + best.id + '"] > span').textContent;
      live.querySelectorAll('[data-year]').forEach(function (chip) {
        chip.setAttribute('aria-pressed', String(chip.getAttribute('data-year') === String(year)));
      });
    }

    live.querySelectorAll('[data-year]').forEach(function (chip) {
      chip.addEventListener('click', function () {
        var v = chip.getAttribute('data-year');
        year = v === 'all' ? 'all' : Number(v);
        render();
      });
    });
    live.querySelectorAll('[data-line]').forEach(function (button) {
      button.addEventListener('click', function () {
        var id = button.getAttribute('data-line');
        line = line === id ? 'all' : id;
        render();
      });
    });
    // Labels and number formats follow the language switch
    new MutationObserver(function () { setTimeout(render, 0); }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    render();
  }
})();
