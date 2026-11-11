import { INodeProperties } from 'n8n-workflow';

export const bankboekingenDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		default: 'getManyBankboekingen',
		options: [
			{ name: "Delete Bank Entry", value: "deleteBankboekingen", action: "Delete bank entry", description: "Delete a bank entry (Bankboeking) from SnelStart" },
			{ name: "Get Bank Entry", value: "getBankboekingen", action: "Get bank entry", description: "Retrieve a bank entry (Bankboeking) from SnelStart" },
			{ name: "Get Many Bank Entries", value: "getManyBankboekingen", action: "Get many bank entries", description: "Retrieve multiple bank entries (Bankboekingen) from SnelStart" },
			{ name: "Post Bank Entries", value: "postManyBankboekingen", action: "Post bank entries", description: "Post bank entries (Bankboekingen) to SnelStart" },
			{ name: "Put Bank Entry", value: "putBankboekingen", action: "Put bank entry", description: "Put a bank entry (Bankboeking) in SnelStart" }
		],
		displayOptions: {
			show: {
				resource: ['bankboekingen'],
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
				resource: ['bankboekingen'],
				operation: ['postManyBankboekingen', 'postBankboekingen'],
			},
		},
	},
	{
		displayName: 'Bank Entry ID',
		name: 'bankboekingen_id',
		type: 'string',
		default: undefined,
		required: true,
		description: 'The ID of the bank entry (Bankboeking) to retrieve',
		displayOptions: {
			show: {
				resource: ['bankboekingen'],
				operation: ['getBankboekingen', 'putBankboekingen', 'deleteBankboekingen'],
			},
		},
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: true,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['bankboekingen'],
				operation: ['getManyBankboekingen'],
			},
		},
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				resource: ['bankboekingen'],
				operation: ['getManyBankboekingen'],
			},
		},
		options: [
			{ displayName: 'Filter', name: '$filter', type: 'string', default: undefined, description: 'OData filter string to filter the results' },
			{ displayName: 'Skip', name: '$skip', type: 'number', default: 0, description: 'The number of items to skip', displayOptions: { show: { '/returnAll': [false] }, }, },
			{ displayName: 'Top', name: '$top', type: 'number', default: undefined, description: 'The number of items to return', displayOptions: { show: { '/returnAll': [false] }, }, },
		]
	},
	{
		displayName: 'Date',
		name: 'datum',
		type: 'dateTime',
		default: undefined,
		description: 'The date (Datum) of the bank entry (Bankboeking)',
		required: true,
		displayOptions: {
			show: {
				resource: ['bankboekingen'],
				operation: ['postManyBankboekingen'],
			},
		},
	},
	{
		displayName: 'Total Spent',
		name: 'bedragUitgegeven',
		type: 'number',
		default: undefined,
		description: 'The total amount spent (Bedrag uitgegeven) in the bank entry (Bankboeking)',
		required: true,
		displayOptions: {
			show: {
				resource: ['bankboekingen'],
				operation: ['postManyBankboekingen'],
			},
		},
	},
	{
		displayName: 'Total Received',
		name: 'bedragOntvangen',
		type: 'number',
		default: undefined,
		description: 'The total amount received (Bedrag ontvangen) in the bank entry (Bankboeking)',
		required: true,
		displayOptions: {
			show: {
				resource: ['bankboekingen'],
				operation: ['postManyBankboekingen'],
			},
		},
	},
	{
		displayName: 'Journal',
		name: 'dagboek',
		type: 'fixedCollection',
		default: {},
		placeholder: 'Add Journal',
		description: 'The journal (Dagboek) associated with the bank entry (Bankboeking)',
		required: true,
		typeOptions: { multipleValues: false },
		displayOptions: {
			show: {
				resource: ['bankboekingen'],
				operation: ['postManyBankboekingen'],
			},
		},
		options: [
			{
				displayName: 'Journal',
				name: 'values',
				default: {},
				values: [
					{ displayName: 'ID', name: 'id', type: 'string', default: undefined, required: true, description: 'The ID of the journal (Dagboek) the bank entry belongs to' },
					{ displayName: 'URI', name: 'uri', type: 'string', default: undefined, required: true, description: 'The URI of the journal (Dagboek) the bank entry belongs to' },
				],
			},
		],
	},
	{
		displayName: 'Full Response',
		name: 'fullResponse',
		type: 'boolean',
		default: false,
		description: 'Whether to return the full response object instead of only the data',
		displayOptions: {
			show: {
				resource: ['bankboekingen'],
				operation: ['getManyBankboekingen'],
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
				resource: ['bankboekingen'],
				operation: ['postManyBankboekingen', 'putBankboekingen'],
			},
		},
		options: [
			{ displayName: 'Description', name: 'omschrijving', type: 'string', default: undefined, description: 'The description (Omschrijving) of the bank entry (Bankboeking)' },
			{ displayName: 'Document Number', name: 'boekstuk', type: 'string', default: undefined, description: 'The document number (Boekstuk) of the bank entry (Bankboeking)' },
			{
				displayName: 'General Ledger Posting Lines',
				name: 'grootboekBoekingsRegels',
				type: 'fixedCollection',
				typeOptions: { multipleValues: true },
				default: {},
				placeholder: 'Add General Ledger Posting Line',
				description: 'The general ledger posting lines (Grootboekboekingsregels) of the bank entry (Bankboeking)',
				options: [
					{
						displayName: 'Line',
						name: 'values',
						typeOptions: { multipleValues: false },
						values: [
							{
								displayName: 'Cost Center',
								name: 'kostenplaats',
								type: 'fixedCollection',
								default: {},
								options: [
									{
										name: 'values',
										displayName: 'Cost Center',
										values: [
											{ displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'The ID of the cost center (Kostenplaats) as System.Guid' },
											{ displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'The URI of the cost center (Kostenplaats)' },
										],
									},
								],
							},
							{ displayName: 'Credit', name: 'credit', type: 'number', default: undefined, description: 'The credit amount (Creditbedrag) of the posting line' },
							{ displayName: 'Debit', name: 'debet', type: 'number', default: undefined, description: 'The debit amount (Debetbedrag) of the posting line' },
							{ displayName: 'Description', name: 'omschrijving', type: 'string', default: undefined, description: 'The description (Omschrijving) of the posting line' },
							{
								displayName: 'General Ledger',
								name: 'grootboek',
								type: 'fixedCollection',
								default: {},
								options: [
									{
										name: 'values',
										displayName: 'General Ledger',
										values: [
											{ displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'The ID of the general ledger (Grootboek) as System.Guid' },
											{ displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'The URI of the general ledger (Grootboek)' },
										],
									},
								],
							},
							{ displayName: 'VAT Type', name: 'btwSoort', type: 'string', default: undefined, description: 'The VAT type (Btw-soort) of the posting line, for example "Geen" (None)' },
						],
					},
				],
			},
			{ displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'The public identifier of the bank entry (Bankboeking) as System.Guid', },
			{ displayName: 'Mark for Attention', name: 'markering', type: 'boolean', default: false, description: 'Whether the bank entry (Bankboeking) is marked (Markering) as requiring extra attention' },
			{ displayName: 'Modified By Accountant', name: 'gewijzigdDoorAccountant', type: 'boolean', default: false, description: 'Whether the bank entry (Bankboeking) was modified by an accountant (Gewijzigd door accountant)' },
			{ displayName: 'Modified On', name: 'modifiedOn', type: 'dateTime', default: undefined, description: 'The date and time the bank entry (Bankboeking) was last modified' },
			{
				displayName: 'Purchase Entry Posting Lines',
				name: 'inkoopboekingBoekingsRegels',
				type: 'fixedCollection',
				typeOptions: { multipleValues: true },
				default: {},
				placeholder: 'Add Purchase Entry Posting Line',
				description: 'The purchase entry posting lines (Inkoopboekingboekingsregels) of the bank entry (Bankboeking)',
				options: [
					{
						displayName: 'Line',
						name: 'values',
						typeOptions: { multipleValues: false },
						values: [
							{
								displayName: 'Entry ID',
								name: 'boekingId',
								type: 'fixedCollection',
								default: {},
								options: [
									{
										name: 'values',
										displayName: 'Entry ID',
										placeholder: 'Add Entry ID',
										values: [
											{ displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'The ID of the entry (Boeking) as System.Guid' },
											{ displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'The URI of the entry (Boeking)' },
										],
									},
								],
							},
							{ displayName: 'Description', name: 'omschrijving', type: 'string', default: undefined, description: 'The description (Omschrijving) of the purchase entry posting line (Inkoopboekingboekingsregel)' },
							{ displayName: 'Debit', name: 'debet', type: 'number', default: undefined, description: 'The debit amount (Debetbedrag) of the purchase entry posting line' },
							{ displayName: 'Credit', name: 'credit', type: 'number', default: undefined, description: 'The credit amount (Creditbedrag) of the purchase entry posting line' }
						],
					},
				],
			},
			{
				displayName: 'Sales Entry Posting Lines',
				name: 'verkoopboekingBoekingsRegels',
				type: 'fixedCollection',
				typeOptions: { multipleValues: true },
				default: {},
				placeholder: 'Add Sales Entry Posting Line',
				description: 'The sales entry posting lines (Verkoopboekingboekingsregels) of the bank entry (Bankboeking)',
				options: [
					{
						displayName: 'Line',
						name: 'values',
						typeOptions: { multipleValues: false },
						values: [
							{
								displayName: 'Entry ID',
								name: 'boekingId',
								type: 'fixedCollection',
								default: {},
								options: [
									{
										name: 'values',
										displayName: 'Entry ID',
										placeholder: 'Add Entry ID',
										values: [
											{ displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'The ID of the entry (Boeking) as System.Guid' },
											{ displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'The URI of the entry (Boeking)' },
										],
									},
								],
							},
							{ displayName: 'Description', name: 'omschrijving', type: 'string', default: undefined, description: 'The description (Omschrijving) of the sales entry posting line (Verkoopboekingboekingsregel)' },
							{ displayName: 'Debit', name: 'debet', type: 'number', default: undefined, description: 'The debit amount (Debetbedrag) of the sales entry posting line' },
							{ displayName: 'Credit', name: 'credit', type: 'number', default: undefined, description: 'The credit amount (Creditbedrag) of the sales entry posting line' }
						],
					},
				],
			},
			{ displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'The URI of the bank entry (Bankboeking)', },
			{
				displayName: 'VAT Posting Lines',
				name: 'btwBoekingsregels',
				type: 'fixedCollection',
				typeOptions: { multipleValues: true },
				default: {},
				placeholder: 'Add VAT Posting Line',
				description: 'The VAT posting lines (Btw-boekingsregels) of the bank entry (Bankboeking)',
				options: [
					{
						displayName: 'Line',
						name: 'values',
						typeOptions: { multipleValues: false },
						values: [
							{ displayName: 'Debit', name: 'debet', type: 'number', default: undefined, description: 'The debit amount (Debetbedrag) of the VAT posting line' },
							{ displayName: 'Credit', name: 'credit', type: 'number', default: undefined, description: 'The credit amount (Creditbedrag) of the VAT posting line' },
							{ displayName: 'Type', name: 'type', type: 'string', default: undefined, description: 'The VAT type (Btw-soort) of the posting line' },
							{ displayName: 'Rate', name: 'tarief', type: 'string', default: undefined, description: 'The VAT rate (Btw-tarief) of the posting line' },
						],
					},
				],
			},
		],
	},
];
