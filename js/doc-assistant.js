/* Assistant on documents and contracts: fictitious documents split into passages with a stable id,
   prepared questions and answers, each sentence pointing to the passage it comes from.
   The self-check at the bottom verifies that every cited text really is in its passage. */
(function () {
  'use strict';

  var box = document.querySelector('[data-ask]');
  if (!box) return;

  // ── Documents ──
  var DOCS = [
    { id: 'CF', short: { it: 'Contratto cliente', en: 'Client contract' }, title: { it: 'Contratto di fornitura con Cliente demo 01', en: 'Supply contract with Cliente demo 01' }, meta: { it: 'CF-2026-01 · rev. 2', en: 'CF-2026-01 · rev. 2' }, parts: [
      ['CF-1', 'Art. 1 Oggetto', 'Art. 1 Subject',
        'Il Fornitore produce e consegna al Cliente i particolari meccanici indicati negli ordini, secondo i disegni e le specifiche che il Cliente trasmette con ciascun ordine.',
        'The Supplier manufactures and delivers to the Client the mechanical parts listed in the orders, according to the drawings and specifications the Client sends with each order.'],
      ['CF-2', 'Art. 2 Ordini', 'Art. 2 Orders',
        'Ogni ordine si intende accettato se il Fornitore non lo rifiuta per iscritto entro 3 giorni lavorativi dal ricevimento. Le modifiche di quantità chieste dal Cliente dopo l\'accettazione valgono solo se confermate dal Fornitore.',
        'Each order is deemed accepted unless the Supplier rejects it in writing within 3 working days of receipt. Quantity changes requested by the Client after acceptance apply only if confirmed by the Supplier.'],
      ['CF-3', 'Art. 3 Consegna', 'Art. 3 Delivery',
        'La consegna avviene franco stabilimento del Fornitore, entro la data indicata nella conferma d\'ordine. Il Fornitore avvisa il Cliente per iscritto di ogni ritardo prevedibile appena ne viene a conoscenza.',
        'Delivery is ex works at the Supplier\'s plant, by the date stated in the order confirmation. The Supplier informs the Client in writing of any foreseeable delay as soon as it becomes aware of it.'],
      ['CF-4', 'Art. 4 Penali per ritardo', 'Art. 4 Late delivery penalties',
        'Per ogni settimana intera di ritardo rispetto alla data confermata, il Cliente può applicare una penale dell\'1% del valore della consegna in ritardo, fino a un massimo del 5%. La penale non si applica se il ritardo dipende da modifiche chieste dal Cliente o da cause di forza maggiore.',
        'For each full week of delay against the confirmed date, the Client may apply a penalty of 1% of the value of the late delivery, up to a maximum of 5%. The penalty does not apply if the delay results from changes requested by the Client or from force majeure.'],
      ['CF-5', 'Art. 5 Garanzia', 'Art. 5 Warranty',
        'Il Fornitore garantisce la conformità dei particolari ai disegni per 12 mesi dalla consegna. Il Cliente denuncia i difetti per iscritto entro 8 giorni dalla scoperta; il Fornitore sceglie se riparare o sostituire i pezzi difettosi.',
        'The Supplier warrants that the parts conform to the drawings for 12 months from delivery. The Client reports defects in writing within 8 days of discovery; the Supplier chooses whether to repair or replace the defective pieces.'],
      ['CF-6', 'Art. 6 Pagamento', 'Art. 6 Payment',
        'Le fatture si pagano a 60 giorni data fattura fine mese, con bonifico bancario. In caso di ritardo nel pagamento il Fornitore può sospendere le consegne successive, dandone avviso scritto.',
        'Invoices are paid at 60 days end of month from the invoice date, by bank transfer. If payment is late, the Supplier may suspend further deliveries after giving written notice.'],
      ['CF-7', 'Art. 7 Recesso', 'Art. 7 Withdrawal',
        'Ciascuna parte può recedere dal contratto con un preavviso di sessanta giorni, comunicato per iscritto. Gli ordini già accettati alla data del recesso vengono comunque evasi alle condizioni in vigore.',
        'Either party may withdraw from the contract with sixty days\' notice, given in writing. Orders already accepted on the date of withdrawal are still fulfilled under the terms in force.'],
      ['CF-8', 'Art. 8 Riservatezza', 'Art. 8 Confidentiality',
        'Disegni, specifiche e prezzi scambiati tra le parti sono riservati e non possono essere comunicati a terzi senza consenso scritto, anche dopo la fine del contratto.',
        'Drawings, specifications and prices exchanged between the parties are confidential and may not be disclosed to third parties without written consent, even after the contract ends.']
    ]},
    { id: 'AF', short: { it: 'Accordo acciaio', en: 'Steel agreement' }, title: { it: 'Accordo quadro con Fornitore acciaio demo 03', en: 'Framework agreement with Fornitore acciaio demo 03' }, meta: { it: 'AQ-2025-03 · rev. 1', en: 'AQ-2025-03 · rev. 1' }, parts: [
      ['AF-1', 'Art. 1 Oggetto', 'Art. 1 Subject',
        'Il Fornitore vende all\'Acquirente barre e lamiere in acciaio da costruzione e da bonifica, nei formati elencati nell\'allegato 1.',
        'The Supplier sells the Buyer structural and quenched-and-tempered steel bars and plates, in the sizes listed in annex 1.'],
      ['AF-2', 'Art. 2 Prezzi', 'Art. 2 Prices',
        'I prezzi del materiale sono rivisti ogni trimestre in base al listino di riferimento. Il Fornitore comunica il nuovo prezzo almeno 15 giorni prima dell\'inizio del trimestre; gli ordini già confermati restano al prezzo precedente.',
        'Material prices are reviewed every quarter against the reference price list. The Supplier announces the new price at least 15 days before the quarter starts; orders already confirmed keep the previous price.'],
      ['AF-3', 'Art. 3 Consegna', 'Art. 3 Delivery',
        'Il materiale a magazzino viene consegnato entro 5 giorni lavorativi dall\'ordine; il materiale da produrre entro la data concordata caso per caso.',
        'Stock material is delivered within 5 working days of the order; material to be produced by the date agreed case by case.'],
      ['AF-4', 'Art. 4 Certificati', 'Art. 4 Certificates',
        'Ogni consegna è accompagnata dal certificato di controllo 3.1 secondo EN 10204, con il numero di colata riportato anche sul materiale.',
        'Each delivery comes with a 3.1 inspection certificate to EN 10204, with the heat number also marked on the material.'],
      ['AF-5', 'Art. 5 Materiale non conforme', 'Art. 5 Non-conforming material',
        'Il materiale non conforme va segnalato entro 10 giorni lavorativi dal ricevimento, con il numero di colata. Il Fornitore lo ritira a proprie spese e lo sostituisce entro 7 giorni lavorativi dalla segnalazione.',
        'Non-conforming material must be reported within 10 working days of receipt, with the heat number. The Supplier collects it at its own expense and replaces it within 7 working days of the report.'],
      ['AF-6', 'Art. 6 Durata', 'Art. 6 Term',
        'L\'accordo dura due anni e si rinnova di anno in anno, salvo disdetta scritta con tre mesi di anticipo.',
        'The agreement lasts two years and renews from year to year, unless cancelled in writing three months in advance.']
    ]},
    { id: 'PQ', short: { it: 'Procedura PQ-07', en: 'Procedure PQ-07' }, title: { it: 'Procedura PQ-07 · Gestione delle non conformità', en: 'Procedure PQ-07 · Handling non-conformities' }, meta: { it: 'Sistema qualità · rev. 4', en: 'Quality system · rev. 4' }, parts: [
      ['PQ-1', '§1 Campo di applicazione', '§1 Scope',
        'La procedura si applica a materiali, semilavorati e prodotti finiti che non rispettano disegno, specifica o ordine, sia in accettazione sia in produzione.',
        'The procedure applies to materials, semi-finished and finished products that do not meet the drawing, specification or order, both at goods-in and in production.'],
      ['PQ-2', '§2 Apertura del rapporto', '§2 Opening the report',
        'Chi rileva la non conformità apre il rapporto NC sul gestionale nello stesso turno, indicando codice, quantità, lotto e descrizione del difetto.',
        'Whoever finds the non-conformity opens the NC report in the management system during the same shift, stating code, quantity, batch and description of the defect.'],
      ['PQ-3', '§3 Segregazione', '§3 Segregation',
        'Il materiale non conforme viene identificato con il cartellino rosso e spostato nell\'area NC entro la fine del turno. Non può essere usato finché il rapporto non è chiuso.',
        'Non-conforming material is marked with the red tag and moved to the NC area by the end of the shift. It may not be used until the report is closed.'],
      ['PQ-4', '§4 Decisione', '§4 Decision',
        'Il Responsabile Qualità decide entro 2 giorni lavorativi tra rilavorazione, uso in deroga, reso al fornitore o rottamazione. L\'uso in deroga richiede anche la firma del Responsabile di Produzione.',
        'The Quality Manager decides within 2 working days between rework, use under concession, return to the supplier or scrap. Use under concession also requires the signature of the Production Manager.'],
      ['PQ-5', '§5 Azione correttiva', '§5 Corrective action',
        'Se la stessa non conformità si ripete entro sei mesi, il Responsabile Qualità apre un\'azione correttiva con analisi delle cause e verifica di efficacia.',
        'If the same non-conformity recurs within six months, the Quality Manager opens a corrective action with root cause analysis and effectiveness check.']
    ]},
    { id: 'AM', short: { it: 'Assistenza CNC', en: 'CNC service' }, title: { it: 'Contratto di assistenza sulle macchine CNC', en: 'Service contract for the CNC machines' }, meta: { it: 'Assistenza demo 02 · 2026', en: 'Assistenza demo 02 · 2026' }, parts: [
      ['AM-1', 'Art. 1 Macchine coperte', 'Art. 1 Machines covered',
        'Il servizio copre i tre centri di lavoro e i due torni CNC elencati nell\'allegato A, con manutenzione preventiva due volte l\'anno.',
        'The service covers the three machining centres and the two CNC lathes listed in annex A, with preventive maintenance twice a year.'],
      ['AM-2', 'Art. 2 Tempi di intervento', 'Art. 2 Response times',
        'Per un fermo macchina segnalato entro le 12:00 di un giorno lavorativo, il tecnico interviene entro le 8 ore lavorative successive. La segnalazione indica matricola della macchina e codice di allarme.',
        'For a machine stoppage reported by 12:00 on a working day, the technician is on site within the following 8 working hours. The report states the machine serial number and the alarm code.'],
      ['AM-3', 'Art. 3 Esclusioni', 'Art. 3 Exclusions',
        'Sono esclusi i danni da urto, da uso improprio e da interventi di personale non autorizzato, oltre agli utensili e ai materiali di consumo.',
        'Damage from collisions, misuse and work by unauthorised staff is excluded, as are tools and consumables.'],
      ['AM-4', 'Art. 4 Ricambi e manodopera', 'Art. 4 Spare parts and labour',
        'I ricambi sono fatturati a parte al listino del costruttore, con lo sconto indicato nell\'allegato B. La manodopera degli interventi coperti è compresa nel canone.',
        'Spare parts are invoiced separately at the manufacturer\'s list price, with the discount stated in annex B. Labour for covered interventions is included in the fee.']
    ]}
  ];

  // ── Prepared questions: each sentence lists the citations (1-based) it rests on ──
  var QS = [
    { q: { it: 'Con quale preavviso possiamo recedere dal contratto con Cliente demo 01?', en: 'How much notice do we need to withdraw from the contract with Cliente demo 01?' },
      a: [
        { it: 'Sessanta giorni, comunicati per iscritto.', en: 'Sixty days, given in writing.', c: [1] },
        { it: 'Gli ordini già accettati a quella data vanno comunque evasi, alle condizioni in vigore.', en: 'Orders already accepted by then must still be fulfilled, under the terms in force.', c: [2] }
      ],
      c: [
        ['CF-7', 'preavviso di sessanta giorni, comunicato per iscritto', 'sixty days\' notice, given in writing'],
        ['CF-7', 'Gli ordini già accettati alla data del recesso vengono comunque evasi alle condizioni in vigore.', 'Orders already accepted on the date of withdrawal are still fulfilled under the terms in force.']
      ] },
    { q: { it: 'Una consegna è in ritardo di due settimane: che penale può applicare il cliente?', en: 'A delivery is two weeks late: what penalty can the client apply?' },
      a: [
        { it: 'L\'1% del valore della consegna per ogni settimana intera di ritardo, quindi il 2% in questo caso, con un tetto del 5%.', en: '1% of the delivery value for each full week of delay, so 2% in this case, capped at 5%.', c: [1] },
        { it: 'La penale non si applica se il ritardo nasce da modifiche chieste dal cliente o da forza maggiore.', en: 'The penalty does not apply if the delay comes from changes the client requested or from force majeure.', c: [2] },
        { it: 'Il contratto chiede anche di avvisare il cliente per iscritto appena il ritardo è prevedibile.', en: 'The contract also requires telling the client in writing as soon as the delay is foreseeable.', c: [3] }
      ],
      c: [
        ['CF-4', 'una penale dell\'1% del valore della consegna in ritardo, fino a un massimo del 5%', 'a penalty of 1% of the value of the late delivery, up to a maximum of 5%'],
        ['CF-4', 'La penale non si applica se il ritardo dipende da modifiche chieste dal Cliente o da cause di forza maggiore.', 'The penalty does not apply if the delay results from changes requested by the Client or from force majeure.'],
        ['CF-3', 'Il Fornitore avvisa il Cliente per iscritto di ogni ritardo prevedibile appena ne viene a conoscenza.', 'The Supplier informs the Client in writing of any foreseeable delay as soon as it becomes aware of it.']
      ] },
    { q: { it: 'Abbiamo ricevuto acciaio fuori specifica: cosa facciamo, ed entro quando?', en: 'We received steel out of specification: what do we do, and by when?' },
      a: [
        { it: 'Chi lo rileva apre il rapporto NC nello stesso turno, con codice, quantità e lotto.', en: 'Whoever finds it opens the NC report in the same shift, with code, quantity and batch.', c: [1] },
        { it: 'Il materiale va segnato con il cartellino rosso e portato nell\'area NC entro fine turno, e non si usa finché il rapporto è aperto.', en: 'The material gets the red tag and goes to the NC area by the end of the shift, and is not used while the report is open.', c: [2] },
        { it: 'Al fornitore va segnalato entro 10 giorni lavorativi dal ricevimento, con il numero di colata: lo ritira a sue spese e lo sostituisce entro 7 giorni lavorativi.', en: 'It must be reported to the supplier within 10 working days of receipt, with the heat number: the supplier collects it at its own expense and replaces it within 7 working days.', c: [3] }
      ],
      c: [
        ['PQ-2', 'apre il rapporto NC sul gestionale nello stesso turno', 'opens the NC report in the management system during the same shift'],
        ['PQ-3', 'Il materiale non conforme viene identificato con il cartellino rosso e spostato nell\'area NC entro la fine del turno.', 'Non-conforming material is marked with the red tag and moved to the NC area by the end of the shift.'],
        ['AF-5', 'Il materiale non conforme va segnalato entro 10 giorni lavorativi dal ricevimento, con il numero di colata. Il Fornitore lo ritira a proprie spese e lo sostituisce entro 7 giorni lavorativi dalla segnalazione.', 'Non-conforming material must be reported within 10 working days of receipt, with the heat number. The Supplier collects it at its own expense and replaces it within 7 working days of the report.']
      ] },
    { q: { it: 'Il fornitore può aumentare il prezzo dell\'acciaio su un ordine già confermato?', en: 'Can the supplier raise the steel price on an order already confirmed?' },
      a: [
        { it: 'No: gli ordini già confermati restano al prezzo precedente.', en: 'No: orders already confirmed keep the previous price.', c: [1] },
        { it: 'Il prezzo cambia solo a ogni trimestre, e il nuovo valore va comunicato almeno 15 giorni prima.', en: 'The price changes only each quarter, and the new figure must be announced at least 15 days in advance.', c: [2] }
      ],
      c: [
        ['AF-2', 'gli ordini già confermati restano al prezzo precedente', 'orders already confirmed keep the previous price'],
        ['AF-2', 'Il Fornitore comunica il nuovo prezzo almeno 15 giorni prima dell\'inizio del trimestre', 'The Supplier announces the new price at least 15 days before the quarter starts']
      ] },
    { q: { it: 'Chi decide se un pezzo non conforme si può usare lo stesso?', en: 'Who decides whether a non-conforming part can be used anyway?' },
      a: [
        { it: 'Il Responsabile Qualità, entro 2 giorni lavorativi, scegliendo tra rilavorazione, uso in deroga, reso o rottamazione.', en: 'The Quality Manager, within 2 working days, choosing between rework, use under concession, return or scrap.', c: [1] },
        { it: 'Per usarlo in deroga serve anche la firma del Responsabile di Produzione.', en: 'Using it under concession also needs the Production Manager\'s signature.', c: [2] }
      ],
      c: [
        ['PQ-4', 'Il Responsabile Qualità decide entro 2 giorni lavorativi tra rilavorazione, uso in deroga, reso al fornitore o rottamazione.', 'The Quality Manager decides within 2 working days between rework, use under concession, return to the supplier or scrap.'],
        ['PQ-4', 'L\'uso in deroga richiede anche la firma del Responsabile di Produzione.', 'Use under concession also requires the signature of the Production Manager.']
      ] },
    { q: { it: 'Un tornio CNC è fermo dalle 10 di stamattina: quando arriva il tecnico, e cosa paghiamo?', en: 'A CNC lathe has been down since 10 this morning: when does the technician arrive, and what do we pay?' },
      a: [
        { it: 'Se il fermo viene segnalato entro le 12:00, il tecnico interviene entro le 8 ore lavorative successive. Nella segnalazione servono matricola e codice di allarme.', en: 'If the stoppage is reported by 12:00, the technician is on site within the following 8 working hours. The report needs the serial number and the alarm code.', c: [1] },
        { it: 'La manodopera è compresa nel canone, i ricambi sono fatturati a parte.', en: 'Labour is included in the fee, spare parts are invoiced separately.', c: [2] },
        { it: 'Se il fermo nasce da un urto o da un uso improprio, l\'intervento non è coperto.', en: 'If the stoppage comes from a collision or misuse, the intervention is not covered.', c: [3] }
      ],
      c: [
        ['AM-2', 'Per un fermo macchina segnalato entro le 12:00 di un giorno lavorativo, il tecnico interviene entro le 8 ore lavorative successive.', 'For a machine stoppage reported by 12:00 on a working day, the technician is on site within the following 8 working hours.'],
        ['AM-4', 'La manodopera degli interventi coperti è compresa nel canone.', 'Labour for covered interventions is included in the fee.'],
        ['AM-3', 'Sono esclusi i danni da urto, da uso improprio', 'Damage from collisions, misuse']
      ] },
    { q: { it: 'Il cliente ha trovato un difetto su pezzi consegnati otto mesi fa: sono ancora in garanzia?', en: 'The client found a defect on parts delivered eight months ago: are they still under warranty?' },
      a: [
        { it: 'Sì: la garanzia dura 12 mesi dalla consegna.', en: 'Yes: the warranty lasts 12 months from delivery.', c: [1] },
        { it: 'Il cliente deve denunciare il difetto per iscritto entro 8 giorni da quando l\'ha scoperto, e scegliamo noi se riparare o sostituire i pezzi.', en: 'The client must report the defect in writing within 8 days of finding it, and we choose whether to repair or replace the pieces.', c: [2] }
      ],
      c: [
        ['CF-5', 'per 12 mesi dalla consegna', 'for 12 months from delivery'],
        ['CF-5', 'Il Cliente denuncia i difetti per iscritto entro 8 giorni dalla scoperta; il Fornitore sceglie se riparare o sostituire i pezzi difettosi.', 'The Client reports defects in writing within 8 days of discovery; the Supplier chooses whether to repair or replace the defective pieces.']
      ] },
    { none: true,
      q: { it: 'A quanti giorni paghiamo il fornitore di acciaio?', en: 'How many days do we have to pay the steel supplier?' },
      a: [
        { it: 'I documenti caricati non lo dicono: l\'accordo con il fornitore di acciaio non ha una clausola sui pagamenti.', en: 'The uploaded documents do not say: the agreement with the steel supplier has no payment clause.', c: [] },
        { it: 'Le uniche condizioni di pagamento sono nel contratto con Cliente demo 01, e valgono per il cliente, non per il fornitore.', en: 'The only payment terms are in the contract with Cliente demo 01, and they apply to the client, not to the supplier.', c: [1] },
        { it: 'Il dato va cercato negli ordini di acquisto o chiesto all\'amministrazione.', en: 'The figure should be looked up in the purchase orders or asked of the accounts office.', c: [] }
      ],
      c: [
        ['CF-6', 'Le fatture si pagano a 60 giorni data fattura fine mese, con bonifico bancario.', 'Invoices are paid at 60 days end of month from the invoice date, by bank transfer.']
      ] }
  ];

  // Another page can bring its own texts and questions: window.ASK_SETS[<value of data-ask>]
  var SET = (window.ASK_SETS || {})[box.getAttribute('data-ask')];
  if (SET) { DOCS = SET.docs; QS = SET.qs; }
  var LBL = (SET && SET.labels) || { meta: ['documento fittizio', 'fictitious document'], none: ['Non trovato nei documenti', 'Not found in the documents'] };

  var PART = {};
  DOCS.forEach(function (d) { d.parts.forEach(function (p) { PART[p[0]] = { doc: d, label: { it: p[1], en: p[2] }, text: { it: p[3], en: p[4] } }; }); });

  var still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var qList = box.querySelector('[data-ask-qs]');
  var chat = box.querySelector('[data-ask-chat]');
  var srcList = box.querySelector('[data-ask-src]');
  var docTabs = box.querySelector('[data-ask-docs]');
  var view = box.querySelector('[data-ask-view]');
  var qi = 0, ci = 0, docId = null;

  function lang() { return document.documentElement.lang === 'en' ? 'en' : 'it'; }
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function word(it, en) { return lang() === 'en' ? en : it; }

  function renderQs() {
    qList.textContent = '';
    QS.forEach(function (item, i) {
      var b = el('button', 'ask__q', item.q[lang()]);
      b.type = 'button';
      b.setAttribute('aria-pressed', String(i === qi));
      b.addEventListener('click', function () { qi = i; ci = 0; renderQs(); renderAnswer(true); });
      qList.appendChild(b);
    });
  }

  function renderAnswer(animate) {
    var item = QS[qi], L = lang();
    chat.textContent = '';
    chat.appendChild(el('div', 'uc-chat__q', item.q[L]));
    var a = el('div', 'uc-chat__a ask__a');
    if (item.none) a.appendChild(el('p', 'ask__none', word(LBL.none[0], LBL.none[1])));
    item.a.forEach(function (s, k) {
      var p = el('p', 'ask__s', s[L]);
      s.c.forEach(function (n) {
        var r = el('button', 'ask__ref', String(n));
        r.type = 'button';
        r.setAttribute('aria-label', word('Fonte ', 'Source ') + n);
        r.addEventListener('click', function () { showCite(n - 1, true); });
        p.appendChild(document.createTextNode(' '));
        p.appendChild(r);
      });
      if (animate && !still && p.animate) p.animate([{ opacity: 0, transform: 'translateY(6px)' }, { opacity: 1, transform: 'none' }], { duration: 320, delay: 120 + k * 140, fill: 'backwards', easing: 'cubic-bezier(0.16, 1, 0.3, 1)' });
      a.appendChild(p);
    });
    chat.appendChild(a);

    srcList.textContent = '';
    item.c.forEach(function (c, k) {
      var part = PART[c[0]];
      var b = el('button', 'ask__src');
      b.type = 'button';
      b.setAttribute('data-k', k);
      var head = el('span', 'ask__src-h');
      head.appendChild(el('b', 'ask__ref', String(k + 1)));
      head.appendChild(document.createTextNode(' ' + part.doc.title[L] + ' · ' + part.label[L]));
      b.appendChild(head);
      b.appendChild(el('q', null, L === 'en' ? c[2] : c[1]));
      b.addEventListener('click', function () { showCite(k, true); });
      srcList.appendChild(b);
    });
    showCite(Math.min(ci, item.c.length - 1), false);
  }

  function showCite(k, scroll) {
    ci = k;
    var c = QS[qi].c[k];
    srcList.querySelectorAll('.ask__src').forEach(function (b, i) { b.setAttribute('aria-pressed', String(i === k)); });
    chat.querySelectorAll('.ask__ref').forEach(function (r) { r.setAttribute('aria-pressed', String(Number(r.textContent) === k + 1)); });
    renderDoc(PART[c[0]].doc.id, c, scroll);
  }

  function renderDoc(id, cite, scroll) {
    var L = lang(), doc = DOCS.filter(function (d) { return d.id === id; })[0];
    docId = id;
    docTabs.querySelectorAll('[data-doc]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-doc') === id)); });
    view.textContent = '';
    view.appendChild(el('h4', 'ask__doc-t', doc.title[L]));
    view.appendChild(el('p', 'ask__doc-m', doc.meta[L] + ' · ' + word(LBL.meta[0], LBL.meta[1])));
    var target = null;
    doc.parts.forEach(function (p) {
      var art = el('div', 'ask__part');
      art.id = 'doc-' + p[0];
      art.appendChild(el('h5', null, L === 'en' ? p[2] : p[1]));
      var text = L === 'en' ? p[4] : p[3];
      var para = el('p');
      var quote = cite && cite[0] === p[0] ? (L === 'en' ? cite[2] : cite[1]) : null;
      var at = quote ? text.indexOf(quote) : -1;
      if (at >= 0) {
        art.classList.add('is-cited');
        para.appendChild(document.createTextNode(text.slice(0, at)));
        para.appendChild(el('mark', null, quote));
        para.appendChild(document.createTextNode(text.slice(at + quote.length)));
        target = art;
      } else {
        para.textContent = text;
      }
      art.appendChild(para);
      view.appendChild(art);
    });
    if (target) {
      // .ask__view is position:relative, so offsetTop is already measured from it
      view.scrollTo({ top: target.offsetTop - 16, behavior: scroll && !still ? 'smooth' : 'auto' });
      var r = view.getBoundingClientRect();
      if (scroll && (r.top > window.innerHeight || r.bottom < 0)) view.scrollIntoView({ block: 'nearest', behavior: still ? 'auto' : 'smooth' });
    } else {
      view.scrollTop = 0;
    }
  }

  function renderTabs() {
    docTabs.textContent = '';
    DOCS.forEach(function (d) {
      var b = el('button', 'live__chip', d.short[lang()]);
      b.type = 'button';
      b.setAttribute('data-doc', d.id);
      b.title = d.title[lang()];
      b.addEventListener('click', function () {
        var c = QS[qi].c[ci];
        renderDoc(d.id, PART[c[0]].doc.id === d.id ? c : null, false);
      });
      docTabs.appendChild(b);
    });
  }

  function renderAll() { renderTabs(); renderQs(); renderAnswer(false); }

  new MutationObserver(function () { setTimeout(renderAll, 0); }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  renderAll();

  // ── Self-check: every citation points to an existing passage and quotes it word for word, in both languages ──
  var bad = [];
  QS.forEach(function (item, i) {
    item.c.forEach(function (c, k) {
      var part = PART[c[0]];
      if (!part) { bad.push('Q' + (i + 1) + ' cite ' + (k + 1) + ': no passage ' + c[0]); return; }
      if (part.text.it.indexOf(c[1]) < 0) bad.push('Q' + (i + 1) + ' cite ' + (k + 1) + ' (it) not in ' + c[0]);
      if (part.text.en.indexOf(c[2]) < 0) bad.push('Q' + (i + 1) + ' cite ' + (k + 1) + ' (en) not in ' + c[0]);
    });
    item.a.forEach(function (s, k) {
      s.c.forEach(function (n) { if (!item.c[n - 1]) bad.push('Q' + (i + 1) + ' sentence ' + (k + 1) + ': no cite ' + n); });
    });
  });
  var counts = { docs: DOCS.length, parts: Object.keys(PART).length, qs: QS.length, none: QS.filter(function (q) { return q.none; }).length };
  document.querySelectorAll('[data-ask-count]').forEach(function (n) {
    var key = n.getAttribute('data-ask-count');
    if (Number(n.getAttribute('data-count')) !== counts[key]) bad.push('count ' + key + ' is ' + counts[key]);
  });
  console.assert(bad.length === 0, '[doc-assistant] ' + bad.join('; '));
  window.__docAssistantCheck = bad;
})();
