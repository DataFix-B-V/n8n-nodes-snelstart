import { INodeProperties } from 'n8n-workflow';

export const bankboekingenDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		default: 'getManyBankboekingen',
		options: [
			{ name: "Delete Bankboekingen", value: "deleteBankboekingen", action: "Delete bankboekingen" },
			{ name: "Get Bankboekingen", value: "getBankboekingen", action: "Get bankboekingen" },
			{ name: "Get Many Bankboekingen", value: "getManyBankboekingen", action: "Get many bankboekingen" },
			{ name: "Post Bankboekingen", value: "postManyBankboekingen", action: "Post bankboekingen" },
			{ name: "Put Bankboekingen", value: "putBankboekingen", action: "Put bankboekingen" }
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
		displayName: 'Bankboekingen ID',
		name: 'bankboekingen_id',
		type: 'string',
		default: undefined,
		required: true,
		description: 'The ID of the bankboekingen to retrieve',
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
			{ displayName: 'Filter', name: '$filter', type: 'string', default: undefined, description: 'OData $filter' },
			{ displayName: 'Skip', name: '$skip', type: 'number', default: 0, description: 'The number of items to skip', displayOptions: { show: { '/returnAll': [false] }, }, },
			{ displayName: 'Top', name: '$top', type: 'number', default: undefined, description: 'The number of items to return', displayOptions: { show: { '/returnAll': [false] }, }, },
		]
	},
	{
		displayName: 'Date',
		name: 'datum',
		type: 'dateTime',
		default: undefined,
		description: 'The date of the bankboekingen is created or last modified',
		required: true,
		displayOptions: {
			show: {
				resource: ['bankboekingen'],
				operation: ['postManyBankboekingen'],
			},
		},
	},
	{
		displayName: 'Total Spend',
		name: 'bedragUitgegeven',
		type: 'number',
		default: undefined,
		description: 'The total amount spent in the bankboekingen',
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
		description: 'The total amount received in the bankboekingen',
		required: true,
		displayOptions: {
			show: {
				resource: ['bankboekingen'],
				operation: ['postManyBankboekingen'],
			},
		},
	},
	{
		displayName: 'Diary',
		name: 'dagboek',
		type: 'fixedCollection',
		default: {},
		placeholder: 'Add Diary',
		description: 'The diary of the bankboekingen reference',
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
				displayName: 'Diary',
				name: 'values',
				default: {},
				values: [
					{ displayName: 'ID', name: 'id', type: 'string', default: undefined, required: true, description: 'The ID of the diary the bankboekingen belongs to' },
					{ displayName: 'URI', name: 'uri', type: 'string', default: undefined, required: true, description: 'The URI of the diary the bankboekingen belongs to' },
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
			{ displayName: 'Description', name: 'omschrijving', type: 'string', default: undefined, description: 'The description of the bankboekingen' },
			{ displayName: 'Document', name: 'boekstuk', type: 'string', default: undefined, description: 'The document number of the bankboekingen' },
			{
				displayName: 'General Ledger Booking Rules',
				name: 'grootboekBoekingsRegels',
				type: 'fixedCollection',
				typeOptions: { multipleValues: true },
				default: {},
				placeholder: 'Add General Ledger Booking Rule',
				description: 'The general ledger booking rules of the bankboekingen',
				options: [
					{
						displayName: 'Rule',
						name: 'values',
						typeOptions: { multipleValues: false },
						values: [
							{
								displayName: 'Cost Center (Kostenplaats)',
								name: 'kostenplaats',
								type: 'fixedCollection',
								default: {},
								options: [
									{
										name: 'values',
										displayName: 'Cost Center (Kostenplaats)',
										values: [
											{ displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'Kostenplaats-ID (GUID)' },
											{ displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'Kostenplaats-resource URI' },
										],
									},
								],
							},
							{ displayName: 'Credit', name: 'credit', type: 'number', default: undefined, description: 'Credit bedrag' },
							{ displayName: 'Debit', name: 'debet', type: 'number', default: undefined, description: 'Debet bedrag' },
							{ displayName: 'Description', name: 'omschrijving', type: 'string', default: undefined, description: 'Omschrijving van de regel' },
							{
								displayName: 'Ledger (Grootboek)',
								name: 'grootboek',
								type: 'fixedCollection',
								default: {},
								options: [
									{
										name: 'values',
										displayName: 'Ledger (Grootboek)',
										values: [
											{ displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'Grootboek-ID (GUID)' },
											{ displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'Grootboek-resource URI' },
										],
									},
								],
							},
							{ displayName: 'VAT Type (btwSoort)', name: 'btwSoort', type: 'string', default: undefined, description: 'E.g. "Geen".' },
						],
					},
				],
			},
			{ displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'The public identifier of the bankboekingen (GUID)', },
			{ displayName: 'Mark It', name: 'markering', type: 'boolean', default: false, description: 'Whether this bankboeking requires extra attention' },
			{ displayName: 'Modified By Accountant', name: 'gewijzigdDoorAccountant', type: 'boolean', default: false, description: 'Whether the bankboekingen was modified by an accountant' },
			{ displayName: 'Modified On', name: 'modifiedOn', type: 'dateTime', default: undefined, description: 'The modification date of the bankboekingen to fetch' },
			{
				displayName: 'Purchase Entry Booking Rules',
				name: 'inkoopboekingBoekingsRegels',
				type: 'fixedCollection',
				typeOptions: { multipleValues: true },
				default: {},
				placeholder: 'Add Purchase Entry Booking Rule',
				description: 'The purchase entry booking rules of the bankboekingen',
				options: [
					{
						displayName: 'Rule',
						name: 'values',
						typeOptions: { multipleValues: false },
						values: [
							{
								displayName: 'Boeking ID',
								name: 'boekingId',
								type: 'fixedCollection',
								default: {},
								options: [
									{
										name: 'values',
										displayName: 'Boeking ID',
										placeholder: 'Add Boeking ID',
										values: [
											{ displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'Boeking-ID (GUID)' },
											{ displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'Boeking-resource URI' },
										],
									},
								],
							},
							{ displayName: 'Description', name: 'omschrijving', type: 'string', default: undefined, description: 'Description of the Purchase Entry Boeking Rule' },
							{ displayName: 'Debet', name: 'debet', type: 'number', default: undefined, description: 'Debet amount' },
							{ displayName: 'Credit', name: 'credit', type: 'number', default: undefined, description: 'Credit amount' }
						],
					},
				],
			},
			{
				displayName: 'Sales Entry Booking Rules',
				name: 'verkoopboekingBoekingsRegels',
				type: 'fixedCollection',
				typeOptions: { multipleValues: true },
				default: {},
				placeholder: 'Add Sales Entry Booking Rule',
				description: 'The sales entry booking rules of the bankboekingen',
				options: [
					{
						displayName: 'Rule',
						name: 'values',
						typeOptions: { multipleValues: false },
						values: [
							{
								displayName: 'Boeking ID',
								name: 'boekingId',
								type: 'fixedCollection',
								default: {},
								options: [
									{
										name: 'values',
										displayName: 'Boeking ID',
										placeholder: 'Add Boeking ID',
										values: [
											{ displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'Boeking-ID (GUID)' },
											{ displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'Boeking-resource URI' },
										],
									},
								],
							},
							{ displayName: 'Description', name: 'omschrijving', type: 'string', default: undefined, description: 'Description of the Sales Entry Boeking Rule' },
							{ displayName: 'Debet', name: 'debet', type: 'number', default: undefined, description: 'Debet amount' },
							{ displayName: 'Credit', name: 'credit', type: 'number', default: undefined, description: 'Credit amount' }
						],
					},
				],
			},
			{ displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'The URI of the bankboekingen', },
			{
				displayName: 'VAT Booking Rules',
				name: 'btwBoekingsregels',
				type: 'fixedCollection',
				typeOptions: { multipleValues: true },
				default: {},
				placeholder: 'Add VAT Booking Rule',
				description: 'The VAT booking rules of the bankboekingen',
				options: [
					{
						displayName: 'Rule',
						name: 'values',
						typeOptions: { multipleValues: false },
						values: [
							{ displayName: 'Debet', name: 'debet', type: 'number', default: undefined, description: 'Debet amount' },
							{ displayName: 'Credit', name: 'credit', type: 'number', default: undefined, description: 'Credit amount' },
							{ displayName: 'Type', name: 'type', type: 'string', default: undefined, description: 'VAT Type to be Claimed' },
							{ displayName: 'Rate', name: 'tarief', type: 'string', default: undefined, description: 'VAT Rate' },
						],
					},
				],
			},
		],
	},
];


