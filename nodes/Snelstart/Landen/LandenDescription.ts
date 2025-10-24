import { INodeProperties } from 'n8n-workflow';

export const landenDescription: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    default: 'getLanden',
    options: [
      { name: 'Get Landen', value: 'getLanden', action: 'Get landen' },
			{ name: 'Get Many Landen', value: 'getManyLanden', action: 'Get many landen' },
    ],
    displayOptions: {
      show: { resource: ['landen'] },
    },
  },
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the land to retrieve',
		displayOptions: {
			show: {
				resource: ['landen'],
				operation: ['getLanden'],
			},
		},
	}
]
