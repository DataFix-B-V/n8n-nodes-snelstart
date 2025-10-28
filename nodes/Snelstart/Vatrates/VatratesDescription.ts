import { INodeProperties } from 'n8n-workflow';

export const vatratesDescription: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    default: 'getManyVatrates',
    options: [
      { name: "Get Many Vatrates", value: "getManyVatrates", action: "Get many vatrates" },
      { name: "Get Vatrates", value: "getVatrates", action: "Get vatrates" }
    ],
    displayOptions: {
      show: { resource: ['vatrates'] },
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
				resource: ['vatrates'],
				operation: ['getManyVatrates'],
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
				resource: ['vatrates'],
				operation: ['getManyVatrates'],
			},
		},
		options: [
			{ displayName: 'Filter', name: '$filter', type: 'string', default: undefined, description: 'OData $filter' },
			{ displayName: 'Skip', name: '$skip', type: 'number', default: 0, description: 'The number of items to skip', displayOptions: { show: { '/returnAll': [false] }, }, },
			{ displayName: 'Top', name: '$top', type: 'number', default: undefined, description: 'The number of items to return', displayOptions: { show: { '/returnAll': [false] }, }, },
		]
	},
	{
		displayName: 'VAT Rate ID',
		name: 'vatrate_id',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the VAT Rate to retrieve',
		displayOptions: {
			show: {
				resource: ['vatrates'],
				operation: ['getVatrates'],
			},
		},
	}
]

