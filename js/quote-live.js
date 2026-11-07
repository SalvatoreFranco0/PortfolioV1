/* Quote calculator on the same fictitious data and formulas as the Excel workbook
   (Preventivi-PMI-demo.xlsx). Rounding follows the sheet, so the figures match it. */
(function () {
  'use strict';

  var box = document.querySelector('[data-quote]');
  if (!box) return;

  // Listini
  var MAT = {
    'Acciaio S235': [1.35, 0.08], 'Acciaio S355': [1.55, 0.08], 'Acciaio 42CrMo4': [2.40, 0.10],
    'Acciaio 18NiCrMo5': [2.90, 0.10], 'Inox AISI 316L': [5.80, 0.12], 'Alluminio 6082': [4.20, 0.12],
    'Bronzo CuSn12': [11.50, 0.15]
  };
  var RATE = [52, 68, 58, 45, 40]; // tornio, fresatura, rettifica, saldatura, trattamento termico, €/ora
  var STEPS = [[1, 0], [50, 0.03], [200, 0.06], [500, 0.09]];
  var MARKUP = 0.28, SETUP_RATE = 55;
  // Articoli e cicli: material, kg, minutes per centre, setup minutes
  var ART = {
    'FL-100': ['Acciaio S355', 4.2, [18, 6, 0, 0, 0], 45],
    'AL-25': ['Acciaio 42CrMo4', 1.6, [12, 4, 9, 0, 3], 60],
    'SP-12': ['Acciaio S235', 6.8, [0, 10, 0, 22, 0], 30],
    'BU-40': ['Bronzo CuSn12', 0.9, [8, 0, 4, 0, 0], 30],
    'PI-60': ['Alluminio 6082', 2.3, [0, 16, 0, 0, 0], 40],
    'IN-18': ['Acciaio 18NiCrMo5', 1.1, [10, 20, 8, 0, 5], 90],
    'PE-08': ['Acciaio 42CrMo4', 0.2, [4, 0, 3, 0, 2], 30],
    'CO-50': ['Inox AISI 316L', 3.5, [22, 18, 0, 0, 0], 75]
  };

  function r2(n) { return Math.round(n * 100) / 100; }
  function loc() { return document.documentElement.lang === 'en' ? 'en-GB' : 'it-IT'; }
  // 'always': Italian otherwise leaves 4-digit amounts ungrouped (3996 instead of 3.996, as in the sheet)
  function eur(n) { return n.toLocaleString(loc(), { style: 'currency', currency: 'EUR', useGrouping: 'always' }); }
  function num(n) { return n.toLocaleString(loc(), { useGrouping: 'always' }); }

  function quote(code, qty, kgPrice) {
    var a = ART[code], m = MAT[a[0]];
    var price = kgPrice == null ? m[0] : kgPrice;
    var work = r2(a[2].reduce(function (s, min, i) { return s + min * RATE[i]; }, 0) / 60);
    var setup = r2(a[3] / 60 * SETUP_RATE);
    var step = STEPS.filter(function (s) { return qty >= s[0]; }).pop();
    var q = {
      material: r2(a[1] * price * (1 + m[1])),
      work: work,
      setup: r2(setup / qty),
      disc: step[1],
      stepFrom: step[0],
      next: STEPS[STEPS.indexOf(step) + 1] || null
    };
    // As in the sheet: Lavorazioni €/pz = ROUND(work + setup/qty, 2)
    q.cost = q.material + r2(work + setup / qty);
    q.price = r2(q.cost * (1 + MARKUP) * (1 - q.disc));
    q.markup = r2(q.cost * MARKUP);
    q.discount = r2(q.cost * (1 + MARKUP) * q.disc);
    q.total = r2(qty * q.price);
    return q;
  }

  var code = 'PE-08';
  var chips = Array.prototype.slice.call(box.querySelectorAll('[data-art]'));
  var qtyIn = box.querySelector('[data-qty]');
  var kgIn = box.querySelector('[data-kg]');
  var out = function (sel) { return box.querySelector(sel); };

  function setKgRange() {
    var base = MAT[ART[code][0]][0];
    kgIn.min = r2(base * 0.7); kgIn.max = r2(base * 1.3); kgIn.step = 0.01; kgIn.value = base;
  }

  function render() {
    var qty = Math.max(1, Math.min(1000, Number(qtyIn.value) || 1));
    var kg = Number(kgIn.value);
    var q = quote(code, qty, kg);
    var base = MAT[ART[code][0]][0];

    chips.forEach(function (c) { c.setAttribute('aria-pressed', String(c.getAttribute('data-art') === code)); });
    out('[data-out="qty"]').textContent = num(qty);
    out('[data-out="mat"]').textContent = ART[code][0];
    out('[data-out="kg"]').textContent = eur(kg) + '/kg';
    out('[data-out="kgdelta"]').textContent = kg === base ? '' : (kg > base ? '+' : '') + Math.round((kg / base - 1) * 100) + '%';

    var top = q.cost + q.markup;
    [['material', q.material], ['work', r2(q.cost - q.material - q.setup)], ['setup', q.setup], ['markup', q.markup], ['discount', -q.discount]].forEach(function (p) {
      var row = out('[data-part="' + p[0] + '"]');
      row.querySelector('i').style.transform = 'scaleX(' + Math.min(1, Math.abs(p[1]) / top).toFixed(3) + ')';
      row.querySelector('b').textContent = (p[1] < 0 ? '− ' : '') + eur(Math.abs(p[1]));
    });
    out('[data-out="price"]').textContent = eur(q.price);
    out('[data-out="total"]').textContent = eur(q.total);
    out('[data-out="step"]').textContent = Math.round(q.disc * 100) + '%';
    out('[data-out="from"]').textContent = num(q.stepFrom);
    var next = out('[data-next-step]');
    next.hidden = !q.next;
    if (q.next) {
      out('[data-out="missing"]').textContent = num(q.next[0] - qty);
      out('[data-out="nextdisc"]').textContent = Math.round(q.next[1] * 100) + '%';
    }
  }

  chips.forEach(function (c) {
    c.addEventListener('click', function () { code = c.getAttribute('data-art'); setKgRange(); render(); });
  });
  qtyIn.addEventListener('input', render);
  kgIn.addEventListener('input', render);
  box.querySelector('[data-reset]').addEventListener('click', function () { setKgRange(); render(); });
  // Currency and number formats follow the language switch
  new MutationObserver(function () { setTimeout(render, 0); }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

  setKgRange();
  render();

  // Self-check against the workbook (P-2026-0142, rev. 2)
  console.assert(quote('FL-100', 120).price === 36.96 && quote('PE-08', 600).price === 9.64 && quote('SP-12', 40).total === 1967.6, '[quote-live] figures differ from the workbook');
})();
