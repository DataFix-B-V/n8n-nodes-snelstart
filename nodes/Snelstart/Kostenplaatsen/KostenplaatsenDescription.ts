import { INodeProperties } from 'n8n-workflow';

export const kostenplaatsenDescription: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    default: 'getManyKostenplaatsen',
    options: [
      { name: "Delete Cost Center", value: "deleteKostenplaatsen", action: "Delete cost center", description: "Delete a cost center (Kostenplaats) from SnelStart" },
			{ name: "Get Cost Center", value: "getKostenplaatsen", action: "Get cost center", description: "Retrieve a cost center (Kostenplaats) from SnelStart" },
			{ name: "Get Many Cost Centers", value: "getManyKostenplaatsen", action: "Get many cost centers", description: "Retrieve multiple cost centers (Kostenplaatsen) from SnelStart" },
			{ name: "Post Many Cost Centers", value: "postManyKostenplaatsen", action: "Post many cost centers", description: "Post multiple cost centers (Kostenplaatsen) to SnelStart" },
			{ name: "Put Cost Center", value: "putKostenplaatsen", action: "Put cost center", description: "Put a cost center (Kostenplaats) in SnelStart" }
    ],
    displayOptions: {
      show: { resource: ['kostenplaatsen'] },
    },
  },
	{
		displayName: 'Heads-up: Not all POST and PUT endpoints are fully tested. Some fields may be missing and some are required even if the official docs mark them optional. Refer to the provider’s docs and API error messages. Fields marked (*) are verified as required.',
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
		displayName: 'Cost Center ID',
		name: 'kostenplaats_id',
		type: 'string',
		default: '',
		required: true,
		description: 'The unique identifier of the cost center (Kostenplaats)',
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
			{ displayName: 'Description', name: 'omschrijving', type: 'string', default: '', description: 'The description (Omschrijving) of the cost center (Kostenplaats)' },
			{ displayName: 'ID', name: 'id', type: 'string', default: '', description: 'The unique identifier of the cost center (Kostenplaats)' },
			{ displayName: 'Inactive', name: 'nonactief', type: 'boolean', default: false, description: 'Whether the cost center (Kostenplaats) is inactive (Non-actief)' },
			{ displayName: 'Number', name: 'nummer', type: 'number', default: 0, description: 'The number (Nummer) of the cost center (Kostenplaats)' },
			{ displayName: 'URI', name: 'uri', type: 'string', default: '', description: 'The relative URI of the cost center (Kostenplaats)' },
		]
	}
]
