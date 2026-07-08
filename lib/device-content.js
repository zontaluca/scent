/* ============================================================
   SCENT — Contenuti pagina dispositivo SCENT A1 (IT / EN)
   export SCENT_DEVICE — testo cliente (IT) + traduzione EN.
   Fonte IT: scheda dispositivo SCENT A1 (scent-srl.it).
   v2: hero.stats, pullquote, overview.compare, principle.steps
   aggiornati per la variante "Dispositivo v2" del design.
   ============================================================ */
export const SCENT_DEVICE = {
  it: {
    nav: {
      label: 'Il dispositivo',
      home: 'Home',
      links: [
        { id: 'panoramica', label: 'Panoramica' },
        { id: 'funzionamento', label: 'Funzionamento' },
        { id: 'video', label: 'Video' },
        { id: 'validazione', label: 'Validazione' },
      ],
      cta: 'Richiedi una demo',
    },
    hero: {
      eyebrow: 'Il dispositivo · SCENT A1',
      title: 'Il naso elettronico per lo screening del colon-retto',
      lead: 'Brevettato in Italia e in Europa, SCENT A1 affianca il test immunochimico fecale (FIT) per ridurre i falsi positivi e le colonscopie non necessarie — con un’analisi in-vitro, non invasiva, di un campione di feci.',
      badges: ['Brevettato IT · UE', 'Screening colon-retto', 'Test non invasivo'],
      caption: 'Dispositivo SCENT A1',
      stats: [
        { value: '84,1%', label: 'Sensibilità', sub: 'casi positivi identificati' },
        { value: '82,4%', label: 'Specificità', sub: 'soggetti sani esclusi' },
      ],
      spec: [
        { k: 'Patologia', v: 'Tumore al colon-retto (CCR)' },
        { k: 'Metodo', v: 'Analisi in-vitro delle esalazioni' },
        { k: 'Tecnologia', v: 'Sensori di gas a semiconduttore' },
        { k: 'Stato', v: 'In validazione clinica' },
      ],
    },
    pullquote: 'Meno colonscopie inutili. Più diagnosi precoci.',
    overview: {
      kicker: 'Panoramica',
      title: 'Screening preventivo del tumore al colon-retto',
      paragraphs: [
        'Il dispositivo brevettato SCENT A1 è stato sviluppato per supportare lo screening preventivo del tumore del colon-retto (CCR). Attualmente, i programmi di screening si basano sul test immunochimico fecale (FIT), che, pur rappresentando uno strumento efficace per la diagnosi precoce, può generare un numero significativo di falsi positivi dovuti a sanguinamenti di origine non tumorale. Tali risultati rendono necessario il ricorso alla colonscopia, un esame invasivo e costoso che, in molti casi, si rivela non necessario.',
        'SCENT A1 è un dispositivo medico certificato e clinicamente validato, progettato per affiancare il FIT come test di supporto. L’integrazione dei due strumenti consente di migliorare l’accuratezza del percorso di screening, riducendo il numero di falsi positivi e, di conseguenza, il ricorso a colonscopie non necessarie. In questo modo, SCENT A1 contribuisce a ottimizzare l’impiego delle risorse sanitarie, migliorando al contempo il percorso diagnostico del paziente.',
        'Nei Paesi in cui non sono presenti programmi di screening organizzati o in cui tali programmi risultano limitati, SCENT A1 può essere impiegato come strumento di valutazione preliminare della popolazione a rischio. L’utilizzo di SCENT A1 può inoltre risultare utile anche al di fuori dei programmi di screening, ad esempio per soggetti di età inferiore ai 50 anni con familiarità per il tumore del colon-retto o con sintomatologia sospetta, favorendo un’identificazione più precoce dei pazienti che necessitano di ulteriori approfondimenti diagnostici.',
      ],
      compare: {
        lead: 'SCENT A1 è pensato per lo screening preventivo del tumore al colon-retto: affianca il test immunochimico fecale (FIT) e riduce i falsi positivi.',
        today: {
          h: 'Oggi',
          items: [
            'Lo screening si affida al test immunochimico fecale (FIT), rivolto a uomini e donne tra i 50 e i 74 anni.',
            'Il FIT produce un alto numero di falsi positivi, dovuti a sanguinamenti di origine non tumorale.',
            'Molte persone sane vengono inviate a una colonscopia invasiva e costosa senza reale necessità.',
          ],
        },
        scent: {
          h: 'Con SCENT A1',
          items: [
            'Analisi in-vitro non invasiva di un campione di feci, in affiancamento al FIT.',
            'Meno falsi positivi: si eliminano le colonscopie inutili.',
            'Dove lo screening manca (Russia, Polonia, Brasile, Argentina, Spagna): diagnosi preliminare per la popolazione a rischio.',
          ],
        },
        more: 'Leggi il testo completo',
        less: 'Nascondi il testo completo',
      },
    },
    principle: {
      kicker: 'Principio di funzionamento',
      title: 'Dalla chimica dei gas alla diagnosi',
      lead: 'SCENT A1 è costituito da un nucleo di sensori di gas basati su materiali semiconduttori, in grado di variare la propria resistenza in funzione dei gas con cui vengono a contatto.',
      steps: [
        { n: '01', t: 'Campione di feci', d: 'Analisi in-vitro, non invasiva, delle esalazioni di un campione conservato in freezer.' },
        { n: '02', t: 'Biomarcatori volatili', d: 'Le cellule tumorali alterano la composizione delle feci con composti gassosi specifici.' },
        { n: '03', t: 'Un odore diverso', d: 'I sensori a semiconduttore rilevano la differenza tra soggetti con CCR e soggetti sani.' },
        { n: '04', t: 'Responso clinico', d: 'Lo strumento elabora i dati e fornisce il responso, a supporto della decisione clinica.' },
      ],
      note: 'I campioni devono essere conservati in freezer, in un contenitore standard, prima dell’analisi.',
    },
    video: {
      kicker: 'Il dispositivo in funzione',
      title: 'Guarda SCENT A1 all’opera',
      lead: 'Una dimostrazione del dispositivo e del flusso di analisi — dal campione di feci alla lettura dei sensori a semiconduttore fino al responso clinico.',
      caption: '“Dottor SCENT” · il naso elettronico in funzione',
      meta: 'Video · YouTube',
      play: 'Riproduci il video',
      youtubeId: '_BJo4mk0uZQ',
    },
    validation: {
      kicker: 'Validazione clinica',
      title: 'Validato negli ospedali di Ferrara',
      lead: 'SCENT A1 è stato validato clinicamente presso le strutture sanitarie del territorio ferrarese grazie a uno studio triennale.',
      articleUrl: 'https://doi.org/10.3390/cancers12061471',
      articleLabel: 'Leggi l’articolo',
      stats: [
        { value: '84,1%', label: 'Sensibilità', sub: 'Casi positivi correttamente identificati' },
        { value: '82,4%', label: 'Specificità', sub: 'Soggetti sani correttamente esclusi' },
      ],
      statsNote: 'Risultati pubblicati su Cancers (MDPI) · doi:10.3390/cancers12061471',
      protocolTitle: 'Lo studio clinico',
      protocol: 'La validazione clinica di SCENT A1 è stata condotta su pazienti risultati positivi al test immunochimico fecale (FIT). Per ciascun partecipante è stato raccolto un campione fecale prima dell’esecuzione della colonscopia, utilizzata come gold-standard diagnostico. Il confronto tra i risultati ottenuti con SCENT A1 e l’esito della colonscopia ha consentito di valutarne le prestazioni diagnostiche e l’efficacia come supporto allo screening del tumore del colon-retto.',
      partners: ['Ospedale S. Anna · AUSL Ferrara', 'Università di Ferrara'],
    },
    cta: {
      title: 'Vuoi saperne di più su SCENT A1?',
      lead: 'Sei una struttura sanitaria o un ricercatore? Richiedi una demo del dispositivo o approfondisci i risultati clinici pubblicati.',
      primary: 'Richiedi una demo',
      secondary: 'Leggi la pubblicazione',
    },
  },

  en: {
    nav: {
      label: 'The device',
      home: 'Home',
      links: [
        { id: 'panoramica', label: 'Overview' },
        { id: 'funzionamento', label: 'How it works' },
        { id: 'video', label: 'Video' },
        { id: 'validazione', label: 'Validation' },
      ],
      cta: 'Request a demo',
    },
    hero: {
      eyebrow: 'The device · SCENT A1',
      title: 'The electronic nose for colorectal screening',
      lead: 'Patented in Italy and Europe, SCENT A1 works alongside the fecal immunochemical test (FIT) to reduce false positives and unnecessary colonoscopies — through a non-invasive, in-vitro analysis of a fecal sample.',
      badges: ['Patented IT · EU', 'Colorectal screening', 'Non-invasive test'],
      caption: 'SCENT A1 device',
      stats: [
        { value: '84.1%', label: 'Sensitivity', sub: 'positive cases identified' },
        { value: '82.4%', label: 'Specificity', sub: 'healthy subjects ruled out' },
      ],
      spec: [
        { k: 'Condition', v: 'Colorectal cancer (CRC)' },
        { k: 'Method', v: 'In-vitro analysis of exhalations' },
        { k: 'Technology', v: 'Semiconductor gas sensors' },
        { k: 'Status', v: 'In clinical validation' },
      ],
    },
    pullquote: 'Fewer unnecessary colonoscopies. Earlier diagnoses.',
    overview: {
      kicker: 'Overview',
      title: 'Preventive screening for colorectal cancer',
      paragraphs: [
        'The patented SCENT A1 device was developed to support the preventive screening of colorectal cancer (CRC). Screening programmes currently rely on the fecal immunochemical test (FIT) which, while an effective tool for early diagnosis, can generate a significant number of false positives due to bleeding of non-tumoral origin. These results make a colonoscopy necessary — an invasive, costly examination that in many cases proves unnecessary.',
        'SCENT A1 is a certified, clinically validated medical device designed to work alongside the FIT as a supporting test. Integrating the two tools improves the accuracy of the screening pathway, reducing the number of false positives and, consequently, unnecessary colonoscopies. In this way, SCENT A1 helps optimise the use of healthcare resources while improving the patient’s diagnostic pathway.',
        'In countries where organised screening programmes are absent or limited, SCENT A1 can be used as a preliminary assessment tool for the at-risk population. SCENT A1 can also be useful outside screening programmes — for example for people under 50 with a family history of colorectal cancer or with suspicious symptoms — enabling earlier identification of patients who need further diagnostic investigation.',
      ],
      compare: {
        lead: 'SCENT A1 is designed for preventive colorectal cancer screening: it works alongside the fecal immunochemical test (FIT) and reduces false positives.',
        today: {
          h: 'Today',
          items: [
            'Screening relies on the fecal immunochemical test (FIT), offered to men and women aged 50 to 74.',
            'The FIT produces a high number of false positives, due to bleeding of non-tumoral origin.',
            'Many healthy people are sent to an invasive, costly colonoscopy with no real need.',
          ],
        },
        scent: {
          h: 'With SCENT A1',
          items: [
            'Non-invasive, in-vitro analysis of a fecal sample, alongside the FIT.',
            'Fewer false positives: unnecessary colonoscopies are eliminated.',
            'Where screening is absent (Russia, Poland, Brazil, Argentina, Spain): preliminary diagnosis for the at-risk population.',
          ],
        },
        more: 'Read the full text',
        less: 'Hide the full text',
      },
    },
    principle: {
      kicker: 'How it works',
      title: 'From gas chemistry to diagnosis',
      lead: 'SCENT A1 is built around a core of semiconductor gas sensors that change their resistance depending on the gases they come into contact with.',
      steps: [
        { n: '01', t: 'Fecal sample', d: 'Non-invasive, in-vitro analysis of the exhalations from a sample kept frozen.' },
        { n: '02', t: 'Volatile biomarkers', d: 'Tumour cells alter the composition of the feces with specific gaseous compounds.' },
        { n: '03', t: 'A different odour', d: 'The semiconductor sensors detect the difference between CRC patients and healthy subjects.' },
        { n: '04', t: 'Clinical readout', d: 'The instrument processes the data and delivers the readout, supporting the clinical decision.' },
      ],
      note: 'Samples must be kept frozen, in a standard container, before analysis.',
    },
    video: {
      kicker: 'The device in action',
      title: 'See SCENT A1 at work',
      lead: 'A walkthrough of the device and the analysis workflow — from the fecal sample to the semiconductor sensor readings and the final clinical readout.',
      caption: '“Dottor SCENT” · the electronic nose in action',
      meta: 'Video · YouTube',
      play: 'Play the video',
      youtubeId: '_BJo4mk0uZQ',
    },
    validation: {
      kicker: 'Clinical validation',
      title: 'Validated at Ferrara’s hospitals',
      lead: 'SCENT A1 has been clinically validated at healthcare facilities across the Ferrara area through a three-year study.',
      articleUrl: 'https://doi.org/10.3390/cancers12061471',
      articleLabel: 'Read the article',
      stats: [
        { value: '84.1%', label: 'Sensitivity', sub: 'Positive cases correctly identified' },
        { value: '82.4%', label: 'Specificity', sub: 'Healthy subjects correctly ruled out' },
      ],
      statsNote: 'Results published in Cancers (MDPI) · doi:10.3390/cancers12061471',
      protocolTitle: 'The clinical study',
      protocol: 'The clinical validation of SCENT A1 was conducted on patients who tested positive on the fecal immunochemical test (FIT). For each participant, a fecal sample was collected before the colonoscopy, used as the diagnostic gold standard. Comparing SCENT A1’s results with the colonoscopy outcome made it possible to assess its diagnostic performance and effectiveness as support for colorectal cancer screening.',
      partners: ['S. Anna Hospital · AUSL Ferrara', 'University of Ferrara'],
    },
    cta: {
      title: 'Want to know more about SCENT A1?',
      lead: 'Are you a healthcare facility or a researcher? Request a device demo or explore the published clinical results.',
      primary: 'Request a demo',
      secondary: 'Read the publication',
    },
  },
};
