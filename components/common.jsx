// ============================================================
// SCENT — Helper condivisi (React, ES module)
// Reveal / CountUp / motivi molecolari / LangToggle / Icon / useLang.
// ============================================================
import React from 'react';
const { useState, useEffect, useRef } = React;

// --- Lingua persistente (IT default, toggle EN) ------------
// Init 'it' lato server+client per evitare mismatch d'idratazione;
// il valore salvato viene letto in useEffect dopo il mount.
export function useLang() {
  const [lang, setLang] = useState('it');
  useEffect(() => {
    try {
      const saved = localStorage.getItem('scent-lang');
      if (saved && saved !== lang) setLang(saved);
    } catch (e) {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    try { localStorage.setItem('scent-lang', lang); } catch (e) {}
    document.documentElement.lang = lang;
  }, [lang]);
  return [lang, setLang];
}

export const reduceMotion = () =>
  typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// --- Reveal-on-scroll: fade + lift quando entra in vista ----
export function Reveal({ children, delay = 0, y = 18, as = 'div', style = {}, ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(true);
  const [animate, setAnimate] = useState(false);
  React.useEffect(() => {
    if (reduceMotion() || typeof IntersectionObserver === 'undefined') return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    if (r.top < (window.innerHeight || 800) * 0.92) return; // già visibile → niente animazione
    setAnimate(true);
    setShown(false);
    let done = false;
    const reveal = () => { if (!done) { done = true; setShown(true); } };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { reveal(); io.disconnect(); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    io.observe(el);
    const safety = setTimeout(reveal, 1600);
    return () => { io.disconnect(); clearTimeout(safety); };
  }, []);
  return React.createElement(as, {
    ref, style: {
      opacity: shown ? 1 : 0,
      transform: shown ? 'none' : `translateY(${y}px)`,
      transition: animate ? `opacity 0.7s var(--ease-default) ${delay}ms, transform 0.7s var(--ease-default) ${delay}ms` : undefined,
      ...style,
    }, ...rest,
  }, children);
}

// --- CountUp: anima la parte numerica di una stringa --------
function parseValue(v) {
  const m = String(v).match(/^(\D*)([\d.,]+)(.*)$/);
  if (!m) return null;
  const prefix = m[1], raw = m[2], suffix = m[3];
  const usesComma = raw.includes(',');
  const norm = raw.replace(/\./g, usesComma ? '' : '.').replace(',', '.');
  const num = parseFloat(norm);
  if (!isFinite(num)) return null;
  const dot = raw.indexOf(usesComma ? ',' : '.');
  const decimals = dot >= 0 ? raw.length - dot - 1 : 0;
  return { prefix, num, suffix, decimals, usesComma };
}

export function CountUp({ value, duration = 1400, className, style }) {
  const ref = useRef(null);
  const parsed = parseValue(value);
  const [display, setDisplay] = useState(value); // valore reale come default
  const started = useRef(false);
  const finished = useRef(false);

  function fmt(n) {
    let s = n.toFixed(parsed.decimals);
    if (parsed.usesComma) s = s.replace('.', ',');
    return parsed.prefix + s + parsed.suffix;
  }
  function animateTo() {
    if (started.current || !parsed) return;
    started.current = true;
    setDisplay(fmt(0));
    const t0 = performance.now();
    const tick = (t) => {
      const k = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - k, 3);
      setDisplay(fmt(parsed.num * eased));
      if (k < 1) requestAnimationFrame(tick);
      else { finished.current = true; setDisplay(value); }
    };
    requestAnimationFrame(tick);
  }

  React.useEffect(() => {
    if (!parsed || reduceMotion() || typeof IntersectionObserver === 'undefined') return;
    const el = ref.current;
    if (!el) return;
    let io;
    const r = el.getBoundingClientRect();
    if (r.top < (window.innerHeight || 800) * 0.92) {
      animateTo();
    } else {
      setDisplay(fmt(0));
      io = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) { animateTo(); io.disconnect(); } });
      }, { threshold: 0.4 });
      io.observe(el);
    }
    const safety = setTimeout(() => {
      if (!finished.current) { started.current = true; finished.current = true; setDisplay(value); }
    }, 2000);
    return () => { if (io) io.disconnect(); clearTimeout(safety); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return React.createElement('span', { ref, className, style }, display);
}

// --- Motivo molecolare statico (eco del logo) --------------
const MOL_NODES = [
  [40, 60], [110, 30], [150, 95], [90, 140], [200, 60], [250, 120], [300, 50], [330, 110],
];
const MOL_EDGES = [[0, 1], [1, 2], [2, 3], [1, 4], [4, 5], [4, 6], [6, 7], [5, 7]];

export function MoleculeMotif({ style, nodeColor = 'var(--color-magenta-400)', edgeColor = 'var(--color-lime-400)', edgeOpacity = 0.55, nodeOpacity = 0.85 }) {
  return React.createElement('svg', { viewBox: '0 0 360 170', style, fill: 'none', 'aria-hidden': 'true' },
    MOL_EDGES.map(([a, b], i) => React.createElement('line', {
      key: 'e' + i, x1: MOL_NODES[a][0], y1: MOL_NODES[a][1], x2: MOL_NODES[b][0], y2: MOL_NODES[b][1],
      stroke: edgeColor, strokeWidth: 1.5, strokeOpacity: edgeOpacity,
    })),
    MOL_NODES.map(([x, y], i) => React.createElement('circle', {
      key: 'n' + i, cx: x, cy: y, r: i % 3 === 0 ? 7 : 5, fill: nodeColor, fillOpacity: nodeOpacity,
    })),
  );
}

// --- Rete molecolare ANIMATA -------------------------------
export function AnimatedMolecule({ style, className }) {
  const nodes = [
    [80, 120], [180, 60], [240, 160], [150, 220], [330, 100], [410, 200],
    [480, 80], [540, 180], [600, 120], [420, 300], [280, 300], [150, 350],
  ];
  const edges = [
    [0, 1], [1, 2], [2, 3], [1, 4], [4, 5], [4, 6], [6, 7], [5, 7], [7, 8],
    [5, 9], [9, 10], [10, 3], [10, 11], [3, 11],
  ];
  const reduce = reduceMotion();
  return React.createElement('svg', { viewBox: '0 0 680 400', style, className, fill: 'none', 'aria-hidden': 'true' },
    React.createElement('style', null,
      '@keyframes scent-draw{to{stroke-dashoffset:0}}' +
      '@keyframes scent-pulse{0%,100%{r:var(--r0);opacity:.85}50%{r:var(--r1);opacity:1}}' +
      '.scent-edge{stroke-dasharray:var(--len);stroke-dashoffset:var(--len);animation:scent-draw 1.4s var(--ease-default) forwards}' +
      '.scent-node{animation:scent-pulse 3.6s ease-in-out infinite}' +
      '@media (prefers-reduced-motion: reduce){.scent-edge{stroke-dashoffset:0;animation:none}.scent-node{animation:none}}'
    ),
    edges.map(([a, b], i) => {
      const len = Math.hypot(nodes[a][0] - nodes[b][0], nodes[a][1] - nodes[b][1]);
      return React.createElement('line', {
        key: 'e' + i, x1: nodes[a][0], y1: nodes[a][1], x2: nodes[b][0], y2: nodes[b][1],
        stroke: 'var(--color-lime-400)', strokeWidth: 1.6, strokeOpacity: 0.7,
        className: reduce ? '' : 'scent-edge',
        style: reduce ? {} : { '--len': len.toFixed(1), animationDelay: (i * 90) + 'ms' },
      });
    }),
    nodes.map(([x, y], i) => {
      const r0 = i % 3 === 0 ? 7 : 5;
      return React.createElement('circle', {
        key: 'n' + i, cx: x, cy: y, r: r0,
        fill: i % 4 === 0 ? 'var(--color-magenta-400)' : 'var(--color-lime-300)',
        fillOpacity: 0.9,
        className: reduce ? '' : 'scent-node',
        style: reduce ? {} : { '--r0': r0, '--r1': r0 + 2.5, animationDelay: (i * 240) + 'ms' },
      });
    }),
  );
}

// --- Toggle lingua riutilizzabile --------------------------
export function LangToggle({ lang, setLang, dark = false }) {
  const base = {
    fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)',
    letterSpacing: 'var(--tracking-wide)', cursor: 'pointer',
    background: 'none', border: 'none', padding: '4px 6px',
    transition: 'color var(--duration-fast) var(--ease-out)',
  };
  const on = { color: dark ? '#fff' : 'var(--text-primary)', fontWeight: 600 };
  const off = { color: dark ? 'rgba(255,255,255,0.45)' : 'var(--text-tertiary)' };
  return React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '2px' } },
    React.createElement('button', { style: { ...base, ...(lang === 'it' ? on : off) }, onClick: () => setLang('it') }, 'IT'),
    React.createElement('span', { style: { color: dark ? 'rgba(255,255,255,0.3)' : 'var(--border-strong)', fontSize: '11px' } }, '/'),
    React.createElement('button', { style: { ...base, ...(lang === 'en' ? on : off) }, onClick: () => setLang('en') }, 'EN'),
  );
}

// --- Icone inline (stroke 2px) -----------------------------
export function Icon({ name, size = 20, color = 'currentColor', strokeWidth = 2, style }) {
  const paths = {
    arrow: 'M5 12h14M13 6l6 6-6 6',
    arrowDown: 'M12 5v14M6 13l6 6 6-6',
    check: 'M20 6L9 17l-5-5',
    plus: 'M12 5v14M5 12h14',
    quote: 'M7 7h4v6H5V9a2 2 0 012-2zm10 0h4v6h-6V9a2 2 0 012-2z',
    external: 'M7 17L17 7M9 7h8v8',
  };
  return React.createElement('svg', {
    width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: color,
    strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round', style, 'aria-hidden': 'true',
  }, React.createElement('path', { d: paths[name] || paths.arrow }));
}
