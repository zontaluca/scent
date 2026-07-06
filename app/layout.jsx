import './globals.css';

export const metadata = {
  title: 'SCENT A1 — Diagnostica oncologica non invasiva',
  description:
    'SCENT A1 rileva la possibile presenza di tumore al colon-retto analizzando i biomarcatori gassosi di un campione di feci, grazie a sensori a semiconduttore nanostrutturati. Spin-off dell’Università di Ferrara.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
