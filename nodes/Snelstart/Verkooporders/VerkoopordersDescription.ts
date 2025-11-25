import { INodeProperties } from 'n8n-workflow';

export const verkoopordersDescription: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    default: 'getManyVerkooporders',
    options: [
      { name: "Delete Verkooporders", value: "deleteVerkooporders", action: "Delete verkooporders" },
      { name: "Get Many Verkooporders", value: "getManyVerkooporders", action: "Get many verkooporders" },
      { name: "Get Verkooporders", value: "getVerkooporders", action: "Get verkooporders" },
      { name: "Post Many Verkooporders", value: "postManyVerkooporders", action: "Post many verkooporders" },
      { name: "Put Verkooporders", value: "putVerkooporders", action: "Put verkooporders" },
      { name: "Put Verkooporders Proces Status", value: "putVerkoopordersProcesStatus", action: "Put verkooporders proces status" },
    ],
    displayOptions: {
      show: { resource: ['verkooporders'] },
    },
  },
	{
		displayName: 'Heads-up: Not all POST endpoints are fully tested. Some fields may be missing and some are required even if the official docs mark them optional. Refer to the provider’s docs and API error messages. Fields marked (*) are verified as required.',
		name: 'postNotice',
		type: 'notice',
		default: '',
		displayOptions: {
			show: {
				resource: ['verkooporders'],
				operation: ['postManyVerkooporders', 'putVerkooporders', 'putVerkoopordersProcesStatus'],
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
				resource: ['verkooporders'],
				operation: ['getManyVerkooporders'],
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
        resource: ['verkooporders'],
        operation: ['getManyVerkooporders'],
      },
    },
    options: [
      { displayName: 'Filter', name: '$filter', type: 'string', default: undefined, description: 'OData $filter' },
      { displayName: 'Skip', name: '$skip', type: 'number', default: 0, description: 'The number of items to skip', displayOptions: { show: { '/returnAll': [false] }, }, },
      { displayName: 'Top', name: '$top', type: 'number', default: undefined, description: 'The number of items to return', displayOptions: { show: { '/returnAll': [false] }, }, },
    ],
  },
	// Dropdown where the user can choose between a body via json or via parameters
	{
		displayName: 'Specify Body',
		name: 'specifyBody',
		type: 'options',
		options: [
			{ name: 'JSON', value: 'json', description: 'Provide the body as raw JSON' },
			{ name: 'Parameters', value: 'parameters', description: 'Provide the body via parameters' },
		],
		default: 'parameters',
		displayOptions: {
			show: {
				resource: ['verkooporders'],
				operation: ['postManyVerkooporders', 'putVerkooporders'],
			},
		},
	},
  {
    displayName: 'Verkooporder ID',
    name: 'verkooporder_id',
    type: 'string',
    default: '',
    required: true,
    description: 'The ID of the verkooporder to retrieve',
    displayOptions: {
      show: {
        resource: ['verkooporders'],
        operation: ['getVerkooporders', 'putVerkooporders', 'putVerkoopordersProcesStatus', 'deleteVerkooporders'],
      },
    },
  },
	{
		displayName: 'JSON Body',
		name: 'jsonBody',
		type: 'json',
		default: '',
		description: 'Body as JSON object',
		displayOptions: {
			show: {
				resource: ['verkooporders'],
				operation: ['postManyVerkooporders', 'putVerkooporders'],
				specifyBody: ['json'],
			},
		},
	},
  {
    displayName: 'Date',
    name: 'datum',
    type: 'dateTime',
    default: undefined,
    required: true,
    description: 'The sales order (verkooporder) date',
    displayOptions: {
      show: {
        resource: ['verkooporders'],
        operation: ['postManyVerkooporders', 'putVerkooporders'],
				specifyBody: ['parameters'],
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
    description: 'Relatie reference for the verkooporder',
    typeOptions: { multipleValues: false },
    displayOptions: {
      show: {
        resource: ['verkooporders'],
        operation: ['postManyVerkooporders', 'putVerkooporders'],
				specifyBody: ['parameters'],
      },
    },
    options: [
      {
        displayName: 'Relation',
        name: 'values',
        default: {},
        values: [
          { displayName: 'ID', name: 'id', type: 'string', default: undefined },
          { displayName: 'URI', name: 'uri', type: 'string', default: undefined },
        ],
      },
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
				resource: ['verkooporders'],
				operation: ['putVerkoopordersProcesStatus'],
			},
		},
		options: [
			{ displayName: 'Process Status', name: 'procesStatus', type: 'string', default: 'Order', description: 'Status of the verkooporder',	},
			{ displayName: 'ID', name: 'id', type: 'string', default: '', description: 'Public identifier (GUID)',	},
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
        resource: ['verkooporders'],
        operation: ['postManyVerkooporders', 'putVerkooporders'],
				specifyBody: ['parameters'],
      },
    },
    options: [
      { displayName: 'Blocked', name: 'geblokkeerd', type: 'boolean', default: false, description: 'Whether the verkooporder is blocked' },
      {
        displayName: 'Cost Center',
        name: 'kostenplaats',
        type: 'fixedCollection',
        default: {},
        placeholder: 'Add Cost Center',
        description: 'Cost center reference',
        typeOptions: { multipleValues: false },
        options: [
          {
            name: 'values',
            displayName: 'Cost Center',
            values: [
              { displayName: 'ID', name: 'id', type: 'string', default: undefined },
              { displayName: 'URI', name: 'uri', type: 'string', default: undefined },
            ],
          },
        ],
      },
      { displayName: 'Credit Term', name: 'krediettermijn', type: 'number', default: undefined, description: 'Credit term in days' },
      {
        displayName: 'Delivery Address',
        name: 'afleveradres',
        type: 'fixedCollection',
        default: {},
        placeholder: 'Add Delivery Address',
        description: 'The delivery address of the verkooporder',
        typeOptions: { multipleValues: false },
        options: [
          {
            name: 'values',
            displayName: 'Delivery Address',
            values: [
              { displayName: 'Contact Person', name: 'contactpersoon', type: 'string', default: undefined },
              {
                displayName: 'Country',
                name: 'land',
                type: 'fixedCollection',
                default: {},
                typeOptions: { multipleValues: false },
                options: [
                  {
                    name: 'values',
                    displayName: 'Country',
                    values: [
                      { displayName: 'ID', name: 'id', type: 'string', default: undefined },
                      { displayName: 'URI', name: 'uri', type: 'string', default: undefined },
                    ],
                  },
                ],
              },
              { displayName: 'City', name: 'plaats', type: 'string', default: undefined },
              { displayName: 'Postal Code', name: 'postcode', type: 'string', default: undefined },
              { displayName: 'Street', name: 'straat', type: 'string', default: undefined },
            ],
          },
        ],
      },
      { displayName: 'Description', name: 'omschrijving', type: 'string', default: undefined, description: 'The description of the verkooporder' },
      {
        displayName: 'Direct Debit Authorization',
        name: 'incassomachtiging',
        type: 'fixedCollection',
        default: {},
        placeholder: 'Add Authorization',
        description: 'Direct debit authorization reference',
        typeOptions: { multipleValues: false },
        options: [
          {
            name: 'values',
            displayName: 'Authorization',
            values: [
              { displayName: 'ID', name: 'id', type: 'string', default: undefined },
              { displayName: 'URI', name: 'uri', type: 'string', default: undefined },
            ],
          },
        ],
      },
      {
        displayName: 'Extra Header Fields',
        name: 'extraHoofdVelden',
        type: 'fixedCollection',
        typeOptions: { multipleValues: true },
        default: {},
        placeholder: 'Add Header Field',
        description: 'Additional header fields as defined by the used template',
        options: [
          {
            displayName: 'Field',
            name: 'values',
            typeOptions: { multipleValues: false },
            values: [
              { displayName: 'Description', name: 'omschrijving', type: 'string', default: undefined },
              { displayName: 'Field Number', name: 'veldNummer', type: 'number', default: undefined },
              { displayName: 'Value', name: 'waarde', type: 'string', default: undefined },
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
        description: 'The invoice address of the verkooporder',
        typeOptions: { multipleValues: false },
        options: [
          {
            name: 'values',
            displayName: 'Invoice Address',
            values: [
              { displayName: 'Contact Person', name: 'contactpersoon', type: 'string', default: undefined },
              {
                displayName: 'Country',
                name: 'land',
                type: 'fixedCollection',
                default: {},
                typeOptions: { multipleValues: false },
                options: [
                  {
                    name: 'values',
                    displayName: 'Country',
                    values: [
                      { displayName: 'ID', name: 'id', type: 'string', default: undefined },
                      { displayName: 'URI', name: 'uri', type: 'string', default: undefined },
                    ],
                  },
                ],
              },
              { displayName: 'City', name: 'plaats', type: 'string', default: undefined },
              { displayName: 'Postal Code', name: 'postcode', type: 'string', default: undefined },
              { displayName: 'Street', name: 'straat', type: 'string', default: undefined },
            ],
          },
        ],
      },
      { displayName: 'Invoice Discount', name: 'factuurkorting', type: 'number', default: undefined },
      { displayName: 'Memo', name: 'memo', type: 'string', default: undefined },
      { displayName: 'Modified On', name: 'modifiedOn', type: 'dateTime', default: undefined, description: 'Last modification date-time' },
      { displayName: 'Number', name: 'nummer', type: 'number', default: undefined, description: 'The order number' },
      { displayName: 'Order Reference', name: 'orderreferentie', type: 'string', default: undefined, description: 'Reference included on e-invoice and PDF' },
      {
        displayName: 'Order Status',
        name: 'verkoopOrderStatus',
        type: 'options',
        default: 'InBehandeling',
        description: 'Processing status of the verkooporder',
        options: [
          { name: 'InBehandeling', value: 'InBehandeling' },
          { name: 'Service', value: 'Service' },
          { name: 'Uitgevoerd', value: 'Uitgevoerd' },
        ],
      },
      { displayName: 'Payment Reference', name: 'betalingskenmerk', type: 'string', default: undefined, description: 'The payment reference of the verkooporder' },
      {
        displayName: 'Process Status',
        name: 'procesStatus',
        type: 'options',
        default: 'Order',
        description: 'Document status of the verkooporder',
        options: [
          { name: 'Afhaalbon', value: 'Afhaalbon' },
          { name: 'Bevestiging', value: 'Bevestiging' },
          { name: 'Offerte', value: 'Offerte' },
          { name: 'Order', value: 'Order' },
          { name: 'Pakbon', value: 'Pakbon' },
          { name: 'Werkbon', value: 'Werkbon' },
        ],
      },
      { displayName: 'Public ID', name: 'id', type: 'string', default: undefined, description: 'Public identifier (GUID)' },
      {
        displayName: 'Rules',
        name: 'regels',
        type: 'fixedCollection',
        typeOptions: { multipleValues: true },
        default: {},
        placeholder: 'Add Rule',
        description: 'Order line rules',
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
                options: [
                  {
                    name: 'values',
                    displayName: 'Article',
                    values: [
                      { displayName: 'ID', name: 'id', type: 'string', default: undefined },
                      { displayName: 'URI', name: 'uri', type: 'string', default: undefined },
                    ],
                  },
                ],
              },
              { displayName: 'Description', name: 'omschrijving', type: 'string', default: undefined },
              { displayName: 'Discount Percentage', name: 'kortingsPercentage', type: 'number', default: undefined },
              {
                displayName: 'Extra Rule Fields',
                name: 'extraRegelVelden',
                type: 'fixedCollection',
                typeOptions: { multipleValues: true },
                default: {},
                placeholder: 'Add Extra Field',
                options: [
                  {
                    displayName: 'Field',
                    name: 'values',
                    typeOptions: { multipleValues: false },
                    values: [
                      { displayName: 'Description', name: 'omschrijving', type: 'string', default: undefined },
                      { displayName: 'Field Number', name: 'veldNummer', type: 'number', default: undefined },
                      { displayName: 'Value', name: 'waarde', type: 'string', default: undefined },
                    ],
                  },
                ],
              },
              { displayName: 'Quantity', name: 'aantal', type: 'number', default: undefined },
              { displayName: 'Total', name: 'totaal', type: 'number', default: undefined },
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
        placeholder: 'Add Sales Invoice',
        description: 'Sales invoice reference',
        typeOptions: { multipleValues: false },
        options: [
          {
            name: 'values',
            displayName: 'Sales Invoice',
            values: [
              { displayName: 'ID', name: 'id', type: 'string', default: undefined },
              { displayName: 'URI', name: 'uri', type: 'string', default: undefined },
            ],
          },
        ],
      },
      {
        displayName: 'Sales Order Template',
        name: 'verkoopordersjabloon',
        type: 'fixedCollection',
        default: {},
        placeholder: 'Add Template',
        description: 'Template to use for this verkooporder',
        typeOptions: { multipleValues: false },
        options: [
          {
            name: 'values',
            displayName: 'Template',
            values: [
              { displayName: 'ID', name: 'id', type: 'string', default: undefined },
              { displayName: 'URI', name: 'uri', type: 'string', default: undefined },
            ],
          },
        ],
      },
      {
        displayName: 'Sales Order VAT Entry Model',
        name: 'verkooporderBtwIngaveModel',
        type: 'options',
        default: 'Inclusief',
        options: [
          { name: 'Exclusief', value: 'Exclusief' },
          { name: 'Inclusief', value: 'Inclusief' },
        ],
      },
      { displayName: 'Total Excluding VAT', name: 'totaalExclusiefBtw', type: 'number', default: undefined },
      { displayName: 'Total Including VAT', name: 'totaalInclusiefBtw', type: 'number', default: undefined },
      { displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'Resource URI' },
    ],
  },
];
