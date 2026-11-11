import { INodeProperties } from 'n8n-workflow';

export const verkoopboekingenDescription: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    default: 'getVerkoopboekingen',
    options: [
      { name: "Delete Sales Booking", value: "deleteVerkoopboekingen", action: "Delete a sales booking", description: "Delete a specific sales booking (Verkoopboeking) from SnelStart" },
      { name: "Get Sales Booking", value: "getVerkoopboekingen", action: "Get a sales booking", description: "Retrieve a specific sales booking (Verkoopboeking) from SnelStart" },
      { name: "Post Many Sales Bookings", value: "postManyVerkoopboekingen", action: "Post many sales bookings", description: "Create multiple sales bookings (Verkoopboekingen) in SnelStart" },
      { name: "Put Sales Booking", value: "putVerkoopboekingen", action: "Update a sales booking", description: "Update an existing sales booking (Verkoopboeking) in SnelStart" }
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
    displayName: 'Sales Booking ID',
    name: 'verkoop_boeking_id',
    type: 'string',
    default: undefined,
    required: true,
    description: 'The ID of the sales booking to retrieve or modify',
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
    description: 'The invoice number of the sales booking',
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
    description: 'Customer (Relatie) reference for the sales booking',
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
          { displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'Customer (Relatie) ID (GUID)' },
          { displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'Customer (Relatie) resource URI' },
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
    description: 'Revenue lines of the sales booking (VAT lines go in the VAT collection)',
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
                  { displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'Cost center (Kostenplaats) ID (GUID)' },
                  { displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'Cost center (Kostenplaats) resource URI' },
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
                  { displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'General ledger (Grootboek) ID (GUID)' },
                  { displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'General ledger (Grootboek) resource URI' },
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
        description: 'Whether the sales booking was modified by an accountant',
      },
      {
        displayName: 'Description',
        name: 'omschrijving',
        type: 'string',
        default: undefined,
        description: 'Description of the sales booking',
      },
      {
        displayName: 'Document Number',
        name: 'boekstuk',
        type: 'string',
        default: undefined,
        description: 'Document number of the sales booking',
      },
      {
        displayName: 'Documents',
        name: 'documents',
        type: 'fixedCollection',
        typeOptions: { multipleValues: true },
        default: {},
        placeholder: 'Add Document',
        description: 'Attachments linked to the sales booking',
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
        description: 'Whether the sales booking is marked for extra attention',
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
        description: 'Booking date of the sales booking',
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
              { displayName: 'Description', name: 'omschrijving', type: 'string', default: undefined },
              { displayName: 'Reference', name: 'kenmerk', type: 'string', default: undefined },
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
        description: 'VAT payable per VAT rate for the sales booking',
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
