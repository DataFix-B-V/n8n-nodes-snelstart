import { INodeProperties } from 'n8n-workflow';

export const inkoopfacturenDescription: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    default: 'getManyInkoopfacturen',
    options: [
      { name: "Get Many Purchase Invoices", value: "getManyInkoopfacturen", action: "Get many purchase invoices", description: "Retrieve multiple purchase invoices (Inkoopfacturen) from SnelStart" }
    ],
    displayOptions: {
      show: { resource: ['inkoopfacturen'] },
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
				resource: ['inkoopfacturen'],
				operation: ['getManyInkoopfacturen'],
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
				resource: ['inkoopfacturen'],
				operation: ['getManyInkoopfacturen'],
			},
		},
		options: [
			{ displayName: 'Filter', name: '$filter', type: 'string', default: undefined, description: 'OData filter string to filter the results' },
			{ displayName: 'Skip', name: '$skip', type: 'number', default: 0, description: 'The number of items to skip', displayOptions: { show: { '/returnAll': [false] }, }, },
			{ displayName: 'Top', name: '$top', type: 'number', default: undefined, description: 'The number of items to return', displayOptions: { show: { '/returnAll': [false] }, }, },
		]
	}
]
