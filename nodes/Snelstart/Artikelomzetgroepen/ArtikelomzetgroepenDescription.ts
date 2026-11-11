import { INodeProperties } from 'n8n-workflow';

export const artikelomzetgroepenDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		default: 'getArtikelomzetgroepen',
		options: [
			{ name: 'Get Article Revenue Group', value: 'getArtikelomzetgroepen', action: 'Get article revenue group', description: 'Retrieve an article revenue group (Artikelomzetgroep) from SnelStart' },
			{ name: 'Get Many Article Revenue Groups', value: 'getManyArtikelomzetgroepen', action: 'Get many article revenue groups', description: 'Retrieve multiple article revenue groups (Artikelomzetgroepen) from SnelStart' },
		],
		displayOptions: {
			show: { resource: ['artikelomzetgroepen'] },
		},
	},
	{
		displayName: 'Article Revenue Group ID',
		name: 'artikel_omzetgroep_id',
		type: 'number',
		default: undefined,
		description: 'The public identifier of the article revenue group (Artikelomzetgroep) as System.Guid',
		required: true,
		displayOptions: {
			show: {
				resource: ['artikelomzetgroepen'],
				operation: ['getArtikelomzetgroepen'],
			},
		},
	},
];
