import { INodeProperties } from 'n8n-workflow';

export const artikelenDescription: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    default: 'getArtikelen',
    options: [
      { name: 'Delete Artikelen', value: 'deleteArtikelen', action: 'Delete artikelen' },
      { name: 'Get Artikelen', value: 'getArtikelen', action: 'Get artikelen' },
      { name: 'Get Artikelen Custom Fields', value: 'getArtikelenCustomFields', action: 'Get artikelen custom fields' },
      { name: 'Get Many Artikelen', value: 'getManyArtikelen', action: 'Get many artikelen' },
      { name: 'Get Many Artikelen Prijsafspraken', value: 'getManyArtikelenPrijsafspraken', action: 'Get many artikelen prijsafspraken' },
      { name: 'Post Artikelen', value: 'postManyArtikelen', action: 'Post artikelen' },
      { name: 'Put Artikelen', value: 'putArtikelen', action: 'Put artikelen' },
      { name: 'Put Artikelen Custom Fields', value: 'putArtikelenCustomFields', action: 'Put artikelen custom fields' },
    ],
    displayOptions: {
      show: { resource: ['artikelen'] },
    },
  },
  {
    displayName: 'ID',
    name: 'id',
    type: 'number',
    default: undefined,
    description: 'The public identifier of the resource as System.Guid',
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
    displayName: 'Add Parameters',
    name: 'parameters',
    type: 'collection',
    placeholder: 'Add Parameter',
    default: {},
    displayOptions: {
      show: {
        resource: ['artikelen'],
        operation: ['getManyArtikelen'],
      },
    },
    options: [
      { displayName: 'Amount', name: 'totaal', type: 'number', default: undefined, description: 'The total number of items to return' },
      { displayName: 'Filter', name: '$filter', type: 'string', default: undefined, description: 'OData $filter' },
      { displayName: 'Relation ID', name: 'relatieId', type: 'string', default: undefined, description: 'The relation ID of the price agreements to fetch' },
      { displayName: 'Skip', name: '$skip', type: 'number', default: 0, description: 'The number of items to skip' },
      { displayName: 'Top', name: '$top', type: 'number', default: undefined, description: 'The number of items to return' },
    ],
  },
	{
		displayName: 'Add Parameters',
		name: 'parameters',
		type: 'collection',
		placeholder: 'Add Parameter',
		default: {},
		displayOptions: {
			show: {
				resource: ['artikelen'],
				operation: ['getArtikelen'],
			},
		},
		options: [
			{ displayName: 'Relation ID', name: 'relatieId', type: 'string', default: undefined, description: 'The relation ID of the price agreements to fetch',
			},
			{ displayName: 'Amount', name: 'totaal', type: 'number', default: undefined, description: 'The total number of items to return' },
		],
	},
	{
		displayName: 'Add Parameters',
		name: 'parameters',
		type: 'collection',
		placeholder: 'Add Parameter',
		default: {},
		displayOptions: {
			show: {
				resource: ['artikelen'],
				operation: ['getManyArtikelenPrijsafspraken'],
			},
		},
		options: [
			{ displayName: 'Filter', name: '$filter', type: 'string', default: undefined, description: 'OData $filter' },
			{ displayName: 'Skip', name: '$skip', type: 'number', default: undefined, description: 'The number of items to skip' },
			{ displayName: 'Top', name: '$top', type: 'number', default: undefined, description: 'The number of items to return' },
		],
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
				displayName: 'Artikel Group',
				name: 'artikelOmzetgroep',
				type: 'fixedCollection',
				default: {},
				options: [
					{
						name: 'values',
						displayName: 'Artikel Omzetgroep',
						values: [
							{ displayName: 'ID', name: 'id', type: 'string', default: '' },
							{ displayName: 'URI', name: 'uri', type: 'string', default: '' },
						],
					},
				],
				description: 'The artikel omzetgroep of the artikel',
			},
			{ displayName: 'Artikelcode', name: 'artikelcode', type: 'string', default: undefined, description: 'The code of the artikel' },
			{ displayName: 'Description', name: 'omschrijving', type: 'string', default: undefined, description: 'The description of the artikel' },
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
							{ displayName: 'Name', name: 'naam', type: 'string', default: undefined, description: 'The name of the extra field' },
							{ displayName: 'Value', name: 'waarde', type: 'string', default: undefined, description: 'The value of the extra field' },
						],
					},
				],
				description: 'Additional name/value fields for the artikel',
			},
			{ displayName: 'Free Stock', name: 'vrijeVoorraad', type: 'number', default: undefined, description: 'The free stock of the artikel' },
			{ displayName: 'ID', name: 'id', type: 'string', default: '', description: 'The public identifier of the resource as System.Guid' },
			{ displayName: 'Inventory Control', name: 'voorraadControle', type: 'boolean', default: false, description: 'Whether to keep inventory for the artikel' },
			{ displayName: 'Is Inactive', name: 'isNonActief', type: 'boolean', default: false, description: 'Whether the artikel is inactive' },
			{ displayName: 'Modified On', name: 'modifiedOn', type: 'dateTime', default: undefined, description: 'The date and time the record was last modified' },
			{ displayName: 'Purchase Price', name: 'inkoopprijs', type: 'number', default: undefined, description: 'The purchase price of the artikel' },
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
				description: 'The relation object of the artikel',
			},
			{ displayName: 'Selling Price', name: 'verkoopprijs', type: 'number', default: undefined, description: 'The selling price of the artikel' },
			{ displayName: 'Technical Inventory', name: 'technischeVoorraad', type: 'number', default: undefined, description: 'The technical inventory of the artikel' },
			{ displayName: 'Unit', name: 'eenheid', type: 'string', default: undefined, description: 'The unit of the artikel' },
			{ displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'The URI of the resource' },
		],
	}
];
