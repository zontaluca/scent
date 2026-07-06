'use client';
// ============================================================
// SCENT A1 — Pagina dispositivo (stile "Evidenza")
// Sezioni: Nav · Hero · Panoramica · Principio · Video · Validazione · CTA · Footer
// Port Next.js del device.jsx originale del design system.
// ============================================================
import React from 'react';
import { Button as DB, Badge as DBd, StatCard as DSt, Card as DCd, Alert as DAl } from '../ds';
import { Reveal, CountUp, MoleculeMotif, AnimatedMolecule, LangToggle, Icon, reduceMotion, useLang } from '../common';
import { SCENT_DEVICE } from '../../lib/device-content';
import { SCENT_CONTENT } from '../../lib/content';

const DEV_LOGO = '/assets/logo_scent.png';
const DEV_IMG = '/uploads/sistema.png';
const DEV_SKETCH = '/uploads/image_rit.png';
const DEV_HOME = '/';

// --- Rete molecolare che si "disegna" quando la sezione entra in vista -------
function ScrollMolecule({ style }) {
  const ref = React.useRef(null);
  const [play, setPlay] = React.useState(() => reduceMotion() || typeof IntersectionObserver === 'undefined');
  React.useEffect(() => {
    if (play) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    if (r.top < (window.innerHeight || 800) * 0.95) { setPlay(true); return; }
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) { setPlay(true); io.disconnect(); } });
    }, { threshold: 0.05 });
    io.observe(el);
    const safety = setTimeout(() => setPlay(true), 2500);
    return () => { io.disconnect(); clearTimeout(safety); };
  }, [play]);
  return (
    <span ref={ref} style={{ display: 'block', pointerEvents: 'none', ...style }} aria-hidden="true">
      {play ? <AnimatedMolecule style={{ width: '100%', height: 'auto', display: 'block' }} /> : null}
    </span>
  );
}

// --- Timeline che si traccia dall'alto ---------------------
function DevTimeline({ items }) {
  const ref = React.useRef(null);
  const canAnim = !(reduceMotion() || typeof IntersectionObserver === 'undefined');
  const [armed, setArmed] = React.useState(false);
  const [play, setPlay] = React.useState(!canAnim);
  React.useEffect(() => {
    if (!canAnim) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    if (r.top < (window.innerHeight || 800) * 0.9) { setPlay(true); return; }
    setArmed(true);
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) { setPlay(true); io.disconnect(); } });
    }, { threshold: 0.18 });
    io.observe(el);
    const safety = setTimeout(() => setPlay(true), 2200);
    return () => { io.disconnect(); clearTimeout(safety); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const hidden = armed && !play;
  return (
    <div ref={ref} style={{ position: 'relative', paddingLeft: 'var(--space-8)' }}>
      <div style={{ position: 'absolute', left: '7px', top: '6px', bottom: '6px', width: '2px', background: 'var(--color-sage-200)' }} />
      <div style={{
        position: 'absolute', left: '7px', top: '6px', bottom: '6px', width: '2px',
        background: 'linear-gradient(var(--color-sage-400), var(--color-magenta-400))',
        transform: hidden ? 'scaleY(0)' : 'scaleY(1)', transformOrigin: 'top center',
        transition: armed ? 'transform 1100ms var(--ease-default)' : 'none',
      }} />
      {items.map((t, i) => {
        const last = i === items.length - 1;
        const dotDelay = 280 + i * 280;
        const txtDelay = 380 + i * 280;
        return (
          <div key={i} style={{ position: 'relative', paddingBottom: last ? 0 : 'var(--space-8)' }}>
            <span style={{
              position: 'absolute', left: '-30px', top: '3px', width: '16px', height: '16px', borderRadius: '50%',
              background: last ? 'var(--color-magenta-500)' : 'var(--color-sage-500)',
              border: '3px solid var(--surface-base)', boxShadow: '0 0 0 1px var(--color-sage-200)',
              transform: hidden ? 'scale(0)' : 'scale(1)', opacity: hidden ? 0 : 1, transformOrigin: 'center',
              transition: armed ? `transform 460ms var(--ease-default) ${dotDelay}ms, opacity 300ms var(--ease-default) ${dotDelay}ms` : 'none',
            }} />
            <div style={{
              opacity: hidden ? 0 : 1, transform: hidden ? 'translateY(8px)' : 'none',
              transition: armed ? `opacity 540ms var(--ease-default) ${txtDelay}ms, transform 540ms var(--ease-default) ${txtDelay}ms` : 'none',
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-wide)', color: 'var(--text-brand)', marginBottom: 'var(--space-1)', fontWeight: 600 }}>{t.date}</div>
              <div style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 'var(--space-1)' }}>{t.t}</div>
              <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', maxWidth: '44ch' }}>{t.d}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function DevNav({ d, lang, setLang, onNav }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const go = (id) => { setMenuOpen(false); onNav(id); };
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(255,255,255,0.82)',
      backdropFilter: 'saturate(180%) blur(16px)',
      WebkitBackdropFilter: 'saturate(180%) blur(16px)',
      borderBottom: '1px solid var(--border-subtle)',
    }}>
      <div style={{ maxWidth: 'var(--width-content)', margin: '0 auto', padding: '0 var(--space-6)', height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-6)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', flexShrink: 0 }}>
          <a href={DEV_HOME} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src={DEV_LOGO} alt="SCENT" style={{ height: '36px' }} />
          </a>
          <span style={{ width: 1, height: 22, background: 'var(--border-default)' }} />
          <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-primary)', letterSpacing: 'var(--tracking-wide)' }}>SCENT A1</span>
        </div>
        <nav className="r-nav-links" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-7, 28px)' }}>
          <a href={DEV_HOME} style={{ fontSize: 'var(--text-sm)', fontWeight: 500, textDecoration: 'none', letterSpacing: 'var(--tracking-wide)', color: 'var(--text-secondary)' }}>{d.nav.home}</a>
          {d.nav.links.map(l => (
            <a key={l.id} href={`#${l.id}`} onClick={(e) => { e.preventDefault(); go(l.id); }}
              style={{ fontSize: 'var(--text-sm)', fontWeight: 500, textDecoration: 'none', letterSpacing: 'var(--tracking-wide)', color: 'var(--text-secondary)' }}>
              {l.label}
            </a>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', flexShrink: 0 }}>
          <LangToggle lang={lang} setLang={setLang} />
          <span className="r-nav-cta">
            <DB variant="primary" size="sm" onClick={() => go('contatto-cta')}>{d.nav.cta}</DB>
          </span>
          <button
            className="r-nav-hamburger"
            aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(v => !v)}
            style={{ display: 'none', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, background: menuOpen ? 'var(--color-sage-50)' : 'transparent', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', cursor: 'pointer', padding: 0, flexShrink: 0 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text-primary)" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {menuOpen
                ? <React.Fragment><line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" /></React.Fragment>
                : <React.Fragment><line x1="3" y1="7" x2="21" y2="7" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="17" x2="21" y2="17" /></React.Fragment>}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav style={{ borderTop: '1px solid var(--border-subtle)', background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', padding: 'var(--space-4) var(--space-6) var(--space-6)' }}>
          <div style={{ maxWidth: 'var(--width-content)', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
            <a href={DEV_HOME} style={{ fontSize: 'var(--text-lg)', fontWeight: 500, textDecoration: 'none', color: 'var(--text-primary)', padding: 'var(--space-3) 0', borderBottom: '1px solid var(--border-subtle)' }}>{d.nav.home}</a>
            {d.nav.links.map(l => (
              <a key={l.id} href={`#${l.id}`} onClick={(e) => { e.preventDefault(); go(l.id); }}
                style={{ fontSize: 'var(--text-lg)', fontWeight: 500, textDecoration: 'none', color: 'var(--text-primary)', padding: 'var(--space-3) 0', borderBottom: '1px solid var(--border-subtle)' }}>
                {l.label}
              </a>
            ))}
            <div style={{ marginTop: 'var(--space-4)' }}>
              <DB variant="primary" size="lg" fullWidth onClick={() => go('contatto-cta')}>{d.nav.cta}</DB>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

function DevHero({ d }) {
  const h = d.hero;
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, var(--color-sage-50) 0%, var(--surface-page) 100%)' }}>
      <MoleculeMotif style={{ position: 'absolute', top: '6%', right: '-40px', width: '500px', opacity: 0.45 }} />
      <div style={{ maxWidth: 'var(--width-content)', margin: '0 auto', padding: 'var(--space-16) var(--space-6) var(--space-12)', position: 'relative' }}>
        <div className="r-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.02fr 0.98fr', gap: 'var(--space-14)', alignItems: 'center' }}>
          <Reveal>
            <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--text-brand)', marginBottom: 'var(--space-4)' }}>{h.eyebrow}</div>
            <h1 className="display" style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'var(--text-6xl)', lineHeight: 1.06, letterSpacing: 'var(--tracking-tight)', color: 'var(--text-primary)', marginBottom: 'var(--space-5)' }}>{h.title}</h1>
            <p style={{ fontSize: 'var(--text-xl)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-6)', maxWidth: '540px' }}>{h.lead}</p>
            <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
              <DBd variant="brand">{h.badges[0]}</DBd>
              <DBd variant="primary">{h.badges[1]}</DBd>
              <DBd variant="success" dot>{h.badges[2]}</DBd>
            </div>
          </Reveal>
          <Reveal delay={120} style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', inset: '-20px', background: 'radial-gradient(circle at 55% 45%, var(--color-eucalyptus-100), transparent 70%)', borderRadius: 'var(--radius-3xl)' }} />
            <div style={{ position: 'relative', background: 'var(--surface-base)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-md)', padding: 'var(--space-6)' }}>
              <img src={DEV_IMG} alt={h.caption} style={{ width: '100%', height: 'auto', display: 'block', filter: 'drop-shadow(0 18px 28px rgba(22,24,20,0.14))' }} />
              <div style={{ position: 'absolute', bottom: 'var(--space-5)', left: 'var(--space-5)' }}>
                <DBd variant="lime" size="lg">SCENT A1</DBd>
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal delay={180}>
          <div className="r-spec-grid" style={{ marginTop: 'var(--space-12)', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-5)', borderTop: '1px solid var(--border-subtle)', paddingTop: 'var(--space-8)' }}>
            {h.spec.map((s, i) => (
              <div key={i}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: 'var(--space-2)' }}>{s.k}</div>
                <div style={{ fontSize: 'var(--text-base)', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 'var(--leading-snug)' }}>{s.v}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function DevOverview({ d }) {
  const o = d.overview;
  return (
    <section id="panoramica" style={{ padding: 'var(--space-24) 0', scrollMarginTop: '72px', position: 'relative', overflow: 'hidden' }}>
      <img src={DEV_SKETCH} alt="" aria-hidden="true" style={{
        position: 'absolute', top: '50%', right: '-60px', transform: 'translateY(-50%)',
        width: 'min(620px, 50%)', height: 'auto', opacity: 0.1, mixBlendMode: 'multiply',
        pointerEvents: 'none', userSelect: 'none',
        maskImage: 'radial-gradient(120% 100% at 80% 50%, #000 45%, transparent 85%)',
        WebkitMaskImage: 'radial-gradient(120% 100% at 80% 50%, #000 45%, transparent 85%)',
      }} />
      <div style={{ maxWidth: 'var(--width-content)', margin: '0 auto', padding: '0 var(--space-6)', position: 'relative' }}>
        <div className="r-val-grid" style={{ display: 'grid', gridTemplateColumns: '1.35fr 0.65fr', gap: 'var(--space-16)', alignItems: 'start' }}>
          <Reveal>
            <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--text-brand)', marginBottom: 'var(--space-3)' }}>{o.kicker}</div>
            <h2 style={{ fontSize: 'var(--text-4xl)', fontWeight: 600, letterSpacing: 'var(--tracking-tight)', marginBottom: 'var(--space-6)', maxWidth: '20ch' }}>{o.title}</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', maxWidth: '62ch' }}>
              {o.paragraphs.map((p, i) => (
                <p key={i} style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', margin: 0, textWrap: 'pretty' }}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {o.highlights.map((hl, i) => (
                <DCd key={i} variant={i === 0 ? 'brand' : 'outline'} padding="md">
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-sage-500)', marginTop: '7px', flexShrink: 0 }} />
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 'var(--text-base)', marginBottom: 'var(--space-1)', color: 'var(--text-primary)' }}>{hl.t}</div>
                      <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>{hl.d}</div>
                    </div>
                  </div>
                </DCd>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function DevPrinciple({ d }) {
  const pr = d.principle;
  return (
    <section id="funzionamento" style={{ background: 'var(--color-sage-900)', padding: 'var(--space-24) 0', scrollMarginTop: '72px', position: 'relative', overflow: 'hidden' }}>
      <ScrollMolecule style={{ position: 'absolute', top: '-20px', right: '-40px', width: '520px', opacity: 0.5 }} />
      <div style={{ maxWidth: 'var(--width-content)', margin: '0 auto', padding: '0 var(--space-6)', position: 'relative' }}>
        <Reveal style={{ maxWidth: '660px', marginBottom: 'var(--space-12)' }}>
          <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--color-lime-400)', marginBottom: 'var(--space-3)' }}>{pr.kicker}</div>
          <h2 className="display" style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'var(--text-6xl)', lineHeight: 1.08, color: 'var(--color-neutral-0)', marginBottom: 'var(--space-4)' }}>{pr.title}</h2>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-sage-200)', maxWidth: '580px' }}>{pr.lead}</p>
        </Reveal>
        <div className="r-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-5)' }}>
          {pr.steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100} style={{ borderTop: '2px solid var(--color-lime-400)', paddingTop: 'var(--space-5)', position: 'relative' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--color-lime-400)', marginBottom: 'var(--space-4)' }}>{s.n}</div>
              <div style={{ fontSize: 'var(--text-xl)', fontWeight: 600, color: 'var(--color-neutral-0)', marginBottom: 'var(--space-3)', letterSpacing: 'var(--tracking-tight)' }}>{s.t}</div>
              <div style={{ fontSize: 'var(--text-base)', color: 'var(--color-sage-200)', lineHeight: 'var(--leading-relaxed)' }}>{s.d}</div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120} style={{ marginTop: 'var(--space-10)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-3) var(--space-5)' }}>
            <span style={{ fontSize: 'var(--text-base)' }}>❄</span>
            <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-sage-200)' }}>{pr.note}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function DevVideo({ d, lang }) {
  const v = d.video;
  const [playing, setPlaying] = React.useState(false);
  return (
    <section id="video" style={{ padding: 'var(--space-24) 0', scrollMarginTop: '72px' }}>
      <div style={{ maxWidth: 'var(--width-content)', margin: '0 auto', padding: '0 var(--space-6)' }}>
        <Reveal style={{ maxWidth: '660px', marginBottom: 'var(--space-10)' }}>
          <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--text-brand)', marginBottom: 'var(--space-3)' }}>{v.kicker}</div>
          <h2 style={{ fontSize: 'var(--text-4xl)', fontWeight: 600, letterSpacing: 'var(--tracking-tight)', marginBottom: 'var(--space-4)' }}>{v.title}</h2>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', maxWidth: '58ch' }}>{v.lead}</p>
        </Reveal>
        <Reveal delay={100}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', borderRadius: 'var(--radius-xl)', overflow: 'hidden', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-md)', background: 'radial-gradient(120% 100% at 80% 8%, #16401f, #0F2718 58%, #0a1c11)' }}>
            {playing ? (
              <iframe
                src={`https://www.youtube.com/embed/${v.youtubeId}?autoplay=1&rel=0`}
                title={v.caption}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <>
                <style>{'.dev-video-btn .dev-play{transition:transform var(--duration-base,.2s) var(--ease-default);}.dev-video-btn:hover .dev-play{transform:scale(1.09) !important;}.dev-video-btn:active .dev-play{transform:scale(.97) !important;}.dev-video-btn:hover .dev-yt-chip{opacity:1 !important;transform:translateY(0) !important;}'}</style>
                <MoleculeMotif style={{ position: 'absolute', top: '8%', right: '-20px', width: '46%', opacity: 0.4 }} edgeColor="var(--color-lime-300)" nodeColor="var(--color-lime-200)" />
                <button type="button" onClick={() => setPlaying(true)} className="dev-video-btn" aria-label={v.play}
                  style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', background: 'none', border: 0, padding: 0, cursor: 'pointer' }}>
                  <span className="dev-play" style={{ width: '92px', height: '92px', borderRadius: '50%', background: 'rgba(255,255,255,0.96)', boxShadow: '0 12px 32px rgba(10,28,17,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'transform .2s var(--ease-default)' }}>
                    <svg width="30" height="34" viewBox="0 0 30 34" fill="none" aria-hidden="true"><path d="M28 15.27a2 2 0 0 1 0 3.46L4 32.66A2 2 0 0 1 1 30.93V3.07A2 2 0 0 1 4 1.34l24 13.93Z" fill="var(--color-sage-700)"/></svg>
                  </span>
                  <span className="dev-yt-chip" style={{ position: 'absolute', top: 'var(--space-5)', right: 'var(--space-5)', display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 'var(--radius-full)', padding: '6px 12px', opacity: 0, transform: 'translateY(-4px)', transition: 'opacity .2s var(--ease-default), transform .2s var(--ease-default)' }}>
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true"><path d="M15.68 1.87A2 2 0 0 0 14.28.46C13.04.1 8 .1 8 .1S2.96.1 1.72.46A2 2 0 0 0 .32 1.87C0 3.1 0 5.66 0 5.66s0 2.56.32 3.8a2 2 0 0 0 1.4 1.4C2.96 11.22 8 11.22 8 11.22s5.04 0 6.28-.36a2 2 0 0 0 1.4-1.4C16 8.22 16 5.66 16 5.66s0-2.56-.32-3.8Z" fill="#FF0000"/><path d="M6.36 8.09 10.55 5.66 6.36 3.23v4.86Z" fill="#fff"/></svg>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-wide)', color: 'var(--color-neutral-0)', whiteSpace: 'nowrap' }}>{lang === 'en' ? 'Play video' : 'Riproduci video'}</span>
                  </span>
                  <span style={{ position: 'absolute', left: 'var(--space-6)', bottom: 'var(--space-6)', right: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', textAlign: 'left', pointerEvents: 'none' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--color-lime-300)' }}>{v.meta}</span>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--color-neutral-0)', lineHeight: 1.15 }}>{v.caption}</span>
                  </span>
                </button>
              </>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function DevValidation({ d }) {
  const va = d.validation;
  return (
    <section id="validazione" style={{ background: 'var(--surface-base)', borderBottom: '1px solid var(--border-subtle)', padding: 'var(--space-24) 0', scrollMarginTop: '72px' }}>
      <div style={{ maxWidth: 'var(--width-content)', margin: '0 auto', padding: '0 var(--space-6)' }}>
        <div className="r-val-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-16)', alignItems: 'start' }}>
          <Reveal>
            <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--text-brand)', marginBottom: 'var(--space-3)' }}>{va.kicker}</div>
            <h2 style={{ fontSize: 'var(--text-4xl)', fontWeight: 600, letterSpacing: 'var(--tracking-tight)', marginBottom: 'var(--space-5)', maxWidth: '16ch' }}>{va.title}</h2>
            <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)', maxWidth: '48ch' }}>{va.lead}</p>
            {va.stats && (
              <div style={{ marginBottom: 'var(--space-8)' }}>
                <div className="r-stats-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)', maxWidth: '440px' }}>
                  {va.stats.map((s, i) => (
                    <DSt key={i} value={<CountUp value={s.value} />} label={s.label} sublabel={s.sub} variant={i === 0 ? 'brand' : 'subtle'} size="md" />
                  ))}
                </div>
                {va.statsNote && (
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-wide)', color: 'var(--text-tertiary)', marginTop: 'var(--space-4)' }}>{va.statsNote}</div>
                )}
              </div>
            )}
            <DevTimeline items={va.timeline} />
          </Reveal>
          <Reveal delay={120}>
            <DCd variant="raised" padding="lg">
              <div style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 'var(--space-3)' }}>{va.protocolTitle}</div>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', margin: '0 0 var(--space-6)' }}>{va.protocol}</p>
              <div style={{ fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: 'var(--space-3)' }}>Strutture coinvolte</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                {va.partners.map((p, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-eucalyptus-500)', flexShrink: 0 }} />
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-primary)' }}>{p}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 'var(--space-6)' }}>
                <DAl variant="brand" title="Standard di riferimento">La colonscopia resta il gold-standard diagnostico: SCENT A1 ne ottimizza l’impiego, non lo sostituisce.</DAl>
              </div>
            </DCd>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function DevCta({ d }) {
  const ct = d.cta;
  return (
    <section id="contatto-cta" style={{ background: 'linear-gradient(180deg, var(--surface-page), var(--color-sage-50))', padding: 'var(--space-24) 0', scrollMarginTop: '72px' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 var(--space-6)', textAlign: 'center' }}>
        <h2 className="display" style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'var(--text-6xl)', lineHeight: 1.1, marginBottom: 'var(--space-4)' }}>{ct.title}</h2>
        <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', margin: '0 auto var(--space-8)', maxWidth: '540px' }}>{ct.lead}</p>
        <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={DEV_HOME + '#contatti'} style={{ textDecoration: 'none' }}><DB variant="primary" size="lg">{ct.primary}</DB></a>
          <DB variant="outline" size="lg" icon={<Icon name="external" size={16} />} iconPosition="right">{ct.secondary}</DB>
        </div>
      </div>
    </section>
  );
}

function DevFooter({ lang }) {
  const c = SCENT_CONTENT[lang === 'en' ? 'en' : 'it'];
  return (
    <footer style={{ background: 'var(--color-neutral-900)', color: 'var(--color-neutral-300)', padding: 'var(--space-16) 0 var(--space-8)' }}>
      <div style={{ maxWidth: 'var(--width-content)', margin: '0 auto', padding: '0 var(--space-6)' }}>
        <div className="r-footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 'var(--space-10)', paddingBottom: 'var(--space-12)' }}>
          <div>
            <div style={{ marginBottom: 'var(--space-4)' }}>
              <img src={DEV_LOGO} alt="SCENT" style={{ height: '32px', display: 'block', filter: 'brightness(0) invert(1)' }} />
            </div>
            <p style={{ color: 'var(--color-neutral-400)', fontSize: 'var(--text-sm)', maxWidth: '320px', lineHeight: 'var(--leading-relaxed)' }}>{c.footer.tagline}</p>
          </div>
          {c.footer.columns.map(col => (
            <div key={col.h}>
              <div style={{ fontSize: 'var(--text-xs)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 'var(--tracking-wider)', color: 'var(--color-neutral-0)', marginBottom: 'var(--space-4)' }}>{col.h}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                {col.items.map(i => {
                  const label = typeof i === 'object' ? i.label : i;
                  const props = typeof i === 'object' ? { href: i.href, target: '_blank', rel: 'noopener noreferrer' } : { href: DEV_HOME };
                  return <a key={label} {...props} style={{ color: 'var(--color-neutral-400)', fontSize: 'var(--text-sm)', textDecoration: 'none' }}>{label}</a>;
                })}
              </div>
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid var(--color-neutral-800)', paddingTop: 'var(--space-6)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
          <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-neutral-500)' }}>{c.footer.legal}</span>
          <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-neutral-500)', fontFamily: 'var(--font-mono)' }}>{c.footer.cert}</span>
        </div>
      </div>
    </footer>
  );
}

export default function DeviceApp() {
  const [lang, setLang] = useLang();
  const d = SCENT_DEVICE[lang];
  const onNav = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
  };
  return (
    <React.Fragment>
      <DevNav d={d} lang={lang} setLang={setLang} onNav={onNav} />
      <main>
        <DevHero d={d} />
        <DevOverview d={d} />
        <DevPrinciple d={d} />
        <DevVideo d={d} lang={lang} />
        <DevValidation d={d} />
        <DevCta d={d} />
      </main>
      <DevFooter lang={lang} />
    </React.Fragment>
  );
}
