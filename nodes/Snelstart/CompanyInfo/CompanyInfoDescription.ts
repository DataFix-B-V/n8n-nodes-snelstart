import { INodeProperties } from 'n8n-workflow';

export const companyInfoDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		default: 'getManyCompanyInfo',
		options: [
			{ name: 'Get Many Company Info', value: 'getManyCompanyInfo', action: 'Get many company info' },
			{ name: 'Put Company Info', value: 'putManyCompanyInfo', action: 'Put company info' },
		],
		displayOptions: {
			show: {
				resource: ['companyInfo'],
			},
		},
	},
	{
		displayName:
			'Heads-up: Not all POST endpoints are fully tested. Some fields may be missing and some are required even if the official docs mark them optional. Refer to the provider’s docs and API error messages. Fields marked (*) are verified as required.',
		name: 'postNotice',
		type: 'notice',
		default: '',
		displayOptions: {
			show: {
				resource: ['companyInfo'],
				operation: ['putManyCompanyInfo'],
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
			{
				displayName: 'Accounts Receivable Purchase Invoices',
				name: 'rekeningTeOntvangenInkoopfacturen',
				type: 'fixedCollection',
				typeOptions: { multipleValues: false },
				default: {},
				placeholder: 'Add Account Receivable Purchase Invoices',
				description: 'The data container for a ledger reference',
				options: [
					{
						displayName: 'Rule',
						name: 'values',
						typeOptions: { multipleValues: false },
						values: [
							{ displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'Unique identifier (UUID) of the ledger account' },
							{ displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'URI of the ledger account' },
						]
					}
				]
			},
			{ displayName: 'Address', name: 'adres', type: 'string', default: undefined, description: 'Street and number' },
			{ displayName: 'Administration Identifier', name: 'administratieIdentifier', type: 'string', default: undefined, description: 'Unique identifier (UUID) of the administration' },
			{ displayName: 'Administration Name', name: 'administratieNaam', type: 'string', default: undefined, description: 'Name of the administration' },
			{ displayName: 'Attach Invoice to Sales Booking', name: 'factuurAlsBijlageVerkoopboeking', type: 'boolean', default: false, description: 'Whether to include invoice as attachment in sales booking' },
			{ displayName: 'Auto-Fill Delivered Column', name: 'kolomGeleverdAutomatischVullen', type: 'boolean', default: false, description: 'Whether to automatically fill the “Delivered” column' },
			{ displayName: 'Bank Account Number', name: 'bankrekeningnummer', type: 'string', default: undefined, description: 'Domestic bank account number' },
			{ displayName: 'BIC', name: 'bic', type: 'string', default: undefined, description: 'Bank Identifier Code' },
			{ displayName: 'Calculate Interim VAT Supplements', name: 'tussentijdseSuppletiesBerekenen', type: 'boolean', default: false, description: 'Whether to calculate interim VAT supplements' },
			{ displayName: 'Carry Over Subscription', name: 'abonnementOvernemen', type: 'boolean', default: false, description: 'Whether to carry subscription data into new documents' },
			{ displayName: 'Chamber of Commerce Number', name: 'kvKNummer', type: 'string', default: undefined, description: 'KvK registration number' },
			{ displayName: 'City', name: 'plaats', type: 'string', default: undefined, description: 'City or locality' },
			{ displayName: 'Company Name', name: 'bedrijfsnaam', type: 'string', default: undefined, description: 'Registered company name' },
			{ displayName: 'Contact Person', name: 'contactpersoon', type: 'string', default: undefined, description: 'Primary contact person' },
			{ displayName: 'Copy Text Lines to Backorder', name: 'tekstregelsOvernemenNaarBackorder', type: 'string', default: undefined, description: 'How to copy text lines to backorders (e.g. None)' },
			{ displayName: 'Current Fiscal Year', name: 'huidigBoekjaar', type: 'number', default: undefined, description: 'Current fiscal year (YYYY)' },
			{ displayName: 'Decimal Places for Item Prices', name: 'aantalDecimalenArtikelprijzen', type: 'number', default: undefined, description: 'Number of decimals for item prices' },
			{ displayName: 'Decimal Places for Item Quantities', name: 'aantalDecimalenArtikelaantallen', type: 'number', default: undefined, description: 'Number of decimals for item quantities' },
			{
				displayName: 'Diary Stock Differences',
				name: 'dagboekVoorraadverschillen',
				type: 'fixedCollection',
				typeOptions: { multipleValues: false },
				default: {},
				placeholder: 'Add Diary Stock Differences',
				description: 'The data container for a ledger reference',
				options: [
					{
						displayName: 'Rule',
						name: 'values',
						typeOptions: { multipleValues: false },
						values: [
							{ displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'Unique identifier (UUID) of the diary' },
							{ displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'URI of the diary' },
						]
					}
				]
			},
			{ displayName: 'Email', name: 'email', type: 'string', default: undefined, placeholder: 'name@email.com', description: 'Contact email address' },
			{ displayName: 'Fax', name: 'fax', type: 'string', default: undefined, description: 'Fax number' },
			{ displayName: 'Foreign VAT Invoicing', name: 'factureerBuitenlandsBtw', type: 'boolean', default: false, description: 'Whether to charge foreign VAT on invoices' },
			{
				displayName: 'Foreign VAT Ledger',
				name: 'buitenlandseBtwGrootboek',
				type: 'fixedCollection',
				typeOptions: { multipleValues: false },
				default: {},
				placeholder: 'Add Foreign VAT Ledger',
				description: 'The data container for a ledger reference',
				options: [
					{
						displayName: 'Rule',
						name: 'values',
						typeOptions: { multipleValues: false },
						values: [
							{ displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'Unique identifier (UUID) of the ledger account' },
							{ displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'URI of the ledger account' },
						]
					}
				]
			},
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
							{ displayName: 'To',   name: 'to',   type: 'number', default: undefined },
						],
					},
				],
			},
			{ displayName: 'Free Text 1', name: 'vrijeTekst1', type: 'string', default: undefined, description: 'Free-form field 1' },
			{ displayName: 'Free Text 2', name: 'vrijeTekst2', type: 'string', default: undefined, description: 'Free-form field 2' },
			{ displayName: 'Free Text 3', name: 'vrijeTekst3', type: 'string', default: undefined, description: 'Free-form field 3' },
			{ displayName: 'Free Text 4', name: 'vrijeTekst4', type: 'string', default: undefined, description: 'Free-form field 4' },
			{ displayName: 'IBAN', name: 'iban', type: 'string', default: undefined, description: 'International Bank Account Number' },
			{ displayName: 'ICP Filing Period Type', name: 'icpAangiftePeriodeSoort', type: 'string', default: undefined, description: 'ICP return period type' },
			{ displayName: 'Inventory System', name: 'voorraadSysteem', type: 'string', default: undefined, description: 'Inventory valuation method (e.g. FIFO)' },
			{ displayName: 'Inventory Update Moment', name: 'momentVoorraadBijwerken', type: 'string', default: undefined, description: 'When to update stock (e.g. On posting receipt)' },
			{ displayName: 'Item Code Max Length', name: 'artikelcodeMaxLengte', type: 'number', default: undefined, description: 'Maximum length of the item code' },
			{ displayName: 'Item Code Type', name: 'artikelcodeSoort', type: 'string', default: undefined, description: 'Type of item code (e.g. Numeric)' },
			{ displayName: 'Item Purchase Price Excl. VAT', name: 'inkoopprijsArtikelbestandExclusiefBtw', type: 'boolean', default: false, description: 'Whether to store purchase prices excluding VAT in item master' },
			{ displayName: 'Item Sales Price Excl. VAT', name: 'verkoopprijsArtikelbestandExclusiefBtw', type: 'boolean', default: false, description: 'Whether to store sales prices excluding VAT in item master' },
			{ displayName: 'Leading Zeros in GL Accounts', name: 'aantalVoorloopnullenGrootboekrekeningen', type: 'number', default: undefined, description: 'Number of leading zeros for general ledger accounts' },
			{ displayName: 'Legal Form', name: 'rechtsvorm', type: 'string', default: undefined, description: 'Legal entity type' },
			{ displayName: 'Map UBL Files', name: 'mapUBLBestanden', type: 'string', default: undefined, description: 'UBL file mapping setting' },
			{ displayName: 'Marking Behavior for Importing Bank Statements', name: 'markeergedragInlezenBankafschriften', type: 'string', default: undefined, description: 'Marking behavior when importing bank statements' },
			{ displayName: 'Mobile Phone', name: 'mobieleTelefoon', type: 'string', default: undefined, description: 'Mobile phone number' },
			{ displayName: 'Next Cash Receipt Number', name: 'volgendContantbonnummer', type: 'number', default: undefined, description: 'Next number to use for cash receipts' },
			{ displayName: 'Next Invoice Number', name: 'volgendFactuurnummer', type: 'number', default: undefined, description: 'Next number to use for invoices' },
			{ displayName: 'Next Purchase Order Number', name: 'volgendInkoopordernummer', type: 'number', default: undefined, description: 'Next number to use for purchase orders' },
			{ displayName: 'Next Sales Order Number', name: 'volgendVerkoopordernummer', type: 'number', default: undefined, description: 'Next number to use for sales orders' },
			{ displayName: 'Partial Deliveries Default On', name: 'deelleveringOrdersDefaultAan', type: 'boolean', default: false, description: 'Whether to enable partial deliveries by default for orders' },
			{ displayName: 'Phone', name: 'telefoon', type: 'string', default: undefined, description: 'Primary phone number' },
			{ displayName: 'Postal Code', name: 'postcode', type: 'string', default: undefined, description: 'Postal/ZIP code' },
			{ displayName: 'Preferences During Booking', name: 'voorkeurenTijdensBoeken', type: 'boolean', default: false, description: 'Whether to apply booking-time preferences' },
			{ displayName: 'Sales Order Line Discount', name: 'regelkortingVerkooporder', type: 'string', default: undefined, description: 'How line discount is calculated (e.g. On line amount)' },
			{ displayName: 'Sales Order Review Max Postponement Days', name: 'drempelbedragVerkooporderbeheerMaxDagenUitstel', type: 'number', default: undefined, description: 'Maximum days of postponement for threshold handling' },
			{ displayName: 'Sales Order Review Threshold Amount', name: 'drempelbedragVerkooporderbeheer', type: 'number', default: undefined, description: 'Amount threshold for sales order management/review' },
			{ displayName: 'Sales Order Stock From Level', name: 'verkooporderVoorraadVanafNiveau', type: 'string', default: undefined, description: 'Stock level to use when reserving for sales orders (e.g. All)' },
			{ displayName: 'Show Stock Columns in Purchasing', name: 'voorraadkolommenTonenInInkoop', type: 'boolean', default: false, description: 'Whether to display stock columns in purchase screens' },
			{ displayName: 'Show Stock in Search Window', name: 'voorraadTonenInZoekvenster', type: 'boolean', default: false, description: 'Whether to show stock levels in search dialogs' },
			{
				displayName: 'Small Business Scheme',
				name: 'kleineOndernemersregeling',
				type: 'fixedCollection',
				typeOptions: { multipleValues: false },
				default: {},
				placeholder: 'Add Small Business Scheme',
				description: 'Settings for the small business scheme (KOR)',
				options: [
					{
						displayName: 'Rule',
						name: 'values',
						typeOptions: { multipleValues: false },
						values: [
							{ displayName: 'Is Small Business Scheme Active', name: 'isKleineOndernemersRegelingActief' , type: 'boolean', default: false, description: 'Whether the small business scheme is active' },
							{ displayName: 'Maximum Amount Full Settlement', name: 'maximaalBedragVolledigeVerrekening', type: 'number', default: undefined, description: 'Maximum amount for full settlement' },
							{ displayName: 'Maximum Amount Small Business Scheme', name: 'maximaalBedragKleineOndernemersRegeling', type: 'number', default: undefined, description: 'Maximum amount for small business scheme' },
						]
					}
				]
			},
			{ displayName: 'Start Month Fiscal Year', name: 'beginmaandFiscaleBoekjaar', type: 'number', default: undefined, description: 'Start month of fiscal year (1–12)' },
			{ displayName: 'Stock Control on Order Entry', name: 'voorraadcontroleOrderinvoer', type: 'boolean', default: false, description: 'Whether to validate stock when entering orders' },
			{ displayName: 'Stock Count Start Date', name: 'begindatumVoorraadtelling', type: 'dateTime', default: undefined, description: 'Start date for inventory counting (ISO date string)' },
			{ displayName: 'Use Backorders', name: 'backorderGebruiken', type: 'boolean', default: false, description: 'Whether to enable backorder processing' },
			{ displayName: 'VAT Filing Period Type', name: 'btwAangiftePeriodeSoort', type: 'string', default: undefined, description: 'VAT return period type' },
			{ displayName: 'VAT Identification Number', name: 'btwIdentificatieNummer', type: 'string', default: undefined, description: 'VAT ID (e.g., NL VAT ID)' },
			{ displayName: 'VAT Number', name: 'btwNummer', type: 'string', default: undefined },
			{ displayName: 'VAT Number Fiscal Unity', name: 'btwNummerFiscaleEenheid', type: 'string', default: undefined, description: 'VAT number of the fiscal unity' },
			{ displayName: 'VAT Return Credit Restriction Percentage', name: 'btwPercentageAangifteKredietbeperking', type: 'number', default: undefined, description: 'Percentage for VAT return credit restriction' },
			{ displayName: 'Website', name: 'website', type: 'string', default: undefined, description: 'Company website URL' },
		]
	}
];
