'use strict';

function el(tag, cls, text) {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text != null) n.textContent = text;
  return n;
}

function countUp(node, target, dur = 1400) {
  const start = performance.now();
  (function tick(now) {
    const t = Math.min(1, (now - start) / dur);
    const eased = 1 - Math.pow(1 - t, 3);
    node.textContent = Math.round(target * eased).toLocaleString('es-ES');
    if (t < 1) requestAnimationFrame(tick);
  })(start);
}

function renderStats() {
  const st = document.getElementById('stats');
  const s = LAB.stats;
  const items = [[s.repos, 'Repos'], [s.tools, 'Tools'], [s.voices, 'Voices']];
  items.forEach(([v, l]) => {
    const d = el('div', 'stat');
    const b = el('b'); b.textContent = '0';
    const span = el('span', null, l);
    d.append(b, span); st.append(d);
    countUp(b, Number(v));
  });
}

function renderLab() {
  const main = document.getElementById('lab');
  LAB.modalities.forEach((mod, mi) => {
    const sec = el('section', 'mod rv');
    sec.id = mod.id;
    sec.style.transitionDelay = (mi * 60) + 'ms';

    const head = el('div', 'mod-head');
    head.append(el('div', 'ico', mod.icon));
    head.append(el('h2', null, mod.label));
    head.append(el('div', 'sub', mod.tools.length + ' tools'));
    sec.append(head);
    sec.append(el('div', 'mod-desc', mod.desc));

    const grid = el('div', 'tools');
    mod.tools.forEach(t => {
      const card = el('div', 'tool');
      card.style.setProperty('--tc', mod.accent);
      const nm = el('div', 'nm');
      nm.append(el('span', 'dot'), document.createTextNode(t.name));
      card.append(nm);
      card.append(el('div', 'ds', t.desc));
      const link = el('a', 'repo', 'github.com/belentani7/' + t.repo);
      link.href = 'https://github.com/belentani7/' + t.repo;
      link.target = '_blank';
      card.append(link);
      card.append(el('span', 'status', t.status));
      grid.append(card);
    });
    sec.append(grid);
    main.append(sec);
  });
}

function observe() {
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: 0.08 });
  document.querySelectorAll('.rv').forEach(n => io.observe(n));
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('tagline').textContent = LAB.tagline;
  renderStats();
  renderLab();
  observe();
});
