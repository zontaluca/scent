// ============================================================
// SCENT — News (markdown bilingue, letti a build-time)
// content/news/*.md → { slug, date, title, excerpt, cover, bodyHtml }
// ============================================================
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

const NEWS_DIR = path.join(process.cwd(), 'content', 'news');
const EN_SPLIT = /\n<!--\s*EN\s*-->\n/i;

function loadAll() {
  if (!fs.existsSync(NEWS_DIR)) return [];
  return fs
    .readdirSync(NEWS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((file) => {
      const raw = fs.readFileSync(path.join(NEWS_DIR, file), 'utf8');
      const { data, content } = matter(raw);
      const [bodyIt = '', bodyEn = ''] = content.split(EN_SPLIT).map((s) => s.trim());
      // slug senza prefisso data: 2026-03-12-nuovo-brevetto.md → nuovo-brevetto
      const slug = data.slug || file.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, '');
      // gray-matter converte le date YAML in Date: normalizza a 'YYYY-MM-DD'
      const date = data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date);
      return {
        slug,
        date,
        title: { it: data.title_it, en: data.title_en || data.title_it },
        excerpt: { it: data.excerpt_it, en: data.excerpt_en || data.excerpt_it },
        cover: data.cover || null,
        bodyHtml: { it: marked.parse(bodyIt), en: marked.parse(bodyEn || bodyIt) },
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

// elenco senza corpo (per card: home, /news, "altre novità")
export function getNewsSummaries() {
  return loadAll().map(({ bodyHtml, ...n }) => n);
}

export function getNewsSlugs() {
  return loadAll().map((n) => n.slug);
}

export function getNewsBySlug(slug) {
  return loadAll().find((n) => n.slug === slug) || null;
}
