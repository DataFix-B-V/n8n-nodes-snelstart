import { INodeProperties } from 'n8n-workflow';

export const landenDescription: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    default: 'getLanden',
    options: [
      { name: 'Get Country', value: 'getLanden', action: 'Get country', description: 'Retrieve a country (Land) from SnelStart' },
			{ name: 'Get Many Countries', value: 'getManyLanden', action: 'Get many countries', description: 'Retrieve multiple countries (Landen) from SnelStart' },
    ],
    displayOptions: {
      show: { resource: ['landen'] },
    },
  },
	{
		displayName: 'Country ID',
		name: 'land_id',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the country (Land) to retrieve',
		displayOptions: {
			show: {
				resource: ['landen'],
				operation: ['getLanden'],
			},
		},
	}
]
