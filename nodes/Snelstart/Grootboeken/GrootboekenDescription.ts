import { INodeProperties } from 'n8n-workflow';

export const grootboekenDescription: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    default: 'getManyGrootboeken',
    options: [
      { name: 'Get Grootboeken', value: 'getGrootboeken', action: 'Get grootboeken' },
			{ name: 'Get Many Grootboeken', value: 'getManyGrootboeken', action: 'Get many grootboeken' },
			{ name: 'Post Many Grootboeken', value: 'postManyGrootboeken', action: 'Post many grootboeken' }
    ],
    displayOptions: {
      show: { resource: ['grootboeken'] },
    },
  },
	{
		displayName:
			'Heads-up: Not all POST endpoints are fully tested. Some fields may be missing and some are required even if the official docs mark them optional. Refer to the provider’s docs and API error messages. Fields marked (*) are verified as required.',
		name: 'postNotice',
		type: 'notice',
		default: '',
		displayOptions: {
			show: {
				resource: ['grootboeken'],
				operation: ['postManyGrootboeken'],
			},
		},
	},
	{
		displayName: 'Grootboek ID',
		name: 'grootboek_id',
		type: 'string',
		default: undefined,
		description: 'Unique identifier for the grootboek (GUID)',
		required: true,
		displayOptions: {
			show: {
				resource: ['grootboeken'],
				operation: ['getGrootboeken'],
			},
		},
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: true,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: ['grootboeken'],
				operation: ['getManyGrootboeken'],
			},
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
				resource: ['grootboeken'],
				operation: ['getManyGrootboeken'],
			},
		},
		options: [
			{ displayName: 'Filter', name: '$filter', type: 'string', default: undefined, description: 'OData $filter' },
			{ displayName: 'Skip', name: '$skip', type: 'number', default: undefined, description: 'The number of items to skip', displayOptions: { show: { '/returnAll': [false] }, }, },
			{ displayName: 'Top', name: '$top', type: 'number', default: undefined, description: 'The number of items to return', displayOptions: { show: { '/returnAll': [false] }, }, },
		],
	},
	{
		displayName: 'Add Field',
		name: 'fields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['grootboeken'],
				operation: ['postManyGrootboeken'],
			},
		},
		options: [
			{ displayName: 'Account Code', name: 'rekeningCode', type: 'string', default: undefined, description: 'Account code of the grootboek' },
			{ displayName: 'Cost Center Required', name: 'kostenplaatsVerplicht', type: 'boolean', default: false, description: 'Whether a cost center is required when booking' },
			{ displayName: 'Description', name: 'omschrijving', type: 'string', default: undefined, description: 'The description of the grootboek' },
			{ displayName: 'Grootboek Function', name: 'grootboekfunctie', type: 'string', default: undefined, description: 'The grootboek function of the grootboek' },
			{ displayName: 'Grootboek Rubric', name: 'grootboekRubriek', type: 'string', default: undefined, description: 'The description of the grootboek rubric' },
			{ displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'The public identifier (as System.Guid) that uniquely identifies an object' },
			{ displayName: 'Inactive', name: 'nonactief', type: 'boolean', default: false, description: 'Whether the grootboek is no longer active within the administration. If so, the grootboek can be considered "deleted".' },
			{ displayName: 'Modified On', name: 'modifiedOn', type: 'dateTime', default: undefined, description: 'The time the grootboek was last modified or created' },
			{ displayName: 'Number', name: 'nummer', type: 'number', default: undefined, description: 'The number of the grootboek' },
			{
				displayName: 'RGS Code',
				name: 'rgsCode',
				type: 'fixedCollection',
				placeholder: 'Add RGS Code',
				typeOptions: { multipleValues: true },
				default: {},
				description: 'The RGS code of the grootboek',
				options: [
					{
						displayName: 'Rule',
						name: 'values',
						values: [
							{ displayName: 'Version', name: 'versie', type: 'string', default: undefined, description: 'The version of the RGS code' },
							{ displayName: 'RGS Code', name: 'rgsCode', type: 'string', default: undefined },
						],
					},
				],
			},
			{ displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'Returns the relative Uri of the object to which the identifier belongs' },
			{ displayName: 'VAT Rate Code', name: 'vatRateCode', type: 'string', default: undefined, description: 'Vat rate code. This code maps to a vat rate.' },
			{
				displayName: 'VAT Type',
				name: 'btwSoort',
				type: 'string',
				default: 'Hoog',
				description: 'The VAT type(s) for this grootboek. Read-only in API; here we emit as array.',
				options: [
					{ name: 'Overig', value: 'Overig' },
					{ name: 'Laag', value: 'Laag' },
					{ name: 'Hoog', value: 'Hoog' },
				],
			},
		],
	}
]

