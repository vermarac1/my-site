/* ScaleBuz V3 shared behaviour: nav, in-page scrolling, reveals, funnel events. */
(function () {
  'use strict';
  window.__sb = true;

  var d = document;
  var root = d.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function track(name, params) {
    if (typeof gtag === 'function') { gtag('event', name, params || {}); }
  }

  /* ── Nav ─────────────────────────────────────────────────── */
  var nav = d.getElementById('nav');
  var tog = d.getElementById('nav-tog');
  var links = d.getElementById('nav-links');

  function onScroll() { nav.classList.toggle('scrolled', window.scrollY > 12); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  [].forEach.call(links.querySelectorAll('a'), function (a, i) { a.style.setProperty('--i', i); });

  function setMenu(open) {
    nav.classList.toggle('open', open);
    tog.setAttribute('aria-expanded', open ? 'true' : 'false');
    tog.querySelector('.nav-tog-l').textContent = open ? 'Close' : 'Menu';
    root.classList.toggle('lock', open);
  }
  tog.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
  links.addEventListener('click', function (e) { if (e.target.closest('a')) { setMenu(false); } });
  d.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('open')) { setMenu(false); tog.focus(); }
  });
  window.matchMedia('(min-width: 861px)').addEventListener('change', function (m) {
    if (m.matches) { setMenu(false); }
  });

  /* In-page anchors scroll smoothly here, never through CSS scroll-behavior.
     That property made every programmatic scroll animate, so full-page
     capture tools grabbed the hero three times before the page had moved. */
  d.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a || a.getAttribute('href').length < 2) { return; }
    var t = d.getElementById(a.getAttribute('href').slice(1));
    if (!t) { return; }
    e.preventDefault();
    t.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    history.pushState(null, '', a.getAttribute('href'));
  });

  /* ── Reveals: one observer, CSS does the motion ──────────── */
  [].forEach.call(d.querySelectorAll('[data-stagger]'), function (g) {
    [].forEach.call(g.children, function (c, i) {
      c.classList.add('rv');
      c.style.setProperty('--i', i);
    });
  });

  var rv = d.querySelectorAll('.rv');
  function show(el) { el.classList.add('in'); }
  if (!reduce && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { show(en.target); io.unobserve(en.target); }
      });
    }, { threshold: 0, rootMargin: '0px 0px -10% 0px' });
    [].forEach.call(rv, function (el) { io.observe(el); });
  } else {
    [].forEach.call(rv, show);
  }

  /* ── Funnel events ───────────────────────────────────────── */
  [].forEach.call(d.querySelectorAll('[data-cta]'), function (el) {
    el.addEventListener('click', function () { track('cta_click', { cta_location: el.getAttribute('data-cta') }); });
  });

  /* Which case gets opened tells us which constraint the visitor recognises */
  [].forEach.call(d.querySelectorAll('details.case'), function (c) {
    c.addEventListener('toggle', function () {
      if (!c.open) { return; }
      var m = c.querySelector('.mech');
      track('case_open', { mechanism: m ? m.textContent.trim().toLowerCase() : 'unknown' });
    });
  });
  var more = d.querySelector('details.more');
  if (more) {
    more.addEventListener('toggle', function () { if (more.open) { track('more_work_open'); } });
  }
})();
