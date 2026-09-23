'use client';
// ============================================================
// SCENT — Nav condivisa (Home + pagine News)
// Estratta da V1Nav (home-v2/sections1.jsx). In home i link sono
// ancore in-pagina; altrove puntano a /#sezione, "News" a /news.
// ============================================================
import React from 'react';
import { Button } from '../ds';
import { LangToggle } from '../common';

const LOGO = '/assets/logo_scent.png';

export default function SiteNav({ c, lang, setLang, onNav, active, current = 'home' }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const isHome = current === 'home';
  const go = (id) => { setMenuOpen(false); if (isHome) onNav(id); };
  const linkProps = (l) => {
    if (isHome) return { href: `#${l.id}`, onClick: (e) => { e.preventDefault(); go(l.id); } };
    return { href: l.id === 'news' ? '/news' : `/#${l.id}` };
  };
  const ctaProps = isHome
    ? { onClick: () => go('contatti') }
    : { onClick: () => { window.location.href = '/#contatti'; } };

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(255,255,255,0.82)',
      backdropFilter: 'saturate(180%) blur(16px)',
      WebkitBackdropFilter: 'saturate(180%) blur(16px)',
      borderBottom: '1px solid var(--border-subtle)',
    }}>
      <div style={{ maxWidth: 'var(--width-content)', margin: '0 auto', padding: '0 var(--space-6)', height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-6)' }}>
        <a href={isHome ? '#top' : '/'} onClick={isHome ? (e) => { e.preventDefault(); go('top'); } : undefined} style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
          <img src={LOGO} alt="SCENT" style={{ height: '36px' }} />
        </a>
        <nav className="r-nav-links" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-7, 28px)' }}>
          {c.nav.links.map(l => (
            <a key={l.id} {...linkProps(l)}
              style={{ fontSize: 'var(--text-sm)', fontWeight: 500, textDecoration: 'none', letterSpacing: 'var(--tracking-wide)', color: active === l.id ? 'var(--text-brand)' : 'var(--text-secondary)' }}>
              {l.label}
            </a>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', flexShrink: 0 }}>
          <LangToggle lang={lang} setLang={setLang} />
          <span className="r-nav-cta">
            <Button variant="primary" size="sm" {...ctaProps}>{c.nav.cta}</Button>
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
              <a key={l.id} {...linkProps(l)}
                onClick={(e) => { setMenuOpen(false); linkProps(l).onClick?.(e); }}
                style={{ fontSize: 'var(--text-lg)', fontWeight: 500, textDecoration: 'none', color: active === l.id ? 'var(--text-brand)' : 'var(--text-primary)', padding: 'var(--space-3) 0', borderBottom: '1px solid var(--border-subtle)' }}>
                {l.label}
              </a>
            ))}
            <div style={{ marginTop: 'var(--space-4)' }}>
              <Button variant="primary" size="lg" fullWidth {...ctaProps}>{c.nav.cta}</Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
