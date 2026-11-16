
import { INodeProperties } from 'n8n-workflow';

export const companyInfoDescription: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    default: 'getManyCompanyInfo',
    options: [
      { name: 'Get', value: 'getManyCompanyInfo', action: 'Get many company info', description: 'Retrieve company information (Bedrijfsgegevens) from SnelStart' },
      { name: 'Put', value: 'putManyCompanyInfo', action: 'Put company info', description: 'Update company information (Bedrijfsgegevens) in SnelStart' },
    ],
    displayOptions: {
      show: {
        resource: ['companyInfo'],
      },
    },
  },
  {
    displayName: 'Add Field',
    name: 'fields',
    type: 'collection',
    placeholder: 'Add Field',
    default: {},
    displayOptions: {
      show: {
        resource: ['companyInfo'],
        operation: ['putManyCompanyInfo'],
      },
    },
    options: [
      { displayName: 'Address', name: 'adres', type: 'string', default: undefined, description: 'The street address and house number (Adres) of the company' },
      { displayName: 'Administration Identifier', name: 'administratieIdentifier', type: 'string', default: undefined, description: 'The unique identifier (UUID) of the administration (Administratie)' },
      { displayName: 'Administration Name', name: 'administratieNaam', type: 'string', default: undefined, description: 'The name (Administratienaam) of the administration' },
      { displayName: 'Article Code Max Length', name: 'artikelcodeMaxLengte', type: 'number', default: undefined, description: 'The maximum length (Maximale lengte) of article codes (Artikelcodes)' },
      { displayName: 'Article Code Type', name: 'artikelcodeSoort', type: 'string', default: undefined, description: 'The type (Soort) of article code (Artikelcode), for example Numeric' },
      { displayName: 'Article Purchase Price Excl. VAT', name: 'inkoopprijsArtikelbestandExclusiefBtw', type: 'boolean', default: false, description: 'Whether article purchase prices (Inkoopprijzen) are stored excluding VAT (Exclusief btw)' },
      { displayName: 'Article Selling Price Excl. VAT', name: 'verkoopprijsArtikelbestandExclusiefBtw', type: 'boolean', default: false, description: 'Whether article selling prices (Verkoopprijzen) are stored excluding VAT (Exclusief btw)' },
      { displayName: 'Attach Invoice to Sales Entry', name: 'factuurAlsBijlageVerkoopboeking', type: 'boolean', default: false, description: 'Whether to attach the invoice (Factuur) to the sales entry (Verkoopboeking)' },
      { displayName: 'Auto-Fill Delivered Column', name: 'kolomGeleverdAutomatischVullen', type: 'boolean', default: false, description: 'Whether to automatically fill the delivered column (Kolom geleverd)' },
      { displayName: 'Bank Account Number', name: 'bankrekeningnummer', type: 'string', default: undefined, description: 'The bank account number (Bankrekeningnummer) of the company' },
      { displayName: 'BIC', name: 'bic', type: 'string', default: undefined, description: 'The Bank Identifier Code (BIC) of the company' },
      { displayName: 'Calculate Interim VAT Adjustments', name: 'tussentijdseSuppletiesBerekenen', type: 'boolean', default: false, description: 'Whether to calculate interim supplementary VAT returns (Tussentijdse suppleties)' },
      { displayName: 'Carry Over Subscription', name: 'abonnementOvernemen', type: 'boolean', default: false, description: 'Whether to carry over subscription information (Abonnement overnemen)' },
      { displayName: 'Chamber of Commerce Number', name: 'kvKNummer', type: 'string', default: undefined, description: 'The Chamber of Commerce registration number (KvK-nummer) of the company' },
      { displayName: 'City', name: 'plaats', type: 'string', default: undefined, description: 'The city or locality (Plaats) of the company' },
      { displayName: 'Company Name', name: 'bedrijfsnaam', type: 'string', default: undefined, description: 'The registered company name (Bedrijfsnaam)' },
      { displayName: 'Contact Person', name: 'contactpersoon', type: 'string', default: undefined, description: 'The primary contact person (Contactpersoon) of the company' },
      { displayName: 'Copy Text Lines to Backorder', name: 'tekstregelsOvernemenNaarBackorder', type: 'string', default: undefined, description: 'How text lines (Tekstregels) are copied to backorders, for example None' },
      { displayName: 'Current Fiscal Year', name: 'huidigBoekjaar', type: 'number', default: undefined, description: 'The current fiscal year (Huidig boekjaar) in YYYY format' },
      { displayName: 'Decimal Places for Article Prices', name: 'aantalDecimalenArtikelprijzen', type: 'number', default: undefined, description: 'The number of decimal places (Aantal decimalen) used for article prices (Artikelprijzen)' },
      { displayName: 'Decimal Places for Article Quantities', name: 'aantalDecimalenArtikelaantallen', type: 'number', default: undefined, description: 'The number of decimal places (Aantal decimalen) used for article quantities (Artikelaantallen)' },
      { displayName: 'Email', name: 'email', type: 'string', default: undefined, placeholder: 'name@email.com', description: 'The contact email address of the company' },
      { displayName: 'Fax', name: 'fax', type: 'string', default: undefined, description: 'The fax number of the company' },
      {
        displayName: 'Foreign VAT General Ledger',
        name: 'buitenlandseBtwGrootboek',
        type: 'fixedCollection',
        typeOptions: { multipleValues: false },
        default: {},
        placeholder: 'Add Foreign VAT General Ledger',
        description: 'The general ledger account (Grootboekrekening) used for foreign VAT (Buitenlandse btw)',
        options: [
          {
            displayName: 'Rule',
            name: 'values',
            typeOptions: { multipleValues: false },
            values: [
              { displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'The unique identifier (UUID) of the general ledger account (Grootboekrekening)' },
              { displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'The URI of the general ledger account (Grootboekrekening)' },
            ]
          }
        ]
      },
      { displayName: 'Foreign VAT Invoicing', name: 'factureerBuitenlandsBtw', type: 'boolean', default: false, description: 'Whether to apply foreign VAT (Buitenlandse btw) when invoicing' },
      {
        displayName: 'Foreign VAT Ranges',
        name: 'factureerBuitenlandsBtwRanges',
        type: 'fixedCollection',
        typeOptions: { multipleValues: true },
        default: {},
        options: [
          {
            displayName: 'Rule',
            name: 'values',
            values: [
              { displayName: 'From', name: 'from', type: 'number', default: undefined },
              { displayName: 'To', name: 'to', type: 'number', default: undefined },
            ],
          },
        ],
      },
      { displayName: 'Free Text 1', name: 'vrijeTekst1', type: 'string', default: undefined, description: 'The first free-text field (Vrije tekst 1)' },
      { displayName: 'Free Text 2', name: 'vrijeTekst2', type: 'string', default: undefined, description: 'The second free-text field (Vrije tekst 2)' },
      { displayName: 'Free Text 3', name: 'vrijeTekst3', type: 'string', default: undefined, description: 'The third free-text field (Vrije tekst 3)' },
      { displayName: 'Free Text 4', name: 'vrijeTekst4', type: 'string', default: undefined, description: 'The fourth free-text field (Vrije tekst 4)' },
      { displayName: 'IBAN', name: 'iban', type: 'string', default: undefined, description: 'The International Bank Account Number (IBAN) of the company' },
      { displayName: 'ICP Filing Period Type', name: 'icpAangiftePeriodeSoort', type: 'string', default: undefined, description: 'The filing period type (Aangifteperiodesoort) for intra-Community supplies declarations (ICP-aangifte)' },
      { displayName: 'Inventory System', name: 'voorraadSysteem', type: 'string', default: undefined, description: 'The inventory system (Voorraadsysteem) used by the company, for example FIFO' },
      { displayName: 'Inventory Update Moment', name: 'momentVoorraadBijwerken', type: 'string', default: undefined, description: 'When inventory levels are updated (Moment voorraad bijwerken)' },
      { displayName: 'Leading Zeros in General Ledger Accounts', name: 'aantalVoorloopnullenGrootboekrekeningen', type: 'number', default: undefined, description: 'The number of leading zeros (Voorloopnullen) used for general ledger account numbers (Grootboekrekeningen)' },
      { displayName: 'Legal Form', name: 'rechtsvorm', type: 'string', default: undefined, description: 'The legal form (Rechtsvorm) of the company' },
      { displayName: 'Marking Behavior for Importing Bank Statements', name: 'markeergedragInlezenBankafschriften', type: 'string', default: undefined, description: 'The marking behavior (Markeergedrag) applied when importing bank statements (Bankafschriften)' },
      { displayName: 'Mobile Phone', name: 'mobieleTelefoon', type: 'string', default: undefined, description: 'The mobile phone number (Mobiele telefoon) of the company' },
      { displayName: 'Next Cash Receipt Number', name: 'volgendContantbonnummer', type: 'number', default: undefined, description: 'The next number (Volgend contantbonnummer) to assign to a cash receipt (Contantbon)' },
      { displayName: 'Next Invoice Number', name: 'volgendFactuurnummer', type: 'number', default: undefined, description: 'The next invoice number (Volgend factuurnummer) to use' },
      { displayName: 'Next Purchase Order Number', name: 'volgendInkoopordernummer', type: 'number', default: undefined, description: 'The next purchase order number (Volgend inkoopordernummer) to use' },
      { displayName: 'Next Sales Order Number', name: 'volgendVerkoopordernummer', type: 'number', default: undefined, description: 'The next sales order number (Volgend verkoopordernummer) to use' },
      { displayName: 'Partial Deliveries Default On', name: 'deelleveringOrdersDefaultAan', type: 'boolean', default: false, description: 'Whether partial deliveries (Deelleveringen) are enabled by default for orders' },
      { displayName: 'Phone', name: 'telefoon', type: 'string', default: undefined, description: 'The primary telephone number (Telefoon) of the company' },
      { displayName: 'Postal Code', name: 'postcode', type: 'string', default: undefined, description: 'The postal code (Postcode) of the company' },
      { displayName: 'Preferences During Posting', name: 'voorkeurenTijdensBoeken', type: 'boolean', default: false, description: 'Whether preferences (Voorkeuren) are applied during accounting entry (Boeken)' },
      {
        displayName: 'Purchase Invoices to Receive Account',
        name: 'rekeningTeOntvangenInkoopfacturen',
        type: 'fixedCollection',
        typeOptions: { multipleValues: false },
        default: {},
        placeholder: 'Add Purchase Invoices to Receive Account',
        description: 'The general ledger account (Rekening te ontvangen inkoopfacturen) associated with purchase invoices to be received',
        options: [
          {
            displayName: 'Rule',
            name: 'values',
            typeOptions: { multipleValues: false },
            values: [
              { displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'The unique identifier (UUID) of the general ledger account (Grootboekrekening)' },
              { displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'The URI of the general ledger account (Grootboekrekening)' },
            ]
          }
        ]
      },
      { displayName: 'Sales Order Line Discount', name: 'regelkortingVerkooporder', type: 'string', default: undefined, description: 'How line discounts (Regelkorting) are calculated for sales orders (Verkooporders)' },
      { displayName: 'Sales Order Review Max Postponement Days', name: 'drempelbedragVerkooporderbeheerMaxDagenUitstel', type: 'number', default: undefined, description: 'The maximum number of postponement days (Max dagen uitstel) for sales order management (Verkooporderbeheer)' },
      { displayName: 'Sales Order Review Threshold Amount', name: 'drempelbedragVerkooporderbeheer', type: 'number', default: undefined, description: 'The threshold amount (Drempelbedrag) for sales order management (Verkooporderbeheer)' },
      { displayName: 'Sales Order Stock From Level', name: 'verkooporderVoorraadVanafNiveau', type: 'string', default: undefined, description: 'The inventory level (Voorraadniveau) used for sales orders (Verkooporders)' },
      { displayName: 'Show Stock Columns in Purchasing', name: 'voorraadkolommenTonenInInkoop', type: 'boolean', default: false, description: 'Whether to show inventory columns (Voorraadkolommen) in purchasing (Inkoop)' },
      { displayName: 'Show Stock in Search Window', name: 'voorraadTonenInZoekvenster', type: 'boolean', default: false, description: 'Whether to display inventory levels (Voorraad) in the search window (Zoekvenster)' },
      {
        displayName: 'Small Business Scheme',
        name: 'kleineOndernemersregeling',
        type: 'fixedCollection',
        typeOptions: { multipleValues: false },
        default: {},
        placeholder: 'Add Small Business Scheme',
        description: 'Settings for the small business scheme (Kleineondernemersregeling, KOR)',
        options: [
          {
            displayName: 'Rule',
            name: 'values',
            typeOptions: { multipleValues: false },
            values: [
              { displayName: 'Is Small Business Scheme Active', name: 'isKleineOndernemersRegelingActief', type: 'boolean', default: false, description: 'Whether the small business scheme (Kleineondernemersregeling, KOR) is active' },
              { displayName: 'Maximum Amount Full Settlement', name: 'maximaalBedragVolledigeVerrekening', type: 'number', default: undefined, description: 'The maximum amount (Maximaal bedrag) for full settlement (Volledige verrekening)' },
              { displayName: 'Maximum Amount Small Business Scheme', name: 'maximaalBedragKleineOndernemersRegeling', type: 'number', default: undefined, description: 'The maximum amount (Maximaal bedrag) for the small business scheme (Kleineondernemersregeling)' },
            ]
          }
        ]
      },
      { displayName: 'Start Month Fiscal Year', name: 'beginmaandFiscaleBoekjaar', type: 'number', default: undefined, description: 'The starting month (Beginmaand) of the fiscal year (Boekjaar), from 1 to 12' },
      { displayName: 'Stock Control on Order Entry', name: 'voorraadcontroleOrderinvoer', type: 'boolean', default: false, description: 'Whether inventory availability (Voorraadcontrole) is checked during order entry (Orderinvoer)' },
      { displayName: 'Stock Count Start Date', name: 'begindatumVoorraadtelling', type: 'dateTime', default: undefined, description: 'The start date (Begindatum) of the inventory count (Voorraadtelling)' },
      {
        displayName: 'Stock Differences Journal',
        name: 'dagboekVoorraadverschillen',
        type: 'fixedCollection',
        typeOptions: { multipleValues: false },
        default: {},
        placeholder: 'Add Stock Differences Journal',
        description: 'The journal (Dagboek) used to record stock differences (Voorraadverschillen)',
        options: [
          {
            displayName: 'Rule',
            name: 'values',
            typeOptions: { multipleValues: false },
            values: [
              { displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'The unique identifier (UUID) of the journal (Dagboek)' },
              { displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'The URI of the journal (Dagboek)' },
            ]
          }
        ]
      },
      { displayName: 'UBL Files Folder', name: 'mapUBLBestanden', type: 'string', default: undefined, description: 'The folder (Map) used for UBL files (UBL-bestanden)' },
      { displayName: 'Use Backorders', name: 'backorderGebruiken', type: 'boolean', default: false, description: 'Whether backorder processing (Backorders gebruiken) is enabled' },
      { displayName: 'VAT Filing Period Type', name: 'btwAangiftePeriodeSoort', type: 'string', default: undefined, description: 'The filing period type (Aangifteperiodesoort) for VAT returns (Btw-aangiftes)' },
      { displayName: 'VAT Identification Number', name: 'btwIdentificatieNummer', type: 'string', default: undefined, description: 'The VAT identification number (Btw-identificatienummer) of the company' },
      { displayName: 'VAT Number', name: 'btwNummer', type: 'string', default: undefined },
      { displayName: 'VAT Number Fiscal Unity', name: 'btwNummerFiscaleEenheid', type: 'string', default: undefined, description: 'The VAT number (Btw-nummer) of the fiscal unity (Fiscale eenheid)' },
      { displayName: 'VAT Return Credit Restriction Percentage', name: 'btwPercentageAangifteKredietbeperking', type: 'number', default: undefined, description: 'The percentage (Percentage) used for credit restriction (Kredietbeperking) in VAT returns (Btw-aangiftes)' },
      { displayName: 'Website', name: 'website', type: 'string', default: undefined, description: 'The website URL of the company' },
    ]
  }
];
