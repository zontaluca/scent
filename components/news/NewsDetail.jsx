'use client';
// ============================================================
// SCENT — News (articolo) — /news/[slug]
// Header · copertina · corpo markdown · altre novità.
// ============================================================
import React from 'react';
import { Reveal, Icon, useLang } from '../common';
import SiteNav from '../nav/SiteNav';
import SiteFooter from '../nav/SiteFooter';
import { NewsCover, NewsGrid, newsHref, dateStyle, formatDate } from './NewsCards';
import { SCENT_CONTENT } from '../../lib/content';

export default function NewsDetail({ post, others }) {
  const [lang, setLang] = useLang();
  const c = SCENT_CONTENT[lang];
  const ui = c.news;
  const title = post.title[lang];
  React.useEffect(() => { document.title = title + ' — SCENT'; }, [title]);

  const back = (
    <a href={newsHref()} className="news-link" style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-sm)', fontWeight: 600 }}>
      <Icon name="arrow" size={16} style={{ transform: 'rotate(180deg)' }} />{ui.back}
    </a>
  );

  return (
    <React.Fragment>
      <SiteNav c={c} lang={lang} setLang={setLang} active="news" current="other" />
      <main>
        <article>
          <header style={{ background: 'linear-gradient(180deg, var(--color-sage-50) 0%, var(--surface-page) 100%)' }}>
            <div style={{ maxWidth: '760px', margin: '0 auto', padding: 'var(--space-12) var(--space-6) var(--space-10)' }}>
              <div style={{ marginBottom: 'var(--space-10)' }}>{back}</div>
              <Reveal>
                <time dateTime={post.date} style={{ ...dateStyle, display: 'block', marginBottom: 'var(--space-4)' }}>{formatDate(post.date, lang)}</time>
                <h1 className="display" style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'var(--text-6xl)', lineHeight: 1.06, letterSpacing: 'var(--tracking-tight)', margin: '0 0 var(--space-5)', textWrap: 'balance' }}>{title}</h1>
                <p style={{ fontSize: 'var(--text-xl)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', margin: 0, maxWidth: 'none', textWrap: 'pretty' }}>{post.excerpt[lang]}</p>
              </Reveal>
            </div>
          </header>
          <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 var(--space-6)' }}>
            <Reveal><NewsCover src={post.cover} alt={title} ratio="16 / 9" style={{ borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-subtle)' }} /></Reveal>
          </div>
          <div style={{ maxWidth: '760px', margin: '0 auto', padding: 'var(--space-12) var(--space-6) var(--space-20)' }}>
            <div className="news-prose" dangerouslySetInnerHTML={{ __html: post.bodyHtml[lang] }} />
            <div style={{ marginTop: 'var(--space-12)', paddingTop: 'var(--space-6)', borderTop: '1px solid var(--border-subtle)' }}>{back}</div>
          </div>
          {others.length > 0 && (
            <section style={{ background: 'var(--surface-base)', borderTop: '1px solid var(--border-subtle)', padding: 'var(--space-20) 0' }}>
              <div style={{ maxWidth: 'var(--width-content)', margin: '0 auto', padding: '0 var(--space-6)' }}>
                <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 600, letterSpacing: 'var(--tracking-tight)', marginBottom: 'var(--space-8)' }}>{ui.more}</h2>
                <NewsGrid items={others} lang={lang} ui={ui} />
              </div>
            </section>
          )}
        </article>
      </main>
      <SiteFooter c={c} />
    </React.Fragment>
  );
}
