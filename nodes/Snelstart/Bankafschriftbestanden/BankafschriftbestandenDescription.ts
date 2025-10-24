import { INodeProperties } from 'n8n-workflow';

export const bankafschriftbestandenDescription: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    default: 'postBankafschriftbestand',
    options: [
      { name: "Post Bankafschriftbestand", value: "postBankafschriftbestand", action: "Post bankafschriftbestand" }
    ],
    displayOptions: {
      show: { resource: ['bankafschriftbestanden'] },
    },
  },
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: undefined,
		description: 'The name of the Bankafschriftbestand',
		required: true,
		displayOptions: {
			show: {
				resource: ['bankafschriftbestanden'],
			},
		},
	},
	{
		displayName: 'base64EncodedContent',
		name: 'base64EncodedContent',
		type: 'string',
		default: undefined,
		description: 'The base64 encoded content of the Bankafschriftbestand',
		required: true,
		displayOptions: {
			show: {
				resource: ['bankafschriftbestanden'],
			},
		},
	},
]
