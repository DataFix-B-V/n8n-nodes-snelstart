import { INodeProperties } from 'n8n-workflow';

export const rapportagesDescription: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    default: 'getManyRapportagesKolommenbalans',
    options: [
      { name: "Get Many Period Balance Reports", value: "getManyRapportagesPeriodebalans", action: "Get many period balance reports", description: "Retrieve multiple period balance reports (Periodebalans) from SnelStart" },
      { name: "Get Many Trial Balance Reports", value: "getManyRapportagesKolommenbalans", action: "Get many trial balance reports", description: "Retrieve multiple trial balance reports (Kolommenbalans) from SnelStart" }
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
      { displayName: 'End Date', name: 'end', type: 'dateTime', default: '', description: 'The end date until which to retrieve reports (Rapportages)' },
      { displayName: 'Start Date', name: 'start', type: 'dateTime', default: '', description: 'The start date from which to retrieve reports (Rapportages)' },
    ]
  },
]
