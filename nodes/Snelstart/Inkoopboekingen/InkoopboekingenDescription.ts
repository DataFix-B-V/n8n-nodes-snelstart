import { INodeProperties } from 'n8n-workflow';

export const inkoopboekingenDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		default: 'getInkoopboekingen',
		options: [
			{ name: "Delete Inkoopboekingen", value: "deleteInkoopboekingen", action: "Delete inkoopboekingen" },
			{ name: "Get Inkoopboekingen", value: "getInkoopboekingen", action: "Get inkoopboekingen" },
			{ name: "Get Many Inkoopboekingen Get Create From Attachment Status", value: "getManyInkoopboekingenGetCreateFromAttachmentStatus", action: "Get many inkoopboekingen get create from attachment status" },
			{ name: "Post Many Inkoopboekingen", value: "postManyInkoopboekingen", action: "Post many inkoopboekingen" },
			{ name: "Post Many Inkoopboekingen Create From Attachment", value: "postManyInkoopboekingenCreateFromAttachment", action: "Post many inkoopboekingen create from attachment" },
			{ name: "Post Many Inkoopboekingen Ubl", value: "postManyInkoopboekingenUbl", action: "Post many inkoopboekingen ubl" },
			{ name: "Put Inkoopboekingen", value: "putInkoopboekingen", action: "Put inkoopboekingen" }
  	],
		displayOptions: { show: { resource: ['inkoopboekingen'] } },
	},
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		default: undefined,
		description: 'Unique identifier for the inkoopboeking (GUID)',
		required: true,
		displayOptions: {
			show: {
				resource: ['inkoopboekingen'],
				operation: ['getInkoopboekingen', 'putInkoopboekingen', 'deleteInkoopboekingen'],
			},
		},
	},
	{
		displayName: 'Invoice Date',
		name: 'factuurdatum',
		type: 'dateTime',
		default: undefined,
		description: 'The date of the invoice, this will also be the date that the entry is made in the administration',
		required: true,
		displayOptions: {
			show: {
				resource: ['inkoopboekingen'],
				operation: ['postManyInkoopboekingen', 'putInkoopboekingen'],
		},
		},
	},
	{
		displayName: 'Invoice Number',
		name: 'factuurnummer',
		type: 'string',
		default: undefined,
		description: 'The invoice number as stated on the invoice',
		required: true,
		displayOptions: {
			show: {
				resource: ['inkoopboekingen'],
				operation: ['postManyInkoopboekingen' ,'putInkoopboekingen'],
		},
		},
	},
	{
		displayName: 'Supplier',
		name: 'leverancier',
		type: 'fixedCollection',
		placeholder: 'Add Supplier',
		typeOptions: { multipleValues: false },
		default: {},
		description: 'The supplier of the invoice',
		required: true,
		displayOptions: {
			show: {
				resource: ['inkoopboekingen'],
				operation: ['postManyInkoopboekingen', 'putInkoopboekingen'],
		},
		},
		options: [
			{
				displayName: 'Rule',
				name: 'values',
				values: [
					{ displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'Unique identifier for the relatie (GUID)', required: true },
					{ displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'The URI of the relatie', required: true },
				],
			},
		],
	},
	{
		displayName: 'Booking Rules',
		name: 'boekingsregels',
		type: 'fixedCollection',
		typeOptions: { multipleValues: true },
		default: {},
		placeholder: 'Add Booking Rule',
		description: 'The booking rules of the inkoopboeking',
		required: true,
		displayOptions: {
			show: {
				resource: ['inkoopboekingen'],
				operation: ['postManyInkoopboekingen', 'putInkoopboekingen'],
			},
		},
		options: [
			{
				displayName: 'Rule',
				name: 'values',
				values: [
					{
						displayName: 'Cost Center',
						name: 'kostenplaats',
						type: 'fixedCollection',
						default: {},
						options: [
							{
								displayName: 'Cost Center',
								name: 'values',
								values: [
									{ displayName: 'ID', name: 'id', type: 'string', default: undefined },
									{ displayName: 'URI', name: 'uri', type: 'string', default: undefined },
								],
							},
						],
					},
					{ displayName: 'Description', name: 'omschrijving', type: 'string', default: undefined },
					{
						displayName: 'Ledger',
						name: 'grootboek',
						type: 'fixedCollection',
						default: {},
						options: [
							{
								displayName: 'Ledger',
								name: 'values',
								values: [
									{ displayName: 'ID', name: 'id', type: 'string', default: undefined },
									{ displayName: 'URI', name: 'uri', type: 'string', default: undefined },
								],
							},
						],
					},
					{ displayName: 'VAT Amount', name: 'bedrag', type: 'number', default: 0 },
					{ displayName: 'VAT Type', name: 'btwSoort', type: 'string', default: undefined },
				],
			},
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
				resource: ['inkoopboekingen'],
				operation: ['postManyInkoopboekingen', 'putInkoopboekingen'],
			},
		},
		options: [
			{ displayName: 'Accounting Document', name: 'boekstuk', type: 'string', default: undefined, description: 'The document number of the purchase entry' },
			{ displayName: 'Description', name: 'omschrijving', type: 'string', default: undefined, description: 'The description of the inkoopboeking' },
			{
				displayName: 'Documents',
				name: 'documents',
				type: 'fixedCollection',
				placeholder: 'Add Document',
				typeOptions: { multipleValues: true },
				default: {},
				description: 'The documents linked to the inkoopboeking',
				options: [
					{
						displayName: 'Document',
						name: 'values',
						values: [
							{ displayName: 'File Name', name: 'fileName', type: 'string', default: undefined, },
							{ displayName: 'ID', name: 'id', type: 'string', default: undefined, },
							{ displayName: 'Parent Identifier', name: 'parentIdentifier', type: 'string', default: undefined, },
							{ displayName: 'Read Only', name: 'readOnly', type: 'boolean', default: false, },
							{ displayName: 'URI', name: 'uri', type: 'string', default: undefined, },
						],
					},
				],
			},
			{ displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'Unique identifier for the inkoopboeking (GUID)' },
			{ displayName: 'Invoice Amount', name: 'factuurbedrag', type: 'number', default: undefined, description: 'The total amount of the invoice including VAT' },
			{ displayName: 'Modified By Accountant', name: 'gewijzigdDoorAccountant', type: 'boolean', default: false, description: 'Whether the entry was modified by an accountant' },
			{ displayName: 'Modified On', name: 'modifiedOn', type: 'dateTime', default: undefined, description: 'The date and time of the last modification of the inkoopboeking' },
			{ displayName: 'Require Attention', name: 'markering', type: 'boolean', default: false, description: 'Whether the entry requires attention' },
			{ displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'The URI of the inkoopboeking' },
			{
				displayName: 'VAT',
				name: 'btw',
				type: 'fixedCollection',
				placeholder: 'Add VAT',
				typeOptions: { multipleValues: true },
				default: {},
				description: 'The VAT details of the inkoopboeking',
				options: [
					{
						displayName: 'VAT Detail',
						name: 'values',
						values: [
							{ displayName: 'VAT Type', name: 'btwSoort', type: 'string', default: undefined },
							{ displayName: 'VAT Amount', name: 'btwBedrag', type: 'number', default: 0 },
						],
					}
				]
			},
		],
	},
	{
		displayName: 'Filename',
		name: 'fileName',
		type: 'string',
		default: undefined,
		description: 'Name of the uploaded file',
		displayOptions: {
			show: {
				resource: ['inkoopboekingen'],
				operation: ['postManyInkoopboekingenCreateFromAttachment', 'postManyInkoopboekingenUbl'],
			},
		},
	},
	{
		displayName: 'Content',
		name: 'content',
		type: 'string',
		typeOptions: { alwaysOpenEditWindow: true },
		default: undefined,
		description: 'Base64 encoded file content',
		displayOptions: {
			show: {
				resource: ['inkoopboekingen'],
				operation: ['postManyInkoopboekingenCreateFromAttachment', 'postManyInkoopboekingenUbl'],
			},
		},
	},
	{
		displayName: 'Instance ID',
		name: 'instanceId',
		type: 'string',
		default: undefined,
		description: 'The instance ID of the UBL invoice',
		displayOptions: {
			show: {
				resource: ['inkoopboekingen'],
				operation: ['getManyInkoopboekingenGetCreateFromAttachmentStatus'],
			},
		},
	},
	{
		displayName: 'PDF Content',
		name: 'pdfContent',
		type: 'string',
		typeOptions: { alwaysOpenEditWindow: true },
		default: undefined,
		description: 'Base64 encoded PDF file content',
		displayOptions: {
			show: {
				resource: ['inkoopboekingen'],
				operation: ['postManyInkoopboekingenUbl'],
			},
		},
	},
	{
		displayName: 'Force Persist',
		name: 'forcePersist',
		type: 'boolean',
		default: false,
		description: 'Whether to ignore validation warnings',
		displayOptions: {
			show: {
				resource: ['inkoopboekingen'],
				operation: ['postManyInkoopboekingenUbl'],
			},
		},
	}
];
