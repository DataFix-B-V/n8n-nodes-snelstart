import { INodeProperties } from 'n8n-workflow';

export const bankafschriftbestandenDescription: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    default: 'postBankafschriftbestand',
    options: [
      { name: "Post Bank Statement File", value: "postBankafschriftbestand", action: "Post bank statement file", description: "Upload a bank statement file (Bankafschriftbestand) to SnelStart" }
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
		description: 'The name of the bank statement file (Bankafschriftbestand)',
		required: true,
		displayOptions: {
			show: {
				resource: ['bankafschriftbestanden'],
			},
		},
	},
	{
		displayName: 'Base64 Encoded Content',
		name: 'base64EncodedContent',
		type: 'string',
		default: undefined,
		description: 'The Base64-encoded content of the bank statement file (Bankafschriftbestand)',
		required: true,
		displayOptions: {
			show: {
				resource: ['bankafschriftbestanden'],
			},
		},
	},
]
