/* =============================================
   Fdel Röte Jazz Orchester — script.js
============================================= */

/* ---- Navbar: scroll opacity ---- */
(function () {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ---- Hamburger menu ---- */
(function () {
  const btn   = document.getElementById('hamburger');
  const links = document.getElementById('nav-links');
  if (!btn || !links) return;

  btn.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    btn.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
  });

  // Close on link click
  links.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      links.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', false);
    })
  );

  // Close on outside click
  document.addEventListener('click', e => {
    if (!nav.contains(e.target)) {
      links.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', false);
    }
  });
})();

/* ---- Scroll animation (Intersection Observer) ---- */
(function () {
  const targets = document.querySelectorAll('.slide-left, .slide-right, .slide-up');
  if (!targets.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Stagger siblings within same parent
        const siblings = entry.target.parentElement
          ? [...entry.target.parentElement.children].filter(el =>
              el.classList.contains('slide-left') ||
              el.classList.contains('slide-right') ||
              el.classList.contains('slide-up'))
          : [];
        const idx = siblings.indexOf(entry.target);
        entry.target.style.transitionDelay = `${idx * 0.1}s`;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  targets.forEach(el => observer.observe(el));
})();

/* ---- Members tab bar: smooth scroll ---- */
(function () {
  const tabBtns = document.querySelectorAll('.tab-btn[data-target]');
  if (!tabBtns.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.target);
      if (!target) return;

      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const offset = document.getElementById('navbar')?.offsetHeight || 72;
      const top = target.getBoundingClientRect().top + window.scrollY - offset - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // Highlight active tab on scroll
  const sections = [...tabBtns].map(b => document.getElementById(b.dataset.target)).filter(Boolean);
  const navH = () => document.getElementById('navbar')?.offsetHeight || 72;

  window.addEventListener('scroll', () => {
    let current = sections[0];
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - navH() - 40) current = sec;
    });
    tabBtns.forEach(b => b.classList.toggle('active', b.dataset.target === current?.id));
  }, { passive: true });
})();

/* ---- Contact form (static demo) ---- */
(function () {
  const form   = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name  = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const msg   = form.querySelector('#message').value.trim();

    if (!name || !email || !msg) {
      status.textContent = 'すべての項目を入力してください。';
      status.className = 'form-status error';
      return;
    }

    // Demo: simulate success (no actual submission)
    status.textContent = 'お問い合わせを受け付けました。ありがとうございます。';
    status.className = 'form-status success';
    form.reset();
  });
})();
