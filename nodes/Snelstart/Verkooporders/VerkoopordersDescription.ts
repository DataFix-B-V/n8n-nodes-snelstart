import { INodeProperties } from 'n8n-workflow';

export const verkoopordersDescription: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    default: 'getManyVerkooporders',
    options: [
      { name: "Delete Sales Order", value: "deleteVerkooporders", action: "Delete a sales order", description: "Delete a specific sales order (Verkooporder) from SnelStart" },
      { name: "Get Many Sales Orders", value: "getManyVerkooporders", action: "Get many sales orders", description: "Retrieve multiple sales orders (Verkooporders) from SnelStart" },
      { name: "Get Sales Order", value: "getVerkooporders", action: "Get a sales order", description: "Retrieve a specific sales order (Verkooporder) from SnelStart" },
      { name: "Post Many Sales Orders", value: "postManyVerkooporders", action: "Post many sales orders", description: "Create multiple sales orders (Verkooporders) in SnelStart" },
      { name: "Put Sales Order", value: "putVerkooporders", action: "Update a sales order", description: "Update an existing sales order (Verkooporder) in SnelStart" },
      { name: "Put Sales Order Process Status", value: "putVerkoopordersProcesStatus", action: "Update a sales order process status", description: "Update the process status (Processtatus) of a sales order (Verkooporder) in SnelStart" },
    ],
    displayOptions: {
      show: { resource: ['verkooporders'] },
    },
  },
  {
    displayName: 'Heads-up: Not all POST endpoints are fully tested. Some fields may be missing and some are required even if the official docs mark them optional. Refer to the provider’s docs and API error messages. Fields marked (*) are verified as required.',
    name: 'postNotice',
    type: 'notice',
    default: '',
    displayOptions: {
      show: {
        resource: ['verkooporders'],
        operation: ['postManyVerkooporders', 'putVerkooporders', 'putVerkoopordersProcesStatus'],
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
        resource: ['verkooporders'],
        operation: ['getManyVerkooporders'],
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
        resource: ['verkooporders'],
        operation: ['getManyVerkooporders'],
      },
    },
    options: [
      { displayName: 'Filter', name: '$filter', type: 'string', default: undefined, description: 'OData $filter' },
      { displayName: 'Skip', name: '$skip', type: 'number', default: 0, description: 'The number of items to skip', displayOptions: { show: { '/returnAll': [false] }, }, },
      { displayName: 'Top', name: '$top', type: 'number', default: undefined, description: 'The number of items to return', displayOptions: { show: { '/returnAll': [false] }, }, },
    ],
  },
  // Dropdown where the user can choose between a body via json or via parameters
  {
    displayName: 'Specify Body',
    name: 'specifyBody',
    type: 'options',
    options: [
      { name: 'JSON', value: 'json', description: 'Provide the body as raw JSON' },
      { name: 'Parameters', value: 'parameters', description: 'Provide the body via parameters' },
    ],
    default: 'parameters',
    displayOptions: {
      show: {
        resource: ['verkooporders'],
        operation: ['postManyVerkooporders', 'putVerkooporders'],
      },
    },
  },
  {
    displayName: 'Sales Order ID',
    name: 'verkooporder_id',
    type: 'string',
    default: '',
    required: true,
    description: 'The ID of the sales order to retrieve',
    displayOptions: {
      show: {
        resource: ['verkooporders'],
        operation: ['getVerkooporders', 'putVerkooporders', 'putVerkoopordersProcesStatus', 'deleteVerkooporders'],
      },
    },
  },
  {
    displayName: 'JSON Body',
    name: 'jsonBody',
    type: 'json',
    default: '',
    description: 'Body as JSON object',
    displayOptions: {
      show: {
        resource: ['verkooporders'],
        operation: ['postManyVerkooporders', 'putVerkooporders'],
        specifyBody: ['json'],
      },
    },
  },
  {
    displayName: 'Date',
    name: 'datum',
    type: 'dateTime',
    default: undefined,
    required: true,
    description: 'The sales order (Verkooporder) date',
    displayOptions: {
      show: {
        resource: ['verkooporders'],
        operation: ['postManyVerkooporders', 'putVerkooporders'],
        specifyBody: ['parameters'],
      },
    },
  },
  {
    displayName: 'Relation',
    name: 'relatie',
    type: 'fixedCollection',
    default: {},
    required: true,
    placeholder: 'Add Relation',
    description: 'Relation (Relatie) reference for the sales order',
    typeOptions: { multipleValues: false },
    displayOptions: {
      show: {
        resource: ['verkooporders'],
        operation: ['postManyVerkooporders', 'putVerkooporders'],
        specifyBody: ['parameters'],
      },
    },
    options: [
      {
        displayName: 'Relation',
        name: 'values',
        default: {},
        values: [
          { displayName: 'ID', name: 'id', type: 'string', default: undefined },
          { displayName: 'URI', name: 'uri', type: 'string', default: undefined },
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
        resource: ['verkooporders'],
        operation: ['putVerkoopordersProcesStatus'],
      },
    },
    options: [
      { displayName: 'ID', name: 'id', type: 'string', default: '', description: 'Public identifier (GUID)' },
      { displayName: 'Process Status', name: 'procesStatus', type: 'string', default: 'Order', description: 'Status of the sales order' },
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
        resource: ['verkooporders'],
        operation: ['postManyVerkooporders', 'putVerkooporders'],
        specifyBody: ['parameters'],
      },
    },
    options: [
      { displayName: 'Blocked', name: 'geblokkeerd', type: 'boolean', default: false, description: 'Whether the sales order is blocked' },
      {
        displayName: 'Cost Center',
        name: 'kostenplaats',
        type: 'fixedCollection',
        default: {},
        placeholder: 'Add Cost Center',
        description: 'Cost center (Kostenplaats) reference',
        typeOptions: { multipleValues: false },
        options: [
          {
            name: 'values',
            displayName: 'Cost Center',
            values: [
              { displayName: 'ID', name: 'id', type: 'string', default: undefined },
              { displayName: 'URI', name: 'uri', type: 'string', default: undefined },
            ],
          },
        ],
      },
      { displayName: 'Credit Term', name: 'krediettermijn', type: 'number', default: undefined, description: 'Credit term in days' },
      {
        displayName: 'Delivery Address',
        name: 'afleveradres',
        type: 'fixedCollection',
        default: {},
        placeholder: 'Add Delivery Address',
        description: 'The delivery address of the sales order',
        typeOptions: { multipleValues: false },
        options: [
          {
            name: 'values',
            displayName: 'Delivery Address',
            values: [
              { displayName: 'City', name: 'plaats', type: 'string', default: undefined },
              { displayName: 'Contact Person', name: 'contactpersoon', type: 'string', default: undefined },
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
              { displayName: 'Postal Code', name: 'postcode', type: 'string', default: undefined },
              { displayName: 'Street', name: 'straat', type: 'string', default: undefined },
            ],
          },
        ],
      },
      { displayName: 'Description', name: 'omschrijving', type: 'string', default: undefined, description: 'The description of the sales order' },
      {
        displayName: 'Direct Debit Authorization',
        name: 'incassomachtiging',
        type: 'fixedCollection',
        default: {},
        placeholder: 'Add Authorization',
        description: 'Direct debit authorization (Incassomachtiging) reference',
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
        displayName: 'Extra Header Fields',
        name: 'extraHoofdVelden',
        type: 'fixedCollection',
        typeOptions: { multipleValues: true },
        default: {},
        placeholder: 'Add Header Field',
        description: 'Additional header fields as defined by the used template',
        options: [
          {
            displayName: 'Field',
            name: 'values',
            typeOptions: { multipleValues: false },
            values: [
              { displayName: 'Description', name: 'omschrijving', type: 'string', default: undefined },
              { displayName: 'Field Number', name: 'veldNummer', type: 'number', default: undefined },
              { displayName: 'Value', name: 'waarde', type: 'string', default: undefined },
            ],
          },
        ],
      },
      {
        displayName: 'Invoice Address',
        name: 'factuuradres',
        type: 'fixedCollection',
        default: {},
        placeholder: 'Add Invoice Address',
        description: 'The invoice address of the sales order',
        typeOptions: { multipleValues: false },
        options: [
          {
            name: 'values',
            displayName: 'Invoice Address',
            values: [
              { displayName: 'City', name: 'plaats', type: 'string', default: undefined },
              { displayName: 'Contact Person', name: 'contactpersoon', type: 'string', default: undefined },
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
              { displayName: 'Postal Code', name: 'postcode', type: 'string', default: undefined },
              { displayName: 'Street', name: 'straat', type: 'string', default: undefined },
            ],
          },
        ],
      },
      { displayName: 'Invoice Discount', name: 'factuurkorting', type: 'number', default: undefined },
      { displayName: 'Memo', name: 'memo', type: 'string', default: undefined },
      { displayName: 'Modified On', name: 'modifiedOn', type: 'dateTime', default: undefined, description: 'Last modification date-time' },
      { displayName: 'Number', name: 'nummer', type: 'number', default: undefined, description: 'The order number' },
      { displayName: 'Order Reference', name: 'orderreferentie', type: 'string', default: undefined, description: 'Reference included on e-invoice and PDF' },
      {
        displayName: 'Order Status',
        name: 'verkoopOrderStatus',
        type: 'options',
        default: 'InBehandeling',
        description: 'Processing status of the sales order',
        options: [
          { name: 'Completed', value: 'Uitgevoerd' },
          { name: 'In Progress', value: 'InBehandeling' },
          { name: 'Service', value: 'Service' },
        ],
      },
      { displayName: 'Payment Reference', name: 'betalingskenmerk', type: 'string', default: undefined, description: 'The payment reference of the sales order' },
      {
        displayName: 'Process Status',
        name: 'procesStatus',
        type: 'options',
        default: 'Order',
        description: 'Document status of the sales order',
        options: [
          { name: 'Collection Note', value: 'Afhaalbon' },
          { name: 'Confirmation', value: 'Bevestiging' },
          { name: 'Order', value: 'Order' },
          { name: 'Packing Slip', value: 'Pakbon' },
          { name: 'Quotation', value: 'Offerte' },
          { name: 'Work Order', value: 'Werkbon' },
        ],
      },
      { displayName: 'Public ID', name: 'id', type: 'string', default: undefined, description: 'Public identifier (GUID)' },
      {
        displayName: 'Rules',
        name: 'regels',
        type: 'fixedCollection',
        typeOptions: { multipleValues: true },
        default: {},
        placeholder: 'Add Rule',
        description: 'Sales order line rules',
        options: [
          {
            displayName: 'Rule',
            name: 'values',
            typeOptions: { multipleValues: false },
            values: [
              {
                displayName: 'Article',
                name: 'artikel',
                type: 'fixedCollection',
                default: {},
                options: [
                  {
                    name: 'values',
                    displayName: 'Article',
                    values: [
                      { displayName: 'ID', name: 'id', type: 'string', default: undefined },
                      { displayName: 'URI', name: 'uri', type: 'string', default: undefined },
                    ],
                  },
                ],
              },
              { displayName: 'Description', name: 'omschrijving', type: 'string', default: undefined },
              { displayName: 'Discount Percentage', name: 'kortingsPercentage', type: 'number', default: undefined },
              {
                displayName: 'Extra Rule Fields',
                name: 'extraRegelVelden',
                type: 'fixedCollection',
                typeOptions: { multipleValues: true },
                default: {},
                placeholder: 'Add Extra Field',
                options: [
                  {
                    displayName: 'Field',
                    name: 'values',
                    typeOptions: { multipleValues: false },
                    values: [
                      { displayName: 'Description', name: 'omschrijving', type: 'string', default: undefined },
                      { displayName: 'Field Number', name: 'veldNummer', type: 'number', default: undefined },
                      { displayName: 'Value', name: 'waarde', type: 'string', default: undefined },
                    ],
                  },
                ],
              },
              { displayName: 'Quantity', name: 'aantal', type: 'number', default: undefined },
              { displayName: 'Total', name: 'totaal', type: 'number', default: undefined },
              { displayName: 'Unit Price', name: 'stuksprijs', type: 'number', default: undefined },
            ],
          },
        ],
      },
      {
        displayName: 'Sales Invoice',
        name: 'verkoopfactuur',
        type: 'fixedCollection',
        default: {},
        placeholder: 'Add Sales Invoice',
        description: 'Sales invoice (Verkoopfactuur) reference',
        typeOptions: { multipleValues: false },
        options: [
          {
            name: 'values',
            displayName: 'Sales Invoice',
            values: [
              { displayName: 'ID', name: 'id', type: 'string', default: undefined },
              { displayName: 'URI', name: 'uri', type: 'string', default: undefined },
            ],
          },
        ],
      },
      {
        displayName: 'Sales Order Template',
        name: 'verkoopordersjabloon',
        type: 'fixedCollection',
        default: {},
        placeholder: 'Add Template',
        description: 'Template to use for this sales order (Verkooporder)',
        typeOptions: { multipleValues: false },
        options: [
          {
            name: 'values',
            displayName: 'Template',
            values: [
              { displayName: 'ID', name: 'id', type: 'string', default: undefined },
              { displayName: 'URI', name: 'uri', type: 'string', default: undefined },
            ],
          },
        ],
      },
      {
        displayName: 'Sales Order VAT Entry Model',
        name: 'verkooporderBtwIngaveModel',
        type: 'options',
        default: 'Inclusief',
        options: [
          { name: 'Excluding VAT', value: 'Exclusief' },
          { name: 'Including VAT', value: 'Inclusief' },
        ],
      },
      { displayName: 'Total Excluding VAT', name: 'totaalExclusiefBtw', type: 'number', default: undefined },
      { displayName: 'Total Including VAT', name: 'totaalInclusiefBtw', type: 'number', default: undefined },
      { displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'Resource URI' },
    ],
  },
];
