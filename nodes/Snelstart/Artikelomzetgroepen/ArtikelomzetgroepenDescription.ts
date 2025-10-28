import { INodeProperties } from 'n8n-workflow';

export const artikelomzetgroepenDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		default: 'getArtikelomzetgroepen',
		options: [
			{ name: 'Get Artikelomzetgroepen', value: 'getArtikelomzetgroepen', action: 'Get artikelomzetgroepen' },
			{ name: 'Get Many Artikelomzetgroepen', value: 'getManyArtikelomzetgroepen', action: 'Get many artikelomzetgroepen' },
		],
		displayOptions: {
			show: { resource: ['artikelomzetgroepen'] },
		},
	},
	{
		displayName: 'Artikel Omzetgroep ID',
		name: 'artikel_omzetgroep_id',
		type: 'number',
		default: undefined,
		description: 'The public identifier of the resource as System.Guid',
		required: true,
		displayOptions: {
			show: {
				resource: ['artikelomzetgroepen'],
				operation: ['getArtikelomzetgroepen'],
			},
		},
	},
]
