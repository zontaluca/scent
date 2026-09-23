import { notFound } from 'next/navigation';
import { getNewsSlugs, getNewsBySlug, getNewsSummaries } from '../../../lib/news';
import NewsDetail from '../../../components/news/NewsDetail';

export const dynamicParams = false;

export function generateStaticParams() {
  return getNewsSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getNewsBySlug(slug);
  if (!post) return {};
  return {
    title: `SCENT A1 — ${post.title.it}`,
    description: post.excerpt.it,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const post = getNewsBySlug(slug);
  if (!post) notFound();
  const others = getNewsSummaries().filter((n) => n.slug !== slug).slice(0, 3);
  return <NewsDetail post={post} others={others} />;
}
