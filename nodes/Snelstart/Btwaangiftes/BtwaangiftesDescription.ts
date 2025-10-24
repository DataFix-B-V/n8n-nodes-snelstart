import { INodeProperties } from 'n8n-workflow';

export const btwaangiftesDescription: INodeProperties[] = [
  {
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		default: 'getManyBtwaangiftes',
		options: [
			{ name: 'Get Btwaangiftes', value: 'getBtwaangiftes', action: 'Get btwaangiftes' },
			{ name: 'Get Many Btwaangiftes', value: 'getManyBtwaangiftes', action: 'Get many btwaangiftes' },
			{ name: 'Put Btwaangiftes Extern Aangeven', value: 'putBtwaangiftesExternAangeven', action: 'Put btwaangiftes extern aangeven' }
		],
		displayOptions: {
			show: { resource: ['btwaangifte'] },
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
				resource: ['btwaangiftes'],
				operation: ['getManyBtwaangiftes'],
			},
		},
		options: [
			{ displayName: 'Filter', name: '$filter', type: 'string', default: undefined, description: 'OData $filter' },
			{ displayName: 'Skip', name: '$skip', type: 'number', default: 0, description: 'The number of items to skip' },
			{ displayName: 'Top', name: '$top', type: 'number', default: undefined, description: 'The number of items to return' },
		]
	},
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		default: undefined,
		description: 'The ID of the btwaangifte',
		displayOptions: {
			show: {
				resource: ['btwaangifte'],
				operation: ['getBtwaangiftes', 'putBtwaangiftesExternAangeven'],
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
				resource: ['btwaangifte'],
				operation: ['putBtwaangiftesExternAangeven'],
			},
		},
		options: [
			{
				displayName: 'Is Externally Specified',
				name: 'isExternAangegeven',
				type: 'boolean',
				default: false,
				description: 'Whether the btwaangifte is specified externally',
			},
		],
	}
]
