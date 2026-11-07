/* Before/After switch of the "Possible benefits" block.
   Without JS both texts stay visible with their labels. */
(function () {
  'use strict';

  document.querySelectorAll('.benefit').forEach(function (benefit) {
    var texts = benefit.querySelectorAll('.benefit__text');
    var group = document.createElement('div');
    group.setAttribute('role', 'group');
    group.style.display = 'flex';
    group.style.gap = '0.375rem';

    var buttons = ['ben.before', 'ben.after'].map(function (key, i) {
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'pill';
      button.style.cursor = 'pointer';
      button.setAttribute('data-i18n', key);
      button.addEventListener('click', function () {
        show(i);
        if (texts[i].animate && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          texts[i].animate([{ opacity: 0 }, { opacity: 1 }], { duration: 250 });
        }
      });
      group.appendChild(button);
      return button;
    });

    function show(index) {
      texts.forEach(function (text, i) { text.hidden = i !== index; });
      buttons.forEach(function (button, i) {
        button.classList.toggle('pill--accent', i === index);
        button.setAttribute('aria-pressed', String(i === index));
        // .pill--accent:hover turns white, unreadable in light theme right after the click
        button.style.color = i === index ? 'var(--accent-hi)' : '';
      });
    }

    benefit.querySelectorAll('.benefit__label').forEach(function (label) { label.hidden = true; });
    benefit.appendChild(group);
    show(1);
  });
})();
