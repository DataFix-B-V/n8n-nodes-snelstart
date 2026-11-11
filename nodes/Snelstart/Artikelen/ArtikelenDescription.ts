
import { INodeProperties } from 'n8n-workflow';

export const artikelenDescription: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    default: 'getArtikelen',
    options: [
      { name: 'Delete Article', value: 'deleteArtikelen', action: 'Delete article', description: 'Delete an article (Artikel) from SnelStart' },
      { name: 'Get Article', value: 'getArtikelen', action: 'Get article', description: 'Retrieve an article (Artikel) from SnelStart' },
      { name: 'Get Article Custom Fields', value: 'getArtikelenCustomFields', action: 'Get article custom fields', description: 'Retrieve custom fields (Extra velden) of an article (Artikel) from SnelStart' },
      { name: 'Get Many Articles', value: 'getManyArtikelen', action: 'Get many articles', description: 'Retrieve multiple articles (Artikelen) from SnelStart' },
      { name: 'Get Many Article Pricing Agreements', value: 'getManyArtikelenPrijsafspraken', action: 'Get many article pricing agreements', description: 'Retrieve article pricing agreements (Prijsafspraken) from SnelStart' },
      { name: 'Post Articles', value: 'postManyArtikelen', action: 'Post articles', description: 'Post articles (Artikelen) to SnelStart' },
      { name: 'Put Article', value: 'putArtikelen', action: 'Put article', description: 'Put an article (Artikel) in SnelStart' },
      { name: 'Put Article Custom Fields', value: 'putArtikelenCustomFields', action: 'Put article custom fields', description: 'Put custom fields (Extra velden) of an article (Artikel) in SnelStart' },
    ],
    displayOptions: {
      show: { resource: ['artikelen'] },
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
				resource: ['artikelen'],
				operation: ['getManyArtikelen'],
			},
		},
	},
  {
    displayName: 'Article ID',
    name: 'artikel_id',
    type: 'string',
    default: undefined,
    description: 'The public identifier of the article (Artikel) as System.Guid',
    required: true,
    displayOptions: {
      show: {
        resource: ['artikelen'],
        operation: [
          'deleteArtikelen',
          'getArtikelen',
          'putArtikelen',
          'putArtikelenCustomFields',
					'getArtikelenCustomFields',
        ],
      },
    },
  },
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: undefined,
		description: 'The name of the custom field',
		required: true,
		displayOptions: {
			show: {
				resource: ['artikelen'],
				operation: ['putArtikelenCustomFields'],
			},
		},
	},
	{
		displayName: 'Value',
		name: 'value',
		type: 'string',
		default: undefined,
		description: 'The value of the custom field',
		required: true,
		displayOptions: {
			show: {
				resource: ['artikelen'],
				operation: ['putArtikelenCustomFields'],
			},
		},
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: { show: { resource: ['artikelen'], operation: ['getManyArtikelen'] } },
		options: [
			{ displayName: 'Amount', name: 'totaal', type: 'number', default: 0, description: 'The quantity of articles used to determine the applicable pricing agreement (Prijsafspraak)' },
			{ displayName: 'Filter', name: '$filter', type: 'string', default: '', description: 'OData filter string to filter the results' },
			{ displayName: 'Relation ID', name: 'relatieId', type: 'string', default: '', description: 'The relation (Relatie) ID used to retrieve pricing agreements' },
			{ displayName: 'Skip', name: '$skip', type: 'number', default: 0, description: 'The number of items to skip', displayOptions: { show: { '/returnAll': [false] } } },
			{ displayName: 'Top', name: '$top', type: 'number', default: 0, description: 'The number of items to return', displayOptions: { show: { '/returnAll': [false] } } },
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
				resource: ['artikelen'],
				operation: ['getArtikelen'],
			},
		},
		options: [
			{ displayName: 'Relation ID', name: 'relatieId', type: 'string', default: undefined, description: 'The relation (Relatie) ID used to retrieve pricing agreements',
			},
			{ displayName: 'Amount', name: 'totaal', type: 'number', default: undefined, description: 'The quantity of articles used to determine the applicable pricing agreement (Prijsafspraak)' },
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
				resource: ['artikelen'],
				operation: ['getManyArtikelenPrijsafspraken'],
			},
		},
		options: [
			{ displayName: 'Filter', name: '$filter', type: 'string', default: undefined, description: 'OData filter string to filter the results', displayOptions: { show: { '/returnAll': [false] }, }, },
			{ displayName: 'Skip', name: '$skip', type: 'number', default: undefined, description: 'The number of items to skip', displayOptions: { show: { '/returnAll': [false] }, }, },
			{ displayName: 'Top', name: '$top', type: 'number', default: undefined, description: 'The number of items to return' },
		],
	},

	// Adding a note to the UI for posting and putting articles
	{
		displayName: 'Heads-up: Fields marked (*) are required (verified via testing), despite the official documentation stating they are optional. Additional required fields may exist but have not yet been identified.',
		name: 'note',
		type: 'notice',
		default: '',
		displayOptions: {
			show: {
				resource: ['artikelen'],
				operation: ['postManyArtikelen', 'putArtikelen'],
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
				resource: ['artikelen'],
				operation: ['postManyArtikelen', 'putArtikelen'] },
		},
		options: [
			{
				displayName: 'Article Revenue Group*',
				name: 'artikelOmzetgroep',
				type: 'fixedCollection',
				default: {},
				options: [
					{
						name: 'values',
						displayName: 'Article Revenue Group',
						values: [
							{ displayName: 'ID', name: 'id', type: 'string', default: '' },
							{ displayName: 'URI', name: 'uri', type: 'string', default: '' },
						],
					},
				],
				description: 'The revenue group (Artikelomzetgroep) associated with the article',
			},
			{ displayName: 'Article Code*', name: 'artikelcode', type: 'string', default: undefined, description: 'The code (Artikelcode) of the article' },
			{ displayName: 'Description*', name: 'omschrijving', type: 'string', default: undefined, description: 'The description (Omschrijving) of the article' },
			{
				displayName: 'Extra Fields',
				name: 'extraVelden',
				type: 'fixedCollection',
				default: {},
				typeOptions: { multipleValues: true },
				options: [
					{
						name: 'values',
						displayName: 'Field',
						values: [
							{ displayName: 'Name', name: 'naam', type: 'string', default: undefined, description: 'The name (Naam) of the extra field' },
							{ displayName: 'Value', name: 'waarde', type: 'string', default: undefined, description: 'The value (Waarde) of the extra field' },
						],
					},
				],
				description: 'Additional custom fields (Extra velden) for the article',
			},
			{ displayName: 'Free Stock', name: 'vrijeVoorraad', type: 'number', default: undefined, description: 'The available stock (Vrije voorraad) of the article' },
			{ displayName: 'ID', name: 'id', type: 'string', default: '', description: 'The public identifier of the resource as System.Guid' },
			{ displayName: 'Inventory Control', name: 'voorraadControle', type: 'boolean', default: false, description: 'Whether inventory tracking (Voorraadcontrole) is enabled for the article' },
			{ displayName: 'Is Inactive', name: 'isNonActief', type: 'boolean', default: false, description: 'Whether the article is inactive (Non-actief)' },
			{ displayName: 'Modified On', name: 'modifiedOn', type: 'dateTime', default: undefined, description: 'The date and time the record was last modified' },
			{ displayName: 'Purchase Price', name: 'inkoopprijs', type: 'number', default: undefined, description: 'The purchase price (Inkoopprijs) of the article' },
			{
				displayName: 'Relation',
				name: 'relatie',
				type: 'fixedCollection',
				default: {},
				options: [
					{
						name: 'values',
						displayName: 'Relation',
						values: [
							{ displayName: 'ID', name: 'id', type: 'string', default: '' },
							{ displayName: 'URI', name: 'uri', type: 'string', default: '' },
						],
					},
				],
				description: 'The relation (Relatie) associated with the article',
			},
			{ displayName: 'Selling Price', name: 'verkoopprijs', type: 'number', default: undefined, description: 'The selling price (Verkoopprijs) of the article', required: true },
			{ displayName: 'Technical Inventory', name: 'technischeVoorraad', type: 'number', default: undefined, description: 'The technical inventory (Technische voorraad) of the article' },
			{ displayName: 'Unit', name: 'eenheid', type: 'string', default: undefined, description: 'The unit (Eenheid) of the article' },
			{ displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'The URI of the resource' },
		],
	}
];
