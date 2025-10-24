import { INodeProperties } from 'n8n-workflow';

export const offertesDescription: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    default: 'getManyOffertes',
	options: [
	  { name: "Delete Offertes", value: "deleteOffertes", action: "Delete offertes" },
	  { name: "Get Many Offertes", value: "getManyOffertes", action: "Get many offertes" },
	  { name: "Get Offertes", value: "getOffertes", action: "Get offertes" },
	  { name: "Post Many Offertes", value: "postManyOffertes", action: "Post many offertes" },
	  { name: "Put Offertes", value: "putOffertes", action: "Put offertes" }
	],
    displayOptions: {
      show: { resource: ['offertes'] },
    },
  },
	{
		displayName: 'Quotation ID',
		name: 'offertes_id',
		type: 'string',
		default: '',
		required: true,
		description: 'The unique identifier of the quotation',
		displayOptions: {
			show: {
				resource: ['offertes'],
				operation: ['getOffertes', 'putOffertes', 'deleteOffertes'],
			},
		},
	},
	{
		displayName: 'Relation ID',
		name: 'relatie',
		type: 'fixedCollection',
		typeOptions: { multipleValues: false },
		default: {},
		placeholder: 'Add Relation ID',
		description: 'The unique identifier of the relation',
		required: true,
		displayOptions: {
			show: {
				resource: ['offertes'],
				operation: ['postManyOffertes', 'putOffertes'],
			},
		},
		options: [
			{
				name: 'values',
				displayName: 'Relation',
				values: [
					{ displayName: 'ID', name: 'id', type: 'string', default: '', description: 'The unique identifier of the relation' },
					{ displayName: 'URI', name: 'uri', type: 'string', default: '' },
				],
			},
		],
	},
	{
		displayName: 'Date',
		name: 'datum',
		type: 'dateTime',
		default: '',
		description: 'The date of the quotation',
		required: true,
		displayOptions: {
			show: {
				resource: ['offertes'],
				operation: ['postManyOffertes', 'putOffertes'],
			},
		},
	},
	{
		displayName: 'Add Field',
		name: 'fields',
		type: 'fixedCollection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['offertes'],
				operation: ['postManyOffertes', 'putOffertes'],
			},
		},
		options: [
			{ displayName: 'Process Status', name: 'procesStatus', type: 'string', default: '', description: 'Status of the order. If not specified, the default value order is used. Cash receipt and Invoice are not available.' },
			{ displayName: 'Number', name: 'nummer', type: 'number', default: '', description: 'The order number' },
			{ displayName: 'Modified On', name: 'modifiedOn', type: 'dateTime', default: '', description: 'The date and time the quotation was last modified' },
			{ displayName: 'Credit Term', name: 'krediettermijn', type: 'number', default: '', description: 'The credit term (in days) of the quotation. If this field is empty, the credit term of the customer is used.' },
			{ displayName: 'Description', name: 'omschrijving', type: 'string', default: '', description: 'The description of the order' },
			{ displayName: 'Payment Reference', name: 'betalingskenmerk', type: 'string', default: '', description: 'The payment reference of the order' },
			{
				displayName: 'Direct Debit Authorization',
				name: 'incassomachtiging',
				type: 'fixedCollection',
				typeOptions: { multipleValues: false },
				default: {},
				placeholder: 'Add Direct Debit Authorization',
				description: 'The unique identifier of the direct debit authorization',
				options: [
					{
						name: 'values',
						displayName: 'Direct Debit Authorization',
						values: [
							{ displayName: 'ID', name: 'id', type: 'string', default: '', description: 'The unique identifier of the direct debit authorization' },
							{ displayName: 'URI', name: 'uri', type: 'string', default: '', description: 'The relative URI of the object to which the identifier belongs' },
						],
					},
				],
			},
			{
				displayName: 'Delivery Address',
				name: 'afleveradres',
				type: 'fixedCollection',
				typeOptions: { multipleValues: false },
				default: {},
				placeholder: 'Add Delivery Address',
				description: 'A container for address information',
				options: [
					{ displayName: 'Contact Person', name: 'contactpersoon', type: 'string', default: '', description: 'The contact person of the address' },
					{ displayName: 'Street', name: 'straat', type: 'string', default: '', description: 'The street of the address' },
					{ displayName: 'Postal Code', name: 'postcode', type: 'string', default: '', description: 'The postal code of the address' },
					{ displayName: 'City', name: 'plaats', type: 'string', default: '', description: 'The city of the address' },
					{
						displayName: 'Country',
						name: 'values',
						type: 'fixedCollection',
						typeOptions: { multipleValues: false },
						default: {},
						placeholder: 'Add Country',
						description: 'A container for country information',
						options: [
							{ displayName: 'ID', name: 'id', type: 'string', default: '', description: 'The unique identifier of the country' },
							{ displayName: 'URI', name: 'uri', type: 'string', default: '', description: 'The relative URI of the object to which the identifier belongs' },
						],
					},
				],
			},
			{
				displayName: 'Invoice Address',
				name: 'values',
				type: 'fixedCollection',
				typeOptions: { multipleValues: false },
				default: {},
				placeholder: 'Add Invoice Address',
				description: 'A container for invoice address information',
				options: [
					{ displayName: 'Contact Person', name: 'contactpersoon', type: 'string', default: '', description: 'The contact person of the address' },
					{ displayName: 'Street', name: 'straat', type: 'string', default: '', description: 'The street of the address' },
					{ displayName: 'Postal Code', name: 'postcode', type: 'string', default: '', description: 'The postal code of the address' },
					{ displayName: 'City', name: 'plaats', type: 'string', default: '', description: 'The city of the address' },
					{
						displayName: 'Country',
						name: 'values',
						type: 'fixedCollection',
						typeOptions: { multipleValues: false },
						default: {},
						placeholder: 'Add Country',
						description: 'A container for country information',
						options: [
							{ displayName: 'ID', name: 'id', type: 'string', default: '', description: 'The unique identifier of the country' },
							{ displayName: 'URI', name: 'uri', type: 'string', default: '', description: 'The relative URI of the object to which the identifier belongs' },
						],
					},
				],
			},
			{ displayName: 'VAT Entry Model', name: 'verkooporderBtwIngaveModel', type: 'string', default: '' },
			{
				displayName: 'Cost Center',
				name: 'kostenplaats',
				type: 'fixedCollection',
				typeOptions: { multipleValues: false },
				default: {},
				placeholder: 'Add Cost Center',
				description: 'The unique identifier of the cost center',
				options: [
					{
						name: 'values',
						displayName: 'Cost Center',
						values: [
							{ displayName: 'ID', name: 'id', type: 'string', default: '', description: 'The unique identifier of the cost center' },
							{ displayName: 'URI', name: 'uri', type: 'string', default: '', description: 'The relative URI of the object to which the identifier belongs' },
						],
					},
				],
			},
			{
				displayName: 'Rules',
				name: 'regels',
				type: 'fixedCollection',
				typeOptions: { multipleValues: true },
				default: {},
				placeholder: 'Add Rule',
				description: 'The rules of the quotation',
				options: [
					{
						name: 'values',
						displayName: 'Rule',
						values: [
							{
								displayName: 'Article',
								name: 'artikel',
								type: 'fixedCollection',
								typeOptions: { multipleValues: false },
								default: {},
								placeholder: 'Add Article',
								description: 'The unique identifier of the article',
								options: [
									{
										name: 'values',
										displayName: 'Article',
										values: [
											{ displayName: 'ID', name: 'id', type: 'string', default: '', description: 'The unique identifier of the article' },
											{ displayName: 'URI', name: 'uri', type: 'string', default: '', description: 'The relative URI of the object to which the identifier belongs' },
										],
									},
								],
							},
							{ displayName: 'Description', name: 'omschrijving', type: 'string', default: '', description: 'The description of the rule' },
							{ displayName: 'Discount Percentage', name: 'kortingsPercentage', type: 'number', default: '', description: 'The discount percentage of the rule' },
							{
								displayName: 'Extra Rule Fields',
								name: 'extraRegelVelden',
								type: 'fixedCollection',
								typeOptions: { multipleValues: true },
								default: {},
								placeholder: 'Add Extra Rule Field',
								description: 'The extra rule fields of the rule',
								options: [
									{ displayName: 'Field Number', name: 'veldNummer', type: 'number', default: '', description: 'The field number of the extra rule field' },
									{ displayName: 'Description', name: 'omschrijving', type: 'string', default: '', description: 'The description of the extra rule field' },
									{ displayName: 'Value', name: 'waarde', type: 'string', default: '', description: 'The value of the extra rule field' },
								],
							},
							{ displayName: 'Quantity', name: 'aantal', type: 'number', default: '', description: 'The quantity of the rule' },
							{ displayName: 'Total', name: 'totaal', type: 'number', default: '', description: 'The total of the rule' },
							{ displayName: 'Unit Price', name: 'stuksprijs', type: 'number', default: '', description: 'The unit price of the rule' },
						],
					},
				],
			},
			{ displayName: 'Memo', name: 'memo', type: 'string', default: '' },
			{ displayName: 'Order Reference', name: 'orderreferentie', type: 'string', default: '', description: 'The order reference of a quotation. This is included in the e-invoice and in the invoice as PDF.' },
			{ displayName: 'Invoice Discount', name: 'factuurkorting', type: 'number', default: '' },
			{
				displayName: 'Sales Invoice',
				name: 'verkoopfactuur',
				type: 'fixedCollection',
				typeOptions: { multipleValues: false },
				default: {},
				placeholder: 'Add Sales Invoice',
				description: 'The unique identifier of the sales invoice',
				options: [
					{
						name: 'values',
						displayName: 'Sales Invoice',
						values:
						[
							{ displayName: 'ID', name: 'id', type: 'string', default: '', description: 'The unique identifier of the sales invoice' },
							{ displayName: 'URI', name: 'uri', type: 'string', default: '', description: 'The relative URI of the sales invoice' },
						],
					},
				],
			},
			{ displayName: 'Total Excluding VAT', name: 'totaalExclusiefBtw', type: 'number', default: '' },
			{ displayName: 'Total Including VAT', name: 'totaalInclusiefBtw', type: 'number', default: '' },
			{ displayName: 'Is Quotation', name: 'isOfferte', type: 'boolean', default: false, description: 'Whether this is a quotation' },
			{ displayName: 'ID', name: 'id', type: 'string', default: '', description: 'The public identifier (as System.Guid) that uniquely identifies an object' },
			{ displayName: 'URI', name: 'uri', type: 'string', default: '', description: 'Gives the relative Uri of the object to which the identifier belongs' },
		],
	},
];



