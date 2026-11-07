/* ============================================================
   I18N.JS — Language toggle (EN / IT)
   Keeps technical English terms ("inglesismi") untranslated.
   ============================================================ */
(function () {
  'use strict';

  var T = {    /* ── Shared / Nav ── */
    'skip':         { en: 'Skip to content',  it: 'Vai al contenuto' },
    'nav.about':           { en: 'About',          it: 'Chi sono' },
    'nav.home':            { en: 'Home',           it: 'Home' },
    'nav.experience':      { en: 'Experience',     it: 'Esperienza' },
    'nav.projects':        { en: 'Use cases',      it: "Casi d'uso" },
    'nav.skills':          { en: 'Skills',         it: 'Competenze' },
    'nav.certifications':  { en: 'Certifications', it: 'Certificazioni' },

    /* ── Shared / Footer ── */
    'footer.credit': { en: 'Built with HTML \u00b7 CSS \u00b7 JS', it: 'Realizzato con HTML \u00b7 CSS \u00b7 JS' },
    'footer.privacy': { en: 'Privacy', it: 'Privacy' },

    /* ═══════════════════════════════════════
       INDEX PAGE
     ═══════════════════════════════════════ */

    /* Hero */
    'hero.tagline': {
      en: "Master's degree in Mechanical Engineering. Project Manager, Business Intelligence, Websites Development, process automation and AI assistants.",
      it: "Dottore magistrale in ingegneria meccanica. Project Manager, Business Intelligence, Sviluppo siti web, automazione dei processi e assistenti AI."
    },
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

    /* Services section */
    





    /* Projects section */
    'projects.label': { en: '03 \u2014 Use cases', it: "03 \u2014 Casi d'uso" },
    'projects.pagetitle': { en: 'Use cases \u2014 Salvatore Franco', it: "Casi d'uso \u2014 Salvatore Franco" },

    'proj.1.title': {
      en: 'Robot inventory app',
      it: 'App di inventario con robot'
    },
    'proj.1.desc': {
      en: 'Power App integrated with a SCARA robot and MES to monitor the stock of high-value components against production orders.',
      it: 'Power App integrata con robot SCARA e MES per monitorare il magazzino di componenti di pregio rispetto agli ordini di produzione.'
    },
    'proj.2.title': {
      en: 'Suggestions app',
      it: 'App suggerimenti'
    },
    'proj.2.desc': {
      en: 'Power App with SSO and a Power BI dashboard to collect and analyse employee suggestions.',
      it: 'Power App con SSO e dashboard Power BI per raccogliere e analizzare i suggerimenti dei dipendenti.'
    },
    'proj.3.title': { en: 'Asset Manager', it: 'Asset Manager' },
    'proj.3.desc': {
      en: 'Power App and Power Automate to manage maintenance, reminders, costs and asset certifications.',
      it: 'Power App e Power Automate per gestire manutenzioni, promemoria, costi e certificazioni degli asset.'
    },
    'proj.4.title': { en: 'Data Platform', it: 'Data Platform' },
    'proj.4.desc': {
      en: 'I worked as a business data analyst on a corporate data platform: MES and business data turned into KPI dashboards.',
      it: 'Ho lavorato come business data analyst su una data platform aziendale: dati MES e gestionali trasformati in dashboard KPI.'
    },
    'proj.5.title': { en: 'Daily KPIs Dashboard', it: 'Dashboard KPI Giornalieri' },
    'proj.5.desc': {
      en: 'Automated daily KPI reporting in Power BI, with drill-through and executive summaries.',
      it: 'Reporting KPI giornaliero automatizzato in Power BI, con drill-through e sintesi per la direzione.'
    },
    'proj.7.title': { en: 'SAP R/3 \u2192 S/4 HANA Migration', it: 'Migrazione SAP R/3 \u2192 S/4 HANA' },
    'proj.7.desc': {
      en: 'SAP consultant on the migration: stakeholders, data migration, AS-IS process customizing and go-live, on the SD and MM modules for logistics and after-sales.',
      it: 'Consulente SAP sulla migrazione: stakeholder, migrazione dati, customizing dei processi AS-IS e go-live, sui moduli SD e MM per logistica e post-vendita.'
    },
    'proj.8.title': { en: 'Industry 4.0 Certification Manager', it: 'Industry 4.0 Certification Manager' },
    'proj.8.desc': {
      en: 'Tool to manage Industry 4.0 requirements, certifications and renewal deadlines across departments.',
      it: 'Strumento per gestire requisiti, certificazioni e scadenze di rinnovo Industria 4.0 tra i reparti.'
    },

    /* Use cases */
    'projects.title': { en: "Use cases to open and try", it: "Use case da aprire e provare" },
    'uc.sub': { en: "Dashboards, spreadsheets and AI assistants built around fictitious manufacturing SME data. Pick one and step inside: explore these examples and think, what could improve in your work life with the right tools?", it: "Dashboard, fogli di calcolo e assistenti AI costruiti su dati fittizi di una PMI manifatturiera. Esplora gli esempi e pensa, come potrebbe migliorare il tuo lavoro se avessi gli strumenti giusti?" },
    'uc.hero.title': { en: "Open a use case.<br>See what changes.", it: "Apri un use case.<br>Guarda cosa cambia." },
    'uc.hero.go': { en: "Explore the use cases", it: "Esplora gli use case" },
    'uc.hero.exp': { en: "What I have worked on", it: "Su cosa ho lavorato" },
    'uc.chip1': { en: "Average OEE, fictitious data", it: "OEE medio, dati fittizi" },
    'uc.chip2.t': { en: "Price list updated", it: "Listino aggiornato" },
    'uc.chip2': { en: "in one place", it: "in un solo punto" },
    'uc.chip3.t': { en: "Source: GDPR art. 30", it: "Fonte: art. 30 GDPR" },
    'uc.chip3': { en: "every answer cites the text", it: "ogni risposta cita il testo" },
    'uc.home.all': { en: "See all use cases", it: "Vedi tutti gli use case" },
    'ben.decl': { en: "Use case with fictitious data. The benefits described are possible, not results achieved with a client.", it: "Use case con dati fittizi. I benefici descritti sono possibili, non risultati ottenuti con un cliente." },
    'case.demo': { en: "The use case in action", it: "Il caso in azione" },
    'uc.pbi.text': { en: "Revenue, OEE, downtime and deliveries on the same page. Take the guided tour of the report and use the filters: in a few clicks you see where production stops.", it: "Fatturato, OEE, fermi macchina e consegne sulla stessa pagina. Fai il giro guidato del report e usa i filtri: in pochi clic capisci dove si ferma la produzione." },
    'uc.pbi.cta': { en: "Explore the report", it: "Esplora il report" },
    'uc.xls.text': { en: "Every quote comes from the same price lists and formulas, without copying data: see how it works.", it: "Ogni preventivo nasce dagli stessi listini e dalle stesse formule, senza ricopiare dati: guarda come funziona." },
    'uc.xls.cta': { en: "Open the workbook", it: "Apri il foglio" },
    'uc.doc.text': { en: "Ask a question about a contract: the answer comes with the clause behind it, so you can check it right away.", it: "Fai una domanda su un contratto: la risposta arriva con la clausola da cui viene, così la verifichi subito." },
    'uc.doc.cta': { en: "Talk to the assistant", it: "Parla con l'assistente" },
    'uc.law.text': { en: "The GDPR, the AI Act and the Garante's guidelines without getting lost in long texts: every answer cites its source, and checking it remains with a person.", it: "GDPR, AI Act e linee guida del Garante senza perdersi tra testi lunghi: ogni risposta cita la fonte, e la verifica resta a una persona." },
    'uc.law.cta': { en: "Put the sources to the test", it: "Metti alla prova le fonti" },
    'uc.sh.item': { en: "Item", it: "Articolo" },
    'uc.sh.qty': { en: "Qty", it: "Q.tà" },
    'uc.sh.tot': { en: "Total", it: "Totale" },
    'uc.sh.a': { en: "Flange", it: "Flangia" },
    'uc.sh.b': { en: "Shaft", it: "Albero" },
    'uc.sh.c': { en: "Bush", it: "Boccola" },
    'uc.chat.q1': { en: "What is the notice period for withdrawal?", it: "Qual è il preavviso per il recesso?" },
    'uc.chat.a1': { en: "Sixty days, in writing.", it: "Sessanta giorni, con comunicazione scritta." },
    'uc.chat.c1': { en: "Fictitious contract, art. 7", it: "Contratto fittizio, art. 7" },
    'uc.chat.q2': { en: "Do we need a record of processing?", it: "Ci serve il registro dei trattamenti?" },
    'uc.chat.a2': { en: "It depends on what you process: here are the cases set out.", it: "Dipende da cosa trattate: ecco i casi previsti." },
    'uc.chat.c2': { en: "GDPR, art. 30", it: "GDPR, art. 30" },
    'diag.stock': { en: "Stock", it: "Magazzino" },
    'diag.pieces': { en: "High value", it: "Pregio" },
    'diag.platform': { en: "Platform", it: "Piattaforma" },
    'diag.dash': { en: "KPI dashboards", it: "Dashboard KPI" },
    'diag.maint': { en: "Maintenance", it: "Manutenzioni" },
    'diag.costs': { en: "Costs", it: "Costi" },
    'diag.certs': { en: "Certifications", it: "Certificazioni" },
    'diag.erp': { en: "Business systems", it: "Gestionali" },
    'diag.daily': { en: "Every day", it: "Ogni giorno" },
    'diag.dir': { en: "Executive summary", it: "Sintesi per la direzione" },
    'diag.drill': { en: "Drill-through", it: "Drill-through" },
    'diag.detail': { en: "Detail", it: "Dettaglio" },
    'diag.logistics': { en: "Logistics", it: "Logistica" },
    'diag.after': { en: "After-sales", it: "Post-vendita" },
    'diag.stakeholder': { en: "Stakeholders", it: "Stakeholder" },
    'diag.cust': { en: "Customizing", it: "Customizing" },
    'diag.dep': { en: "Dept", it: "Reparto" },
    'diag.ideas': { en: "Suggestions", it: "Suggerimenti" },
    'diag.mdata': { en: "Data", it: "Dati" },
    'exp.sub': { en: "Before the use cases come real projects, on the factory floor and in the office, each born from a specific problem in one department: apps connected to machines, data turned into decisions, system migrations. Clients and names stay confidential: here you find what I did, how it works and why it could matter to you too.", it: "Prima degli use case ci sono progetti veri, in fabbrica e in azienda, ognuno nato da un problema preciso di un reparto: app collegate alle macchine, dati trasformati in decisioni, migrazioni di sistemi. Clienti e nomi restano riservati: qui trovi cosa ho fatto, come funziona e perch\u00e9 pu\u00f2 servire anche a te." },
    'exp.fig1': { en: "projects managed as project manager", it: "progetti seguiti come project manager" },
    'exp.fig2': { en: "projects released", it: "progetti rilasciati" },
    'exp.fig3': { en: "RICEFWs managed in a SAP migration", it: "RICEFW gestiti in una migrazione SAP" },
    'story.theme': { en: "The topic", it: "Il tema" },
    'story.did': { en: "What I did", it: "Cosa ho fatto" },
    'story.why': { en: "Why it could matter to you", it: "Perché può servirti" },
    'story.robot.short': { en: "Robot and stock", it: "Robot e magazzino" },
    'story.robot.theme': { en: "When components are valuable, knowing how many remain against production orders is something you need straight away, not at the end of the shift.", it: "Quando i componenti hanno un valore alto, sapere quanti ne restano rispetto agli ordini di produzione è un dato che serve subito, non a fine turno." },
    'story.robot.why': { en: "A machine, a factory system and a simple app can talk to each other: the same pattern applies wherever a manual check slows production down.", it: "Una macchina, un sistema di fabbrica e una app semplice possono parlarsi: lo stesso schema vale ovunque un controllo a mano rallenta la produzione." },
    'story.robot.did0': { en: "I built a Power App integrated with a SCARA robot and the MES.", it: "Ho sviluppato una Power App integrata con un robot SCARA e con il MES." },
    'story.robot.did1': { en: "The app monitors the stock of high-value components.", it: "La app monitora il magazzino dei componenti di pregio." },
    'story.robot.did2': { en: "Stock levels are read against production orders.", it: "Le giacenze si leggono a confronto con gli ordini di produzione." },
    'story.idee.short': { en: "Suggestions app", it: "App suggerimenti" },
    'story.idee.theme': { en: "Ideas from the people who work on processes every day can get lost if they have no place to land and nobody reading them.", it: "Le idee di chi lavora ogni giorno sui processi rischiano di perdersi, se non hanno un posto dove arrivare e qualcuno che le legge." },
    'story.idee.why': { en: "People sign in with their company account, no new passwords: less friction for those writing, tidy data for those deciding.", it: "Si entra con l'account aziendale, senza nuove password: meno attrito per chi scrive, e dati ordinati per chi deve decidere." },
    'story.idee.did0': { en: "I built a Power App with SSO access to collect employee suggestions.", it: "Ho realizzato una Power App con accesso SSO per raccogliere i suggerimenti dei dipendenti." },
    'story.idee.did1': { en: "I connected the responses to a Power BI dashboard to analyse them.", it: "Ho collegato le risposte a una dashboard Power BI per analizzarle." },
    'story.asset.short': { en: "Asset Manager", it: "Asset Manager" },
    'story.asset.theme': { en: "Maintenance, costs and certifications of an asset often live in different places, and a forgotten deadline shows up when it is too late.", it: "Manutenzioni, costi e certificazioni di un asset vivono spesso in posti diversi, e una scadenza dimenticata si scopre quando è tardi." },
    'story.asset.why': { en: "A single record for each asset and alerts that go out by themselves: a light tool, within reach of an SME too.", it: "Una sola scheda per ogni asset e avvisi che partono da soli: uno strumento leggero, alla portata anche di una PMI." },
    'story.asset.did0': { en: "I built a Power App that brings together asset maintenance, costs and certifications.", it: "Ho costruito una Power App che raccoglie manutenzioni, costi e certificazioni degli asset." },
    'story.asset.did1': { en: "With Power Automate I added automatic reminders.", it: "Con Power Automate ho aggiunto i promemoria automatici." },
    'story.data.short': { en: "Data Platform", it: "Data Platform" },
    'story.data.theme': { en: "Factory data and business data are born in separate systems. Until they meet, each department tells its own version of the figures.", it: "Dati di fabbrica e dati gestionali nascono in sistemi separati. Finché non si incontrano, ogni reparto racconta la sua versione dei numeri." },
    'story.data.why': { en: "Before any chart comes the right question: translating people's needs into readable data is the piece that makes everything else work.", it: "Prima di ogni grafico viene la domanda giusta: tradurre le esigenze di chi lavora in dati che si possano leggere è il pezzo che fa funzionare tutto il resto." },
    'story.data.did0': { en: "I worked as a business data analyst on a corporate data platform.", it: "Ho lavorato come business data analyst su una data platform aziendale." },
    'story.data.did1': { en: "MES and business data were turned into KPI dashboards.", it: "Dati MES e gestionali sono stati trasformati in dashboard KPI." },
    'story.kpi.short': { en: "Daily KPIs", it: "KPI giornalieri" },
    'story.kpi.theme': { en: "A report prepared by hand arrives late and costs its author time. Management needs a summary, the team needs the detail.", it: "Un report che si prepara a mano arriva tardi e costa tempo a chi lo compila. La direzione ha bisogno di una sintesi, chi lavora del dettaglio." },
    'story.kpi.why': { en: "One source, two reading levels: from the worrying figure to the row that explains it in one click.", it: "Stessa fonte, due livelli di lettura: dal numero che preoccupa si arriva alla riga che lo spiega con un clic." },
    'story.kpi.did0': { en: "I automated daily KPI reporting in Power BI.", it: "Ho automatizzato il reporting giornaliero dei KPI in Power BI." },
    'story.kpi.did1': { en: "I prepared executive summaries and drill-through to go down to the detail.", it: "Ho preparato sintesi per la direzione e drill-through per scendere nel dettaglio." },
    'story.sap.short': { en: "SAP migration", it: "Migrazione SAP" },
    'story.sap.theme': { en: "Changing the ERP touches everyone: every process must be understood, all data must be moved, and on go-live day work has to continue.", it: "Cambiare il gestionale tocca tutti: ogni processo va capito, ogni dato va portato, e il giorno del go-live il lavoro deve continuare." },
    'story.sap.why': { en: "Knowing how an ERP works from the inside helps design reports and automations that use the right data instead of working around it.", it: "Conoscere come funziona un ERP dall'interno aiuta a progettare report e automazioni che usano i dati giusti, invece di aggirarli." },
    'story.sap.did0': { en: "SAP consultant on the migration from R/3 to S/4 HANA, on the SD and MM modules for logistics and after-sales.", it: "Consulente SAP sulla migrazione da R/3 a S/4 HANA, sui moduli SD e MM per logistica e post-vendita." },
    'story.sap.did1': { en: "I followed stakeholders, data migration, AS-IS process customizing and go-live.", it: "Ho seguito stakeholder, migrazione dati, customizing dei processi AS-IS e go-live." },
    'story.sap.did2': { en: "I managed more than 15 RICEFWs.", it: "Ho gestito più di 15 RICEFW." },
    'story.i40.short': { en: "I4.0 certifications", it: "Certificazioni I4.0" },
    'story.i40.theme': { en: "Requirements, certifications and renewals involve several departments. Without a shared view, knowing where you stand becomes a round of emails.", it: "Requisiti, certificazioni e rinnovi coinvolgono più reparti. Senza una vista comune, sapere a che punto si è diventa un giro di email." },
    'story.i40.why': { en: "Any obligation with a deadline can sit in one view: who has to do what, by when, and what is coming up.", it: "Ogni adempimento con una scadenza può stare in una vista sola: chi deve fare cosa, entro quando, e cosa si avvicina." },
    'story.i40.did0': { en: "I worked on a tool to manage Industry 4.0 requirements, certifications and renewal deadlines.", it: "Ho lavorato a uno strumento per gestire requisiti, certificazioni e scadenze di rinnovo Industria 4.0." },
    'story.i40.did1': { en: "The tool is shared across the departments involved.", it: "Lo strumento è condiviso tra i reparti coinvolti." },
    'case.pbi.desc': { en: "Production, order and client KPIs in a single dashboard.", it: "KPI di produzione, ordini e clienti in una sola dashboard." },
    'pbi.back': { en: "All use cases", it: "Tutti gli use case" },
    'pbi.lead': { en: "A production meeting should start from decisions, not from hunting for the right figures. This report brings revenue, OEE, downtime and deliveries onto a single source that everyone reads the same way.", it: "Una riunione di produzione dovrebbe partire dalle decisioni, non dalla ricerca dei numeri giusti. Questo report porta fatturato, OEE, fermi macchina e consegne su una sola fonte, che tutti leggono allo stesso modo." },
    'pbi.go': { en: "Take the report tour", it: "Fai il giro del report" },
    'pbi.try': { en: "Try the filters", it: "Prova i filtri" },
    'pbi.k1': { en: "Average OEE, last day", it: "OEE medio, ultimo giorno" },
    'pbi.k2': { en: "On-time deliveries", it: "Consegne puntuali" },
    'pbi.k3': { en: "Average lead time, days", it: "Lead time medio, giorni" },
    'pbi.k4': { en: "Orders in production", it: "Ordini in produzione" },
    'pbi.knote': { en: "Fictitious values read from the report. All data and client names in the report are fictitious and do not describe real business relationships.", it: "Valori fittizi letti dal report. Tutti i dati e i nomi dei clienti nel report sono fittizi e non descrivono rapporti commerciali reali." },
    'pbi.tour.title': { en: "Take the report tour", it: "Fai il giro del report" },
    'pbi.tour.sub': { en: "Three pages, one question for each chart. Press Next or click the picture: the report zooms in on the right spot and explains what you can do with it.", it: "Tre pagine, una domanda per ogni grafico. Premi Avanti o clicca sull'immagine: il report si ingrandisce sul punto giusto e ti spiega cosa puoi farci." },
    'pbi.tab1': { en: "Executive Overview", it: "Executive Overview" },
    'pbi.tab1.d': { en: "How the year is going", it: "Come sta andando l'anno" },
    'pbi.tab2': { en: "Production and Lines", it: "Produzione e Linee" },
    'pbi.tab2.d': { en: "Where the factory stops", it: "Dove si ferma la fabbrica" },
    'pbi.tab3': { en: "Orders and OEM Clients", it: "Ordini e Clienti OEM" },
    'pbi.tab3.d': { en: "What to deliver, and to whom", it: "Cosa consegnare, e a chi" },
    'pbi.step': { en: "Step", it: "Passo" },
    'pbi.of': { en: "of", it: "di" },
    'pbi.prev': { en: "Back", it: "Indietro" },
    'pbi.next': { en: "Next", it: "Avanti" },
    'pbi.play': { en: "Auto-play", it: "Guida automatica" },
    'pbi.full': { en: "Open at full resolution", it: "Apri a piena risoluzione" },
    'pbi.s0.t': { en: "The page for management", it: "La pagina per la direzione" },
    'pbi.s0.q': { en: "How is the year going, in one minute?", it: "Come sta andando l'anno, in un minuto?" },
    'pbi.s0.a': { en: "Start here: key figures on the left, when you sell in the centre, where you sell and who buys on the right. The buttons lead to the other two pages.", it: "Parti da qui: a sinistra i numeri chiave, al centro quando si vende, a destra dove si vende e chi compra. I pulsanti portano alle altre due pagine." },
    'pbi.s1.t': { en: "Key figures", it: "I numeri chiave" },
    'pbi.s1.q': { en: "Are we on target?", it: "Siamo in linea con l'obiettivo?" },
    'pbi.s1.a': { en: "Revenue, target, gross margin and orders confirmed, in the pipeline and in production sit in one column, always updated on the chosen filter.", it: "Fatturato, obiettivo, margine lordo e ordini confermati, in pipeline e in produzione stanno in un'unica colonna, sempre aggiornata sul filtro scelto." },
    'pbi.s2.t': { en: "Seasonality", it: "La stagionalità" },
    'pbi.s2.q': { en: "How much does the high season weigh?", it: "Quanto pesa l'alta stagione?" },
    'pbi.s2.a': { en: "Compare high, low and off season, and pick the season to look at above: useful to prepare capacity and materials ahead of time.", it: "Confronta alta, bassa e fuori stagione e scegli sopra la stagione da guardare: utile per preparare capacità e materiali in anticipo." },
    'pbi.s3.t': { en: "The map", it: "La mappa" },
    'pbi.s3.q': { en: "In which countries do we sell?", it: "In quali paesi si vende?" },
    'pbi.s3.a': { en: "Each colour is a country. A click on the map filters the whole page on that market.", it: "Ogni colore è un paese. Un clic sulla mappa filtra tutta la pagina su quel mercato." },
    'pbi.s4.t': { en: "Revenue by client", it: "Il fatturato per cliente" },
    'pbi.s4.q': { en: "Who does revenue depend on?", it: "Da chi dipende il fatturato?" },
    'pbi.s4.a': { en: "Clients in order of weight: you see at once if a few names carry much of the year.", it: "I clienti in ordine di peso: si vede subito se pochi nomi sostengono buona parte dell'anno." },
    'pbi.s5.t': { en: "Bookmarks", it: "I segnalibri" },
    'pbi.s5.q': { en: "How do I switch view without redoing the filters?", it: "Come cambio vista senza rifare i filtri?" },
    'pbi.s5.a': { en: "Italy, Europe, America or no filter: one click and the whole page realigns. Handy in a meeting, moving from one market to another.", it: "Italia, Europa, America o nessun filtro: un clic e tutta la pagina si riallinea. Comodo in riunione, quando si passa da un mercato all'altro." },
    'pbi.s6.t': { en: "The page for production", it: "La pagina per la produzione" },
    'pbi.s6.q': { en: "Where does the factory stop?", it: "Dove si ferma la fabbrica?" },
    'pbi.s6.a': { en: "One look at pieces produced, OEE, downtime causes and comparison with the plan, for each line and each period.", it: "Un colpo d'occhio su pezzi prodotti, OEE, cause di fermo e confronto con il piano, per ogni linea e per ogni periodo." },
    'pbi.s7.t': { en: "Filters", it: "I filtri" },
    'pbi.s7.q': { en: "How do I look at a single line?", it: "Come guardo una sola linea?" },
    'pbi.s7.a': { en: "Pick a line, period or fault cause: all the charts on the page update together.", it: "Scegli linea, periodo o causa di guasto: tutti i grafici della pagina si aggiornano insieme." },
    'pbi.s8.t': { en: "Pieces, OEE and throughput", it: "Pezzi, OEE e throughput" },
    'pbi.s8.q': { en: "How much are we really producing?", it: "Quanto stiamo producendo davvero?" },
    'pbi.s8.a': { en: "Pieces produced, average OEE and deviation from plan on top, then throughput by technology and product family.", it: "Pezzi prodotti, OEE medio e scostamento dal piano in testa, poi il throughput per tecnologia e famiglia di prodotto." },
    'pbi.s9.t': { en: "Downtime causes", it: "Le cause di fermo" },
    'pbi.s9.q': { en: "Why did the machines stop?", it: "Perché si sono fermate le macchine?" },
    'pbi.s9.a': { en: "Downtime minutes split by cause and line: you see where to act first, instead of arguing from memory.", it: "I minuti di fermo divisi per causa e per linea: si capisce dove intervenire prima, invece di discutere a memoria." },
    'pbi.s10.t': { en: "Planned and actual", it: "Piano e consuntivo" },
    'pbi.s10.q': { en: "Does production follow the plan?", it: "La produzione segue il piano?" },
    'pbi.s10.a': { en: "Planned and actual side by side. The chart goes down from year to quarter, month and day to find when the gap began.", it: "Pianificato e consuntivo affiancati. Il grafico scende da anno a trimestre, mese e giorno per trovare quando è nato lo scostamento." },
    'pbi.s11.t': { en: "OEE by line", it: "L'OEE per linea" },
    'pbi.s11.q': { en: "Which line performs best?", it: "Quale linea rende di più?" },
    'pbi.s11.a': { en: "Lines in order of OEE: a simple ranking to decide where to look first.", it: "Le linee in ordine di OEE: una classifica semplice per decidere dove guardare per prima cosa." },
    'pbi.s12.t': { en: "The page for order management", it: "La pagina per chi segue gli ordini" },
    'pbi.s12.q': { en: "What to deliver, and to whom?", it: "Cosa consegnare, e a chi?" },
    'pbi.s12.a': { en: "Margins and volumes by client, delivery punctuality, lead time and the status of each order on the same page.", it: "Margini e volumi per cliente, puntualità delle consegne, lead time e stato di ogni ordine sulla stessa pagina." },
    'pbi.s13.t': { en: "Top clients", it: "I primi clienti" },
    'pbi.s13.q': { en: "Who brings margin and who brings volume?", it: "Chi fa margine e chi fa volume?" },
    'pbi.s13.a': { en: "Two rankings side by side: the clients who order most are not always those who bring the most.", it: "Due classifiche affiancate: i clienti che ordinano di più non sempre sono quelli che rendono di più." },
    'pbi.s14.t': { en: "Punctuality and lead time", it: "Puntualità e lead time" },
    'pbi.s14.q': { en: "Are we delivering on time?", it: "Stiamo consegnando in tempo?" },
    'pbi.s14.a': { en: "Share of on-time deliveries and average lead time by product family: the figures to have in front of you before promising a date.", it: "Percentuale di consegne puntuali e lead time medio per famiglia di prodotto: i numeri da avere davanti prima di promettere una data." },
    'pbi.s15.t': { en: "Order status", it: "Lo stato degli ordini" },
    'pbi.s15.q': { en: "How many orders are late?", it: "Quanti ordini sono in ritardo?" },
    'pbi.s15.a': { en: "Shipped, in production, confirmed, late and cancelled: you see at once how many need attention.", it: "Spediti, in produzione, confermati, in ritardo e annullati: si vede subito quanti richiedono attenzione." },
    'pbi.live.title': { en: "Now try it yourself", it: "Ora prova tu" },
    'pbi.live.sub': { en: "The same fictitious data as the report, recalculated here in the browser. Pick a year, click a line and watch OEE, production and downtime change: this is how you question a dashboard.", it: "Stessi dati fittizi del report, ricalcolati qui nel browser. Scegli un anno, clicca su una linea e guarda come cambiano OEE, produzione e fermi: è così che si interroga una dashboard." },
    'pbi.live.year': { en: "Year", it: "Anno" },
    'pbi.live.all': { en: "All", it: "Tutti" },
    'pbi.live.oee': { en: "OEE", it: "OEE" },
    'pbi.live.avail': { en: "Availability", it: "Disponibilità" },
    'pbi.live.perf': { en: "Performance", it: "Performance" },
    'pbi.live.qual': { en: "Quality", it: "Qualità" },
    'pbi.live.prod': { en: "Production, pieces", it: "Produzione, pezzi" },
    'pbi.live.pieces': { en: "Produced", it: "Prodotti" },
    'pbi.live.plan': { en: "Planned", it: "Pianificati" },
    'pbi.live.scrap': { en: "Scrapped", it: "Scartati" },
    'pbi.live.lines': { en: "OEE by line: click to filter", it: "OEE per linea: clicca per filtrare" },
    'pbi.live.down': { en: "Downtime by cause, hours", it: "Fermi per causa, ore" },
    'pbi.live.top': { en: "Main downtime cause:", it: "Causa principale di fermo:" },
    'pbi.live.best': { en: "Line with the highest OEE:", it: "Linea con l'OEE più alto:" },
    'pbi.cause0': { en: "Waiting for material", it: "Attesa materiale" },
    'pbi.cause1': { en: "Shift change", it: "Cambio turno" },
    'pbi.cause2': { en: "Quality check", it: "Controllo qualità" },
    'pbi.cause3': { en: "Mechanical fault", it: "Guasto meccanico" },
    'pbi.cause4': { en: "Planned maintenance", it: "Manutenzione programmata" },
    'pbi.cause5': { en: "Plant cleaning", it: "Pulizia impianto" },
    'pbi.cause6': { en: "Setup/mould change", it: "Setup/cambio stampo" },
    'pbi.who.title': { en: "Who it is for, and what they do with it", it: "Per chi è, e cosa ci fa" },
    'pbi.who.sub': { en: "The same source serves different questions. Each role finds its page and stops waiting for an extract.", it: "La stessa fonte serve domande diverse. Ogni ruolo trova la sua pagina e smette di aspettare un'estrazione." },
    'pbi.role0': { en: "Management", it: "Direzione" },
    'pbi.role0.t': { en: "See in one minute how the year is going", it: "Capire in un minuto come va l'anno" },
    'pbi.role0.d': { en: "Revenue against target, margin by product family, seasonality and markets. When a figure looks wrong, you open the detail instead of asking for a new file.", it: "Fatturato rispetto all'obiettivo, margine per famiglia di prodotto, stagionalità e mercati. Quando un numero non torna, si apre il dettaglio invece di chiedere un nuovo file." },
    'pbi.role1': { en: "Production manager", it: "Responsabile di produzione" },
    'pbi.role1.t': { en: "See where time is lost", it: "Vedere dove si perde tempo" },
    'pbi.role1.d': { en: "OEE by line, downtime minutes by cause and comparison with the plan. The morning meeting starts from what happened yesterday, not from who has the latest figure.", it: "OEE per linea, minuti di fermo per causa e confronto con il piano. La riunione del mattino parte da cosa è successo ieri, non da chi ha il dato più recente." },
    'pbi.role2': { en: "Sales and logistics", it: "Commerciale e logistica" },
    'pbi.role2.t': { en: "Know what you can promise", it: "Sapere cosa si può promettere" },
    'pbi.role2.d': { en: "Order status, on-time deliveries and lead time by family. Before giving a client a date, you check what the data says.", it: "Stato degli ordini, consegne puntuali e lead time per famiglia. Prima di dare una data al cliente, si guarda cosa dicono i dati." },
    'pbi.can0': { en: "Filter", it: "Filtrare" },
    'pbi.can0.d': { en: "Season, period, line, downtime cause: one click and all charts realign.", it: "Stagione, periodo, linea, causa di fermo: un clic e tutti i grafici si riallineano." },
    'pbi.can1': { en: "Compare", it: "Confrontare" },
    'pbi.can1.d': { en: "Plan and actual, margin and volume, one line with another, on the same page.", it: "Piano e consuntivo, margine e volume, una linea con l'altra, sulla stessa pagina." },
    'pbi.can2': { en: "Go into detail", it: "Scendere nel dettaglio" },
    'pbi.can2.d': { en: "From year to quarter, month and day, down to the moment the figure changed.", it: "Da anno a trimestre, mese e giorno, fino al momento in cui il numero è cambiato." },
    'pbi.can3': { en: "Save views", it: "Salvare le viste" },
    'pbi.can3.d': { en: "Bookmarks by market ready to open in a meeting, without redoing the filters.", it: "Segnalibri per mercato pronti da aprire in riunione, senza rifare i filtri." },
    'case.how': { en: "How it works", it: "Come funziona" },
    'pbi.how.sub': { en: "Nothing magic: tidy tables, linked once, and measures calculated the same way for everyone. When the data updates, every page updates. Here the tables come from fictitious Excel files. In another company the starting point is the sources it already has, ERP, MES or spreadsheets, and the pages are drawn around its departments' questions.", it: "Niente di magico: tabelle ordinate, collegate una volta sola, e le misure calcolate nello stesso modo per tutti. Quando i dati si aggiornano, si aggiorna ogni pagina. Qui le tabelle vengono da file Excel fittizi. In un'altra azienda si parte dalle fonti che ha gi\u00e0, gestionale, MES o fogli, e le pagine si disegnano sulle domande dei suoi reparti." },
    'pbi.flow1': { en: "Excel file", it: "File Excel" },
    'pbi.flow2': { en: "Data model", it: "Modello dati" },
    'pbi.flow3': { en: "Three pages, three roles", it: "Tre pagine, tre ruoli" },
    'pbi.t.clients': { en: "Clients", it: "Clienti" },
    'pbi.t.products': { en: "Products", it: "Prodotti" },
    'pbi.t.lines': { en: "Lines", it: "Linee" },
    'pbi.t.orders': { en: "Orders", it: "Ordini" },
    'pbi.t.prod': { en: "Production", it: "Produzione" },
    'pbi.t.quality': { en: "Quality", it: "Qualità" },
    'pbi.t.stock': { en: "Stock", it: "Magazzino" },
    'pbi.t.plan': { en: "Plan", it: "Piano" },
    'pbi.t.oee': { en: "OEE", it: "OEE" },
    'pbi.t.cal': { en: "Calendar", it: "Calendario" },
    'pbi.flow3.d': { en: "Management, production and orders read the same figures, each from their own point of view.", it: "Direzione, produzione e ordini leggono gli stessi numeri, ognuno dal proprio punto di vista." },
    'pbi.ben.sub': { en: "A single source changes how people work even before the figures do: less time preparing data, more time deciding. Flip the switch and compare the two situations.", it: "Una sola fonte cambia il modo di lavorare prima ancora dei numeri: meno tempo per preparare i dati, più tempo per decidere. Sposta l'interruttore e confronta le due situazioni." },
    'pbi.next.title': { en: "Keep exploring", it: "Continua a esplorare" },
    'pbi.next.xls': { en: "Price lists and formulas in one place", it: "Listini e formule in un solo posto" },
    'pbi.next.doc': { en: "Answers with the relevant clause", it: "Risposte con la clausola di riferimento" },
    'pbi.next.law': { en: "GDPR, AI Act and cookies, with sources", it: "GDPR, AI Act e cookie, con le fonti" },
    'ben.title':  { en: 'Possible benefits', it: 'Benefici possibili' },
    'ben.before': { en: 'Before', it: 'Prima' },
    'ben.after':  { en: 'After',  it: 'Dopo' },
    'case.soon':  { en: 'Content coming soon.', it: 'Contenuto in preparazione.' },
    'case.pbi.title': { en: "Power BI dashboard", it: "Dashboard Power BI" },
    'case.pbi.pagetitle': { en: "Power BI dashboard — Salvatore Franco", it: "Dashboard Power BI — Salvatore Franco" },
    'case.pbi.ctx': { en: "Production, order and client KPIs in a single dashboard, built for a fictitious mechanical SME with about 50 employees: its lines, its downtime causes, its clients.", it: "KPI di produzione, ordini e clienti in una sola dashboard, costruita per una PMI meccanica fittizia di circa 50 addetti: le sue linee, le sue cause di fermo, i suoi clienti." },
    'case.pbi.b1.before': { en: "Every production meeting starts from different extracts, to be aligned by hand.", it: "Ogni riunione di produzione parte da estrazioni diverse, da allineare a mano." },
    'case.pbi.b1.after': { en: "Every production meeting starts from the same KPIs, read from the same dashboard.", it: "Ogni riunione di produzione parte dagli stessi KPI, letti dalla stessa dashboard." },
    'case.pbi.b2.before': { en: "Every monthly report is rebuilt by copying data from several files.", it: "Ogni report mensile si ricompone copiando dati da più file." },
    'case.pbi.b2.after': { en: "Every monthly report updates from the same sources, without copying data.", it: "Ogni report mensile si aggiorna dalle stesse fonti, senza ricopiare dati." },
    'case.pbi.b3.before': { en: "Every question about a figure needs a new extract.", it: "Ogni domanda su un dato richiede una nuova estrazione." },
    'case.pbi.b3.after': { en: "Every question about a figure starts from a filter on the same page.", it: "Ogni domanda su un dato parte da un filtro sulla stessa pagina." },
    'case.xls.title': { en: "Excel workbook for quotes", it: "Foglio Excel per i preventivi" },
    'case.xls.pagetitle': { en: "Excel workbook for quotes — Salvatore Franco", it: "Foglio Excel per i preventivi — Salvatore Franco" },
    'case.xls.desc': { en: "Quotes from shared price lists and formulas.", it: "Preventivi da listini e formule condivisi." },
    'case.xls.ctx': { en: "Quotes from shared price lists and formulas, built on the machining cycles and pricing rules of a fictitious mechanical SME with about 50 employees.", it: "Preventivi da listini e formule condivisi, costruiti sui cicli di lavorazione e sulle regole di prezzo di una PMI meccanica fittizia di circa 50 addetti." },
    'case.xls.b1.before': { en: "Every quote starts from a copy of the previous one, with price lists and formulas to recheck.", it: "Ogni preventivo parte da una copia del precedente, con listini e formule da ricontrollare." },
    'case.xls.b1.after': { en: "Every quote starts from the same price lists and the same formulas, without copying data.", it: "Ogni preventivo parte dagli stessi listini e dalle stesse formule, senza ricopiare dati." },
    'case.xls.b2.before': { en: "Every price list change has to be carried over by hand into the sheets in use.", it: "Ogni cambio di listino va riportato a mano nei fogli in uso." },
    'case.xls.b2.after': { en: "Every price list change is made in one place and applies to new quotes.", it: "Ogni cambio di listino si fa in un solo punto e vale per i preventivi nuovi." },
    'case.xls.b3.before': { en: "Every quote revision leaves several file versions to tell apart.", it: "Ogni revisione del preventivo lascia più versioni del file da distinguere." },
    'case.xls.b3.after': { en: "Every quote revision stays tracked in the same sheet.", it: "Ogni revisione del preventivo resta tracciata nello stesso foglio." },

    /* Excel case page */
    "xls.lead": { en: "A quote should start from the client's request, not from last month's file. This workbook builds each quote from codes and quantities: price lists, machining cycles and quantity discounts live once, in linked sheets.", it: "Un preventivo dovrebbe partire dalla richiesta del cliente, non dal file del mese scorso. Questo foglio costruisce ogni preventivo da codici e quantità: listini, cicli di lavorazione e sconti per quantità stanno una volta sola, in fogli collegati." },
    "xls.go": { en: "Take the workbook tour", it: "Fai il giro del foglio" },
    "xls.try": { en: "Build a quote", it: "Prova un preventivo" },
    "xls.k1": { en: "Linked sheets, no macros", it: "Fogli collegati, senza macro" },
    "xls.k2": { en: "Items with their machining cycle", it: "Articoli con il loro ciclo di lavorazione" },
    "xls.k3": { en: "Work centres with an hourly rate", it: "Centri di lavoro con costo orario" },
    "xls.k4": { en: "Tracked revisions of the same quote", it: "Revisioni tracciate dello stesso preventivo" },
    "xls.knote": { en: "Fictitious figures read from the workbook. Items, prices, client and quote numbers are examples and do not describe real business relationships.", it: "Valori fittizi letti dal foglio. Articoli, prezzi, cliente e numeri di preventivo sono esempi e non descrivono rapporti commerciali reali." },
    "xls.tour.title": { en: "Take the workbook tour", it: "Fai il giro del foglio" },
    "xls.tour.sub": { en: "Four sheets, one question for each part. Press Next or click the picture: the sheet zooms in on the right cells and explains what they do.", it: "Quattro fogli, una domanda per ogni parte. Premi Avanti o clicca l'immagine: il foglio si avvicina alle celle giuste e spiega cosa fanno." },
    "xls.tab1": { en: "Quote", it: "Preventivo" },
    "xls.tab1.d": { en: "Codes and quantities in, price out", it: "Codici e quantità in ingresso, prezzo in uscita" },
    "xls.tab2": { en: "Items and cycles", it: "Articoli e cicli" },
    "xls.tab2.d": { en: "How each part is made", it: "Come si fa ogni pezzo" },
    "xls.tab3": { en: "Price lists", it: "Listini" },
    "xls.tab3.d": { en: "One place for every price", it: "Un solo punto per ogni prezzo" },
    "xls.tab4": { en: "Revisions", it: "Revisioni" },
    "xls.tab4.d": { en: "What changed, and why", it: "Cosa è cambiato, e perché" },
    "xls.s0.t": { en: "The sheet you fill in", it: "Il foglio che si compila" },
    "xls.s0.q": { en: "What does whoever writes the quote type?", it: "Cosa scrive chi fa il preventivo?" },
    "xls.s0.a": { en: "Only item code and quantity for each row, plus the client details. Everything else, in the coloured cells, is calculated from the linked sheets.", it: "Solo codice e quantità per ogni riga, più i dati del cliente. Tutto il resto, nelle celle colorate, si calcola dai fogli collegati." },
    "xls.s1.t": { en: "Number and revision", it: "Numero e revisione" },
    "xls.s1.q": { en: "Which version am I looking at?", it: "Quale versione sto guardando?" },
    "xls.s1.a": { en: "Revision and date are read from the revision log, and the validity date adds the days set among the parameters.", it: "Revisione e data si leggono dal registro delle revisioni, e la scadenza somma i giorni di validità impostati tra i parametri." },
    "xls.s2.t": { en: "Description and material", it: "Descrizione e materiale" },
    "xls.s2.q": { en: "Do I have to copy the item card?", it: "Devo ricopiare la scheda dell'articolo?" },
    "xls.s2.a": { en: "No: from the code, a lookup formula fetches description and material from the Items sheet. A wrong code shows up at once.", it: "No: dal codice, una formula di ricerca prende descrizione e materiale dal foglio Articoli. Un codice sbagliato si vede subito." },
    "xls.s3.t": { en: "Cost per piece", it: "Costo al pezzo" },
    "xls.s3.q": { en: "Where does the cost come from?", it: "Da dove viene il costo?" },
    "xls.s3.a": { en: "Material: weight times price per kg, plus scrap. Machining: cycle minutes times the hourly rate of each work centre, plus setup spread over the pieces.", it: "Materiale: peso per prezzo al kg, più lo sfrido. Lavorazioni: minuti del ciclo per il costo orario di ogni centro di lavoro, più l'attrezzaggio diviso sui pezzi." },
    "xls.s4.t": { en: "Quantity discount", it: "Sconto per quantità" },
    "xls.s4.q": { en: "Which discount applies to this quantity?", it: "Quale sconto spetta a questa quantità?" },
    "xls.s4.a": { en: "The tier table decides: at 600 pins the 9% tier applies, without anyone remembering it.", it: "Decide la tabella degli scaglioni: a 600 perni scatta il 9%, senza che nessuno debba ricordarselo." },
    "xls.s5.t": { en: "Total", it: "Totale" },
    "xls.s5.q": { en: "How much is the quote worth?", it: "Quanto vale il preventivo?" },
    "xls.s5.a": { en: "Price with markup and discount, subtotal, transport and total. The total also lands in the revision log.", it: "Prezzo con ricarico e sconto, imponibile, trasporto e totale. Il totale finisce anche nel registro delle revisioni." },
    "xls.s6.t": { en: "Items and cycles", it: "Articoli e cicli" },
    "xls.s6.q": { en: "How is each part made?", it: "Come si fa ogni pezzo?" },
    "xls.s6.a": { en: "For each code: material, weight and minutes on lathe, milling, grinding, welding and heat treatment.", it: "Per ogni codice: materiale, peso e minuti su tornio, fresatura, rettifica, saldatura e trattamento termico." },
    "xls.s7.t": { en: "The machining cycle", it: "Il ciclo di lavorazione" },
    "xls.s7.q": { en: "How much machine time does it take?", it: "Quanto tempo macchina serve?" },
    "xls.s7.a": { en: "Engineering writes the minutes per piece once for each item. The quote reads them from here.", it: "L'ufficio tecnico scrive i minuti al pezzo una volta per ogni articolo. Il preventivo li legge da qui." },
    "xls.s8.t": { en: "Calculated costs", it: "Costi calcolati" },
    "xls.s8.q": { en: "How much does machining cost?", it: "Quanto costa lavorarlo?" },
    "xls.s8.a": { en: "Minutes times the rate of each centre, with setup kept apart: change one rate and every item that uses it follows.", it: "Minuti per la tariffa di ogni centro, con l'attrezzaggio a parte: cambia una tariffa e la seguono tutti gli articoli che la usano." },
    "xls.s9.t": { en: "Price lists and parameters", it: "Listini e parametri" },
    "xls.s9.q": { en: "Where do you change a price?", it: "Dove si cambia un prezzo?" },
    "xls.s9.a": { en: "Here and only here: materials, work centres, quantity tiers and parameters such as markup, transport and validity.", it: "Qui e solo qui: materiali, centri di lavoro, scaglioni di quantità e parametri come ricarico, trasporto e validità." },
    "xls.s10.t": { en: "Materials", it: "Materiali" },
    "xls.s10.q": { en: "Has the supplier raised the price of steel?", it: "Il fornitore ha aumentato l'acciaio?" },
    "xls.s10.a": { en: "Update the price per kg with its date: S355 moved to €1.55/kg on 27 October, and new quotes use it straight away.", it: "Si aggiorna il prezzo al kg con la sua data: lo S355 è passato a 1,55 €/kg il 27 ottobre, e i preventivi nuovi lo usano subito." },
    "xls.s11.t": { en: "Work centres", it: "Centri di lavoro" },
    "xls.s11.q": { en: "What does a machine hour cost?", it: "Quanto costa un'ora macchina?" },
    "xls.s11.a": { en: "One rate per centre, shared by every item and every quote.", it: "Una tariffa per centro, condivisa da tutti gli articoli e da tutti i preventivi." },
    "xls.s12.t": { en: "Quantity tiers", it: "Scaglioni di quantità" },
    "xls.s12.q": { en: "From how many pieces does the discount change?", it: "Da quanti pezzi cambia lo sconto?" },
    "xls.s12.a": { en: "Four thresholds, read by an approximate-match lookup: no discounts decided case by case.", it: "Quattro soglie, lette da una ricerca per approssimazione: niente sconti decisi caso per caso." },
    "xls.s13.t": { en: "Parameters", it: "Parametri" },
    "xls.s13.q": { en: "Which markup do we apply?", it: "Quale ricarico applichiamo?" },
    "xls.s13.a": { en: "Markup, setup rate, transport and validity sit in one small table, each with a name the formulas call.", it: "Ricarico, costo di attrezzaggio, trasporto e validità stanno in una piccola tabella, ciascuno con un nome che le formule richiamano." },
    "xls.s14.t": { en: "Revision log", it: "Registro delle revisioni" },
    "xls.s14.q": { en: "What changed since the first draft?", it: "Cosa è cambiato dalla prima stesura?" },
    "xls.s14.a": { en: "Each revision is a row: date, change, who made it and total. No copies of the file to compare.", it: "Ogni revisione è una riga: data, modifica, chi l'ha fatta e totale. Nessuna copia del file da confrontare." },
    "xls.s15.t": { en: "The story of a quote", it: "La storia di un preventivo" },
    "xls.s15.q": { en: "Why did the price go up?", it: "Perché il prezzo è salito?" },
    "xls.s15.a": { en: "Quote P-2026-0139 moved from S235 to S355 at the client's request: the reason stays written next to the total.", it: "Il preventivo P-2026-0139 è passato da S235 a S355 su richiesta del cliente: il motivo resta scritto accanto al totale." },
    "xls.s16.t": { en: "The current revision", it: "La revisione in corso" },
    "xls.s16.q": { en: "Is the log up to date?", it: "Il registro è aggiornato?" },
    "xls.s16.a": { en: "The last row reads its total straight from the quote; earlier rows keep the value they had at the time.", it: "L'ultima riga legge il totale direttamente dal preventivo; le righe precedenti conservano il valore che avevano allora." },
    "xls.live.title": { en: "Now build a quote line", it: "Ora costruisci una riga di preventivo" },
    "xls.live.sub": { en: "The same fictitious data and formulas as the workbook, recalculated here in the browser. Pick an item, change the quantity or the steel price, and watch how cost and price are built.", it: "Gli stessi dati fittizi e le stesse formule del foglio, ricalcolati qui nel browser. Scegli un articolo, cambia la quantità o il prezzo del materiale e guarda come si compongono costo e prezzo." },
    "xls.live.item": { en: "Item", it: "Articolo" },
    "xls.a.fl": { en: "Flange", it: "Flangia" },
    "xls.a.al": { en: "Shaft", it: "Albero" },
    "xls.a.sp": { en: "Welded bracket", it: "Supporto saldato" },
    "xls.a.bu": { en: "Bushing", it: "Boccola" },
    "xls.a.pi": { en: "Plate", it: "Piastra" },
    "xls.a.in": { en: "Gear", it: "Ingranaggio" },
    "xls.a.pe": { en: "Pin", it: "Perno" },
    "xls.a.co": { en: "Valve body", it: "Corpo valvola" },
    "xls.live.in": { en: "What you type", it: "Cosa scrivi" },
    "xls.live.qty": { en: "Quantity", it: "Quantità" },
    "xls.live.kg": { en: "Material price", it: "Prezzo del materiale" },
    "xls.live.mat": { en: "Material:", it: "Materiale:" },
    "xls.live.reset": { en: "Back to list price", it: "Torna al prezzo di listino" },
    "xls.live.build": { en: "How the price per piece is built", it: "Come si compone il prezzo al pezzo" },
    "xls.p.mat": { en: "Material", it: "Materiale" },
    "xls.p.work": { en: "Machining", it: "Lavorazioni" },
    "xls.p.setup": { en: "Setup per piece", it: "Attrezzaggio al pezzo" },
    "xls.p.markup": { en: "Markup", it: "Ricarico" },
    "xls.p.disc": { en: "Tier discount", it: "Sconto scaglione" },
    "xls.p.price": { en: "Price per piece", it: "Prezzo al pezzo" },
    "xls.p.total": { en: "Line total", it: "Totale riga" },
    "xls.live.step": { en: "Tier applied:", it: "Scaglione applicato:" },
    "xls.live.from": { en: "from", it: "da" },
    "xls.live.pcs": { en: "pieces", it: "pezzi" },
    "xls.live.miss": { en: "To reach the next tier you need", it: "Per lo scaglione successivo servono" },
    "xls.live.more": { en: "more pieces, for", it: "pezzi in più, con sconto del" },
    "xls.who.title": { en: "Who it is for, and what they do with it", it: "Per chi è, e cosa ci fa" },
    "xls.who.sub": { en: "Three offices work on the same workbook, each on its own part. Nobody retypes what someone else has already written.", it: "Tre uffici lavorano sullo stesso foglio, ciascuno sulla propria parte. Nessuno riscrive quello che un altro ha già scritto." },
    "xls.role0.t": { en: "Answer the request with the right figures", it: "Rispondere alla richiesta con i numeri giusti" },
    "xls.role0": { en: "Sales office", it: "Ufficio commerciale" },
    "xls.role0.d": { en: "Types codes and quantities, reads cost, discount and total. When the client changes a quantity, the new revision is one row in the log.", it: "Scrive codici e quantità, legge costo, sconto e totale. Quando il cliente cambia una quantità, la nuova revisione è una riga nel registro." },
    "xls.role1.t": { en: "Describe each part once", it: "Descrivere ogni pezzo una volta" },
    "xls.role1": { en: "Engineering", it: "Ufficio tecnico" },
    "xls.role1.d": { en: "Material, weight and cycle minutes for each item. Every quote that uses that code reads the same cycle.", it: "Materiale, peso e minuti di ciclo per ogni articolo. Ogni preventivo che usa quel codice legge lo stesso ciclo." },
    "xls.role2.t": { en: "Keep prices and rules in one place", it: "Tenere prezzi e regole in un solo punto" },
    "xls.role2": { en: "Purchasing and management", it: "Acquisti e direzione" },
    "xls.role2.d": { en: "Material prices, hourly rates, markup and quantity tiers. A change made here applies to every new quote.", it: "Prezzi dei materiali, tariffe orarie, ricarico e scaglioni. Una modifica fatta qui vale per ogni preventivo nuovo." },
    "xls.can0": { en: "Look up", it: "Cercare" },
    "xls.can0.d": { en: "From the code, description, material, weight and cycle, without copying.", it: "Dal codice, descrizione, materiale, peso e ciclo, senza ricopiare." },
    "xls.can1": { en: "Calculate", it: "Calcolare" },
    "xls.can1.d": { en: "Material, machining, setup and markup with the same formulas for every row.", it: "Materiale, lavorazioni, attrezzaggio e ricarico con le stesse formule su ogni riga." },
    "xls.can2": { en: "Apply tiers", it: "Applicare gli scaglioni" },
    "xls.can2.d": { en: "The discount follows the quantity, read from a table instead of from memory.", it: "Lo sconto segue la quantità, letto da una tabella e non a memoria." },
    "xls.can3": { en: "Track", it: "Tracciare" },
    "xls.can3.d": { en: "Every revision with date, reason and total, in the same file.", it: "Ogni revisione con data, motivo e totale, nello stesso file." },
    "xls.how.sub": { en: "No macros and no add-ins: structured tables, lookup formulas and named cells. It opens in any recent version of Excel, and whoever uses it can read every formula. Cycles, work centres and tiers belong to the fictitious SME: in another workshop the sheet is built on its own, with the pricing rules it really uses.", it: "Niente macro n\u00e9 componenti aggiuntivi: tabelle strutturate, formule di ricerca e celle con nome. Si apre con qualsiasi versione recente di Excel, e chi lo usa pu\u00f2 leggere ogni formula. Cicli, centri di lavoro e scaglioni sono quelli della PMI fittizia: in un'altra officina il foglio si costruisce sui suoi, con le regole di prezzo che usa davvero." },
    "xls.flow1": { en: "Base data, written once", it: "Dati di base, scritti una volta" },
    "xls.t.items": { en: "Items and cycles", it: "Articoli e cicli" },
    "xls.t.mat": { en: "Materials", it: "Materiali" },
    "xls.t.work": { en: "Work centres", it: "Centri di lavoro" },
    "xls.t.tiers": { en: "Quantity tiers", it: "Scaglioni di quantità" },
    "xls.t.par": { en: "Parameters", it: "Parametri" },
    "xls.flow2": { en: "Formulas on each row", it: "Formule su ogni riga" },
    "xls.t.items2": { en: "Items", it: "Articoli" },
    "xls.t.work2": { en: "Centres", it: "Centri" },
    "xls.t.tiers2": { en: "Tiers", it: "Scaglioni" },
    "xls.t.in": { en: "code + quantity", it: "codice + quantità" },
    "xls.flow3": { en: "Quote and log", it: "Preventivo e registro" },
    "xls.flow3.d": { en: "The quote shows the price, the log keeps every version with its reason.", it: "Il preventivo mostra il prezzo, il registro conserva ogni versione con il suo motivo." },
    "xls.ben.sub": { en: "When prices and rules live in one place, a quote stops being a copy to check. Flip the switch and compare the two situations.", it: "Quando prezzi e regole stanno in un solo punto, un preventivo smette di essere una copia da controllare. Usa l'interruttore e confronta le due situazioni." },
    "xls.next.pbi": { en: "Production KPIs on a single source", it: "KPI di produzione su una sola fonte" },
    'case.doc.title': { en: "Assistant on documents and contracts", it: "Assistente su documenti e contratti" },
    'case.doc.pagetitle': { en: "Assistant on documents and contracts — Salvatore Franco", it: "Assistente su documenti e contratti — Salvatore Franco" },
    'case.doc.desc': { en: "Answers on contracts and procedures, with citations.", it: "Risposte su contratti e procedure, con citazioni." },
    'case.doc.ctx': { en: "Answers on contracts and procedures, with citations, built on the documents of a fictitious mechanical SME with about 50 employees.", it: "Risposte su contratti e procedure, con citazioni, costruite sui documenti di una PMI meccanica fittizia di circa 50 addetti." },
    'case.doc.b1.before': { en: "Every question about a contract means rereading it to find the clause.", it: "Ogni domanda su un contratto richiede di rileggerlo per trovare la clausola." },
    'case.doc.b1.after': { en: "Every question about a contract gets an answer with the clause it refers to.", it: "Ogni domanda su un contratto riceve una risposta con la clausola di riferimento." },
    'case.doc.b2.before': { en: "Every answer relies on a document to reopen to find the passage.", it: "Ogni risposta si appoggia a un documento da riaprire per ritrovare il punto." },
    'case.doc.b2.after': { en: "Every answer cites the point in the document, so whoever checks it finds it right away.", it: "Ogni risposta cita il punto del documento, così chi la verifica lo ritrova subito." },
    'case.doc.b3.before': { en: "Every internal procedure has to be searched for across folders and versions.", it: "Ogni procedura interna va cercata tra cartelle e versioni diverse." },
    'case.doc.b3.after': { en: "Every internal procedure can be queried from one place, on the uploaded documents.", it: "Ogni procedura interna si interroga dallo stesso punto, sui documenti caricati." },
    'doc.lead': { en: "The answer to a question about a contract is often a single clause, buried in a file nobody remembers. This assistant answers from the uploaded documents and, for every sentence, shows the passage it comes from.", it: "La risposta a una domanda su un contratto spesso è una sola clausola, sepolta in un file che nessuno ricorda. Questo assistente risponde dai documenti caricati e, per ogni frase, mostra il passaggio da cui viene." },
    'doc.go': { en: "Ask a question", it: "Fai una domanda" },
    'doc.howgo': { en: "See how it answers", it: "Guarda come risponde" },
    'doc.k1': { en: "Fictitious documents: contracts, agreement, procedure", it: "Documenti fittizi: contratti, accordo, procedura" },
    'doc.k2': { en: "Passages, each with its own id", it: "Passaggi, ognuno con il proprio identificativo" },
    'doc.k3': { en: "Questions from everyday work", it: "Domande dal lavoro di tutti i giorni" },
    'doc.k4': { en: "Question the documents do not answer, and the assistant says so", it: "Domanda a cui i documenti non rispondono, e l'assistente lo dice" },
    'doc.knote': { en: "Documents, clients, suppliers and figures are fictitious and do not describe real business relationships.", it: "Documenti, clienti, fornitori e cifre sono fittizi e non descrivono rapporti commerciali reali." },
    'doc.live.sub': { en: "Pick a question. The answer has a number for each source: click it and the document opens on the quoted passage, highlighted.", it: "Scegli una domanda. La risposta ha un numero per ogni fonte: cliccalo e il documento si apre sul passaggio citato, evidenziato." },
    'doc.live.qs': { en: "Questions", it: "Domande" },
    'doc.live.ans': { en: "Answer", it: "Risposta" },
    'doc.live.src': { en: "Sources", it: "Fonti" },
    'doc.live.doc': { en: "Document", it: "Documento" },
    'doc.live.note': { en: "Questions and answers are prepared in advance on these fictitious documents. Each time the page loads, a check confirms that every quoted text is really in the passage it points to.", it: "Domande e risposte sono preparate in anticipo su questi documenti fittizi. A ogni caricamento della pagina un controllo conferma che ogni testo citato si trova davvero nel passaggio indicato." },
    'doc.who.title': { en: "Who it is for, and what they ask", it: "Per chi è, e cosa chiede" },
    'doc.who.sub': { en: "Three offices, the same documents. Each asks its own questions and gets the passage to check with every answer.", it: "Tre uffici, gli stessi documenti. Ognuno fa le sue domande e riceve, con ogni risposta, il passaggio da verificare." },
    'doc.role0.t': { en: "Answer the client on the contract", it: "Rispondere al cliente sul contratto" },
    'doc.role0': { en: "Sales office", it: "Ufficio commerciale" },
    'doc.role0.d': { en: "Penalties, warranty, notice periods: the answer comes with the article, ready to quote in the reply to the client.", it: "Penali, garanzia, preavvisi: la risposta arriva con l'articolo, pronto da citare nella risposta al cliente." },
    'doc.role1.t': { en: "Know what the supplier agreed to", it: "Sapere cosa ha accettato il fornitore" },
    'doc.role1': { en: "Purchasing", it: "Acquisti" },
    'doc.role1.d': { en: "Price reviews, delivery times, returns of non-conforming material, without reopening the framework agreement.", it: "Revisione dei prezzi, tempi di consegna, resi del materiale non conforme, senza riaprire l'accordo quadro." },
    'doc.role2.t': { en: "Follow the right procedure", it: "Seguire la procedura giusta" },
    'doc.role2': { en: "Quality and production", it: "Qualità e produzione" },
    'doc.role2.d': { en: "Who opens the report, who decides, what the service contract covers when a machine stops.", it: "Chi apre il rapporto, chi decide, cosa copre il contratto di assistenza quando una macchina si ferma." },
    'doc.can0': { en: "Search", it: "Cerca" },
    'doc.can0.d': { en: "Across all the uploaded documents, starting from the question as it is asked.", it: "In tutti i documenti caricati, partendo dalla domanda così come viene fatta." },
    'doc.can1': { en: "Cite", it: "Cita" },
    'doc.can1.d': { en: "Every sentence of the answer points to its passage, with the exact text.", it: "Ogni frase della risposta rimanda al suo passaggio, con il testo esatto." },
    'doc.can2': { en: "Combine", it: "Incrocia" },
    'doc.can2.d': { en: "Different documents in the same answer, such as the supplier agreement and the quality procedure.", it: "Documenti diversi nella stessa risposta, come l'accordo con il fornitore e la procedura qualità." },
    'doc.can3': { en: "Stop", it: "Si ferma" },
    'doc.can3.d': { en: "When the documents do not answer, it says so instead of guessing.", it: "Quando i documenti non rispondono, lo dice invece di tirare a indovinare." },
    'doc.how.sub': { en: "Every document is split into passages with a stable id: article, section or clause. The answer can only rest on those passages, and says which ones it used, quoting them word for word. Here there are four fictitious documents. With another company's documents the passages and questions change, not the way they are cited.", it: "Ogni documento \u00e8 diviso in passaggi con un identificativo stabile: articolo, paragrafo o clausola. La risposta pu\u00f2 appoggiarsi solo a quei passaggi e dice quali ha usato, citandoli parola per parola. Qui i documenti sono quattro e fittizi. Con quelli di un'altra azienda cambiano i passaggi e le domande, non il modo di citarli." },
    'doc.flow1': { en: "Documents split into passages", it: "Documenti divisi in passaggi" },
    'doc.t.cf': { en: "Client contract", it: "Contratto cliente" },
    'doc.t.af': { en: "Steel agreement", it: "Accordo acciaio" },
    'doc.t.pq': { en: "Procedure PQ-07", it: "Procedura PQ-07" },
    'doc.t.am': { en: "CNC service", it: "Assistenza CNC" },
    'doc.flow2': { en: "Answer with citations", it: "Risposta con citazioni" },
    'doc.t.cites': { en: "sentence + source", it: "frase + fonte" },
    'doc.flow3': { en: "Two checks", it: "Due controlli" },
    'doc.t.c1': { en: "Quoted text found in the passage", it: "Testo citato trovato nel passaggio" },
    'doc.t.c2': { en: "A person reads the passage and confirms", it: "Una persona legge il passaggio e conferma" },
    'doc.flow3.d': { en: "The first check is automatic. The second stays with whoever uses the answer: the passage is one click away.", it: "Il primo controllo è automatico. Il secondo resta a chi usa la risposta: il passaggio è a un clic." },
    'doc.ben.sub': { en: "When every answer brings its passage along, checking it means reading a few lines instead of a whole contract. Flip the switch and compare the two situations.", it: "Quando ogni risposta porta con sé il suo passaggio, verificarla vuol dire leggere poche righe invece di un contratto intero. Usa l'interruttore e confronta le due situazioni." },
    'case.law.title': { en: "Compliance assistant", it: "Assistente di conformità" },
    'case.law.pagetitle': { en: "Compliance assistant — Salvatore Franco", it: "Assistente di conformità — Salvatore Franco" },
    'case.law.desc': { en: "Answers on the GDPR, the AI Act and the Garante's cookie guidelines, with sources. Support, not legal advice.", it: "Risposte su GDPR, AI Act e linee guida cookie del Garante, con le fonti. Supporto, non consulenza legale." },
    'case.law.ctx': { en: "Answers on the GDPR, the AI Act and the Garante's cookie guidelines, with sources, shaped around the questions of a fictitious mechanical SME with about 50 employees. Support, not legal advice.", it: "Risposte su GDPR, AI Act e linee guida cookie del Garante, con le fonti, pensate sulle domande di una PMI meccanica fittizia di circa 50 addetti. Supporto, non consulenza legale." },
    'case.law.b1.before': { en: "Every doubt about the GDPR or the AI Act starts with a search through long texts.", it: "Ogni dubbio su GDPR o AI Act parte da una ricerca tra testi lunghi." },
    'case.law.b1.after': { en: "Every doubt about the GDPR or the AI Act starts from the relevant passage of the text.", it: "Ogni dubbio su GDPR o AI Act parte dal passaggio del testo pertinente." },
    'case.law.b2.before': { en: "Every answer about a rule has to be compared with the text, which must first be found.", it: "Ogni risposta su una norma va confrontata con il testo, tutto da ritrovare." },
    'case.law.b2.after': { en: "Every answer cites its source, and checking it remains with a person.", it: "Ogni risposta cita la fonte, e la verifica resta a una persona." },
    'case.law.b3.before': { en: "Every document from the Garante has to be picked out among many publications.", it: "Ogni documento del Garante va individuato tra molte pubblicazioni." },
    'case.law.b3.after': { en: "Every Garante document consulted stays cited next to the answer.", it: "Ogni documento del Garante consultato resta citato accanto alla risposta." },
    'law.lead': { en: "A doubt about privacy, cookies or AI often has its answer in a single paragraph of a long regulation. This assistant answers from the official texts and, for every sentence, shows the passage it comes from.", it: "Un dubbio su privacy, cookie o intelligenza artificiale spesso ha la risposta in un solo paragrafo di un regolamento lungo. Questo assistente risponde dai testi ufficiali e, per ogni frase, mostra il passaggio da cui viene." },
    'law.k1': { en: "Official texts: GDPR, AI Act, Garante cookie guidelines", it: "Testi ufficiali: GDPR, AI Act, linee guida cookie del Garante" },
    'law.k2': { en: "Verbatim passages, each with its article", it: "Passaggi citati alla lettera, ognuno con il suo articolo" },
    'law.k3': { en: "Questions a manufacturing SME asks itself", it: "Domande che una PMI manifatturiera si pone" },
    'law.k4': { en: "Question the texts do not answer, and the assistant says so", it: "Domanda a cui i testi non rispondono, e l'assistente lo dice" },
    'law.knote': { en: "Support for reading the texts, not legal advice. The company is fictitious; the passages are quoted from the official texts in Italian and English.", it: "Supporto alla lettura dei testi, non consulenza legale. L'azienda è fittizia; i passaggi sono citati dai testi ufficiali in italiano e in inglese." },
    'law.live.sub': { en: "Pick a question. The answer has a number for each source: click it and the text opens on the quoted article, highlighted.", it: "Scegli una domanda. La risposta ha un numero per ogni fonte: cliccalo e il testo si apre sull'articolo citato, evidenziato." },
    'law.live.warn': { en: "Support for reading the texts, not legal advice. The actual case should be checked with a professional.", it: "Supporto alla lettura dei testi, non consulenza legale. Il caso concreto va verificato con un professionista." },
    'law.live.doc': { en: "Text", it: "Testo" },
    'law.live.note': { en: "Questions and answers are prepared in advance on these excerpts. Each time the page loads, a check confirms that every quoted text is really in the passage it points to. The AI Act is quoted as published in 2024: later amendments are not included.", it: "Domande e risposte sono preparate in anticipo su questi estratti. A ogni caricamento della pagina un controllo conferma che ogni testo citato è davvero nel passaggio indicato. L'AI Act è citato com'era alla pubblicazione nel 2024: le modifiche successive non sono incluse." },
    'law.who.sub': { en: "In a small company the same person often handles privacy, IT and the website. Each question starts from the article, not from a search.", it: "In una piccola azienda spesso la stessa persona segue privacy, informatica e sito. Ogni domanda parte dall'articolo, non da una ricerca." },
    'law.role0.t': { en: "Handle staff and applicant data", it: "Gestire i dati di personale e candidati" },
    'law.role0': { en: "Management and HR", it: "Direzione e personale" },
    'law.role0.d': { en: "Record of processing, DPO, how long to keep CVs: the answer comes with the GDPR article to reread.", it: "Registro dei trattamenti, DPO, quanto tenere i CV: la risposta arriva con l'articolo del GDPR da rileggere." },
    'law.role1.t': { en: "Act fast on an incident", it: "Muoversi in fretta su un incidente" },
    'law.role1': { en: "IT and systems", it: "Informatica e sistemi" },
    'law.role1.d': { en: "A stolen laptop, an AI tool to introduce: deadlines and obligations, with the paragraph they come from.", it: "Un portatile rubato, uno strumento AI da introdurre: tempi e obblighi, con il paragrafo da cui vengono." },
    'law.role2.t': { en: "Keep the website in order", it: "Tenere in ordine il sito" },
    'law.role2': { en: "Marketing and website", it: "Marketing e sito" },
    'law.role2.d': { en: "Banner, technical cookies, statistics: what the Garante's guidelines say, word for word.", it: "Banner, cookie tecnici, statistiche: cosa dicono le linee guida del Garante, parola per parola." },
    'law.can0.d': { en: "Across the official texts, starting from the question in everyday words.", it: "Nei testi ufficiali, partendo dalla domanda fatta con parole di tutti i giorni." },
    'law.can1.d': { en: "Every sentence points to its article, with the exact wording of the text.", it: "Ogni frase rimanda al suo articolo, con le parole esatte del testo." },
    'law.can2.d': { en: "Several paragraphs in the same answer, such as the high-risk list and the duties of whoever uses the system.", it: "Più paragrafi nella stessa risposta, come l'elenco dei sistemi ad alto rischio e gli obblighi di chi li usa." },
    'law.can3.d': { en: "When the texts do not answer, it says so and points to a professional.", it: "Quando i testi non rispondono lo dice, e rimanda a un professionista." },
    'law.how.sub': { en: "The official texts are split by article and paragraph, each with a stable id. The answer can only rest on those passages, quotes them word for word and leaves the final judgement to a person. Here there are three texts. Which ones to load depends on what the company does, and each is added the same way.", it: "I testi ufficiali sono divisi per articolo e paragrafo, ognuno con un identificativo stabile. La risposta pu\u00f2 poggiare solo su quei passaggi, li cita alla lettera e lascia il giudizio finale a una persona. Qui i testi sono tre. Quali caricare dipende da cosa fa l'azienda, e ogni testo si aggiunge allo stesso modo." },
    'law.flow1': { en: "Texts split by article", it: "Testi divisi per articolo" },
    'law.t.gd': { en: "GDPR, Regulation (EU) 2016/679", it: "GDPR, Regolamento (UE) 2016/679" },
    'law.t.ai': { en: "AI Act, Regulation (EU) 2024/1689", it: "AI Act, Regolamento (UE) 2024/1689" },
    'law.t.ck': { en: "Garante cookie guidelines, 2021", it: "Linee guida cookie del Garante, 2021" },
    'law.t.cites': { en: "sentence + article", it: "frase + articolo" },
    'law.t.c1': { en: "Quoted text found in the article", it: "Testo citato trovato nell'articolo" },
    'law.t.c2': { en: "A person reads the article and decides on the actual case", it: "Una persona legge l'articolo e decide sul caso concreto" },
    'law.flow3.d': { en: "The first check is automatic. The second stays with whoever uses the answer, with a professional where needed: the article is one click away.", it: "Il primo controllo è automatico. Il secondo resta a chi usa la risposta, con un professionista quando serve: l'articolo è a un clic." },
    'law.ben.sub': { en: "When every answer brings its article along, checking it means reading a paragraph instead of a whole regulation. Flip the switch and compare the two situations.", it: "Quando ogni risposta porta con sé il suo articolo, verificarla vuol dire leggere un paragrafo invece di un intero regolamento. Usa l'interruttore e confronta le due situazioni." },

    /* Skills section */
    'skills.label': { en: '04 \u2014 Skills', it: '04 \u2014 Skills' },
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
      en: "Master's degree in Mechanical Engineering and project manager on digital transformation projects. I have worked on the production floors of manufacturing companies and in the offices of large groups, on dashboards, automations, data platforms and system migrations, each time starting from how the work is really done, before the tool.",
      it: "Dottore magistrale in ingegneria meccanica e project manager di progetti di trasformazione digitale. Ho lavorato nei reparti produttivi di aziende manifatturiere e negli uffici di grandi gruppi, su dashboard, automazioni, data platform e migrazioni di sistemi, partendo ogni volta da come si lavora davvero, prima che dallo strumento."
    },

    /* Background */
    'bg.label': { en: '01 \u2014 Background', it: '01 \u2014 Background' },
    'bg.title': { en: 'Who I am', it: 'Chi sono' },
    'bg.p1': {
      en: 'I\'m Salvatore Franco \u2014 a Project Manager specialized in Digital Transformation &amp; innovation technologies projects, and a data professional based in Italy, currently working at a large Italian group. I hold a degree in Mechanical Engineering from UNICAL and have built my career at the intersection of technology, data, and operations.',
      it: 'Sono Salvatore Franco \u2014 un Project Manager specializzato nella gestione di progetti di Digital Transformation &amp; innovation technologies, e un data professional. Lavoro attualmente in un grande gruppo italiano. Ho una laurea in Ingegneria Meccanica presso UNICAL e ho costruito la mia carriera tra tecnologia, dati e operations.'
    },
    'bg.p2': {
      en: 'I spent three years at an international consulting firm, where I have matured experience on several projects for an international manufacturing group. I joined on 27+ projects supervising cross-functional teams. I also developed complex Power BI reports and No-Code/Low-Code web apps integrated with chatbots and SCARA robots.',
      it: "Ho lavorato per tre anni in una società internazionale di consulenza, all'interno della quale ho maturato esperienza seguendo diversi progetti per conto di un importante gruppo manifatturiero. Ho partecipato a oltre 27 progetti supervisionando team cross-funzionali, sviluppando report Power BI complessi e web app No-Code/Low-Code integrate con chatbot e robot SCARA."
    },
    'bg.p3': {
      en: "Every tool I build starts from real client's needs. Data, people, processes, opportunities and technology put together to create value, increase margins and reduce waste.",
      it: "Ogni strumento che costruisco nasce dai bisogni del cliente. Dati, persone, processi, opportunità e tecnologia messi insieme per creare valore, aumentare i margini, ridurre gli sprechi."
    },

    /* Schemi delle schede Esperienza */
    'diag.orders': { en: 'Orders', it: 'Ordini' },
    'diag.employees': { en: 'Employees', it: 'Dipendenti' },
    'diag.reminders': { en: 'Reminders', it: 'Promemoria' },
    'diag.data': { en: 'Data', it: 'Dati' },
    'diag.summary': { en: 'Summary', it: 'Sintesi' },
    'diag.migration': { en: 'Migration', it: 'Migrazione' },
    'diag.requirements': { en: 'Requirements', it: 'Requisiti' },
    'diag.deadlines': { en: 'Deadlines', it: 'Scadenze' },
    'diag.renewals': { en: 'Renewals', it: 'Rinnovi' },

    /* Sidebar */
    'sidebar.location.label': { en: 'Location',     it: 'Sede' },
    'sidebar.location.value': { en: 'Italy',         it: 'Italia' },
    'sidebar.role.label':     { en: 'Current Role',  it: 'Ruolo attuale' },
    'sidebar.degree.label':   { en: 'Master Degree',        it: 'Laurea Magistrale' },
    'sidebar.degree.value':   { en: 'Mechanical Engineering \u2014 UNICAL', it: 'Ingegneria Meccanica \u2014 UNICAL' },

    /* Competenze */
    'comp.label': { en: '02 \u2014 Skills', it: '02 \u2014 Competenze' },
    'comp.s1.title': { en: 'Data &amp; decisions', it: 'Dati e decisioni' },
    'comp.s1.desc': { en: "Data from administration, production, maintenance or employee. All in one platform to have full control of your business, your process and your margins. MES, ERP and other management systems linked togheter and automated  using the business intelligence tool of Microsoft.", it: "Dati amministrativi, di produzione, manutenzione o del personale. Tutto insieme per controllare la tua azienda, il tuo processo, i tuoi margini. Collegamento a MES, ERP e gestionali aziendali automatizzati con l'utilizzo della business intelligence di Microsoft." },
    'comp.s2.title': { en: 'Process automation', it: 'Automazione dei processi' },
    'comp.s2.desc': { en: "Excel workbooks and Power Platform apps shaped around each office's manual steps to increase data reliability, process efficiency and decrease time consuming trivial tasks.", it: "Fogli Excel e app Power Platform disegnati sui passaggi manuali di ogni ufficio per aumentare l'affidabilità del dato, lavorare in modo più efficiente e risparmiare tempo nei lavori a basso valore aggiunto." },
    'comp.s3.title': { en: 'AI assistants on documents', it: 'Assistenti AI su documenti' },
    'comp.s3.desc': { en: "Assistants that answer on the company's own contracts and procedures, regulations and  internal documents with verifiable citations.", it: "Assistenti che rispondono su contratti, procedure aziendali, normative e documenti interni con citazioni verificabili." },
    'comp.s4.title': { en: 'Website building', it: 'Realizzazione di siti web' },
    'comp.s4.desc': { en: 'I build websites with WordPress, Framer, Bubble.io or fully custom HTML, CSS and JS.', it: 'Realizzo siti web con WordPress, Framer, Bubble.io o completamente custom in HTML, CSS e JS.' },

    /* Experience */
    'exp.label': { en: '04 \u2014 Experience', it: '04 \u2014 Esperienza' },
    'exp.title': { en: 'What I\'ve built',     it: 'Su cosa ho lavorato' },

    'exp.1.company': { en: 'Large Italian group', it: 'Grande gruppo italiano' },
    'exp.2.company': { en: 'International consulting firm', it: 'Società di consulenza internazionale' },
    'exp.3.company': { en: 'International consulting firm', it: 'Società di consulenza internazionale' },

    'exp.1.date':    { en: 'Feb 2025 \u2014 Present', it: 'Feb 2025 \u2014 Oggi' },
    'exp.1.current': { en: 'Current', it: 'In corso' },
    'exp.1.desc': {
      en: 'Team Leader PMO for Technology Projects within the Project Services &amp; PMO department. Managing and supervising macro-projects on digital integration, governance, Data Platform and internal training across the group.',
      it: 'Team Leader PMO su progetti Technology nel dipartimento Project Services &amp; PMO. Gestione e supervisione di macro-progetti di integrazione digitale, governance, Data Platform e formazione interna del gruppo.'
    },
    'exp.1.sub1': {
      en: '<strong>Digital Governance \u00b7 Acquisition of a group</strong> \u2014 Overseeing integration and migration of all the acquired group\'s management systems into the company\'s application landscape. In the Team Leader role, I managed and supervised all project phases, coordinating cross-functional teams and tracking timelines and strategic objectives, reporting directly to Digital Management and the project\'s sponsor.',
      it: '<strong>Digital Governance \u00b7 Acquisizione di un gruppo</strong> \u2014 Supervisione dell\'integrazione e migrazione di tutti i sistemi gestionali del gruppo acquisito verso la mappa applicativa aziendale. Nel ruolo di Team Leader, ho gestito e supervisionato tutte le fasi del progetto, coordinando team interfunzionali e seguendo tempi e obiettivi strategici, riportando direttamente alla Direzione Digital e agli sponsor di progetto.'
    },
    'exp.1.sub2': {
      en: '<strong>Digital Governance \u00b7 Digital transition of a controlled company</strong> \u2014 Integration and migration of a controlled company\'s management systems into the group\'s ecosystem, with direct reporting to ICT Management and the company\'s leadership.',
      it: '<strong>Digital Governance \u00b7 Transizione digitale di una società controllata</strong> \u2014 Integrazione e migrazione dei sistemi gestionali di una società controllata verso l\'ecosistema del gruppo, riportando direttamente alla Direzione ICT e al responsabile della società.'
    },
    'exp.1.sub3': {
      en: '<strong>Team Leader &amp; PM \u00b7 Data Platform BU Corporate</strong> \u2014 Leading 4 teams of 3 people across Procurement, AFC, Digital Transformation, People &amp; Transformation, supervising external partner works. I have been the point of contact between the leadership and the teams for all Data Platform initiatives, ensuring alignment on priorities, timelines and deliverables.',
      it: '<strong>Team Leader &amp; PM \u00b7 Data Platform BU Corporate</strong> \u2014 Gestione di un team di 3 PMO e supervisione del partner esterno per Procurement, AFC, Digital Transformation, People &amp; Transformation. Punto di riferimento tra la leadership e i team per tutte le iniziative Data Platform, garantendo allineamento su priorità, tempistiche e deliverables.'
    },
    'exp.1.sub4': {
      en: '<strong>Structural activities</strong> \u2014 Coordinating PMO interns for the production of training materials, maintenance of the structure\'s intranet, collaboration on toolbox (tools for PMs), structure OKRs, teaching in the group\'s internal training courses for intermediate and basic PMs, volunteer training, point of reference in the Technology structure.',
      it: '<strong>Attività di struttura</strong> \u2014 Coordinamento degli stagisti PMO per la produzione di materiali formativi, manutenzione della intranet della struttura, collaborazione su toolbox (strumenti per i PM), OKR di struttura, docente nei corsi di formazione interni del gruppo PM intermedio e base, formazione di volontariato, punto di riferimento nella struttura Technology.'
    },
    'exp.1.sub5': {
      en: '<strong>AI Champion</strong> — Coordinating a team of 5 people in building agentic solutions with Microsoft Copilot Studio and promoting AI tools across a group company.',
      it: '<strong>AI Champion</strong> — Coordinamento di un team di 5 persone per la creazione di soluzioni agentiche con Microsoft Copilot Studio e la divulgazione degli strumenti AI per una società del gruppo.'
    },

    'exp.2.date': { en: 'Dec 2023 \u2014 Feb 2025', it: 'Dic 2023 \u2014 Feb 2025' },
    'exp.2.desc': {
      en: 'Functional consultant for an international manufacturing group. ERP update from SAP R/3 to S/4HANA.',
      it: 'Consulente funzionale per un gruppo manifatturiero internazionale. Aggiornamento ERP da SAP R/3 a S/4HANA.'
    },
    'exp.2.sub1': {
      en: 'Streams: Master Data, Distribution, Manufacturing, After Sales Services. AS-IS analysis, BPML &amp; Core Model design, BBP, configurations. Managing 15+ RICEFWs with CRM and SAP R/3\u2192S/4 integrations.',
      it: 'Stream: Master Data, Distribution, Manufacturing, After Sales Services. Analisi AS-IS, BPML &amp; Core Model design, BBP, configurazioni. Gestione di 15+ RICEFW con integrazioni CRM e SAP R/3\u2192S/4.'
    },

    'exp.3.date': { en: 'Feb 2022 \u2014 Dec 2023', it: 'Feb 2022 \u2014 Dic 2023' },
    'exp.3.desc': {
      en: 'PM at the production site of an international manufacturing group. Managed 27 projects end-to-end (18 released), supervising teams of 2\u20133 people, reporting directly to the plant\'s IT Manager.',
      it: 'PM presso il sito produttivo di un gruppo manifatturiero internazionale. Gestione di 27 progetti end-to-end (18 rilasciati), supervisione di team da 2\u20133 persone, reporting diretto all\'IT Manager dello stabilimento.'
    },
    'exp.3.sub1': {
      en: 'Advanced Power BI reports integrated with MES and SAP (workforce management, Industry 4.0, asset management, production).',
      it: 'Report avanzati Power BI integrati con MES e SAP (workforce management, Industry 4.0, asset management, produzione).'
    },
    'exp.3.sub2': {
      en: '<strong>Robot inventory app</strong> \u2014 Power App integrated with a SCARA robot and MES to monitor the stock of high-value components against production orders.',
      it: '<strong>App di inventario con robot</strong> \u2014 Power App integrata con robot SCARA e MES per monitorare il magazzino di componenti di pregio rispetto agli ordini di produzione.'
    },
    'exp.3.sub3': {
      en: '<strong>Suggestions app</strong> \u2014 Power App with SSO and Power BI dashboard for employee suggestion collection and analysis.',
      it: '<strong>App suggerimenti</strong> \u2014 Power App con SSO e dashboard Power BI per raccolta e analisi dei suggerimenti dei dipendenti.'
    },
    'exp.3.sub4': {
      en: '<strong>Asset Manager</strong> \u2014 Power App + Power Automate for maintenance management, reminders, costs and asset certifications.',
      it: '<strong>Asset Manager</strong> \u2014 Power App + Power Automate per gestione manutenzioni, reminder, costi e certificazioni degli asset.'
    },
    'exp.3.sub5': {
      en: 'Supported the IT Manager in defining and presenting the Digital Transformation strategy to the group\'s central team.',
      it: 'Supporto all\'IT Manager nella definizione e presentazione della strategia di Digital Transformation al team centrale del gruppo.'
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
    'abt.skills.label': { en: '04 \u2014 Skills', it: '04 \u2014 Skills' },
    'abt.skills.title': { en: 'What I work with', it: 'Con cosa lavoro' },

    /* Education */
    'edu.label': { en: '05 \u2014 Education', it: '05 \u2014 Formazione' },
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
    'cert.12.title': { en: 'B1 English Certificate', it: 'Certificato di Inglese B1' },
    /* Privacy page (generated, see ticket 11) */
    'privacy.pagetitle': { en: 'Privacy — Salvatore Franco', it: 'Privacy — Salvatore Franco' },
    'privacy.title': { en: 'Privacy', it: 'Privacy' },
    'privacy.lead': { en: 'This site does not use cookies, statistics or services that send your data to other companies. Here is what happens to your data, in plain words.', it: 'Questo sito non usa cookie, statistiche o servizi che mandano i tuoi dati ad altre aziende. Qui trovi cosa succede ai tuoi dati, in parole semplici.' },
    'privacy.updated': { en: 'Last updated: 7 November 2026. Information under Articles 13 and 14 of the GDPR (EU Regulation 2016/679).', it: 'Ultimo aggiornamento: 7 novembre 2026. Informativa ai sensi degli articoli 13 e 14 del GDPR (Regolamento UE 2016/679).' },
    'privacy.who.t': { en: 'Who is responsible', it: 'Chi è il titolare' },
    'privacy.who.0': { en: 'Salvatore Franco, private individual, Venegono Inferiore (VA), Italy. Email: <a href="mailto:salvatorefranco@outlook.it">salvatorefranco@outlook.it</a>.', it: 'Salvatore Franco, persona fisica, Venegono Inferiore (VA). Email: <a href="mailto:salvatorefranco@outlook.it">salvatorefranco@outlook.it</a>.' },
    'privacy.who.1': { en: 'I am not a company and have no VAT number: this site presents my skills and does not sell services. There is no data protection officer, because none is required.', it: 'Non sono un\'azienda e non ho partita IVA: questo sito presenta le mie competenze e non vende servizi. Non c\'è un responsabile della protezione dei dati, perché non è richiesto.' },
    'privacy.visit.t': { en: 'When you visit the site', it: 'Quando visiti il sito' },
    'privacy.visit.0': { en: 'Fonts and scripts are served by the site itself. There are no cookies, statistics, advertising, embedded videos, maps or social buttons. The use cases run entirely in your browser: what you click or move is not sent anywhere and is not saved.', it: 'Font e script sono serviti dal sito stesso. Non ci sono cookie, statistiche, pubblicità, video incorporati, mappe o pulsanti social. I casi d\'uso funzionano interamente nel tuo browser: quello che clicchi o sposti non viene inviato né salvato.' },
    'privacy.visit.1': { en: 'The site is hosted on GitHub Pages (GitHub, Inc., United States). To deliver the pages and for security, GitHub records the IP address of every visitor and handles it on its own behalf, under <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">its privacy statement</a>. I have no access to these records.', it: 'Il sito è ospitato su GitHub Pages (GitHub, Inc., Stati Uniti). Per consegnare le pagine e per sicurezza, GitHub registra l\'indirizzo IP di ogni visitatore e lo tratta per conto proprio, secondo <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">la sua informativa</a>. Io non ho accesso a questi dati.' },
    'privacy.storage.t': { en: 'What stays on your device', it: 'Cosa resta nel tuo dispositivo' },
    'privacy.storage.0': { en: 'Only if you click the language or theme switch, the browser remembers your choice in its local storage. Nothing is written before the click.', it: 'Solo se clicchi il selettore della lingua o del tema, il browser ricorda la scelta nella sua memoria locale. Prima del clic non viene scritto nulla.' },
    'privacy.storage.1': { en: '<ul><li><b>lang</b>: the language you chose, Italian or English.</li><li><b>theme</b>: light or dark mode.</li></ul>', it: '<ul><li><b>lang</b>: la lingua scelta, italiano o inglese.</li><li><b>theme</b>: tema chiaro o scuro.</li></ul>' },
    'privacy.storage.2': { en: 'These values never leave your device, do not identify you and are not used to track you. They stay until you delete them from your browser settings. They are technical tools, so no consent banner is needed.', it: 'Questi valori non escono mai dal tuo dispositivo, non ti identificano e non servono a tracciarti. Restano finché non li cancelli dalle impostazioni del browser. Sono strumenti tecnici, quindi non serve un banner di consenso.' },
    'privacy.write.t': { en: 'If you write to me', it: 'Se mi scrivi' },
    'privacy.write.0': { en: 'If you write by email or on LinkedIn, I use your name, your address and what you write only to reply and to continue the conversation you started.', it: 'Se mi scrivi per email o su LinkedIn, uso il tuo nome, il tuo indirizzo e quello che scrivi solo per risponderti e per proseguire la conversazione che hai iniziato.' },
    'privacy.write.1': { en: 'The legal basis is your request (Article 6(1)(b) GDPR) or my legitimate interest in replying to whoever contacts me (Article 6(1)(f)). Writing to me is optional; without your details I cannot reply.', it: 'La base giuridica è la tua richiesta (art. 6, par. 1, lett. b GDPR) oppure il mio legittimo interesse a rispondere a chi mi contatta (art. 6, par. 1, lett. f). Scrivermi è facoltativo; senza i tuoi dati non posso risponderti.' },
    'privacy.contact.t': { en: 'If I contact you', it: 'Se ti contatto io' },
    'privacy.contact.0': { en: 'I may write to people who work in companies of my sector to introduce my work. In that case I use your name, role, company and work contact details, taken from your company\'s website, your public LinkedIn profile or a meeting in person.', it: 'Posso scrivere a persone che lavorano in aziende del mio settore per presentare il mio lavoro. In questo caso uso nome, ruolo, azienda e recapiti di lavoro, presi dal sito della tua azienda, dal tuo profilo LinkedIn pubblico o da un incontro di persona.' },
    'privacy.contact.1': { en: 'The legal basis is my legitimate interest in a first professional contact (Article 6(1)(f)): making my work known to companies that may need it. I only use generic company addresses or non-promotional channels, one message at a time, never mass or automated sending.', it: 'La base giuridica è il mio legittimo interesse a un primo contatto professionale (art. 6, par. 1, lett. f): far conoscere il mio lavoro ad aziende a cui può servire. Uso solo indirizzi aziendali generici o canali non promozionali, un messaggio alla volta, mai invii massivi o automatici.' },
    'privacy.contact.2': { en: 'You can object at any time, even by just replying "no": I will not contact you again.', it: 'Puoi opporti in qualsiasi momento, anche solo rispondendo "no": non ti ricontatterò.' },
    'privacy.keep.t': { en: 'How long I keep data', it: 'Per quanto tempo conservo i dati' },
    'privacy.keep.0': { en: '<ul><li>Messages and contacts with no follow-up: 24 months from the last exchange, then deleted.</li><li>If a collaboration starts: the documents needed for legal obligations, for the time the law requires (usually 10 years).</li><li>If you ask not to be contacted: I delete your details at once and keep only your address on an exclusion list, so as not to write to you again.</li></ul>', it: '<ul><li>Messaggi e contatti senza seguito: 24 mesi dall\'ultimo scambio, poi li cancello.</li><li>Se nasce una collaborazione: i documenti necessari agli obblighi di legge, per il tempo che la legge richiede (di norma 10 anni).</li><li>Se chiedi di non essere contattato: cancello subito i tuoi dati e tengo solo il tuo indirizzo in un elenco di esclusione, per non scriverti più.</li></ul>' },
    'privacy.share.t': { en: 'Who else handles the data', it: 'Chi altro tratta i dati' },
    'privacy.share.0': { en: 'I do not sell or pass on your data. They reach only the services I use:', it: 'Non vendo né cedo i tuoi dati. Arrivano solo ai servizi che uso:' },
    'privacy.share.1': { en: '<ul><li>GitHub, Inc. (United States): site hosting.</li><li>Microsoft (Outlook, United States): my email inbox.</li><li>LinkedIn (LinkedIn Ireland Unlimited Company): messages exchanged on LinkedIn.</li></ul>', it: '<ul><li>GitHub, Inc. (Stati Uniti): hosting del sito.</li><li>Microsoft (Outlook, Stati Uniti): la mia casella email.</li><li>LinkedIn (LinkedIn Ireland Unlimited Company): i messaggi scambiati su LinkedIn.</li></ul>' },
    'privacy.share.2': { en: 'Some data may therefore go to the United States. These companies state that they adhere to the EU-US Data Privacy Framework, covered by the European Commission adequacy decision of 10 July 2023, and use the standard contractual clauses approved by the Commission. No decision about you is taken automatically and there is no profiling.', it: 'Alcuni dati possono quindi arrivare negli Stati Uniti. Queste aziende dichiarano di aderire al Data Privacy Framework UE-USA, oggetto della decisione di adeguatezza della Commissione europea del 10 luglio 2023, e usano le clausole contrattuali tipo approvate dalla Commissione. Nessuna decisione che ti riguarda è presa in modo automatico e non c\'è profilazione.' },
    'privacy.rights.t': { en: 'Your rights', it: 'I tuoi diritti' },
    'privacy.rights.0': { en: 'You can ask me to access, correct or delete your data, to restrict its use, to receive it in a portable format, and you can object to its use (Articles 15-21 GDPR). Write to <a href="mailto:salvatorefranco@outlook.it">salvatorefranco@outlook.it</a>: I reply within one month.', it: 'Puoi chiedermi di accedere ai tuoi dati, correggerli o cancellarli, limitarne l\'uso, riceverli in un formato portabile, e puoi opporti al loro uso (artt. 15-21 GDPR). Scrivi a <a href="mailto:salvatorefranco@outlook.it">salvatorefranco@outlook.it</a>: rispondo entro un mese.' },
    'privacy.rights.1': { en: 'You can also lodge a complaint with the Italian data protection authority, the <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">Garante per la protezione dei dati personali</a>.', it: 'Puoi anche proporre reclamo al <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">Garante per la protezione dei dati personali</a>.' },
    'privacy.notes.t': { en: 'Notes', it: 'Note' },
    'privacy.notes.0': { en: 'The use cases on this site use fictitious data. The compliance assistant is support for reading the texts, not legal advice. If something on the site changes, for example new services, this page is updated first.', it: 'I casi d\'uso del sito usano dati fittizi. L\'assistente di conformità è un supporto alla lettura dei testi, non una consulenza legale. Se qualcosa sul sito cambia, per esempio nuovi servizi, questa pagina viene aggiornata prima.' }
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
  var saved = localStorage.getItem('lang') || 'it';
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
