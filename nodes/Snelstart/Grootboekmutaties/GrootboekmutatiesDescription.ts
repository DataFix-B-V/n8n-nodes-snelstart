import { INodeProperties } from 'n8n-workflow';

export const grootboekmutatiesDescription: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    default: 'getManyGrootboekmutaties',
    options: [
      { name: "Get Many Grootboekmutaties", value: "getManyGrootboekmutaties", action: "Get many grootboekmutaties" },
			{ name: "Get Grootboekmutaties", value: "getGrootboekmutaties", action: "Get grootboekmutaties" },
    ],
    displayOptions: {
      show: { resource: ['grootboekmutaties'] },
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
				resource: ['grootboekmutaties'],
				operation: ['getManyGrootboekmutaties'],
			},
		},
		options: [
			{ displayName: 'Filter', name: '$filter', type: 'string', default: undefined, description: 'OData $filter' },
			{ displayName: 'Skip', name: '$skip', type: 'number', default: undefined, description: 'The number of items to skip' },
			{ displayName: 'Top', name: '$top', type: 'number', default: undefined, description: 'The number of items to return' },
		],
	},
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		default: undefined,
		description: 'Unique identifier for the grootboekmutatie (GUID)',
		required: true,
		displayOptions: {
			show: {
				resource: ['grootboekmutaties'],
				operation: ['getGrootboekmutaties'],
			},
		},
	},
]
