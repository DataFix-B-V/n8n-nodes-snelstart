import { INodeProperties } from 'n8n-workflow';

export const kostenplaatsenDescription: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    default: 'getManyKostenplaatsen',
    options: [
      { name: "Delete Kostenplaatsen", value: "deleteKostenplaatsen", action: "Delete kostenplaatsen" },
			{ name: "Get Kostenplaatsen", value: "getKostenplaatsen", action: "Get kostenplaatsen" },
			{ name: "Get Many Kostenplaatsen", value: "getManyKostenplaatsen", action: "Get many kostenplaatsen" },
			{ name: "Post Many Kostenplaatsen", value: "postManyKostenplaatsen", action: "Post many kostenplaatsen" },
			{ name: "Put Kostenplaatsen", value: "putKostenplaatsen", action: "Put kostenplaatsen" }
    ],
    displayOptions: {
      show: { resource: ['kostenplaatsen'] },
    },
  },
	{
		displayName: 'Heads-up: Not all POST endpoints are fully tested. Some fields may be missing and some are required even if the official docs mark them optional. Refer to the provider’s docs and API error messages. Fields marked (*) are verified as required.',
		name: 'postNotice',
		type: 'notice',
		default: '',
		displayOptions: {
			show: {
				resource: ['kostenplaatsen'],
				operation: ['postManyKostenplaatsen', 'putKostenplaatsen'],
			},
		},
	},
	{
		displayName: 'Kostenplaats ID',
		name: 'kostenplaats_id',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the kostenplaats',
		displayOptions: {
			show: {
				resource: ['kostenplaatsen'],
				operation: ['deleteKostenplaatsen', 'getKostenplaatsen', 'putKostenplaatsen'],
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
				resource: ['kostenplaatsen'],
				operation: ['postManyKostenplaatsen', 'putKostenplaatsen'],
			},
		},
		options: [
			{ displayName: 'Description', name: 'omschrijving', type: 'string', default: '', description: 'Description of the cost center' },
			{ displayName: 'ID', name: 'id', type: 'string', default: '', description: 'The unique identifier of the cost center' },
			{ displayName: 'Inactive', name: 'nonactief', type: 'boolean', default: false, description: 'Whether the cost center is inactive' },
			{ displayName: 'Number', name: 'nummer', type: 'number', default: 0, description: 'Number of the cost center' },
			{ displayName: 'URI', name: 'uri', type: 'string', default: '', description: 'The relative URI of the object' },
		]
	}
]
