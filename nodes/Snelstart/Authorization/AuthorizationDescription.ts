import { INodeProperties } from 'n8n-workflow';

export const authorizationDescription: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    default: 'getAuthorization',
    options: [
			{ name: 'Get Authorization', value: 'getAuthorization', action: 'Get an authorization' },
    ],
    displayOptions: {
      show: { resource: ['authorization'] },
    },
  },
]
