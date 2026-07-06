import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Evita l'inferenza errata della root quando esistono altri lockfile a monte.
  outputFileTracingRoot: dirname(fileURLToPath(import.meta.url)),
  images: {
    // Il sito usa <img> con asset locali; nessuna ottimizzazione runtime.
    unoptimized: true,
  },
};

export default nextConfig;
