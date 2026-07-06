# SCENT — Website

Sito di SCENT A1 in **Next.js** (App Router), deploy su **Cloudflare Pages** tramite
`@cloudflare/next-on-pages` — stesso stack di `unpodimiele/website` e `fiumidistorie/website`.

Pagine (importate da Claude Design):
- **Home** — `SCENT A1 — Diagnostica oncologica non invasiva`, servita su `/`.
- **Dispositivo** — `SCENT A1 — Il dispositivo`, servita su `/dispositivo`.

## Struttura

```
scent/                    # repo root = cartella del sito
├── app/
│   ├── layout.jsx            # <html>, metadata default, import globals.css
│   ├── page.jsx              # home — metadata + <HomeApp/>
│   ├── dispositivo/page.jsx  # dispositivo — metadata + <DeviceApp/>
│   └── globals.css           # font + token (colori/tipografia/spaziatura) + reset + responsive
├── components/
│   ├── ds/index.jsx      # design system SCENT: Button, Badge, Card, StatCard, Alert, Input
│   ├── common.jsx        # Reveal, CountUp, molecole, LangToggle, Icon, useLang
│   ├── home/HomeApp.jsx      # home (client component)
│   └── device/DeviceApp.jsx  # pagina dispositivo (client component)
├── lib/
│   ├── content.js        # SCENT_CONTENT (bilingue IT/EN — home + footer condiviso)
│   └── device-content.js # SCENT_DEVICE  (contenuti pagina dispositivo)
├── public/
│   ├── assets/logo_scent.png
│   └── uploads/          # immagini (vedi nota)
├── next.config.mjs
├── wrangler.toml         # pages_build_output_dir = .vercel/output/static
└── package.json
```

Nessuna dipendenza da CDN: React e i componenti del design system sono importati come
moduli. I token del design system sono variabili CSS in `app/globals.css`; i componenti
usano inline-style + `var(--*)`, esattamente come nel design originale.

## Sviluppo locale

```bash
npm install
npm run dev        # http://localhost:3000
```

## Deploy (Cloudflare Pages)

```bash
npm run deploy     # pages:build (next-on-pages) + wrangler pages deploy
# oppure anteprima locale sul runtime CF:
npm run preview
```

## Immagini mancanti

Alcuni asset superano il limite di 256 KiB dell'import da Claude Design e vanno aggiunti a
mano in `public/uploads/`:

- `uploads/sistema.png` — render/foto del dispositivo SCENT A1 (hero dispositivo + sezione Dispositivo home)
- `uploads/image_rit.png` — schizzo concept (sfondo sezione Panoramica, pagina dispositivo)
- `uploads/Pavilion_Marzotto.jpg` — foto Premio Marzotto (sezione Premi, home)
- `uploads/andrea.png`, `uploads/antonio.png`, `uploads/elena.png` — foto team (sezione Team, home)

Le altre 6 foto del team (`cesare`, `sandro`, `giulia`, `alessio`, `mik`, `nicolo`) sono già
importate. Finché mancano gli asset sopra, quegli slot mostrano l'immagine rotta; il resto
delle pagine funziona.
