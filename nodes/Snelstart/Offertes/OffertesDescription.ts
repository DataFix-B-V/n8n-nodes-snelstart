import { INodeProperties } from 'n8n-workflow';

export const offertesDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		default: 'getManyOffertes',
		options: [
			{ name: 'Delete Offertes', value: 'deleteOffertes', action: 'Delete offertes' },
			{ name: 'Get Many Offertes', value: 'getManyOffertes', action: 'Get many offertes' },
			{ name: 'Get Offertes', value: 'getOffertes', action: 'Get offertes' },
			{ name: 'Post Many Offertes', value: 'postManyOffertes', action: 'Post many offertes' },
			{ name: 'Put Offertes', value: 'putOffertes', action: 'Put offertes' },
		],
		displayOptions: {
			show: { resource: ['offertes'] },
		},
	},
	{
		displayName: 'Offerte ID',
		name: 'offerte_id',
		type: 'string',
		default: undefined,
		required: true,
		description: 'The ID of the offerte to retrieve or modify',
		displayOptions: {
			show: {
				resource: ['offertes'],
				operation: ['getOffertes', 'putOffertes', 'deleteOffertes'],
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
				resource: ['offertes'],
				operation: ['getManyOffertes'],
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
				resource: ['offertes'],
				operation: ['getManyOffertes'],
			},
		},
		options: [
			{ displayName: 'Filter', name: '$filter', type: 'string', default: undefined, description: 'OData $filter' },
			{ displayName: 'Skip', name: '$skip', type: 'number', default: 0, description: 'The number of items to skip', displayOptions: { show: { '/returnAll': [false] }, }, },
			{ displayName: 'Top', name: '$top', type: 'number', default: undefined, description: 'The number of items to return', displayOptions: { show: { '/returnAll': [false] }, }, },
		],
	},
	{
		displayName: 'Date',
		name: 'datum',
		type: 'dateTime',
		default: undefined,
		description: 'The date of the offerte',
		required: true,
		displayOptions: {
			show: {
				resource: ['offertes'],
				operation: ['postManyOffertes', 'putOffertes'],
			},
		},
	},
	{
		displayName: 'Relation',
		name: 'relatie',
		type: 'fixedCollection',
		default: {},
		required: true,
		placeholder: 'Add Relation',
		description: 'Relation reference',
		typeOptions: { multipleValues: false },
		displayOptions: {
			show: {
				resource: ['offertes'],
				operation: ['postManyOffertes', 'putOffertes'],
			},
		},
		options: [
			{
				displayName: 'Relation',
				name: 'values',
				default: {},
				values: [
					{ displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'Relation ID (GUID)' },
					{ displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'Relation resource URI' },
				],
			},
		],
	},
	// Adding a note to the UI for posting and putting artikelen
	{
		displayName: 'Heads-up: Fields marked (\*) are required (verified via testing), despite the official docs stating they’re optional. It is possible that more fields are required but not yet identified.',
		name: 'note',
		type: 'notice',
		default: '',
		displayOptions: {
			show: {
				resource: ['offertes'],
				operation: ['postManyOffertes', 'putOffertes'],
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
				resource: ['offertes'],
				operation: ['postManyOffertes', 'putOffertes'],
			},
		},
		options: [
			{
				displayName: 'Cost Center',
				name: 'kostenplaats',
				type: 'fixedCollection',
				default: {},
				description: 'Cost center reference',
				typeOptions: { multipleValues: false },
				options: [
					{
						name: 'values',
						displayName: 'Cost Center',
						values: [
							{ displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'Kostenplaats-ID (GUID)' },
							{ displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'Kostenplaats-resource URI' },
						],
					},
				],
			},
			{ displayName: 'Credit Term', name: 'krediettermijn', type: 'number', default: undefined, description: 'Credit term (days)' },
			{
				displayName: 'Delivery Address',
				name: 'afleveradres',
				type: 'fixedCollection',
				default: {},
				placeholder: 'Add Delivery Address',
				typeOptions: { multipleValues: false },
				options: [
					{
						name: 'values',
						displayName: 'Delivery Address',
						values: [
							{ displayName: 'City', name: 'plaats', type: 'string', default: undefined },
							{ displayName: 'Contact Person', name: 'contactpersoon', type: 'string', default: undefined },
							{
								displayName: 'Country',
								name: 'land',
								type: 'fixedCollection',
								default: {},
								options: [
									{
										name: 'values',
										displayName: 'Country',
										values: [
											{ displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'Country ID (GUID)' },
											{ displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'Country resource URI' },
										],
									},
								],
							},
							{ displayName: 'Postal Code', name: 'postcode', type: 'string', default: undefined },
							{ displayName: 'Street', name: 'straat', type: 'string', default: undefined },
						],
					},
				],
			},
			{ displayName: 'Description', name: 'omschrijving', type: 'string', default: undefined, description: 'Offerte description' },
			{ displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'Public identifier of the offerte (GUID)' },
			{
				displayName: 'Incasso Authorization',
				name: 'incassomachtiging',
				type: 'fixedCollection',
				placeholder: 'Add Incasso Authorization',
				default: {},
				description: 'Incasso authorization reference',
				typeOptions: { multipleValues: false },
				options: [
					{
						name: 'values',
						displayName: 'Incasso Authorization',
						values: [
							{ displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'Incasso authorization ID (GUID)' },
							{ displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'Incasso authorization resource URI' },
						],
					},
				],
			},
			{
				displayName: 'Invoice Address',
				name: 'factuuradres',
				type: 'fixedCollection',
				default: {},
				placeholder: 'Add Invoice Address',
				typeOptions: { multipleValues: false },
				options: [
					{
						name: 'values',
						displayName: 'Invoice Address',
						values: [
							{ displayName: 'City', name: 'plaats', type: 'string', default: undefined },
							{ displayName: 'Contact Person', name: 'contactpersoon', type: 'string', default: undefined },
							{
								displayName: 'Country',
								name: 'land',
								type: 'fixedCollection',
								default: {},
								options: [
									{
										name: 'values',
										displayName: 'Country',
										values: [
											{ displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'Country ID (GUID)' },
											{ displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'Country resource URI' },
										],
									},
								],
							},
							{ displayName: 'Postal Code', name: 'postcode', type: 'string', default: undefined },
							{ displayName: 'Street', name: 'straat', type: 'string', default: undefined },
						],
					},
				],
			},
			{ displayName: 'Invoice Discount', name: 'factuurkorting', type: 'number', default: undefined, description: 'Invoice-level discount' },
			{ displayName: 'Is Offerte', name: 'isOfferte', type: 'boolean', default: true, description: 'Whether the document is an offerte' },
			{ displayName: 'Memo', name: 'memo', type: 'string', default: undefined, description: 'Memo / internal note' },
			{ displayName: 'Modified On', name: 'modifiedOn', type: 'dateTime', default: undefined, description: 'Last modification date of the offerte' },
			{ displayName: 'Number', name: 'nummer', type: 'number', default: undefined, description: 'Offerte number' },
			{ displayName: 'Order Reference', name: 'orderreferentie', type: 'string', default: undefined },
			{ displayName: 'Payment Reference', name: 'betalingskenmerk', type: 'string', default: undefined },
			{
				displayName: 'Process Status',
				name: 'procesStatus',
				type: 'options',
				default: 'Order',
				description: 'Process status of the offerte',
				options: [
					{ name: 'Afhaalbon', value: 'Afhaalbon' },
					{ name: 'Bevestiging', value: 'Bevestiging' },
					{ name: 'Offerte', value: 'Offerte' },
					{ name: 'Order', value: 'Order' },
					{ name: 'Pakbon', value: 'Pakbon' },
					{ name: 'Werkbon', value: 'Werkbon' },
				],
			},
			{
				displayName: 'Rules',
				name: 'regels',
				type: 'fixedCollection',
				typeOptions: { multipleValues: true },
				default: {},
				placeholder: 'Add Rule',
				description: 'Offerte line rules',
				options: [
					{
						displayName: 'Rule',
						name: 'values',
						typeOptions: { multipleValues: false },
						values: [
							{
								displayName: 'Article',
                                name: 'artikel',
								type: 'fixedCollection',
								default: {},
								description: 'Article reference',
								options: [
									{
										name: 'values',
										displayName: 'Article',
										values: [
											{ displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'Article ID (GUID)' },
											{ displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'Article resource URI' },
										],
									},
								],
							},
							{ displayName: 'Description', name: 'omschrijving', type: 'string', default: undefined, description: 'Rule description' },
							{ displayName: 'Discount Percentage', name: 'kortingsPercentage', type: 'number', default: undefined },
							{
								displayName: 'Extra Rule Fields',
								name: 'extraRegelVelden',
								type: 'fixedCollection',
								typeOptions: { multipleValues: true },
								default: {},
								placeholder: 'Add Extra Rule Field',
								description: 'Additional custom fields for the rule',
								options: [
									{
										displayName: 'Field',
										name: 'values',
										typeOptions: { multipleValues: false },
										values: [
											{ displayName: 'Field Number', name: 'veldNummer', type: 'number', default: undefined },
											{ displayName: 'Description', name: 'omschrijving', type: 'string', default: undefined, description: 'Field description' },
											{ displayName: 'Value', name: 'waarde', type: 'string', default: undefined, description: 'Field value' },
										],
									},
								],
							},
							{ displayName: 'Quantity', name: 'aantal', type: 'number', default: undefined },
							{ displayName: 'Total', name: 'totaal', type: 'number', default: undefined, description: 'Line total' },
							{ displayName: 'Unit Price', name: 'stuksprijs', type: 'number', default: undefined },
						],
					},
				],
			},
			{
				displayName: 'Sales Invoice',
				name: 'verkoopfactuur',
				type: 'fixedCollection',
				default: {},
				description: 'Sales invoice reference',
				typeOptions: { multipleValues: false },
				options: [
					{
						name: 'values',
						displayName: 'Sales Invoice',
						values: [
							{ displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'Sales invoice ID (GUID)' },
							{ displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'Sales invoice resource URI' },
						],
					},
				],
			},
			{
				displayName: 'Sales Order VAT Entry Model*',
				name: 'verkooporderBtwIngaveModel',
				type: 'options',
				default: 'Inclusief',
				description: 'VAT entry model',
				options: [
					{ name: 'Exclusief', value: 'Exclusief' },
					{ name: 'Geen', value: 'Geen' },
					{ name: 'Inclusief', value: 'Inclusief' },
				],
			},
			{ displayName: 'Total Excluding VAT', name: 'totaalExclusiefBtw', type: 'number', default: undefined },
			{ displayName: 'Total Including VAT', name: 'totaalInclusiefBtw', type: 'number', default: undefined },
			{ displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'Offerte resource URI' },
		],
	},
];
