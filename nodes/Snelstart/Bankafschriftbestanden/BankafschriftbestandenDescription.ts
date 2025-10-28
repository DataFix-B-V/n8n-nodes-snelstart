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
	// Adding a note to the UI for posting and putting offertes, that the user should be aware of some fields are required despite the official docs stating they’re optional fields can be missed during testing
	{
		displayName:
			'Heads-up: Not all POST endpoints are fully tested. Some fields may be missing and some are required even if the official docs mark them optional. Refer to the provider’s docs and API error messages. Fields marked (*) are verified as required.',
		name: 'postNotice',
		type: 'notice',
		default: '',
		displayOptions: {
			show: {
				resource: ['bankafschriftbestanden'],
				operation: ['postManyBankafschriftbestanden', 'postBankafschriftbestand'],
			},
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
