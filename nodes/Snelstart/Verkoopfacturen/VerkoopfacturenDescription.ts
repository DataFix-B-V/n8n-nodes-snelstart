import { INodeProperties } from 'n8n-workflow';

export const verkoopfacturenDescription: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    default: 'getManyVerkoopfacturen',
    options: [
      { name: "Get Many Verkoopfacturen", value: "getManyVerkoopfacturen", action: "Get many verkoopfacturen" },
      { name: "Get Verkoopfacturen", value: "getVerkoopfacturen", action: "Get verkoopfacturen" },
      { name: "Get Verkoopfacturen Ubl", value: "getVerkoopfacturenUbl", action: "Get verkoopfacturen ubl" }
    ],
    displayOptions: {
      show: { resource: ['verkoopfacturen'] },
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
				resource: ['verkoopfacturen'],
				operation: ['getManyVerkoopfacturen'],
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
		displayName: 'Verkoop Factuur ID',
		name: 'verkoop_factuur_id',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the Verkoopfacturen to retrieve',
		displayOptions: {
			show: {
				resource: ['verkoopfacturen'],
				operation: ['getVerkoopfacturen', 'getVerkoopfacturenUbl'],
			},
		},
	}
]
