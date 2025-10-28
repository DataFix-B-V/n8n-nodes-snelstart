import { INodeProperties } from 'n8n-workflow';

export const memoriaalboekingenDescription: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    default: 'getMemoriaalboekingen',
    options: [
      { name: "Delete Memoriaalboekingen", value: "deleteMemoriaalboekingen", action: "Delete memoriaalboekingen" },
			{ name: "Get Memoriaalboekingen", value: "getMemoriaalboekingen", action: "Get memoriaalboekingen" },
			{ name: "Post Many Memoriaalboekingen", value: "postManyMemoriaalboekingen", action: "Post many memoriaalboekingen" },
			{ name: "Put Memoriaalboekingen", value: "putMemoriaalboekingen", action: "Put memoriaalboekingen" }
    ],
    displayOptions: {
      show: { resource: ['memoriaalboekingen'] },
    },
  },
	{
		displayName: 'Heads-up: Not all POST endpoints are fully tested. Some fields may be missing and some are required even if the official docs mark them optional. Refer to the provider’s docs and API error messages. Fields marked (*) are verified as required.',
		name: 'postNotice',
		type: 'notice',
		default: '',
		displayOptions: {
			show: {
				resource: ['memoriaalboekingen'],
				operation: ['postManyMemoriaalboekingen', 'putMemoriaalboekingen'],
			},
		},
	},
	{
		displayName: 'Memoriaal Boekingen ID',
		name: 'memoriaal_boekingen_id',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the memoriaalboekingen',
		displayOptions: {
			show: {
				resource: ['memoriaalboekingen'],
				operation: ['deleteMemoriaalboekingen', 'putMemoriaalboekingen', 'getMemoriaalboekingen'],
			},
		},
	},
	{
		displayName: 'Date',
		name: 'datum',
		type: 'dateTime',
		default: undefined,
		description: 'The date of the memoriaalboekingen is created or last modified',
		required: true,
		displayOptions: {
			show: {
				resource: ['memoriaalboekingen'],
				operation: ['postManyMemoriaalboekingen', 'putMemoriaalboekingen'],
			},
		},
	},
	{
		displayName: 'Diary',
		name: 'dagboek',
		type: 'fixedCollection',
		default: {},
		placeholder: 'Add Diary',
		description: 'The diary of the memoriaalboekingen reference',
		required: true,
		typeOptions: { multipleValues: false },
		displayOptions: {
			show: {
				resource: ['memoriaalboekingen'],
				operation: ['postManyMemoriaalboekingen', 'putMemoriaalboekingen'],
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
		displayName: 'Add Field',
		name: 'fields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		description: 'Add additional fields for the memoriaalboekingen',
		displayOptions: {
			show: {
				resource: ['memoriaalboekingen'],
				operation: ['postManyMemoriaalboekingen', 'putMemoriaalboekingen'],
			},
		},
		options: [
			{ displayName: 'Book Piece', name: 'boekstuk', type: 'string', default: undefined, description: 'The book piece number of the memoriaalboekingen' },
			{ displayName: 'Changed By Accountant', name: 'gewijzigdDoorAccountant', type: 'boolean', default: false, description: 'Whether this memoriaalboekingen has been modified by the accountant' },
			{ displayName: 'Description', name: 'omschrijving', type: 'string', default: undefined, description: 'The description of the memoriaalboekingen' },
			{ displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'The ID of the memoriaalboekingen' },
			{ displayName: 'Marking', name: 'markering', type: 'boolean', default: false, description: 'Whether this memoriaalboekingen deserves special attention; in SnelStart this is visually emphasized' },
			{
				displayName: 'Memoriaal Booking Rules',
				name: 'memoriaalBoekingsRegels',
				type: 'fixedCollection',
				placeholder: 'Add Memoriaal Booking Rule',
				typeOptions: { multipleValues: true },
				default: {},
				description: 'The memoriaal booking rules of the memoriaalboekingen',
				options: [
					{
						displayName: 'Memoriaal Booking Rule',
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
										displayName: 'Cost Center (Kostenplaats)',
										values: [
											{ displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'The ID of the cost center the memoriaal booking rule belongs to' },
											{ displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'The URI of the cost center the memoriaal booking rule belongs to' },
										],
									},
								],
							},
							{ displayName: 'Credit', name: 'credit', type: 'number', default: 0, required: true, description: 'The credit amount of the memoriaal booking rule' },
							{ displayName: 'Debit', name: 'debet', type: 'number', default: 0, required: true, description: 'The debit amount of the memoriaal booking rule' },
							{ displayName: 'Description', name: 'omschrijving', type: 'string', default: undefined, required: true, description: 'The description of the memoriaal booking rule' },
							{
								displayName: 'General Ledger',
								name: 'grootboek',
								type: 'fixedCollection',
								default: {},
								placeholder: 'Add General Ledger',
								description: 'The general ledger of the memoriaal booking rule reference',
								required: true,
								typeOptions: { multipleValues: false },
								options: [
									{
										name: 'values',
										displayName: 'General Ledger (Grootboek)',
										values: [
											{ displayName: 'ID', name: 'id', type: 'string', default: undefined, required: true, description: 'The ID of the general ledger the memoriaal booking rule belongs to' },
											{ displayName: 'URI', name: 'uri', type: 'string', default: undefined, required: true, description: 'The URI of the general ledger the memoriaal booking rule belongs to' },
										],
									},
								],
							},
						],
					},
				],
			},
			{ displayName: 'Modified On', name: 'modifiedOn', type: 'dateTime', default: undefined, description: 'The date and time the memoriaalboekingen was created or last modified' },
			{
				displayName: 'Purchase Booking Rules',
				name: 'inkoopboekingBoekingsRegels',
				type: 'fixedCollection',
				placeholder: 'Add Purchase Booking Rule',
				typeOptions: { multipleValues: true },
				default: {},
				description: 'The purchase booking rules of the memoriaalboekingen',
				options: [
					{
						displayName: 'Purchase Booking Rule',
						name: 'values',
						values: [
							{
								displayName: 'Booking',
								name: 'boekingId',
								type: 'fixedCollection',
								default: {},
								placeholder: 'Add Booking',
								description: 'The booking of the purchase booking rule reference',
								required: true,
								options: [
									{
										name: 'values',
										displayName: 'Booking',
										values: [
											{ displayName: 'ID', name: 'id', type: 'string', default: undefined, required: true, description: 'The ID of the booking the purchase booking rule belongs to' },
											{ displayName: 'URI', name: 'uri', type: 'string', default: undefined, required: true, description: 'The URI of the booking the purchase booking rule belongs to' },
										],
									},
								],
							},
							{ displayName: 'Description', name: 'omschrijving', type: 'string', default: undefined, required: true, description: 'The description of the purchase booking rule' },
							{ displayName: 'Amount', name: 'bedrag', type: 'number', default: 0, required: true, description: 'The amount of the purchase booking rule' },
						],
					},
				],
			},
			{
				displayName: 'Sales Booking Rules',
				name: 'verkoopboekingBoekingsRegels',
				type: 'fixedCollection',
				placeholder: 'Add Sales Booking Rule',
				typeOptions: { multipleValues: true },
				default: {},
				description: 'The sales booking rules of the memoriaalboekingen',
				options: [
					{
						displayName: 'Sales Booking Rule',
						name: 'values',
						values: [
							{
								displayName: 'Booking',
								name: 'boekingId',
								type: 'fixedCollection',
								default: {},
								placeholder: 'Add Booking',
								description: 'The booking of the sales booking rule reference',
								required: true,
								options: [
									{
										name: 'values',
										displayName: 'Booking',
										values: [
											{ displayName: 'ID', name: 'id', type: 'string', default: undefined, required: true, description: 'The ID of the booking the sales booking rule belongs to' },
											{ displayName: 'URI', name: 'uri', type: 'string', default: undefined, required: true, description: 'The URI of the booking the sales booking rule belongs to' },
										],
									},
								],
							},
							{ displayName: 'Description', name: 'omschrijving', type: 'string', default: undefined, required: true, description: 'The description of the sales booking rule' },
							{ displayName: 'Amount', name: 'bedrag', type: 'number', default: 0, required: true, description: 'The amount of the sales booking rule' },
						],
					},
				],
			},
			{ displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'The URI of the memoriaalboekingen' },
		],
	},
];

