import { INodeProperties } from 'n8n-workflow';

export const actieprijzenDescription: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    default: 'getManyActieprijzen',
    options: [
      { name: "Get Many Actieprijzen", value: "getManyActieprijzen", action: "Get many actieprijzen" }
    ],
    displayOptions: {
      show: { resource: ['actieprijzen'] },
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
				resource: ['actieprijzen'],
				operation: ['getManyActieprijzen'],
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
				resource: ['actieprijzen'],
				operation: ['getManyActieprijzen'],
			},
		},
		options: [
			{ displayName: 'Skip', name: '$skip', type: 'number', default: 0, description: 'Number of records to skip from the start', displayOptions: { show: { '/returnAll': [false] }, }, },
			{ displayName: 'Top', name: '$top', type: 'number', default: 100, description: 'Maximum number of records to return', displayOptions: { show: { '/returnAll': [false] }, }, },
			{ displayName: 'Filter', name: '$filter', type: 'string', default: '', description: 'OData filter string to filter the results' },
		],
	}
]
