import { INodeProperties } from 'n8n-workflow';

export const kasboekingenDescription: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    default: 'getManyKasboekingen',
    options: [
      { name: 'Delete Kasboekingen', value: 'deleteKasboekingen', action: 'Delete kasboekingen' },
			{ name: 'Get Kasboekingen', value: 'getKasboekingen', action: 'Get kasboekingen' },
			{ name: 'Get Many Kasboekingen', value: 'getManyKasboekingen', action: 'Get many kasboekingen' },
			{ name: 'Post Many Kasboekingen', value: 'postManyKasboekingen', action: 'Post many kasboekingen' },
			{ name: 'Put Kasboekingen', value: 'putKasboekingen', action: 'Put kasboekingen' },
    ],
    displayOptions: {
      show: { resource: ['kasboekingen'] },
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
				resource: ['kasboekingen'],
				operation: ['postManyKasboekingen', 'putKasboekingen'],
			},
		},
	},
	{
		displayName: 'Kasboeking ID',
		name: 'kasboeking_id',
		type: 'string',
		default: undefined,
		required: true,
		description: 'The ID of the kasboeking (GUID)',
		displayOptions: {
			show: {
				resource: ['kasboekingen'],
				operation: ['getKasboekingen', 'deleteKasboekingen', 'putKasboekingen'],
			},
		},
	},
	{
		displayName: 'Date',
		name: 'datum',
		type: 'dateTime',
		default: undefined,
		required: true,
		description: 'The date of the kasboeking',
		displayOptions: {
			show: {
				resource: ['kasboekingen'],
				operation: ['postManyKasboekingen', 'putKasboekingen'],
			},
		},
	},
	{
		displayName: 'Amount Spent',
		name: 'bedragUitgegeven',
		type: 'number',
		default: undefined,
		required: true,
		description: 'The amount spent in the kasboeking',
		displayOptions: {
			show: {
				resource: ['kasboekingen'],
				operation: ['postManyKasboekingen', 'putKasboekingen'],
			},
		},
	},
	{
		displayName: 'Amount Received',
		name: 'bedragOntvangen',
		type: 'number',
		default: undefined,
		required: true,
		description: 'The amount received in the kasboeking',
		displayOptions: {
			show: {
				resource: ['kasboekingen'],
				operation: ['postManyKasboekingen', 'putKasboekingen'],
			},
		},
	},
	{
		displayName: 'Diary',
		name: 'dagboek',
		type: 'fixedCollection',
		default: {},
		placeholder: 'Add Diary',
		description: 'The diary of the kasboekingen reference',
		required: true,
		typeOptions: { multipleValues: false },
		displayOptions: {
			show: {
				resource: ['kasboekingen'],
				operation: ['postManyKasboekingen', 'putKasboekingen'],
			},
		},
		options: [
			{
				displayName: 'Diary',
				name: 'values',
				values: [
					{ displayName: 'ID', name: 'id', type: 'string', default: undefined, required: true, description: 'The ID of the diary the bankboekingen belongs to' },
					{ displayName: 'URI', name: 'uri', type: 'string', default: undefined, required: true, description: 'The URI of the diary the bankboekingen belongs to' },
				],
			},
		],
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: true,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['kasboekingen'],
				operation: ['getManyKasboekingen'],
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
				resource: ['kasboekingen'],
				operation: ['postManyKasboekingen', 'putKasboekingen'],
			},
		},
		options: [
			{ displayName: 'Changed By Accountant', name: 'gewijzigdDoorAccountant', type: 'boolean', default: false, description: 'Whether this kasboeking has been modified by the accountant' },
			{ displayName: 'Description', name: 'omschrijving', type: 'string', default: undefined, description: 'Description of the kasboeking' },
			{ displayName: 'Document Number', name: 'boekstuk', type: 'string', default: undefined, description: 'The document number of the kasboeking' },
			{
				displayName: 'General Ledger Booking Lines',
				name: 'grootboekBoekingsRegels',
				type: 'fixedCollection',
				default: {},
				placeholder: 'Add General Ledger Booking Line',
				description: 'General ledger booking lines of the kasboeking',
				typeOptions: { multipleValues: true },
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
							{ displayName: 'Credit', name: 'credit', type: 'number', default: undefined, description: 'The credit amount of the general ledger booking line' },
							{ displayName: 'Debit', name: 'debet', type: 'number', default: undefined, description: 'The debit amount of the general ledger booking line' },
							{ displayName: 'Description', name: 'omschrijving', type: 'string', default: undefined, description: 'Description of the general ledger booking line' },
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
							{ displayName: 'VAT Type', name: 'btwSoort', type: 'string', default: undefined, description: 'The VAT type of the general ledger booking line' },
						]
					},
				],
			},
			{ displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'The ID of the kasboeking (GUID)' },
			{ displayName: 'Marking', name: 'markering', type: 'boolean', default: false, description: 'Whether this kasboeking deserves special attention, in SnelStart this is visually emphasized' },
			{ displayName: 'Modified On', name: 'modifiedOn', type: 'dateTime', default: undefined, description: 'The date and time when the kasboeking was last modified or created' },
			{
				displayName: 'Purchase Booking Lines',
				name: 'inkoopboekingBoekingsRegels',
				type: 'fixedCollection',
				default: {},
				placeholder: 'Add Purchase Booking Line',
				description: 'Purchase booking lines of the kasboeking',
				typeOptions: { multipleValues: true },
				options: [
					{
						displayName: 'Rule',
						name: 'values',
						typeOptions: { multipleValues: false },
						values: [
							{
								displayName: 'Booking ID',
								name: 'boekingId',
								type: 'fixedCollection',
								default: {},
								options: [
									{
										displayName: 'Booking ID',
										name: 'values',
										placeholder: 'Add Booking ID',
										values: [
											{ displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'The ID of the purchase booking (GUID)' },
											{ displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'The URI of the purchase booking' },
										],
									},
								],
							},
							{ displayName: 'Description', name: 'omschrijving', type: 'string', default: undefined, description: 'Description of the purchase booking line' },
							{ displayName: 'Debit', name: 'debet', type: 'number', default: undefined, description: 'The debit amount of the purchase booking line' },
							{ displayName: 'Credit', name: 'credit', type: 'number', default: undefined, description: 'The credit amount of the purchase booking line' },
						]
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
			{ displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'The URI of the kasboeking' },
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
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				resource: ['kasboekingen'],
				operation: ['getKasboekingen', 'getManyKasboekingen'],
			},
		},
		options: [
			{ displayName: 'Filter', name: '$filter', type: 'string', default: undefined, description: 'OData $filter' },
			{ displayName: 'Skip', name: '$skip', type: 'number', default: undefined, description: 'The number of items to skip', displayOptions: { show: { '/returnAll': [false] }, }, },
			{ displayName: 'Top', name: '$top', type: 'number', default: undefined, description: 'The number of items to return', displayOptions: { show: { '/returnAll': [false] }, }, },
		]
	},
]
