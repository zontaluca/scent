/* ============================================================
   SCENT — Contenuti pagina dispositivo SCENT A1 (IT / EN)
   export SCENT_DEVICE — testo cliente (IT) + traduzione EN.
   Fonte IT: scheda dispositivo SCENT A1 (scent-srl.it).
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
      lead: 'Brevettato in Italia e in Europa, SCENT A1 affianca il test del sangue occulto fecale per ridurre i falsi positivi e le colonscopie non necessarie — con un’analisi in-vitro, non invasiva, di un campione di feci.',
      badges: ['Brevettato IT · UE', 'Screening colon-retto', 'Test non invasivo'],
      caption: 'Dispositivo SCENT A1',
      spec: [
        { k: 'Patologia', v: 'Tumore al colon-retto (CCR)' },
        { k: 'Metodo', v: 'Analisi in-vitro delle esalazioni' },
        { k: 'Tecnologia', v: 'Sensori di gas a semiconduttore' },
        { k: 'Stato', v: 'In validazione clinica' },
      ],
    },
    overview: {
      kicker: 'Panoramica',
      title: 'Screening preventivo del tumore al colon-retto',
      paragraphs: [
        'Il dispositivo SCENT A1, brevettato sia in Italia che in Europa, è pensato per lo screening preventivo del tumore al colon-retto (CCR). Attualmente la prevenzione del CCR si affida alla ricerca del sangue occulto nelle feci (FOBT), che presenta un alto numero di falsi positivi, a cui segue la colonscopia, invasiva e costosa.',
        'Una volta entrato nel mercato, lo strumento fornirà al sistema sanitario un metodo di diagnosi preventiva sicuro ed efficace, di supporto al test FOBT — già accettato dal sistema sanitario ed obbligatorio per tutti i soggetti tra i 50 e i 69 anni di età. SCENT A1 agirà affiancandosi a quest’ultimo, al fine di ridurre il numero di falsi positivi, ossia di persone sane che risultano malate al test e che dovrebbero sottoporsi alla colonscopia senza alcuna necessità reale.',
        'Si mira dunque ad ottimizzare il numero di colonscopie operative, eliminando quelle inutili. Negli stati in cui non è presente il test FOBT o alcun tipo di screening preventivo — come Russia, Polonia, Brasile, Argentina e Spagna — SCENT A1 si proporrà, a seguito della validazione clinica, come metodo di diagnosi preliminare sulla popolazione a rischio. L’introduzione di SCENT A1 farà inoltre decrescere il numero di decessi a causa di tumori non diagnosticati dai test delle feci, con un notevole impatto socio-sanitario.',
      ],
      highlights: [
        { t: 'Affianca il test FOBT', d: 'Già obbligatorio per tutti i soggetti tra i 50 e i 69 anni di età.' },
        { t: 'Meno colonscopie inutili', d: 'Riduce i falsi positivi: persone sane che risultano malate al test.' },
        { t: 'Dove manca lo screening', d: 'Russia, Polonia, Brasile, Argentina, Spagna: diagnosi preliminare sulla popolazione a rischio.' },
        { t: 'Impatto socio-sanitario', d: 'Meno decessi per tumori non diagnosticati dai test delle feci.' },
      ],
    },
    principle: {
      kicker: 'Principio di funzionamento',
      title: 'Dalla chimica dei gas alla diagnosi',
      lead: 'SCENT A1 è costituito da un nucleo di sensori di gas basati su materiali semiconduttori, in grado di variare la propria resistenza in funzione dei gas con cui vengono a contatto.',
      steps: [
        { n: '01', t: 'Campione di feci', d: 'Il dispositivo esegue un’analisi in-vitro — dunque non invasiva — delle esalazioni prodotte da un campione di feci del paziente, conservato in freezer in un contenitore standard prima dell’analisi.' },
        { n: '02', t: 'Biomarcatori volatili', d: 'La composizione delle feci è alterata dalla presenza di biomarcatori volatili, prodotti dalla perossidazione delle cellule tumorali e dalle alterazioni metaboliche in presenza di tumore.' },
        { n: '03', t: 'Un odore diverso', d: 'Tali composti rendono l’odore delle feci di soggetti con CCR diverso da quello dei soggetti sani: è questa differenza che i sensori a semiconduttore rilevano.' },
        { n: '04', t: 'Responso clinico', d: 'I dati elaborati dallo strumento forniscono il responso sullo stato di salute del paziente, a supporto della decisione clinica.' },
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
      title: 'In validazione negli ospedali di Ferrara',
      lead: 'Da maggio 2016, dopo uno studio di fattibilità preliminare, SCENT A1 è in fase di validazione clinica presso le strutture sanitarie del territorio ferrarese.',
      stats: [
        { value: '84,1%', label: 'Sensibilità', sub: 'Casi positivi correttamente identificati' },
        { value: '82,4%', label: 'Specificità', sub: 'Soggetti sani correttamente esclusi' },
      ],
      statsNote: 'Risultati pubblicati su Cancers (MDPI) · doi:10.3390/cancers12061471',
      timeline: [
        { date: 'Maggio 2016', t: 'Avvio della validazione clinica', d: 'Dopo uno studio di fattibilità preliminare, SCENT A1 entra in validazione clinica con i medici dell’Ospedale S. Anna, AUSL e Università di Ferrara.' },
        { date: 'Settembre 2017', t: 'Si aggiunge l’Ospedale del Delta', d: 'Allo studio partecipa anche l’Ospedale del Delta di Lagosanto, ampliando la coorte di pazienti coinvolti.' },
        { date: '2019', t: 'Termine previsto del protocollo', d: 'I dati raccolti servono a validare lo strumento; la conclusione del protocollo è prevista per il 2019.' },
      ],
      protocolTitle: 'Come si partecipa allo studio',
      protocol: 'I pazienti che risultano positivi al FOBT possono partecipare allo studio portando un campione di feci in più da analizzare, prima di eseguire la colonscopia (gold-standard). I dati raccolti serviranno per validare lo strumento.',
      partners: ['Ospedale S. Anna · AUSL e Università di Ferrara', 'Ospedale del Delta · Lagosanto'],
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
      lead: 'Patented in Italy and Europe, SCENT A1 works alongside the fecal occult blood test to reduce false positives and unnecessary colonoscopies — through a non-invasive, in-vitro analysis of a fecal sample.',
      badges: ['Patented IT · EU', 'Colorectal screening', 'Non-invasive test'],
      caption: 'SCENT A1 device',
      spec: [
        { k: 'Condition', v: 'Colorectal cancer (CRC)' },
        { k: 'Method', v: 'In-vitro analysis of exhalations' },
        { k: 'Technology', v: 'Semiconductor gas sensors' },
        { k: 'Status', v: 'In clinical validation' },
      ],
    },
    overview: {
      kicker: 'Overview',
      title: 'Preventive screening for colorectal cancer',
      paragraphs: [
        'The SCENT A1 device, patented in both Italy and Europe, is designed for the preventive screening of colorectal cancer (CRC). Today, CRC prevention relies on the fecal occult blood test (FOBT), which produces a high number of false positives, followed by colonoscopy — invasive and costly.',
        'Once on the market, the instrument will give the healthcare system a safe and effective preventive diagnostic method that supports the FOBT — already accepted by the healthcare system and mandatory for everyone between 50 and 69 years of age. SCENT A1 works alongside it to reduce the number of false positives: healthy people who test positive and would otherwise undergo a colonoscopy with no real need.',
        'The aim is to optimise the number of operative colonoscopies, eliminating the unnecessary ones. In countries where the FOBT or any form of preventive screening is absent — such as Russia, Poland, Brazil, Argentina and Spain — SCENT A1 will, following clinical validation, serve as a preliminary diagnostic method for the at-risk population. Introducing SCENT A1 will also lower the number of deaths from tumours undetected by fecal tests, with a significant socio-medical impact.',
      ],
      highlights: [
        { t: 'Supports the FOBT', d: 'Already mandatory for everyone between 50 and 69 years of age.' },
        { t: 'Fewer needless colonoscopies', d: 'Reduces false positives: healthy people who test positive.' },
        { t: 'Where screening is absent', d: 'Russia, Poland, Brazil, Argentina, Spain: preliminary diagnosis for the at-risk population.' },
        { t: 'Socio-medical impact', d: 'Fewer deaths from tumours undetected by fecal tests.' },
      ],
    },
    principle: {
      kicker: 'How it works',
      title: 'From gas chemistry to diagnosis',
      lead: 'SCENT A1 is built around a core of semiconductor gas sensors that change their resistance depending on the gases they come into contact with.',
      steps: [
        { n: '01', t: 'Fecal sample', d: 'The device performs an in-vitro — and therefore non-invasive — analysis of the exhalations from a patient’s fecal sample, kept frozen in a standard container before analysis.' },
        { n: '02', t: 'Volatile biomarkers', d: 'The composition of the feces is altered by volatile biomarkers, produced by the peroxidation of tumour cells and by metabolic changes in the presence of cancer.' },
        { n: '03', t: 'A different odour', d: 'These compounds make the odour of feces from CRC patients different from that of healthy subjects: it is this difference that the semiconductor sensors detect.' },
        { n: '04', t: 'Clinical readout', d: 'The data processed by the instrument provide a readout of the patient’s health status, supporting the clinical decision.' },
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
      title: 'In validation at Ferrara’s hospitals',
      lead: 'Since May 2016, after a preliminary feasibility study, SCENT A1 has been undergoing clinical validation at healthcare facilities across the Ferrara area.',
      stats: [
        { value: '84.1%', label: 'Sensitivity', sub: 'Positive cases correctly identified' },
        { value: '82.4%', label: 'Specificity', sub: 'Healthy subjects correctly ruled out' },
      ],
      statsNote: 'Results published in Cancers (MDPI) · doi:10.3390/cancers12061471',
      timeline: [
        { date: 'May 2016', t: 'Clinical validation begins', d: 'After a preliminary feasibility study, SCENT A1 enters clinical validation with the physicians of S. Anna Hospital, AUSL and the University of Ferrara.' },
        { date: 'September 2017', t: 'The Delta Hospital joins', d: 'The Delta Hospital of Lagosanto also joins the study, widening the cohort of patients involved.' },
        { date: '2019', t: 'Protocol expected to conclude', d: 'The collected data serve to validate the instrument; the protocol is expected to conclude in 2019.' },
      ],
      protocolTitle: 'How to take part in the study',
      protocol: 'Patients who test positive on the FOBT can take part in the study by providing one extra fecal sample to analyse, before undergoing the colonoscopy (gold standard). The collected data will serve to validate the instrument.',
      partners: ['S. Anna Hospital · AUSL and University of Ferrara', 'Delta Hospital · Lagosanto'],
    },
    cta: {
      title: 'Want to know more about SCENT A1?',
      lead: 'Are you a healthcare facility or a researcher? Request a device demo or explore the published clinical results.',
      primary: 'Request a demo',
      secondary: 'Read the publication',
    },
  },
};
