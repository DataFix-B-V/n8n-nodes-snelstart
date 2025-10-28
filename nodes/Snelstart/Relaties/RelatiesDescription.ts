import { INodeProperties } from 'n8n-workflow';

export const relatiesDescription: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    default: 'getManyRelaties',
    options: [
      { name: "Delete Relaties", value: "deleteRelaties", action: "Delete relaties" },
      { name: "Get Many Relaties", value: "getManyRelaties", action: "Get many relaties" },
      { name: "Get Relaties", value: "getRelaties", action: "Get relaties" },
      { name: "Get Relaties Custom Fields", value: "getRelatiesCustomFields", action: "Get relaties custom fields" },
      { name: "Get Relaties Doorlopendeincassomachtigingen", value: "getRelatiesDoorlopendeincassomachtigingen", action: "Get relaties doorlopendeincassomachtigingen" },
      { name: "Get Relaties Inkoopboekingen", value: "getRelatiesInkoopboekingen", action: "Get relaties inkoopboekingen" },
      { name: "Get Relaties Verkoopboekingen", value: "getRelatiesVerkoopboekingen", action: "Get relaties verkoopboekingen" },
      { name: "Post Many Relaties", value: "postManyRelaties", action: "Post many relaties" },
      { name: "Put Relaties", value: "putRelaties", action: "Put relaties" },
      { name: "Put Relaties Custom Fields", value: "putRelatiesCustomFields", action: "Put relaties custom fields" },
    ],
    displayOptions: {
      show: { resource: ['relaties'] },
    },
  },
	{
		displayName: 'Heads-up: Not all POST endpoints are fully tested. Some fields may be missing and some are required even if the official docs mark them optional. Refer to the provider’s docs and API error messages. Fields marked (*) are verified as required.',
		name: 'postNotice',
		type: 'notice',
		default: '',
		displayOptions: {
			show: {
				resource: ['relaties'],
				operation: ['postManyRelaties', 'putRelaties', 'putRelatiesCustomFields'],
			},
		},
	},
	{
		displayName: 'Relatie ID',
		name: 'relatie_id',
		type: 'string',
		default: '',
		required: true,
		description: 'The ID (GUID) of the relatie',
		displayOptions: {
			show: {
				resource: ['relaties'],
				operation: ['getRelaties', 'putRelaties', 'getRelatiesCustomFields', 'putRelatiesCustomFields', 'getRelatiesDoorlopendeincassomachtigingen', 'getRelatiesInkoopboekingen', 'getRelatiesVerkoopboekingen', 'deleteRelaties'],
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
				resource: ['relaties'],
				operation: ['getManyRelaties'],
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
				resource: ['relaties'],
				operation: ['getManyRelaties'],
			},
		},
		options: [
			{ displayName: 'Filter', name: '$filter', type: 'string', default: undefined, description: 'OData $filter' },
			{ displayName: 'Skip', name: '$skip', type: 'number', default: 0, description: 'The number of items to skip', displayOptions: { show: { '/returnAll': [false] }, }, },
			{ displayName: 'Top', name: '$top', type: 'number', default: undefined, description: 'The number of items to return', displayOptions: { show: { '/returnAll': [false] }, }, },
		]
	},
  {
    displayName: 'Add Field',
    name: 'fields',
    type: 'collection',
    placeholder: 'Add Field',
    default: {},
    displayOptions: {
      show: {
        resource: ['relaties'],
        operation: ['postManyRelaties', 'putRelaties'],
      },
    },
    options: [
      {
        displayName: 'Aanmaning Email Settings',
        name: 'aanmaningEmailVersturen',
        type: 'fixedCollection',
        default: {},
        placeholder: 'Add Aanmaning Email Settings',
        description: 'Email settings for sending reminders (relatiesoort Klant)',
        typeOptions: { multipleValues: false },
        options: [
          {
            name: 'values',
            displayName: 'Aanmaning Email Settings',
            values: [
              { displayName: 'Should Send', name: 'shouldSend', type: 'boolean', default: false },
              { displayName: 'Email', name: 'email', type: 'string', default: undefined, placeholder: 'name@email.com' },
              { displayName: 'CC Email', name: 'ccEmail', type: 'string', default: undefined },
            ],
          },
        ],
      },
      { displayName: 'Attach UBL as Attachment', name: 'ublBestandAlsBijlage', type: 'boolean', default: false, description: 'Whether to attach the UBL file as an attachment to the email' },
      { displayName: 'Banking Enabled', name: 'bankieren', type: 'boolean', default: false, description: 'Whether direct debit type is Core or B2B' },
      {
        displayName: 'Bestelling Email Settings',
        name: 'bestellingEmailVersturen',
        type: 'fixedCollection',
        default: {},
        placeholder: 'Add Bestelling Email Settings',
        description: 'Email settings for sending purchase orders',
        typeOptions: { multipleValues: false },
        options: [
          {
            name: 'values',
            displayName: 'Bestelling Email Settings',
            values: [
              { displayName: 'Should Send', name: 'shouldSend', type: 'boolean', default: false },
              { displayName: 'Email', name: 'email', type: 'string', default: undefined, placeholder: 'name@email.com' },
              { displayName: 'CC Email', name: 'ccEmail', type: 'string', default: undefined },
            ],
          },
        ],
      },
      {
        displayName: 'Bevestiging Email Settings',
        name: 'bevestigingsEmailVersturen',
        type: 'fixedCollection',
        default: {},
        placeholder: 'Add Bevestiging Email Settings',
        description: 'Email settings for sending confirmations (relatiesoort Klant)',
        typeOptions: { multipleValues: false },
        options: [
          {
            name: 'values',
            displayName: 'Bevestiging Email Settings',
            values: [
              { displayName: 'Should Send', name: 'shouldSend', type: 'boolean', default: false },
              { displayName: 'Email', name: 'email', type: 'string', default: undefined, placeholder: 'name@email.com' },
              { displayName: 'CC Email', name: 'ccEmail', type: 'string', default: undefined },
            ],
          },
        ],
      },
      { displayName: 'BIC', name: 'bic', type: 'string', default: undefined },
      {
        displayName: 'Business Address',
        name: 'vestigingsAdres',
        type: 'fixedCollection',
        default: {},
        placeholder: 'Add Business Address',
        description: 'The business address of the relatie',
        typeOptions: { multipleValues: false },
        options: [
          {
            name: 'values',
            displayName: 'Business Address',
            values: [
              { displayName: 'Contact', name: 'contactpersoon', type: 'string', default: undefined },
              { displayName: 'Street', name: 'straat', type: 'string', default: undefined },
              { displayName: 'Postal Code', name: 'postcode', type: 'string', default: undefined },
              { displayName: 'City', name: 'plaats', type: 'string', default: undefined },
              {
                displayName: 'Country',
                name: 'land',
                type: 'fixedCollection',
                default: {},
                typeOptions: { multipleValues: false },
                options: [
                  {
                    name: 'values',
                    displayName: 'Country',
                    values: [
                      { displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'Country ID (GUID)' },
                      { displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'Country resource URI' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        displayName: 'Correspondence Address',
        name: 'correspondentieAdres',
        type: 'fixedCollection',
        default: {},
        placeholder: 'Add Correspondence Address',
        description: 'The correspondence address of the relatie',
        typeOptions: { multipleValues: false },
        options: [
          {
            name: 'values',
            displayName: 'Correspondence Address',
            values: [
              { displayName: 'Contact', name: 'contactpersoon', type: 'string', default: undefined },
              { displayName: 'Street', name: 'straat', type: 'string', default: undefined },
              { displayName: 'Postal Code', name: 'postcode', type: 'string', default: undefined },
              { displayName: 'City', name: 'plaats', type: 'string', default: undefined },
              {
                displayName: 'Country',
                name: 'land',
                type: 'fixedCollection',
                default: {},
                typeOptions: { multipleValues: false },
                options: [
                  {
                    name: 'values',
                    displayName: 'Country',
                    values: [
                      { displayName: 'ID', name: 'id', type: 'string', default: undefined },
                      { displayName: 'URI', name: 'uri', type: 'string', default: undefined },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      { displayName: 'Credit Limit', name: 'kredietLimiet', type: 'number', default: undefined, description: 'Default credit limit (EUR) for this relatie' },
      { displayName: 'Credit Term', name: 'krediettermijn', type: 'number', default: undefined, description: 'Default number of days credit term for this relatie' },
      {
        displayName: 'Documents',
        name: 'documents',
        type: 'fixedCollection',
        typeOptions: { multipleValues: true },
        default: {},
        placeholder: 'Add Document',
        description: 'Documents linked to the relatie',
        options: [
          {
            displayName: 'Document',
            name: 'values',
            typeOptions: { multipleValues: false },
            values: [
              { displayName: 'File Name', name: 'fileName', type: 'string', default: undefined },
              { displayName: 'ID', name: 'id', type: 'string', default: undefined },
              { displayName: 'Parent Identifier', name: 'parentIdentifier', type: 'string', default: undefined, description: 'GUID' },
              { displayName: 'Read Only', name: 'readOnly', type: 'boolean', default: false },
              { displayName: 'URI', name: 'uri', type: 'string', default: undefined },
            ],
          },
        ],
      },
      {
        displayName: 'Dunning Type',
        name: 'aanmaningsoort',
        type: 'options',
        default: 'Nee',
        options: [
          { name: 'Nee', value: 'Nee' },
          { name: 'Onderneming', value: 'Onderneming' },
          { name: 'Consument', value: 'Consument' },
        ],
        description: 'The reminder/dunning type that applies to the relatie',
      },
      { displayName: 'Email', name: 'email', type: 'string', default: undefined, placeholder: 'name@email.com' },
      {
        displayName: 'Extra Fields',
        name: 'extraVeldenKlant',
        type: 'fixedCollection',
        typeOptions: { multipleValues: true },
        default: {},
        placeholder: 'Add Extra Field',
        description: 'Custom fields on a klant type relatie',
        options: [
          {
            displayName: 'Field',
            name: 'values',
            typeOptions: { multipleValues: false },
            values: [
              { displayName: 'Name', name: 'naam', type: 'string', default: undefined },
              { displayName: 'Value', name: 'waarde', type: 'string', default: undefined },
            ],
          },
        ],
      },
      {
        displayName: 'Factuur Email Settings',
        name: 'factuurEmailVersturen',
        type: 'fixedCollection',
        default: {},
        placeholder: 'Add Factuur Email Settings',
        description: 'Email settings for sending invoices (relatiesoort Klant)',
        typeOptions: { multipleValues: false },
        options: [
          {
            name: 'values',
            displayName: 'Factuur Email Settings',
            values: [
              { displayName: 'Should Send', name: 'shouldSend', type: 'boolean', default: false },
              { displayName: 'Email', name: 'email', type: 'string', default: undefined, placeholder: 'name@email.com' },
              { displayName: 'CC Email', name: 'ccEmail', type: 'string', default: undefined },
            ],
          },
        ],
      },
      { displayName: 'IBAN', name: 'iban', type: 'string', default: undefined },
      { displayName: 'Inactive (Nonactief)', name: 'nonactief', type: 'boolean', default: false, description: 'Whether the relatie is inactive' },
      {
        displayName: 'Incasso Type (IncassoSoort)',
        name: 'incassoSoort',
        type: 'options',
        default: 'Geen',
        options: [
          { name: 'Geen', value: 'Geen' },
          { name: 'Core', value: 'Core' },
          { name: 'B2B', value: 'B2B' },
        ],
        description: 'The direct debit type that applies to the relatie',
      },
      { displayName: 'Inkoopboekingen URI', name: 'inkoopBoekingenUri', type: 'string', default: undefined, description: 'Reference to purchase entries for the relatie' },
      { displayName: 'Invoice Discount (Factuurkorting)', name: 'factuurkorting', type: 'number', default: undefined, description: 'Default invoice discount for this relatie' },
      {
        displayName: 'Invoice To (factuurRelatie)',
        name: 'factuurRelatie',
        type: 'fixedCollection',
        default: {},
        placeholder: 'Add factuurRelatie',
        description: 'If invoices to this relatie must be forwarded to another relatie',
        typeOptions: { multipleValues: false },
        options: [
          {
            name: 'values',
            displayName: 'factuurRelatie',
            values: [
              { displayName: 'ID', name: 'id', type: 'string', default: undefined },
              { displayName: 'URI', name: 'uri', type: 'string', default: undefined },
            ],
          },
        ],
      },
      { displayName: 'KvK Number', name: 'kvkNummer', type: 'string', default: undefined },
      { displayName: 'Memo', name: 'memo', type: 'string', default: undefined },
      { displayName: 'Mobile Phone', name: 'mobieleTelefoon', type: 'string', default: undefined },
      { displayName: 'Modified On', name: 'modifiedOn', type: 'dateTime', default: undefined, description: 'The date when this relatie was last modified' },
      { displayName: 'Name', name: 'naam', type: 'string', default: undefined, description: 'The full name of the relatie' },
      {
        displayName: 'Offerte Email Settings',
        name: 'offerteEmailVersturen',
        type: 'fixedCollection',
        default: {},
        placeholder: 'Add Offerte Email Settings',
        description: 'Email settings for sending offertes (relatiesoort Klant)',
        typeOptions: { multipleValues: false },
        options: [
          {
            name: 'values',
            displayName: 'Offerte Email Settings',
            values: [
              { displayName: 'Should Send', name: 'shouldSend', type: 'boolean', default: false },
              { displayName: 'Email', name: 'email', type: 'string', default: undefined, placeholder: 'name@email.com' },
              { displayName: 'CC Email', name: 'ccEmail', type: 'string', default: undefined },
            ],
          },
        ],
      },
      {
        displayName: 'Offerte-Aanvraag Email Settings',
        name: 'offerteAanvraagEmailVersturen',
        type: 'fixedCollection',
        default: {},
        placeholder: 'Add Offerte-aanvraag Email Settings',
        description: 'Email settings for sending quotation requests (relatiesoort Leverancier)',
        typeOptions: { multipleValues: false },
        options: [
          {
            name: 'values',
            displayName: 'Offerte-Aanvraag Email Settings',
            values: [
              { displayName: 'Should Send', name: 'shouldSend', type: 'boolean', default: false },
              { displayName: 'Email', name: 'email', type: 'string', default: undefined, placeholder: 'name@email.com' },
              { displayName: 'CC Email', name: 'ccEmail', type: 'string', default: undefined },
            ],
          },
        ],
      },
      { displayName: 'OIN', name: 'oin', type: 'string', default: undefined },
      { displayName: 'Phone', name: 'telefoon', type: 'string', default: undefined },
      { displayName: 'Public ID', name: 'id', type: 'string', default: undefined, description: 'Relatie ID (GUID)' },
      { displayName: 'Relatie Code (Relatiecode)', name: 'relatiecode', type: 'number', default: undefined, description: 'The relatie number' },
      {
        displayName: 'Relatiesoort',
        name: 'relatiesoort',
        type: 'multiOptions',
        default: [],
        description: 'Allowed values: Klant, Leverancier',
        options: [
          { name: 'Klant', value: 'Klant' },
          { name: 'Leverancier', value: 'Leverancier' },
        ],
      },
      { displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'Relatie resource URI' },
      { displayName: 'VAT Number', name: 'btwNummer', type: 'string', default: undefined },
      { displayName: 'Verkoopboekingen URI', name: 'verkoopBoekingenUri', type: 'string', default: undefined, description: 'Reference to sales entries for the relatie' },
      { displayName: 'Website URL', name: 'websiteUrl', type: 'string', default: undefined },
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
				resource: ['relaties'],
				operation: ['putRelatiesCustomFields'],
			},
		},
		options: [
			{
				displayName: 'Klant Custom Fields',
				name: 'klantCustomFields',
				type: 'fixedCollection',
				typeOptions: { multipleValues: true },
				default: {},
				placeholder: 'Add Custom Field',
				description: 'Custom fields for a klant type relatie',
				options: [
					{
						displayName: 'Field',
						name: 'values',
						typeOptions: { multipleValues: false },
						values: [
							{ displayName: 'Name', name: 'name', type: 'string', default: undefined, description: 'Custom field name' },
              { displayName: 'Value', name: 'value', type: 'json', default: '=', description: 'Custom field value (any JSON)' },
						],
					},
				],
			},
			{
				displayName: 'Leverancier Custom Fields',
				name: 'leverancierCustomFields',
				type: 'fixedCollection',
				typeOptions: { multipleValues: true },
				default: {},
				placeholder: 'Add Custom Field',
				description: 'Custom fields for a leverancier type relatie',
				options: [
					{
						displayName: 'Field',
						name: 'values',
						typeOptions: { multipleValues: false },
						values: [
							{ displayName: 'Name', name: 'name', type: 'string', default: undefined, description: 'Custom field name' },
							{ displayName: 'Value', name: 'value', type: 'json', default: '=', description: 'Custom field value (any JSON)' },
						],
					},
				],
			},
		],
	}
]
