import { INodeProperties } from 'n8n-workflow';

export const inkoopfacturenDescription: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    default: 'getManyInkoopfacturen',
    options: [
      { name: "Get Many Inkoopfacturen", value: "getManyInkoopfacturen", action: "Get many inkoopfacturen" }
    ],
    displayOptions: {
      show: { resource: ['inkoopfacturen'] },
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
				resource: ['inkoopfacturen'],
				operation: ['getManyInkoopfacturen'],
			},
		},
		options: [
			{ displayName: 'Filter', name: '$filter', type: 'string', default: undefined, description: 'OData $filter' },
			{ displayName: 'Skip', name: '$skip', type: 'number', default: 0, description: 'The number of items to skip' },
			{ displayName: 'Top', name: '$top', type: 'number', default: undefined, description: 'The number of items to return' },
		]
	}
]
