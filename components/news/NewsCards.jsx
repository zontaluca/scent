'use client';
// ============================================================
// SCENT — News: copertina, card, griglia, sezione home
// Port di shared/news.jsx (Claude Design, Home v2 / News).
// ============================================================
import React from 'react';
import { Button, Badge, Card } from '../ds';
import { Reveal, MoleculeMotif, Icon } from '../common';

export const newsHref = (slug) => '/news' + (slug ? '/' + slug : '');

export const eyebrow = { fontSize: 'var(--text-sm)', fontWeight: 600, letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--text-brand)', marginBottom: 'var(--space-3)' };
export const dateStyle = { fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--text-brand)', letterSpacing: 'var(--tracking-wide)' };

// 'YYYY-MM-DD' → "12 marzo 2026" (mezzogiorno: niente slittamenti di fuso)
export function formatDate(iso, lang) {
  const d = new Date(iso + 'T12:00:00');
  if (Number.isNaN(d.getTime())) return iso;
  return new Intl.DateTimeFormat(lang === 'en' ? 'en-GB' : 'it-IT', { day: 'numeric', month: 'long', year: 'numeric' }).format(d);
}

export function NewsCover({ src, alt, ratio = '4 / 3', style }) {
  return (
    <div style={{ position: 'relative', aspectRatio: ratio, background: 'radial-gradient(circle at 50% 55%, var(--color-sage-100), var(--color-sage-50) 70%)', overflow: 'hidden', ...style }}>
      {src
        ? <img src={src} alt={alt} loading="lazy" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', padding: '8%', boxSizing: 'border-box' }} />
        : <MoleculeMotif style={{ position: 'absolute', left: '12%', top: '22%', width: '76%', opacity: 0.6 }} />}
    </div>
  );
}

export function NewsCard({ n, lang, ui, wide = false, badge }) {
  const title = n.title[lang];
  return (
    <a href={newsHref(n.slug)} className="news-card" style={{ display: 'block', height: '100%', textDecoration: 'none', color: 'inherit' }}>
      <Card variant="outline" padding="none" hover style={{ overflow: 'hidden', height: '100%' }}>
        <div className={wide ? 'r-news-wide' : ''} style={{ display: 'grid', gridTemplateColumns: wide ? '1fr 1fr' : '1fr', height: '100%' }}>
          <NewsCover src={n.cover} alt={title} ratio={wide ? '4 / 3' : '16 / 10'} />
          <div style={{ padding: wide ? 'var(--space-10)' : 'var(--space-6)', display: 'flex', flexDirection: 'column', justifyContent: wide ? 'center' : 'flex-start', gap: 'var(--space-3)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
              {badge && <Badge variant="lime" dot>{badge}</Badge>}
              <time dateTime={n.date} style={dateStyle}>{formatDate(n.date, lang)}</time>
            </div>
            {wide
              ? <h3 className="display" style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'var(--text-5xl)', lineHeight: 1.06, letterSpacing: 'var(--tracking-tight)', margin: 0, textWrap: 'balance' }}>{title}</h3>
              : <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 600, lineHeight: 'var(--leading-snug)', letterSpacing: 'var(--tracking-tight)', margin: 0, textWrap: 'pretty' }}>{title}</h3>}
            <p style={{ fontSize: wide ? 'var(--text-lg)' : 'var(--text-base)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', margin: 0, maxWidth: 'none', textWrap: 'pretty' }}>{n.excerpt[lang]}</p>
            <span className="news-read" style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', marginTop: 'auto', paddingTop: 'var(--space-2)', fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--text-brand)' }}>
              {ui.read}<Icon name="arrow" size={16} />
            </span>
          </div>
        </div>
      </Card>
    </a>
  );
}

export function NewsGrid({ items, lang, ui }) {
  const cols = items.length === 2 ? 2 : 3;
  return (
    <div className="r-news-grid" style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`, gap: 'var(--space-5)' }}>
      {items.map((n, i) => <Reveal key={n.slug} delay={(i % 3) * 80} style={{ height: '100%' }}><NewsCard n={n} lang={lang} ui={ui} /></Reveal>)}
    </div>
  );
}

// --- Sezione home: ultime 3 news ----------------------------
export function HomeNews({ items, lang, ui }) {
  const latest = items.slice(0, 3);
  if (!latest.length) return null;
  return (
    <section id="news" style={{ background: 'var(--surface-base)', borderTop: '1px solid var(--border-subtle)', padding: 'var(--space-24) 0', scrollMarginTop: '72px' }}>
      <div style={{ maxWidth: 'var(--width-content)', margin: '0 auto', padding: '0 var(--space-6)' }}>
        <Reveal style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 'var(--space-6)', flexWrap: 'wrap', marginBottom: 'var(--space-10)' }}>
          <div>
            <div style={eyebrow}>{ui.kicker}</div>
            <h2 style={{ fontSize: 'var(--text-4xl)', fontWeight: 600, letterSpacing: 'var(--tracking-tight)', margin: 0 }}>{ui.homeTitle}</h2>
          </div>
          <Button variant="outline" icon={<Icon name="arrow" size={16} />} iconPosition="right" onClick={() => { window.location.href = newsHref(); }}>{ui.all}</Button>
        </Reveal>
        {latest.length === 1
          ? <Reveal><NewsCard n={latest[0]} lang={lang} ui={ui} wide /></Reveal>
          : <NewsGrid items={latest} lang={lang} ui={ui} />}
      </div>
    </section>
  );
}
