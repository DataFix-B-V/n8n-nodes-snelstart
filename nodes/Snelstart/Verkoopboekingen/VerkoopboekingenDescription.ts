import { INodeProperties } from 'n8n-workflow';

export const verkoopboekingenDescription: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    default: 'getVerkoopboekingen',
    options: [
      { name: "Get Verkoopboekingen", value: "getVerkoopboekingen", action: "Get verkoopboekingen" },
      { name: "Post Many Verkoopboekingen", value: "postManyVerkoopboekingen", action: "Post many verkoopboekingen" },
      { name: "Put Verkoopboekingen", value: "putVerkoopboekingen", action: "Put verkoopboekingen" },
      { name: "Delete Verkoopboekingen", value: "deleteVerkoopboekingen", action: "Delete verkoopboekingen" }
    ],
    displayOptions: {
      show: { resource: ['verkoopboekingen'] },
    },
  },
	{
		displayName: 'Heads-up: Not all POST endpoints are fully tested. Some fields may be missing and some are required even if the official docs mark them optional. Refer to the provider’s docs and API error messages. Fields marked (*) are verified as required.',
		name: 'postNotice',
		type: 'notice',
		default: '',
		displayOptions: {
			show: {
				resource: ['verkoopboekingen'],
				operation: ['postManyVerkoopboekingen', 'putVerkoopboekingen'],
			},
		},
	},
 {
    displayName: 'Verkoop Boeking ID',
    name: 'verkoop_boeking_id',
    type: 'string',
    default: undefined,
    required: true,
    description: 'The ID of the verkoopboeking to retrieve or modify',
    displayOptions: {
      show: {
        resource: ['verkoopboekingen'],
        operation: ['getVerkoopboekingen', 'putVerkoopboekingen', 'deleteVerkoopboekingen'],
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
				resource: ['verkoopboekingen'],
				operation: ['getManyVerkoopboekingen'],
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
        resource: ['verkoopboekingen'],
        operation: ['getManyVerkoopboekingen'],
      },
    },
    options: [
      { displayName: 'Filter', name: '$filter', type: 'string', default: undefined, description: 'OData $filter' },
      { displayName: 'Skip', name: '$skip', type: 'number', default: 0, description: 'The number of items to skip', displayOptions: { show: { '/returnAll': [false] }, }, },
      { displayName: 'Top', name: '$top', type: 'number', default: undefined, description: 'The number of items to return', displayOptions: { show: { '/returnAll': [false] }, }, },
    ],
  },

  {
    displayName: 'Invoice Number',
    name: 'factuurnummer',
    type: 'string',
    default: undefined,
    required: true,
    description: 'The invoice number of the verkoopboeking',
    displayOptions: {
      show: {
        resource: ['verkoopboekingen'],
        operation: ['postManyVerkoopboekingen', 'putVerkoopboekingen'],
      },
    },
  },

  {
    displayName: 'Customer',
    name: 'klant',
    type: 'fixedCollection',
    default: {},
    required: true,
    placeholder: 'Add Customer',
    description: 'Relatie reference for the verkoopboeking',
    typeOptions: { multipleValues: false },
    displayOptions: {
      show: {
        resource: ['verkoopboekingen'],
        operation: ['postManyVerkoopboekingen', 'putVerkoopboekingen'],
      },
    },
    options: [
      {
        displayName: 'Customer',
        name: 'values',
        default: {},
        values: [
          { displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'Relatie ID (GUID)' },
          { displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'Relatie resource URI' },
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
    required: true,
    placeholder: 'Add Booking Rule',
    description: 'Revenue lines of the verkoopboeking (VAT lines go in the Btw collection)',
    displayOptions: {
      show: {
        resource: ['verkoopboekingen'],
        operation: ['postManyVerkoopboekingen', 'putVerkoopboekingen'],
      },
    },
    options: [
      {
        displayName: 'Rule',
        name: 'values',
        typeOptions: { multipleValues: false },
        values: [
          { displayName: 'Amount', name: 'bedrag', type: 'number', default: undefined, description: 'Line amount' },
          {
            displayName: 'Cost Center',
            name: 'kostenplaats',
            type: 'fixedCollection',
            default: {},
            options: [
              {
                name: 'values',
                displayName: 'Cost Center',
                values: [
                  { displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'Kostenplaats ID (GUID)' },
                  { displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'Kostenplaats resource URI' },
                ],
              },
            ],
          },
          { displayName: 'Description', name: 'omschrijving', type: 'string', default: undefined, description: 'Rule description' },
          {
            displayName: 'Ledger',
            name: 'grootboek',
            type: 'fixedCollection',
            default: {},
            options: [
              {
                name: 'values',
                displayName: 'Ledger',
                values: [
                  { displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'Grootboek ID (GUID)' },
                  { displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'Grootboek resource URI' },
                ],
              },
            ],
          },
          { displayName: 'VAT Type', name: 'btwSoort', type: 'string', default: undefined, description: 'E.g. "Geen".' },
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
        resource: ['verkoopboekingen'],
        operation: ['postManyVerkoopboekingen', 'putVerkoopboekingen'],
      },
    },
    options: [
      {
        displayName: 'Changed by Accountant',
        name: 'gewijzigdDoorAccountant',
        type: 'boolean',
        default: false,
        description: 'Whether the verkoopboeking was modified by an accountant',
      },
      {
        displayName: 'Description',
        name: 'omschrijving',
        type: 'string',
        default: undefined,
        description: 'Description of the verkoopboeking',
      },
      {
        displayName: 'Document Number',
        name: 'boekstuk',
        type: 'string',
        default: undefined,
        description: 'Document number of the verkoopboeking',
      },
      {
        displayName: 'Documents',
        name: 'documents',
        type: 'fixedCollection',
        typeOptions: { multipleValues: true },
        default: {},
        placeholder: 'Add Document',
        description: 'Attachments linked to the verkoopboeking',
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
        displayName: 'Flagged',
        name: 'markering',
        type: 'boolean',
        default: false,
        description: 'Whether the verkoopboeking is marked for extra attention',
      },
      {
        displayName: 'Invoice Amount',
        name: 'factuurbedrag',
        type: 'number',
        default: undefined,
        description: 'Invoice total amount',
      },
      {
        displayName: 'Invoice Date',
        name: 'factuurdatum',
        type: 'dateTime',
        default: undefined,
        description: 'Booking date of the verkoopboeking',
      },
      {
        displayName: 'Modified On',
        name: 'modifiedOn',
        type: 'dateTime',
        default: undefined,
        description: 'Last modification date-time',
      },
      {
        displayName: 'One-Off Direct Debit Authorization',
        name: 'eenmaligeIncassoMachtiging',
        type: 'fixedCollection',
        default: {},
        placeholder: 'Add Authorization',
        description: 'Details of a one-off direct debit authorization',
        typeOptions: { multipleValues: false },
        options: [
          {
            name: 'values',
            displayName: 'Authorization',
            values: [
              { displayName: 'Date', name: 'datum', type: 'dateTime', default: undefined },
              { displayName: 'Reference', name: 'kenmerk', type: 'string', default: undefined },
              { displayName: 'Description', name: 'omschrijving', type: 'string', default: undefined },
            ],
          },
        ],
      },
      {
        displayName: 'Payment Term',
        name: 'betalingstermijn',
        type: 'number',
        default: undefined,
        description: 'Payment term in days',
      },
      {
        displayName: 'Public ID',
        name: 'id',
        type: 'string',
        default: undefined,
        description: 'Public identifier (GUID)',
      },
      {
        displayName: 'Recurring Direct Debit Authorization',
        name: 'doorlopendeIncassoMachtiging',
        type: 'fixedCollection',
        default: {},
        placeholder: 'Add Authorization',
        description: 'Reference to a recurring direct debit authorization',
        typeOptions: { multipleValues: false },
        options: [
          {
            name: 'values',
            displayName: 'Authorization',
            values: [
              { displayName: 'ID', name: 'id', type: 'string', default: undefined },
              { displayName: 'URI', name: 'uri', type: 'string', default: undefined },
            ],
          },
        ],
      },
      {
        displayName: 'URI',
        name: 'uri',
        type: 'string',
        default: undefined,
        description: 'Resource URI',
      },
      {
        displayName: 'VAT',
        name: 'btw',
        type: 'fixedCollection',
        typeOptions: { multipleValues: true },
        default: {},
        placeholder: 'Add VAT Line',
        description: 'VAT payable per VAT rate for the verkoopboeking',
        options: [
          {
            displayName: 'VAT Line',
            name: 'values',
            typeOptions: { multipleValues: false },
            values: [
              { displayName: 'VAT Amount', name: 'btwBedrag', type: 'number', default: undefined },
              { displayName: 'VAT Type', name: 'btwSoort', type: 'string', default: undefined },
            ],
          },
        ],
      },
    ],
  },
];
