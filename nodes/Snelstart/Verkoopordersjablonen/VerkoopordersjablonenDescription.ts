import { INodeProperties } from 'n8n-workflow';

export const verkoopordersjablonenDescription: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    default: 'getManyVerkoopordersjablonen',
    options: [
      { name: "Get Many Verkoopordersjablonen", value: "getManyVerkoopordersjablonen", action: "Get many verkoopordersjablonen" },
			{ name: "Get Verkoopordersjablonen", value: "getVerkoopordersjablonen", action: "Get verkoopordersjablonen" }
    ],
    displayOptions: {
      show: { resource: ['verkoopordersjablonen'] },
    },
  },
	{
		displayName: 'Verkooporder Sjabloon ID',
		name: 'verkooporder_sjabloon_id',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID of the Verkoopordersjablonen to retrieve',
		displayOptions: {
			show: {
				resource: ['verkoopordersjablonen'],
				operation: ['getVerkoopordersjablonen'],
			},
		},
	}
]

