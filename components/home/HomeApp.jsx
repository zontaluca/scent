'use client';
// ============================================================
// SCENT — Home (stile "Evidenza")
// Sezioni: Nav · Hero · Stats · Dispositivo · Tecnologia ·
//          Validazione · Premi · Stampa · Team · Contatti · Footer
// Port Next.js di v1/sections1.jsx + v1/sections2.jsx (Claude Design).
// ============================================================
import React from 'react';
import { Button, Badge, StatCard, Card, Input, Alert } from '../ds';
import { Reveal, MoleculeMotif, AnimatedMolecule, LangToggle, Icon, reduceMotion, useLang } from '../common';
import { SCENT_CONTENT } from '../../lib/content';

const LOGO = '/assets/logo_scent.png';
const DEVICE_IMG = '/uploads/sistema.png';
const AWARD_IMG = '/uploads/Pavilion_Marzotto.jpg';
const DEVICE_PAGE = '/scent-a1';

function V1Nav({ c, lang, setLang, onNav, active }) {
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
        <a href="#top" onClick={(e) => { e.preventDefault(); go('top'); }} style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
          <img src={LOGO} alt="SCENT" style={{ height: '36px' }} />
        </a>
        <nav className="r-nav-links" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-7, 28px)' }}>
          {c.nav.links.map(l => (
            <a key={l.id} href={`#${l.id}`} onClick={(e) => { e.preventDefault(); go(l.id); }}
              style={{ fontSize: 'var(--text-sm)', fontWeight: 500, textDecoration: 'none', letterSpacing: 'var(--tracking-wide)', color: active === l.id ? 'var(--text-brand)' : 'var(--text-secondary)' }}>
              {l.label}
            </a>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', flexShrink: 0 }}>
          <LangToggle lang={lang} setLang={setLang} />
          <span className="r-nav-cta">
            <Button variant="primary" size="sm" onClick={() => go('contatti')}>{c.nav.cta}</Button>
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
            {c.nav.links.map(l => (
              <a key={l.id} href={`#${l.id}`} onClick={(e) => { e.preventDefault(); go(l.id); }}
                style={{ fontSize: 'var(--text-lg)', fontWeight: 500, textDecoration: 'none', color: active === l.id ? 'var(--text-brand)' : 'var(--text-primary)', padding: 'var(--space-3) 0', borderBottom: '1px solid var(--border-subtle)' }}>
                {l.label}
              </a>
            ))}
            <div style={{ marginTop: 'var(--space-4)' }}>
              <Button variant="primary" size="lg" fullWidth onClick={() => go('contatti')}>{c.nav.cta}</Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

// Visual hero: il logo SCENT come protagonista. Il bersaglio concentrico del logo
// è il sensore: emette impulsi "annusa" (radar) mentre le particelle COV vi confluiscono.
function V1HeroVisual() {
  const reduce = reduceMotion();
  const sensor = { x: 11.5, y: 52 };
  const motes = [
    [22, 7.5, 0.0, 7, 'var(--color-magenta-400)'],
    [38, 9.0, 1.2, 5, 'var(--color-lime-500)'],
    [64, 8.0, 0.6, 6, 'var(--color-magenta-300)'],
    [78, 10.5, 2.4, 5, 'var(--color-lime-400)'],
    [50, 9.5, 3.2, 8, 'var(--color-magenta-400)'],
    [30, 11.0, 4.0, 4, 'var(--color-sage-500)'],
    [70, 8.6, 1.8, 6, 'var(--color-magenta-300)'],
  ];
  const css =
    '@keyframes scent-ping{0%{transform:translate(-50%,-50%) scale(.3);opacity:.45}70%{opacity:.08}100%{transform:translate(-50%,-50%) scale(2.6);opacity:0}}' +
    '@keyframes scent-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}' +
    '@keyframes scent-mote{0%{transform:translate(0,0) scale(1);opacity:0}12%{opacity:.95}82%{opacity:.85}100%{transform:translate(var(--mx),var(--my)) scale(.3);opacity:0}}' +
    '.scent-ping{position:absolute;border-radius:50%;border:1.5px solid var(--color-sage-400);left:var(--sx);top:var(--sy);width:110px;height:110px;animation:scent-ping 7.5s var(--ease-default) infinite}' +
    '.scent-logo{animation:scent-float 7s ease-in-out infinite}' +
    '.scent-mote{position:absolute;border-radius:50%;filter:blur(.3px);animation:scent-mote linear infinite}' +
    '@media (prefers-reduced-motion: reduce){.scent-ping,.scent-logo,.scent-mote{animation:none}.scent-mote{opacity:.5}.scent-ping:not(:first-of-type){display:none}}';
  return (
    <div className="r-hero-visual" style={{
      position: 'relative', width: '100%', minHeight: '460px', overflow: 'visible',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <style>{css}</style>

      <div style={{ position: 'relative', width: '78%', maxWidth: '440px' }}>
        {[0, 1].map((i) => (
          <span key={'p' + i} className="scent-ping"
            style={{ '--sx': sensor.x + '%', '--sy': sensor.y + '%', animationDelay: (i * 3.75) + 's' }} />
        ))}

        {motes.map(([top, dur, delay, size, color], i) => (
          <span key={'m' + i} className="scent-mote"
            style={{
              right: '-6%', top: top + '%', width: size, height: size, background: color,
              boxShadow: '0 0 8px ' + color,
              '--mx': '-' + (78 + (i % 3) * 6) + '%', '--my': ((sensor.y - top) * 0.7).toFixed(0) + 'px',
              animationDuration: dur + 's', animationDelay: delay + 's',
            }} />
        ))}

        <img className={reduce ? '' : 'scent-logo'} src={LOGO} alt="SCENT — Semiconductor-based Electronic Network for Tumors"
          style={{ position: 'relative', width: '100%', height: 'auto', display: 'block' }} />
      </div>
    </div>
  );
}

function V1Hero({ c, onNav }) {
  return (
    <section id="top" style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, var(--color-sage-50) 0%, var(--surface-page) 100%)' }}>
      <AnimatedMolecule style={{ position: 'absolute', top: '4%', right: '-60px', width: '640px', opacity: 0.45 }} />
      <div style={{ maxWidth: 'var(--width-content)', margin: '0 auto', padding: 'var(--space-20) var(--space-6) var(--space-16)', position: 'relative' }}>
        <div className="r-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'var(--space-16)', alignItems: 'center' }}>
          <Reveal>
            <div style={{ display: 'flex', gap: 'var(--space-2)', marginBottom: 'var(--space-6)', flexWrap: 'wrap' }}>
              <Badge variant="success" dot>{c.hero.badges[0]}</Badge>
              <Badge variant="primary">{c.hero.badges[1]}</Badge>
              <Badge variant="brand">{c.hero.badges[2]}</Badge>
            </div>
            <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--text-brand)', marginBottom: 'var(--space-4)' }}>{c.hero.kicker}</div>
            <h1 className="display" style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'var(--text-7xl)', lineHeight: 1.04, letterSpacing: 'var(--tracking-tight)', color: 'var(--text-primary)', marginBottom: 'var(--space-6)' }}>
              {c.hero.titleA}<br /><span style={{ color: 'var(--color-sage-600)' }}>{c.hero.titleB}</span>
            </h1>
            <p style={{ fontSize: 'var(--text-xl)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-8)', maxWidth: '540px' }}>{c.hero.lead}</p>
            <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
              <Button variant="primary" size="lg" onClick={() => onNav('contatti')}>{c.hero.ctaPrimary}</Button>
              <Button variant="outline" size="lg" onClick={() => onNav('tecnologia')}>{c.hero.ctaSecondary}</Button>
            </div>
          </Reveal>
          <Reveal delay={120} style={{ position: 'relative' }}>
            <V1HeroVisual />
          </Reveal>
        </div>
      </div>
      <V1PressBanner c={c} />
    </section>
  );
}

function V1PressBanner({ c }) {
  return (
    <div style={{ borderTop: '1px solid var(--border-subtle)', background: 'rgba(255,255,255,0.6)' }}>
      <div className="r-press-banner" style={{ maxWidth: 'var(--width-content)', margin: '0 auto', padding: 'var(--space-5) var(--space-6)', display: 'flex', alignItems: 'center', gap: 'var(--space-6)', flexWrap: 'wrap' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', flexShrink: 0, fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-magenta-500)' }} />{c.press.kicker}
        </span>
        <blockquote style={{ margin: 0, flex: 1, minWidth: '280px', fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'var(--text-xl)', lineHeight: 1.3, color: 'var(--text-primary)' }}>
          &ldquo;{c.press.quote}&rdquo;
        </blockquote>
        <span style={{ flexShrink: 0, fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
          <strong style={{ color: 'var(--text-primary)' }}>{c.press.source}</strong> · {c.press.date}
        </span>
      </div>
    </div>
  );
}

function V1Stats({ c }) {
  const variants = ['brand', 'subtle', 'eucalyptus', 'default'];
  return (
    <section style={{ background: 'var(--surface-base)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div style={{ maxWidth: 'var(--width-content)', margin: '0 auto', padding: 'var(--space-12) var(--space-6)' }}>
        <div className="r-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-5)' }}>
          {c.stats.items.map((s, i) => (
            <Reveal key={i} delay={i * 80}>
              <StatCard value={s.value} label={s.label} sublabel={s.sub} variant={variants[i]} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function V1Device({ c, lang }) {
  const en = lang === 'en';
  return (
    <section id="dispositivo" style={{ padding: 'var(--space-24) 0', scrollMarginTop: '72px' }}>
      <div style={{ maxWidth: 'var(--width-content)', margin: '0 auto', padding: '0 var(--space-6)' }}>
        <div className="r-device-grid" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 'var(--space-16)', alignItems: 'center' }}>
          <Reveal style={{ position: 'relative' }}>
            <div className="r-device-media" style={{ width: '100%', height: '460px', borderRadius: '24px', overflow: 'hidden', background: 'var(--color-sage-50)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={DEVICE_IMG} alt="SCENT A1 — dispositivo per la diagnosi non invasiva del tumore al colon-retto" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 'var(--space-6)' }} />
            </div>
            <div style={{ position: 'absolute', bottom: 'var(--space-5)', left: 'var(--space-5)' }}>
              <Badge variant="lime" size="lg">SCENT A1</Badge>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--text-brand)', marginBottom: 'var(--space-3)' }}>{c.device.kicker}</div>
            <h2 style={{ fontSize: 'var(--text-4xl)', fontWeight: 600, letterSpacing: 'var(--tracking-tight)', marginBottom: 'var(--space-5)' }}>{c.device.title}</h2>
            <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', marginBottom: 'var(--space-8)', maxWidth: 'none' }}>{c.device.lead}</p>
            <div className="r-device-features" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)' }}>
              {c.device.features.map(f => (
                <div key={f.t}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-sage-500)', marginBottom: 'var(--space-3)' }} />
                  <div style={{ fontWeight: 600, fontSize: 'var(--text-base)', marginBottom: 'var(--space-1)' }}>{f.t}</div>
                  <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>{f.d}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 'var(--space-8)', display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', alignItems: 'center' }}>
              <a href={DEVICE_PAGE} style={{ textDecoration: 'none' }}>
                <Button variant="primary" icon={<Icon name="arrow" size={16} />} iconPosition="right">{en ? 'Full device sheet' : 'Scheda completa del dispositivo'}</Button>
              </a>
              <a href={DEVICE_PAGE + '#video'} style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', textDecoration: 'none', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-brand)' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 26, height: 26, borderRadius: '50%', background: 'var(--color-sage-100)' }}>
                  <svg width="10" height="12" viewBox="0 0 30 34" fill="none" aria-hidden="true"><path d="M28 15.27a2 2 0 0 1 0 3.46L4 32.66A2 2 0 0 1 1 30.93V3.07A2 2 0 0 1 4 1.34l24 13.93Z" fill="var(--color-sage-700)"/></svg>
                </span>
                {en ? 'Watch it in action' : 'Guarda il dispositivo in funzione'}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function V1How({ c }) {
  return (
    <section id="tecnologia" style={{ background: 'var(--color-sage-900)', padding: 'var(--space-24) 0', scrollMarginTop: '72px', position: 'relative', overflow: 'hidden' }}>
      <MoleculeMotif style={{ position: 'absolute', bottom: '-20px', left: '-40px', width: '420px', opacity: 0.18 }} edgeColor="var(--color-lime-300)" nodeColor="var(--color-lime-200)" />
      <div style={{ maxWidth: 'var(--width-content)', margin: '0 auto', padding: '0 var(--space-6)', position: 'relative' }}>
        <Reveal style={{ maxWidth: '640px', marginBottom: 'var(--space-12)' }}>
          <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--color-lime-400)', marginBottom: 'var(--space-3)' }}>{c.how.kicker}</div>
          <h2 className="display" style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'var(--text-6xl)', lineHeight: 1.08, color: 'var(--color-neutral-0)', marginBottom: 'var(--space-4)' }}>{c.how.title}</h2>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-sage-200)', maxWidth: '560px' }}>{c.how.lead}</p>
        </Reveal>
        <div className="r-how-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-6)' }}>
          {c.how.steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 110}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
                <span style={{ width: '56px', height: '56px', borderRadius: 'var(--radius-full)', border: '1.5px solid var(--color-lime-400)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-lg)', color: 'var(--color-lime-300)', flexShrink: 0 }}>{s.n}</span>
                {i < c.how.steps.length - 1 && (
                  <span aria-hidden="true" style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, var(--color-lime-400), rgba(191,202,61,0.12))' }}></span>
                )}
              </div>
              <div style={{ fontSize: 'var(--text-2xl)', fontWeight: 600, color: 'var(--color-neutral-0)', marginBottom: 'var(--space-3)', letterSpacing: 'var(--tracking-tight)' }}>{s.t}</div>
              <div style={{ fontSize: 'var(--text-base)', color: 'var(--color-sage-200)', lineHeight: 'var(--leading-relaxed)' }}>{s.d}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function V1Validation({ c }) {
  return (
    <section id="validazione" style={{ background: 'var(--surface-base)', borderTop: '1px solid var(--border-subtle)', padding: 'var(--space-24) 0', scrollMarginTop: '72px' }}>
      <div style={{ maxWidth: 'var(--width-content)', margin: '0 auto', padding: '0 var(--space-6)' }}>
        <div className="r-val-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-16)', alignItems: 'center' }}>
          <Reveal>
            <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--text-brand)', marginBottom: 'var(--space-3)' }}>{c.validation.kicker}</div>
            <h2 style={{ fontSize: 'var(--text-4xl)', fontWeight: 600, letterSpacing: 'var(--tracking-tight)', marginBottom: 'var(--space-5)' }}>{c.validation.title}</h2>
            <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', marginBottom: 'var(--space-6)', maxWidth: 'none' }}>{c.validation.lead}</p>
            <div style={{ display: 'flex', gap: 'var(--space-2)', marginBottom: 'var(--space-8)', flexWrap: 'wrap' }}>
              <Badge variant="info">{c.validation.badges[0]}</Badge>
              <Badge variant="default">{c.validation.badges[1]}</Badge>
              <Badge variant="success" dot>{c.validation.badges[2]}</Badge>
            </div>
            <Button variant="outline" icon={<Icon name="external" size={16} />} iconPosition="right">{c.validation.cta}</Button>
          </Reveal>
          <Reveal delay={100}>
            <Card variant="raised" padding="lg">
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', marginBottom: 'var(--space-5)', letterSpacing: 'var(--tracking-wide)' }}>{c.validation.ref}</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
                {c.validation.cardStats.map((s, i) => (
                  <StatCard key={i} value={s.value} label={s.label} sublabel={s.sub} variant={i < 2 ? 'subtle' : 'default'} size="sm" />
                ))}
              </div>
              <div style={{ marginTop: 'var(--space-5)' }}>
                <Alert variant="brand" title={c.validation.spinoffTitle}>{c.validation.spinoff}</Alert>
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function V1Awards({ c }) {
  const a = c.awards;
  const h = a.highlight;
  return (
    <section id="premi" style={{ background: 'var(--color-sage-50)', borderTop: '1px solid var(--border-subtle)', padding: 'var(--space-24) 0', scrollMarginTop: '72px', position: 'relative', overflow: 'hidden' }}>
      <MoleculeMotif style={{ position: 'absolute', top: '6%', right: '-40px', width: '420px', opacity: 0.28 }} />
      <div style={{ maxWidth: 'var(--width-content)', margin: '0 auto', padding: '0 var(--space-6)', position: 'relative' }}>
        <Reveal style={{ maxWidth: '640px', marginBottom: 'var(--space-12)' }}>
          <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--text-brand)', marginBottom: 'var(--space-3)' }}>{a.kicker}</div>
          <h2 style={{ fontSize: 'var(--text-4xl)', fontWeight: 600, letterSpacing: 'var(--tracking-tight)', marginBottom: 'var(--space-4)' }}>{a.title}</h2>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', maxWidth: 'none' }}>{a.lead}</p>
        </Reveal>

        {/* Riconoscimento di punta — Premio Marzotto */}
        <Reveal style={{ marginBottom: 'var(--space-6)' }}>
          <Card variant="raised" padding="none" style={{ overflow: 'hidden' }}>
            <div className="v1-award-hero" style={{ display: 'grid', gridTemplateColumns: '0.95fr 1.05fr', alignItems: 'stretch' }}>
              <div style={{ position: 'relative', background: '#160d0b' }}>
                <img
                  src={AWARD_IMG}
                  alt="Finale Premio Gaetano Marzotto — UniCredit Pavilion, Piazza Gae Aulenti, Milano"
                  loading="lazy"
                  style={{ display: 'block', width: '100%', aspectRatio: '1 / 1', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: 'var(--space-10)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'flex', gap: 'var(--space-2)', marginBottom: 'var(--space-5)', flexWrap: 'wrap' }}>
                  <Badge variant="brand">{h.year}</Badge>
                  <Badge variant="lime" dot>{h.body}</Badge>
                </div>
                <h3 className="display" style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'var(--text-5xl)', lineHeight: 1.04, letterSpacing: 'var(--tracking-tight)', marginBottom: 'var(--space-6)' }}>{h.name}</h3>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
                  <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 'var(--text-6xl)', letterSpacing: 'var(--tracking-tight)', color: 'var(--color-magenta-500)', lineHeight: 1 }}>{h.prize}</span>
                  <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', maxWidth: '150px', lineHeight: 'var(--leading-snug)' }}>{h.prizeLabel}</span>
                </div>
                <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', margin: 0, maxWidth: 'none' }}>{h.desc}</p>
              </div>
            </div>
          </Card>
        </Reveal>

        {/* Altri riconoscimenti */}
        <div className="r-awards-items" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-5)' }}>
          {a.items.map((it, i) => (
            <Reveal key={it.name} delay={(i % 3) * 80}>
              <Card variant="outline" padding="lg" hover style={{ height: '100%', borderTop: '2px solid var(--color-lime-400)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--text-brand)', marginBottom: 'var(--space-3)' }}>{it.year}</div>
                <div style={{ fontSize: 'var(--text-xl)', fontWeight: 600, letterSpacing: 'var(--tracking-tight)', lineHeight: 'var(--leading-snug)', marginBottom: 'var(--space-1)' }}>{it.name}</div>
                <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 'var(--space-3)' }}>{it.body}</div>
                <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)', lineHeight: 'var(--leading-relaxed)' }}>{it.note}</div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// Stampa: grande virgolettato in evidenza su fondo eucalipto + testate sotto
function V1Press({ c }) {
  return (
    <section id="stampa" style={{ background: 'var(--color-eucalyptus-900)', padding: 'var(--space-24) 0', scrollMarginTop: '72px', position: 'relative', overflow: 'hidden' }}>
      <MoleculeMotif style={{ position: 'absolute', top: '-30px', right: '-40px', width: '460px', opacity: 0.16 }} edgeColor="var(--color-eucalyptus-200)" nodeColor="var(--color-eucalyptus-100)" />
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 var(--space-8)', textAlign: 'center', position: 'relative' }}>
        <Reveal>
          <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--color-eucalyptus-200)', marginBottom: 'var(--space-8)' }}>{c.press.kicker}</div>
          <blockquote style={{ margin: '0 0 var(--space-8)', fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(2rem, 4.2vw, 3.25rem)', lineHeight: 1.18, color: '#fff', letterSpacing: 'var(--tracking-tight)' }}>
            &ldquo;{c.press.quote}&rdquo;
          </blockquote>
          <div style={{ fontSize: 'var(--text-lg)', color: 'var(--color-eucalyptus-100)' }}>
            <strong style={{ color: '#fff', fontWeight: 600 }}>{c.press.source}</strong> · {c.press.date}
          </div>
        </Reveal>
        <Reveal delay={150} style={{ marginTop: 'var(--space-16)', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'var(--space-6) var(--space-10)' }}>
          {c.press.outlets.map((o, i) => (
            <span key={i} style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', color: 'var(--color-eucalyptus-100)', opacity: 0.85 }}>{o.name}</span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function V1Team({ c }) {
  return (
    <section id="team" style={{ background: 'var(--surface-base)', borderTop: '1px solid var(--border-subtle)', padding: 'var(--space-24) 0', scrollMarginTop: '72px', position: 'relative', overflow: 'hidden' }}>
      <style>{'.v2-team-card img{transition:border-color var(--duration-base) var(--ease-default), transform var(--duration-base) var(--ease-default)}.v2-team-card:hover img{border-color:var(--color-sage-400);transform:scale(1.04)}'}</style>
      <MoleculeMotif style={{ position: 'absolute', top: '-30px', right: '-50px', width: '380px', opacity: 0.2 }} />
      <div style={{ maxWidth: 'var(--width-content)', margin: '0 auto', padding: '0 var(--space-6)', position: 'relative' }}>
        <Reveal style={{ maxWidth: '640px', marginBottom: 'var(--space-12)' }}>
          <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--text-brand)', marginBottom: 'var(--space-3)' }}>{c.team.kicker}</div>
          <h2 style={{ fontSize: 'var(--text-4xl)', fontWeight: 600, letterSpacing: 'var(--tracking-tight)', marginBottom: 'var(--space-4)' }}>{c.team.title}</h2>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', maxWidth: 'none' }}>{c.team.lead}</p>
        </Reveal>
        <div className="r-team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-5)', marginBottom: 'var(--space-8)' }}>
          {c.team.people.map((m, i) => (
            <Reveal key={m.name} delay={(i % 3) * 80} className="v2-team-card">
              <Card variant="outline" padding="md" hover>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
                  <img
                    src={m.img}
                    alt={m.name}
                    loading="lazy"
                    style={{ width: '88px', height: '88px', borderRadius: 'var(--radius-full)', objectFit: 'cover', flexShrink: 0, border: '3px solid var(--color-sage-200)', background: 'var(--color-sage-50)' }}
                  />
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 'var(--leading-snug)', marginBottom: 'var(--space-1)' }}>{m.name}</div>
                    <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-snug)' }}>{m.role}</div>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)', maxWidth: 'none', fontStyle: 'italic' }}>{c.team.note}</p>
        </Reveal>
      </div>
    </section>
  );
}

function V2FinalCta({ c, onNav, lang }) {
  const en = lang === 'en';
  return (
    <section style={{ background: 'var(--color-sage-900)', position: 'relative', overflow: 'hidden', padding: 'var(--space-20) 0' }}>
      <MoleculeMotif style={{ position: 'absolute', bottom: '-40px', left: '-50px', width: '420px', opacity: 0.16 }} edgeColor="var(--color-lime-300)" nodeColor="var(--color-lime-200)" />
      <MoleculeMotif style={{ position: 'absolute', top: '-30px', right: '-60px', width: '380px', opacity: 0.12 }} edgeColor="var(--color-lime-300)" nodeColor="var(--color-magenta-300)" />
      <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center', padding: '0 var(--space-6)', position: 'relative' }}>
        <Reveal>
          <h2 className="display" style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'var(--text-6xl)', color: 'var(--color-neutral-0)', lineHeight: 1.08, marginBottom: 'var(--space-5)' }}>
            {en ? 'See SCENT A1 up close.' : 'Scopri SCENT A1 da vicino.'}
          </h2>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-sage-200)', margin: '0 auto var(--space-8)', maxWidth: '520px' }}>
            {en ? 'A demo with our team is the quickest way to evaluate the device for your facility.' : 'Una demo con il nostro team è il modo più rapido per valutare il dispositivo per la tua struttura.'}
          </p>
          <Button variant="primary" size="lg" onClick={() => onNav('contatti')}>{c.nav.cta}</Button>
        </Reveal>
      </div>
    </section>
  );
}

function V1Contact({ c }) {
  const [sent, setSent] = React.useState(false);
  const f = c.contact.fields, ph = c.contact.placeholders;
  return (
    <section id="contatti" style={{ background: 'linear-gradient(180deg, var(--surface-page), var(--color-sage-50))', padding: 'var(--space-24) 0', scrollMarginTop: '72px' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 var(--space-6)', textAlign: 'center' }}>
        <h2 className="display" style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'var(--text-6xl)', lineHeight: 1.1, marginBottom: 'var(--space-4)' }}>{c.contact.title}</h2>
        <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', margin: '0 auto var(--space-10)', maxWidth: '540px' }}>{c.contact.lead}</p>
        {sent ? (
          <div style={{ maxWidth: '480px', margin: '0 auto' }}>
            <Alert variant="success" title={c.contact.successTitle}>{c.contact.success}</Alert>
          </div>
        ) : (
          <Card variant="raised" padding="lg" style={{ maxWidth: '520px', margin: '0 auto', textAlign: 'left' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <div className="r-contact-names" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3)' }}>
                <Input label={f.name} placeholder={ph.name} />
                <Input label={f.org} placeholder={ph.org} />
              </div>
              <Input label={f.email} type="email" placeholder={ph.email} required />
              <Input label={f.message} placeholder={ph.message} />
              <Button variant="primary" size="lg" fullWidth onClick={() => setSent(true)}>{c.contact.submit}</Button>
            </div>
          </Card>
        )}
        <div style={{ marginTop: 'var(--space-10)', paddingTop: 'var(--space-8)', borderTop: '1px solid var(--border-subtle)' }}>
          <div style={{ fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--text-brand)', marginBottom: 'var(--space-2)' }}>{c.contact.whereTitle}</div>
          <div style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)' }}>{c.contact.address}</div>
          <div style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', marginTop: 'var(--space-1)' }}>{c.contact.phone}</div>
        </div>
      </div>
    </section>
  );
}

function V1Footer({ c }) {
  return (
    <footer style={{ background: 'var(--color-neutral-900)', color: 'var(--color-neutral-300)', padding: 'var(--space-16) 0 var(--space-8)' }}>
      <div style={{ maxWidth: 'var(--width-content)', margin: '0 auto', padding: '0 var(--space-6)' }}>
        <div className="r-footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 'var(--space-10)', paddingBottom: 'var(--space-12)' }}>
          <div>
            <div style={{ marginBottom: 'var(--space-4)' }}>
              <img src={LOGO} alt="SCENT" style={{ height: '32px', display: 'block', filter: 'brightness(0) invert(1)' }} />
            </div>
            <p style={{ color: 'var(--color-neutral-400)', fontSize: 'var(--text-sm)', maxWidth: '320px', lineHeight: 'var(--leading-relaxed)' }}>{c.footer.tagline}</p>
          </div>
          {c.footer.columns.map(col => (
            <div key={col.h}>
              <div style={{ fontSize: 'var(--text-xs)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 'var(--tracking-wider)', color: 'var(--color-neutral-0)', marginBottom: 'var(--space-4)' }}>{col.h}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                {col.items.map(i => {
                  const label = typeof i === 'object' ? i.label : i;
                  const props = typeof i === 'object' ? { href: i.href, target: '_blank', rel: 'noopener noreferrer' } : { href: '#', onClick: e => e.preventDefault() };
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

export default function HomeApp() {
  const [lang, setLang] = useLang();
  const [active, setActive] = React.useState('top');
  const c = SCENT_CONTENT[lang];
  const onNav = (id) => {
    setActive(id);
    if (id === 'top') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
  };
  return (
    <React.Fragment>
      <V1Nav c={c} lang={lang} setLang={setLang} onNav={onNav} active={active} />
      <main>
        <V1Hero c={c} onNav={onNav} />
        <V1Stats c={c} />
        <V1Device c={c} lang={lang} />
        <V1How c={c} />
        <V1Validation c={c} />
        <V1Awards c={c} />
        <V1Press c={c} />
        <V1Team c={c} />
        <V2FinalCta c={c} onNav={onNav} lang={lang} />
        <V1Contact c={c} />
      </main>
      <V1Footer c={c} />
    </React.Fragment>
  );
}
