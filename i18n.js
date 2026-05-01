/* ============================================================
   I18N.JS — Language toggle (EN / IT)
   Keeps technical English terms ("inglesismi") untranslated.
   ============================================================ */
(function () {
  'use strict';

  var T = {

    /* ── Shared / Nav ── */
    'skip':         { en: 'Skip to content',  it: 'Vai al contenuto' },
    'nav.about':           { en: 'About',          it: 'Chi sono' },
    'nav.home':            { en: 'Home',           it: 'Home' },
    'nav.experience':      { en: 'Experience',     it: 'Esperienza' },
    'nav.projects':        { en: 'Projects',       it: 'Progetti' },
    'nav.skills':          { en: 'Skills',         it: 'Competenze' },
    'nav.certifications':  { en: 'Certifications', it: 'Certificazioni' },
    'nav.contact':         { en: 'Contact',        it: 'Contatti' },

    /* ── Shared / Contact ── */
    'contact.label':   { en: '04 — Contact', it: '04 — Contatti' },
    'contact.label.5': { en: '05 — Contact', it: '05 — Contatti' },
    'contact.title': {
      en: 'Let\'s work<br><span class="text-gradient">together.</span>',
      it: 'Lavoriamo<br><span class="text-gradient">insieme.</span>'
    },
    'contact.sub': {
      en: 'Have a project in mind or just want to connect? I\'d love to hear from you.',
      it: 'Hai un progetto in mente o vuoi semplicemente connetterti? Mi farebbe piacere sentirti.'
    },

    /* ── Shared / Footer ── */
    'footer.credit': { en: 'Built with HTML \u00b7 CSS \u00b7 JS', it: 'Realizzato con HTML \u00b7 CSS \u00b7 JS' },

    /* ═══════════════════════════════════════
       INDEX PAGE
    ═══════════════════════════════════════ */

    /* Hero */
    'hero.status':      { en: 'Available for new projects',  it: 'Disponibile per nuovi progetti' },
    'hero.tagline': {
      en: "Digital Transformation Project Manager, Master's degree in Mechanical Engineering, 4+ years across transformation, SAP, and Power Platform \u2014 now exploring the new frontiers of AI. I distil technical complexity into sharp strategic decisions \u2014 because every digital transformation is, at its core, a human one.",
      it: "Digital Transformation Project Manager, Dottore Magistrale in Ingegneria Meccanica, 4+ anni di esperienza in trasformazione digitale, SAP e Power Platform \u2014 con uno sguardo costante alle nuove frontiere dell'intelligenza artificiale. Trasformo la complessit\u00e0 tecnica in decisioni strategiche mirate \u2014 perch\u00e9 ogni trasformazione digitale \u00e8, nel profondo, una questione umana."
    },
    'hero.cta.work':    { en: 'View My Work',  it: 'I miei lavori' },
    'hero.cta.contact': { en: 'Get in Touch',  it: 'Contattami' },
    'hero.scroll':      { en: 'scroll',        it: 'scorri' },

    /* About section */
    'about.label': { en: '01 \u2014 About', it: '01 \u2014 Chi sono' },
    'about.title': {
      en: 'What I do <span class="text-gradient">best</span>.',
      it: 'Ci\u00f2 che faccio <span class="text-gradient">meglio</span>.'
    },
    'about.p1': {
      en: "Complexity kills efficiency. I build  systems that simplify people's work. Custom apps, data platforms, AI-assisted workflows, and PMO governance that keep projects on time and teams in control.",
      it: "La complessit\u00e0 riduce l\'efficienza. Costruisco sistemi che semplifichino il lavoro. App personalizzate, data platform, workflow AI-assisted. Il tutto con governance da PMO per mantenere i progetti nei tempi e i team sotto controllo."
    },
    'about.p2': {
      en: 'I track what\'s new, what\'s proven, and what\'s hype. I help companies cut through the noise \u2014 matching the right tools to real business needs, so decisions get made faster and budgets don\'t get wasted on the wrong bet.',
      it: 'Seguo ci\u00f2 che \u00e8 nuovo, ci\u00f2 che \u00e8 consolidato e ci\u00f2 che \u00e8 solo hype, aiutando le aziende a scegliere gli strumenti adatti a soddisfare i reali bisogni di business, con decisioni rapide e budget ottimizzati.'
    },
    'about.profile': { en: 'Full Profile \u2192', it: 'Profilo Completo \u2192' },

    /* Projects section */
    'projects.label': { en: '02 \u2014 Projects', it: '02 \u2014 Progetti' },
    'projects.title': { en: 'Selected Work',      it: 'Lavori selezionati' },
    'projects.more.text': { en: 'These are just a few of my projects. Get in touch to discover what we can build together.', it: 'Questi sono solo alcuni dei miei progetti. Contattami per scoprire cosa possiamo costruire insieme.' },
    'projects.more.cta':  { en: 'Let\'s talk about your project',  it: 'Parliamo del tuo progetto' },

    'proj.1.title': { en: 'Diamond Counter Robot App', it: 'Diamond Counter Robot App' },
    'proj.1.desc': {
      en: 'Low-code web app enabling jewellers to track precious stone inventory in real time and automatically match diamonds to production orders \u2014 eliminating manual lookups on the production floor.',
      it: 'Web app low-code che consente ai gioiellieri di tracciare l\'inventario delle pietre preziose in tempo reale e abbinare automaticamente i diamanti agli ordini di produzione \u2014 eliminando le ricerche manuali in reparto.'
    },
    'proj.2.title': { en: 'Tips', it: 'Tips' },
    'proj.2.desc': {
      en: 'Web application for requesting and managing tips and feedback about products, processes and environment from the employees.',
      it: 'Web application per la raccolta e gestione di suggerimenti e feedback da parte dei dipendenti su prodotti, processi e ambiente di lavoro.'
    },
    'proj.3.title': { en: 'Asset Manager', it: 'Asset Manager' },
    'proj.3.desc': {
      en: 'Full-featured asset tracking and lifecycle management platform built for operational teams.',
      it: 'Piattaforma completa di tracking e lifecycle management degli asset, progettata per i team operativi.'
    },
    'proj.4.title': { en: 'Data Platform', it: 'Data Platform' },
    'proj.4.desc': {
      en: 'I worked as business data analyst on the development of a comprehensive data platform for a manufacturing company, enabling real-time KPI tracking and operational BI.',
      it: 'Ho lavorato come business data analyst allo sviluppo di una data platform completa per un\'azienda manifatturiera, abilitando il tracking KPI in tempo reale e la BI operativa.'
    },
    'proj.5.title': { en: 'Daily KPIs Dashboard', it: 'Dashboard KPI Giornalieri' },
    'proj.5.desc': {
      en: 'Automated daily KPI reporting with drill-through capabilities and executive summaries in Power BI.',
      it: 'Reporting KPI giornaliero automatizzato con funzionalit\u00e0 di drill-through e summary esecutive in Power BI.'
    },
    'proj.6.title': { en: 'Data Platform \u2014 Energy Sector', it: 'Data Platform \u2014 Settore Energy' },
    'proj.6.desc': {
      en: 'Led the delivery of a corporate Data Platform initiative within a major multi-utility group, coordinating a cross-functional team of developers and ensuring transparent workload tracking across AFC, Procurement, Digital Innovation and People structures.',
      it: 'Ho guidato la delivery di un\'iniziativa Data Platform corporate in un importante gruppo multi-utility, coordinando un team cross-funzionale di developer e garantendo il tracking trasparente dei carichi di lavoro tra AFC, Procurement, Digital Innovation e People.'
    },
    'proj.7.title': { en: 'SAP R/3 \u2192 S/4 HANA Migration', it: 'Migrazione SAP R/3 \u2192 S/4 HANA' },
    'proj.7.desc': {
      en: 'I worked as SAP Consultant on the migration from SAP R/3 to S/4 HANA, managing stakeholders, data migration, customizing of AS IS processeses and go-live activities. I worked with SAP SD and MM modules for logistic and after sales services departments',
      it: 'Ho lavorato come SAP Consultant sulla migrazione da SAP R/3 a S/4 HANA, gestendo stakeholder, data migration, customizing dei processi AS IS e attivit\u00e0 di go-live. Ho operato con i moduli SAP SD e MM per i dipartimenti logistica e after sales services.'
    },
    'proj.8.title': { en: 'Industry 4.0 Certification Manager', it: 'Industry 4.0 Certification Manager' },
    'proj.8.desc': {
      en: 'Tool to manage and track Industry 4.0 certifications, requirements, and renewal deadlines across departments.',
      it: 'Tool per la gestione e il tracking delle certificazioni Industry 4.0, requisiti e scadenze di rinnovo tra i dipartimenti.'
    },

    /* Skills section */
    'skills.label': { en: '03 \u2014 Skills', it: '03 \u2014 Skills' },
    'skills.title': { en: 'What I work with', it: 'Con cosa lavoro' },

    /* ═══════════════════════════════════════
       ABOUT PAGE
    ═══════════════════════════════════════ */

    /* Page hero */
    'abt.hero.label': { en: 'About', it: 'Chi sono' },
    'abt.hero.title': {
      en: 'The person<br><span class="text-gradient">behind the work.</span>',
      it: 'Il mio background <br>e le mie<br><span class="text-gradient">competenze</span>'
    },
    'abt.hero.sub': {
      en: 'I\'m a Project Manager with experience in Digital Transformation projects and a NCLC and Vibe-Code developer. In my work experience I have been between the production departments of manufacturing companies and the offices of large Corporates, working on data platform projects always staying at the intersection between technology and impact.',
      it: 'Sono un Project Manager con esperienza nei progetti di Digital Transformation e uno sviluppatore NCLC e Vibe-Code. Nella mia esperienza lavorativa sono stato tra i reparti produttivi di aziende manufatturiere e tra gli uffici di grandi Corporate, lavorando su progetti di data platform, rimanendo sempre all\'intersezione tra tecnologia e impatto.'
    },

    /* Background */
    'bg.label': { en: '01 \u2014 Background', it: '01 \u2014 Background' },
    'bg.title': { en: 'Who I am', it: 'Chi sono' },
    'bg.p1': {
      en: 'I\'m Salvatore Franco \u2014 a Project Manager specialized in Digital Transformtion &amp; innovation technologies projects, and a data professional based in Italy, currently working at <strong>A2A</strong> in the Real Estate &amp; Services division. I hold a degree in Mechanical Engineering from UNICAL and have built my career at the intersection of technology, data, and operations.',
      it: 'Sono Salvatore Franco \u2014 un Project Manager specializzato in progetti di Digital Transformation &amp; innovation technology, e un data professional. Lavoro attualmente in Italia, nella divisione Real Estate &amp; Services di <strong>A2A</strong>. Ho una laurea in Ingegneria Meccanica presso UNICAL e ho costruito la mia carriera tra tecnologia, dati e operations.'
    },
    'bg.p2': {
      en: 'Before A2A, I spent three years at <strong>Accenture Strategy &amp; Consulting</strong>, leading digital transformation and innovation technology projects for a world leader in high jewelry and luxury goods. I joined on 27+ projects where I supervised cross-functional teams, and also developed complex Power BI reports and No-Code/Low-Code web apps integrated with chatbots and SCARA robots.',
      it: 'Prima di A2A, ho trascorso tre anni in <strong>Accenture Strategy &amp; Consulting</strong>, guidando progetti di digital transformation e innovation technology per un leader mondiale nel settore dell\' alta gioielleria e accessori di lusso. Ho partecipato a oltre 27 progetti supervisionando team cross-funzionali, sviluppando report Power BI complessi e web app No-Code/Low-Code integrate con chatbot e robot SCARA.'
    },
    'bg.p3': {
      en: 'I care about delivering real, measurable impact \u2014 whether that\'s a multi-system SAP migration, a real-time KPI dashboard, or a small automation that saves a team hours every week. Outside of work, I\'m deepening my web development and AI skills and building side projects.',
      it: 'Per me è importante generare un impatto reale e misurabile \u2014 che si tratti di una migrazione SAP multi-sistema, una dashboard KPI o una piccola automazione che fa risparmiare ore ogni settimana al team. Fuori dal lavoro, approfondisco le mie competenze di web development e sviluppo AI, realizzo side project.'
    },

    /* Sidebar */
    'sidebar.location.label': { en: 'Location',     it: 'Sede' },
    'sidebar.location.value': { en: 'Italy',         it: 'Italia' },
    'sidebar.role.label':     { en: 'Current Role',  it: 'Ruolo attuale' },
    'sidebar.degree.label':   { en: 'Master Degree',        it: 'Laurea Magistrale' },
    'sidebar.degree.value':   { en: 'Mechanical Engineering \u2014 UNICAL', it: 'Ingegneria Meccanica \u2014 UNICAL' },
    'sidebar.status.label':   { en: 'Status',        it: 'Stato' },
    'sidebar.status.value': {
      en: '<span class="hero__status-dot" aria-hidden="true"></span> Available for projects',
      it: '<span class="hero__status-dot" aria-hidden="true"></span> Disponibile per progetti'
    },

    /* Experience */
    'exp.label': { en: '02 \u2014 Experience', it: '02 \u2014 Esperienza' },
    'exp.title': { en: 'What I\'ve built',     it: 'Su cosa ho lavorato' },

    'exp.1.date':    { en: 'Feb 2025 \u2014 Present', it: 'Feb 2025 \u2014 Oggi' },
    'exp.1.current': { en: 'Current', it: 'In corso' },
    'exp.1.desc': {
      en: 'PMO role within the Project Services &amp; PMO department. Managing and supervising macro-projects on digital integration, governance, Data Platform and internal training across the group.',
      it: 'Ruolo PMO nel dipartimento Project Services &amp; PMO. Gestione e supervisione di macro-progetti di integrazione digitale, governance, Data Platform e formazione interna del gruppo.'
    },
    'exp.1.sub1': {
      en: '<strong>Digital Governance \u00b7 Acquisition of a multi-utility group</strong> \u2014 Overseeing integration and migration of all Group management systems into A2A\'s application landscape. In the PMO role, I managed and supervised all project phases, coordinating cross-functional teams and ensuring timelines and strategic objectives were met, reporting directly to ICT Management and the CEO.',
      it: '<strong>Digital Governance \u00b7 Acquisizione di un gruppo nel settore multi-utility </strong> \u2014 Supervisione dell\'integrazione e migrazione di tutti i sistemi gestionali del Gruppo verso la mappa applicativa A2A. Nel Ruolo di PMO, ho gestito e supervisionato tutte le fasi del progetto, coordinando team interfunzionali e garantendo il rispetto dei tempi e degli obiettivi strategici, riportando direttamente alla Direzione ICT e al CEO.'
    },
    'exp.1.sub2': {
      en: '<strong>Digital Governance \u00b7 Digital transition of controlled company</strong> \u2014 Integration and migration of a controlled company\'s management systems into the A2A ecosystem with direct reporting to ICT Management and the company\'s leadership.',
      it: '<strong>Digital Governance \u00b7 Transizione digitale di una società controllata</strong> \u2014 Integrazione e migrazione dei sistemi gestionali di una società controllata verso l\'ecosistema A2A, riportando direttamente alla Direzione ICT e al responsabiled della società.'
    },
    'exp.1.sub3': {
      en: '<strong>Team Leader &amp; PM \u00b7 Data Platform BU Corporate</strong> \u2014 Leading 4 teams of 3 people across Procurement, AFC, Digital Transformation, People &amp; Transformation, supervising external partner works. I have been the point of contact between the leadership and the teams for all Data Platform initiatives, ensuring alignment on priorities, timelines and deliverables.',
      it: '<strong>Team Leader &amp; PM \u00b7 Data Platform BU Corporate</strong> \u2014 Gestione di un team di 3 PMO e supervisione del partner esterno per Procurement, AFC, Digital Transformation, People &amp; Transformation. Punto di riferimento tra la leadership e i team per tutte le iniziative Data Platform, garantendo allineamento su priorità, tempistiche e deliverables.'
    },
    'exp.1.sub4': {
      en: '<strong>Structural activities</strong> \u2014 Coordinating iLaber (PMO interns) for the production of training materials, maintenance of the structure\'s intranet, collaboration on toolbox (tools for PMs), structure OKRs, Project Sustainability Handbook, teaching in the group\'s internal training courses for intermediate and basic PMs, volunteering training at Bollate Prison, point of reference in the Technology structure.',
      it: '<strong>Attivit\u00e0 di struttura</strong> \u2014 Coordinamento degli iLaber (stagisti PMO) per la produzione di materiali formativi, maintenance della intranet della struttura, collaborazione su toolbox (strumenti per i PM), OKR di struttura, Project Sustainability Handbook, docente nei corsi di formazione interni del gruppo PM intermedio e base, formazione di volontariato presso il Carcere di Bollate, punto di riferimento nella struttura Technology.'
    },

    'exp.2.date': { en: 'Dec 2023 \u2014 Feb 2025', it: 'Dic 2023 \u2014 Feb 2025' },
    'exp.2.desc': {
      en: 'Functional consultant for a world leader in high jewelry and luxury goods (LVMH group). ERP updates project from SAP R/3 to S/4HANA with global market impact.',
      it: 'Consulente funzionale per un leader mondiale nel settore dell\'alta gioielleria e beni di lusso (gruppo LVMH). Progetto di aggiornamento ERP da SAP R/3 a S/4HANA con impatto sul mercato globale.'
    },
    'exp.2.sub1': {
      en: 'Streams: Master Data, Distribution, Manufacturing, After Sales Services. AS-IS analysis, BPML &amp; Core Model design, BBP, configurations. Managing 15+ RICEFWs with CRM and SAP R/3\u2192S/4 integrations.',
      it: 'Stream: Master Data, Distribution, Manufacturing, After Sales Services. Analisi AS-IS, BPML &amp; Core Model design, BBP, configurazioni. Gestione di 15+ RICEFW con integrazioni CRM e SAP R/3\u2192S/4.'
    },

    'exp.3.date': { en: 'Feb 2022 \u2014 Dec 2023', it: 'Feb 2022 \u2014 Dic 2023' },
    'exp.3.desc': {
      en: 'PM at a luxury client\'s production site (LVMH group). Managing 27 projects end-to-end (18 released), supervising teams of 2\u20133 people, reporting directly to the plant\'s IT Manager.',
      it: 'PM presso il sito produttivo di un cliente luxury (gruppo LVMH). Gestione di 27 progetti end-to-end (18 rilasciati), supervisione di team da 2\u20133 persone, reporting diretto all\'IT Manager dello stabilimento.'
    },
    'exp.3.sub1': {
      en: 'Advanced Power BI reports integrated with MES and SAP (workforce management, Industry 4.0, asset management, production).',
      it: 'Report avanzati Power BI integrati con MES e SAP (workforce management, Industry 4.0, asset management, produzione).'
    },
    'exp.3.sub2': {
      en: '<strong>Contapietre Robot</strong> \u2014 Power App integrated with SCARA robot and MES for precious stones warehouse monitoring. The app allows operators to track container contents against production orders in real time.',
      it: '<strong>Contapietre Robot</strong> \u2014 Power App integrata con robot SCARA e MES per il monitoraggio del magazzino pietre preziose. L\'app permette agli operatori di monitorare il contenuto dei contenitori rispetto agli ordini di produzione .'
    },
    'exp.3.sub3': {
      en: '<strong>Suggestion App</strong> \u2014 Power App with SSO and Power BI dashboard for employee suggestion collection and analysis.',
      it: '<strong>App Suggerimenti</strong> \u2014 Power App con SSO e dashboard Power BI per raccolta e analisi suggerimenti dipendenti.'
    },
    'exp.3.sub4': {
      en: '<strong>Asset Manager</strong> \u2014 Power App + Power Automate for maintenance management, reminders, costs and asset certifications.',
      it: '<strong>Asset Manager</strong> \u2014 Power App + Power Automate per gestione manutenzioni, reminder, costi e certificazioni degli asset.'
    },
   
    'exp.4.role': { en: 'Research Intern \u2014 Mechanical behavior of Materials &amp; Additive manufacturing', it: 'Tirocinante \u2014 Comportamento meccanico dei materiali &amp; Additive Manufacturing' },
    'exp.4.date': { en: 'Mar 2021 \u2014 Sep 2021', it: 'Mar 2021 \u2014 Set 2021' },
    'exp.4.desc': {
      en: 'Scientific research on the effect of defects on the fatigue life of Titanium materials produced via Additive Manufacturing (AM), in collaboration with the UNICAL Department of Mechanical Engineering.',
      it: 'Ricerca scientifica sull\'effetto dei difetti sulla vita a fatica di materiali in Titanio prodotti per Additive Manufacturing (AM), in collaborazione con il Dipartimento di Ingegneria Meccanica UNICAL.'
    },

    'exp.5.company': { en: 'UNICAL \u00b7 Dept. Mechanical Engineering', it: 'UNICAL \u00b7 Dip. Ingegneria Meccanica' },
    'exp.5.role':    { en: 'Tutor \u2014 Machine Design &amp; CAD', it: 'Tutor \u2014 Progettazione Meccanica &amp; CAD' },
    'exp.5.date':    { en: 'Oct 2019 \u2014 Sep 2020', it: 'Ott 2019 \u2014 Set 2020' },
    'exp.5.desc': {
      en: 'Tutoring and teaching support for the Machine Design and CAD course. Self-employment collaboration contract.',
      it: 'Attivit\u00e0 di tutoraggio per i corsi di Progettazione Meccanica e CAD. Contratto di collaborazione autonoma.'
    },

    /* About — Skills (same section numbers) */
    'abt.skills.label': { en: '03 \u2014 Skills', it: '03 \u2014 Skills' },
    'abt.skills.title': { en: 'What I work with', it: 'Con cosa lavoro' },

    /* Education */
    'edu.label': { en: '04 \u2014 Education', it: '04 \u2014 Formazione' },
    'edu.title': { en: 'Academic background', it: 'Percorso accademico' },
    'edu.1.type':  { en: 'Degree',         it: 'Laurea' },
    'edu.1.title': { en: 'Master Degree in Mechanical Engineering \u2014 UNICAL', it: 'Laurea Magistrale in Ingegneria Meccanica \u2014 UNICAL' },
    'edu.1.body':  { en: 'Thesis research conducted in collaboration with AIRBUS SpA.', it: 'Ricerca di tesi condotta in collaborazione con AIRBUS SpA.' },
    'edu.2.type':  { en: 'Certifications',  it: 'Certificazioni' },
    'edu.2.title': { en: 'Project Management &amp; Microsoft Platform', it: 'Project Management &amp; Microsoft Platform' },
    'edu.2.body':  { en: 'Certifications in project management methodologies and Anthropic AI technologies.', it: 'Certificazioni in metodologie di project management e tecnologie AI.' },
    'edu.3.type':  { en: 'Self-taught',     it: 'Autodidatta' },
    'edu.3.title': { en: 'Web Development', it: 'Web Development' },
    'edu.3.body': {
      en: 'Basic knowledge in HTML, CSS and JavaScript through structured courses and real-world side projects \u2014 this portfolio being one of them. Microsoft Power BI, Power Apps, Power Automate and the broader Power Platform ecosystem.',
      it: 'Conoscenze di base in HTML, CSS e JavaScript attraverso corsi strutturati e side projects reali \u2014 questo portfolio \u00e8 uno di essi. Microsoft Power BI, Power Apps, Power Automate e il pi\u00f9 ampio ecosistema Power Platform.'
    },

    /* About contact label (section 05) */
    'abt.contact.label': { en: '05 \u2014 Contact', it: '05 \u2014 Contatti' },

    /* ═══════════════════════════════════════
       CERTIFICATIONS PAGE
    ═══════════════════════════════════════ */

    'cert.hero.label': { en: 'Certifications', it: 'Certificazioni' },
    'cert.hero.title': {
      en: 'Verified<br><span class="text-gradient">credentials.</span>',
      it: 'Credenziali<br><span class="text-gradient">verificate.</span>'
    },
    'cert.hero.sub': {
      en: 'Licenses and certifications across AI, project management, and professional development.',
      it: 'Licenze e certificazioni in AI, project management e sviluppo professionale.'
    },

    'cert.ai.label': { en: '01 \u2014 AI &amp; Technology', it: '01 \u2014 AI &amp; Tecnologia' },
    'cert.ai.title': { en: 'Artificial Intelligence',       it: 'Intelligenza Artificiale' },

    'cert.pm.label': { en: '02 \u2014 Project Management', it: '02 \u2014 Project Management' },
    'cert.pm.title': { en: 'Project Management',           it: 'Project Management' },

    'cert.other.label': { en: '03 \u2014 Other',                   it: '03 \u2014 Altro' },
    'cert.other.title': { en: 'Productivity &amp; Languages',      it: 'Produttivit\u00e0 &amp; Lingue' },

    'cert.id': { en: 'ID', it: 'ID' },

    'cert.1.date':  { en: 'Apr 2026', it: 'Apr 2026' },
    'cert.1.title': { en: 'Claude Code in Action', it: 'Claude Code in Action' },

    'cert.2.date':  { en: 'Mar 2026', it: 'Mar 2026' },
    'cert.2.title': { en: 'Certificate of Completion: Claude 101', it: 'Attestato di completamento: Claude 101' },

    'cert.3.date':  { en: 'Jun 2025', it: 'Giu 2025' },
    'cert.3.title': { en: 'Practical Application of Gen AI for Project Managers', it: 'Applicazione Pratica dell\'AI Generativa per Project Manager' },

    'cert.4.date':  { en: 'Jan 2023', it: 'Gen 2023' },
    'cert.4.title': { en: 'AI For Everyone', it: 'AI per tutti' },

    'cert.5.date':  { en: 'Jun 2022', it: 'Giu 2022' },
    'cert.5.title': { en: 'AI Explained', it: 'AI Explained' },

    'cert.6.date':  { en: 'Feb 2023', it: 'Feb 2023' },
    'cert.6.title': { en: 'Project Execution: Running the Project', it: 'Esecuzione del Progetto: Gestire un Progetto' },

    'cert.7.date':  { en: 'Dec 2022', it: 'Dic 2022' },
    'cert.7.title': { en: 'Project Planning: Putting It All Together', it: 'Pianificazione del Progetto: Mettere Tutto Insieme' },

    'cert.8.date':  { en: 'Jul 2022', it: 'Lug 2022' },
    'cert.8.title': { en: 'Project Initiation: Starting a Successful Project', it: 'Avvio del Progetto: Iniziare un Progetto di Successo' },

    'cert.9.date':  { en: 'Jun 2022', it: 'Giu 2022' },
    'cert.9.title': { en: 'Foundations of Project Management', it: 'Fondamenti di Project Management' },

    'cert.10.date':  { en: 'Oct 2024', it: 'Ott 2024' },
    'cert.10.title': { en: 'Create a Budget with Google Sheets', it: 'Creare un Budget con Google Sheets' },

    'cert.11.date':  { en: 'Feb 2022', it: 'Feb 2022' },
    'cert.11.title': { en: 'B2-C1 Advanced English', it: 'Inglese Avanzato B2-C1' },

    'cert.12.date':  { en: 'Sep 2017', it: 'Set 2017' },
    'cert.12.title': { en: 'B1 English Certificate', it: 'Certificato di Inglese B1' }
  };

  /* ── Apply language ── */
  function applyLang(lang) {
    document.documentElement.lang = lang;
    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
      var key = els[i].getAttribute('data-i18n');
      if (T[key] && T[key][lang]) {
        els[i].innerHTML = T[key][lang];
      }
    }
    /* Toggle button label */
    var btn = document.getElementById('langToggle');
    if (btn) {
      var lbl = btn.querySelector('.lang-toggle__label');
      if (lbl) lbl.textContent = lang === 'en' ? 'IT' : 'EN';
    }
    /* Page title */
    var isAbout = /about|chi sono/i.test(document.title);
    var isCert  = /certif/i.test(document.title);
    if (isAbout) {
      document.title = lang === 'en' ? 'About \u2014 Salvatore Franco' : 'Chi sono \u2014 Salvatore Franco';
    } else if (isCert) {
      document.title = lang === 'en' ? 'Certifications \u2014 Salvatore Franco' : 'Certificazioni \u2014 Salvatore Franco';
    }
  }

  /* ── Init from localStorage ── */
  var saved = localStorage.getItem('lang') || 'en';
  /* Apply immediately (DOM is available because script is at bottom of body) */
  applyLang(saved);
  document.documentElement.classList.remove('i18n-loading');

  /* ── Toggle handler ── */
  var btn = document.getElementById('langToggle');
  if (btn) {
    var lbl = btn.querySelector('.lang-toggle__label');
    if (lbl) lbl.textContent = saved === 'en' ? 'IT' : 'EN';

    btn.addEventListener('click', function () {
      var current = document.documentElement.lang || 'en';
      var next = current === 'en' ? 'it' : 'en';
      applyLang(next);
      localStorage.setItem('lang', next);
    });
  }
})();
