/* SMEL-Masterclass 2027 · site behaviour: mobile menu, countdown, enquiry forms */
(function () {
  var EMAIL = 'info@afroindustrygroup.africa';

  // Mobile menu
  var nav = document.getElementById('nav'), btn = document.getElementById('menuBtn');
  if (nav && btn) btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });

  // Collapse the section index on phones
  if (window.matchMedia('(max-width:900px)').matches) {
    var d = document.querySelector('.rail details'); if (d) d.open = false;
  }

  // Countdown to the Opening Ceremony, 22 Feb 2027 09:00 CAT (07:00 UTC)
  var el = document.getElementById('count');
  if (el) {
    var target = Date.UTC(2027, 1, 22, 7, 0, 0);
    var tick = function () {
      var ms = Math.max(0, target - Date.now());
      var dd = Math.floor(ms / 864e5); ms -= dd * 864e5;
      var h = Math.floor(ms / 36e5); ms -= h * 36e5;
      var m = Math.floor(ms / 6e4);
      el.innerHTML = '<div>' + dd + '<small>days</small></div><div>' + String(h).padStart(2, '0') +
        '<small>hours</small></div><div>' + String(m).padStart(2, '0') + '<small>minutes</small></div>';
    };
    tick(); setInterval(tick, 30000);
  }

  // Forms: assemble the details into a message to copy and email to the Secretariat
  document.querySelectorAll('form[data-form]').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var req = f.querySelectorAll('[required]'), missing = [];
      req.forEach(function (x) { x.style.borderColor = ''; if (!x.value.trim()) missing.push(x); });
      if (missing.length) { missing.forEach(function (x) { x.style.borderColor = 'var(--gold)'; }); missing[0].focus(); return; }
      var lines = ['Subject: SMEL-Masterclass 2027 · ' + f.dataset.title, ''];
      f.querySelectorAll('input,select,textarea').forEach(function (x) { if (x.value.trim()) lines.push(x.name + ': ' + x.value.trim()); });
      var out = f.querySelector('.out'); out.querySelector('pre').textContent = lines.join('\n'); out.classList.add('show');
      var a = out.querySelector('[data-mail]');
      if (a) a.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent('SMEL-Masterclass 2027 · ' + f.dataset.title) + '&body=' + encodeURIComponent(lines.slice(2).join('\n'));
    });
    var copy = f.querySelector('[data-copy]');
    if (copy) copy.addEventListener('click', function () {
      var pre = f.querySelector('.out pre');
      var fallback = function () { var r = document.createRange(); r.selectNodeContents(pre); var s = getSelection(); s.removeAllRanges(); s.addRange(r); copy.textContent = 'Selected. Press Ctrl/Cmd+C'; };
      try { navigator.clipboard.writeText(pre.textContent).then(function () { copy.textContent = 'Copied'; }, fallback); } catch (_) { fallback(); }
    });
  });
})();
