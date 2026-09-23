import { getNewsSummaries } from '../../lib/news';
import NewsListApp from '../../components/news/NewsListApp';

export const metadata = {
  title: 'SCENT A1 — News',
  description: 'Le ultime novità da SCENT: brevetti, riconoscimenti, aggiornamenti sulla diagnostica oncologica non invasiva.',
};

export default function Page() {
  return <NewsListApp items={getNewsSummaries()} />;
}
