import { INodeProperties } from 'n8n-workflow';

export const echoDescription: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    default: 'getManyEchoInput',
    options: [
      { name: "Get Many Echo Input", value: "getManyEchoInput", action: "Get many echo input" }
    ],
    displayOptions: {
      show: { resource: ['echo'] },
    },
  },
	{
		displayName: 'Input',
		name: 'input',
		type: 'string',
		default: '',
		description: 'The input to be echoed back by the API',
		required: true,
		displayOptions: {
			show: {
				resource: ['echo'],
				operation: ['getManyEchoInput'],
			},
		},
	}
]
