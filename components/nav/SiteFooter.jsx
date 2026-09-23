'use client';
// ============================================================
// SCENT — Footer condiviso (Home · Dispositivo · News)
// Voci con `id` → ancora dell'home (scroll morbido se onNav è
// passato, cioè siamo già in home); voci con `href` → link esterno.
// ============================================================
import React from 'react';

const LOGO = '/assets/logo_scent.png';

export default function SiteFooter({ c, onNav }) {
  return (
    <footer style={{ background: 'var(--color-neutral-900)', color: 'var(--color-neutral-300)', padding: 'var(--space-16) 0 var(--space-8)' }}>
      <style>{'.v2-foot-link{color:var(--color-neutral-400);font-size:var(--text-sm);text-decoration:none;transition:color var(--duration-fast) var(--ease-default)}.v2-foot-link:hover{color:var(--color-lime-300)}'}</style>
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
                  const props = i.id
                    ? { href: '/#' + i.id, onClick: e => { if (onNav) { e.preventDefault(); onNav(i.id); } } }
                    : { href: i.href, target: '_blank', rel: 'noopener noreferrer' };
                  return <a key={i.label} className="v2-foot-link" {...props}>{i.label}</a>;
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
