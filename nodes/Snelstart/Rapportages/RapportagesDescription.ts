import { INodeProperties } from 'n8n-workflow';

export const rapportagesDescription: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    default: 'getManyRapportagesKolommenbalans',
    options: [
      { name: "Get Many Rapportages Kolommenbalans", value: "getManyRapportagesKolommenbalans", action: "Get many rapportages kolommenbalans" },
      { name: "Get Many Rapportages Periodebalans", value: "getManyRapportagesPeriodebalans", action: "Get many rapportages periodebalans" }
    ],
    displayOptions: {
      show: { resource: ['rapportages'] },
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
				resource: ['rapportages'],
				operation: ['getManyRapportagesKolommenbalans', 'getManyRapportagesPeriodebalans'],
			},
		},
		options: [
			{ displayName: 'Start Date', name: 'start', type: 'dateTime', default: '', description: 'The start date from which to retrieve rapportages' },
			{ displayName: 'End Date', name: 'end', type: 'dateTime', default: '', description: 'The end date until which to retrieve rapportages' },
		]
	},
]
