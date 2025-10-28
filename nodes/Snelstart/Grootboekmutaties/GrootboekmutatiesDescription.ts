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
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: true,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['grootboekmutaties'],
				operation: ['getManyGrootboekmutaties'],
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
				resource: ['grootboekmutaties'],
				operation: ['getManyGrootboekmutaties'],
			},
		},
		options: [
			{ displayName: 'Filter', name: '$filter', type: 'string', default: undefined, description: 'OData $filter' },
			{ displayName: 'Skip', name: '$skip', type: 'number', default: undefined, description: 'The number of items to skip', displayOptions: { show: { '/returnAll': [false] }, }, },
			{ displayName: 'Top', name: '$top', type: 'number', default: undefined, description: 'The number of items to return', displayOptions: { show: { '/returnAll': [false] }, }, },
		],
	},
	{
		displayName: 'Grootboek Mutatie ID',
		name: 'grootboek_mutatie_id',
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
