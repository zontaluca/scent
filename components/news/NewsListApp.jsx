'use client';
// ============================================================
// SCENT — News (elenco) — /news
// Hero · news più recente in evidenza · griglia delle altre.
// ============================================================
import React from 'react';
import { Reveal, MoleculeMotif, Icon, useLang } from '../common';
import SiteNav from '../nav/SiteNav';
import SiteFooter from '../nav/SiteFooter';
import { NewsCard, NewsGrid, eyebrow } from './NewsCards';
import { SCENT_CONTENT } from '../../lib/content';

export default function NewsListApp({ items }) {
  const [lang, setLang] = useLang();
  const c = SCENT_CONTENT[lang];
  const ui = c.news;
  const [first, ...rest] = items;

  return (
    <React.Fragment>
      <SiteNav c={c} lang={lang} setLang={setLang} active="news" current="other" />
      <main>
        <section style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, var(--color-sage-50) 0%, var(--surface-page) 100%)' }}>
          <MoleculeMotif style={{ position: 'absolute', top: '10%', right: '-40px', width: '420px', opacity: 0.3 }} />
          <div style={{ maxWidth: 'var(--width-content)', margin: '0 auto', padding: 'var(--space-20) var(--space-6) var(--space-12)', position: 'relative' }}>
            <Reveal>
              <div style={eyebrow}>{ui.kicker}</div>
              <h1 className="display" style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'var(--text-7xl)', lineHeight: 1.04, letterSpacing: 'var(--tracking-tight)', margin: '0 0 var(--space-4)' }}>{ui.pageTitle}</h1>
              <p style={{ fontSize: 'var(--text-xl)', color: 'var(--text-secondary)', margin: 0, maxWidth: '540px' }}>{ui.pageLead}</p>
            </Reveal>
          </div>
        </section>
        <section style={{ padding: '0 0 var(--space-24)' }}>
          <div style={{ maxWidth: 'var(--width-content)', margin: '0 auto', padding: '0 var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
            {first && <Reveal><NewsCard n={first} lang={lang} ui={ui} wide badge={ui.latest} /></Reveal>}
            {rest.length > 0 && <NewsGrid items={rest} lang={lang} ui={ui} />}
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', flexWrap: 'wrap', paddingTop: 'var(--space-8)', borderTop: '1px solid var(--border-subtle)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
              <span>{ui.pressHint}</span>
              <a href="/#stampa" className="news-link" style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-1)', fontWeight: 600 }}>{ui.pressLink}<Icon name="arrow" size={14} /></a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter c={c} />
    </React.Fragment>
  );
}
