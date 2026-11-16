
import { INodeProperties } from 'n8n-workflow';

export const offertesDescription: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    default: 'getManyOffertes',
    options: [
      { name: 'Delete Quotation', value: 'deleteOffertes', action: 'Delete quotation', description: 'Delete a quotation (Offerte) from SnelStart' },
      { name: 'Get Many Quotations', value: 'getManyOffertes', action: 'Get many quotations', description: 'Retrieve multiple quotations (Offertes) from SnelStart' },
      { name: 'Get Quotation', value: 'getOffertes', action: 'Get quotation', description: 'Retrieve a quotation (Offerte) from SnelStart' },
      { name: 'Post Many Quotations', value: 'postManyOffertes', action: 'Post many quotations', description: 'Post multiple quotations (Offertes) to SnelStart' },
      { name: 'Put Quotation', value: 'putOffertes', action: 'Put quotation', description: 'Put a quotation (Offerte) in SnelStart' },
    ],
    displayOptions: {
      show: { resource: ['offertes'] },
    },
  },
  {
    displayName: 'Quotation ID',
    name: 'offerte_id',
    type: 'string',
    default: undefined,
    required: true,
    description: 'The ID of the quotation (Offerte) to retrieve or modify',
    displayOptions: {
      show: {
        resource: ['offertes'],
        operation: ['getOffertes', 'putOffertes', 'deleteOffertes'],
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
        resource: ['offertes'],
        operation: ['getManyOffertes'],
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
        resource: ['offertes'],
        operation: ['getManyOffertes'],
      },
    },
    options: [
      { displayName: 'Filter', name: '$filter', type: 'string', default: undefined, description: 'OData filter string to filter the results' },
      { displayName: 'Skip', name: '$skip', type: 'number', default: 0, description: 'The number of items to skip', displayOptions: { show: { '/returnAll': [false] }, }, },
      { displayName: 'Top', name: '$top', type: 'number', default: undefined, description: 'The number of items to return', displayOptions: { show: { '/returnAll': [false] }, }, },
    ],
  },
  {
    displayName: 'Date',
    name: 'datum',
    type: 'dateTime',
    default: undefined,
    description: 'The date (Datum) of the quotation (Offerte)',
    required: true,
    displayOptions: {
      show: {
        resource: ['offertes'],
        operation: ['postManyOffertes', 'putOffertes'],
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
    description: 'The relation (Relatie) associated with the quotation (Offerte)',
    typeOptions: { multipleValues: false },
    displayOptions: {
      show: {
        resource: ['offertes'],
        operation: ['postManyOffertes', 'putOffertes'],
      },
    },
    options: [
      {
        displayName: 'Relation',
        name: 'values',
        default: {},
        values: [
          { displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'The unique identifier of the relation (Relatie) as System.Guid' },
          { displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'The URI of the relation (Relatie)' },
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
        resource: ['offertes'],
        operation: ['postManyOffertes', 'putOffertes'],
      },
    },
    options: [
      {
        displayName: 'Cost Center',
        name: 'kostenplaats',
        type: 'fixedCollection',
        default: {},
        description: 'The cost center (Kostenplaats) associated with the quotation (Offerte)',
        typeOptions: { multipleValues: false },
        options: [
          {
            name: 'values',
            displayName: 'Cost Center',
            values: [
              { displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'The unique identifier of the cost center (Kostenplaats) as System.Guid' },
              { displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'The URI of the cost center (Kostenplaats)' },
            ],
          },
        ],
      },
      { displayName: 'Credit Term', name: 'krediettermijn', type: 'number', default: undefined, description: 'The credit term (Krediettermijn) in days for the quotation (Offerte)' },
      {
        displayName: 'Delivery Address',
        name: 'afleveradres',
        type: 'fixedCollection',
        default: {},
        placeholder: 'Add Delivery Address',
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
                options: [
                  {
                    name: 'values',
                    displayName: 'Country',
                    values: [
                      { displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'The unique identifier of the country (Land) as System.Guid' },
                      { displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'The URI of the country (Land)' },
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
      { displayName: 'Description', name: 'omschrijving', type: 'string', default: undefined, description: 'The description (Omschrijving) of the quotation (Offerte)' },
      {
        displayName: 'Direct Debit Authorization',
        name: 'incassomachtiging',
        type: 'fixedCollection',
        placeholder: 'Add Direct Debit Authorization',
        default: {},
        description: 'The direct debit authorization (Incassomachtiging) associated with the quotation (Offerte)',
        typeOptions: { multipleValues: false },
        options: [
          {
            name: 'values',
            displayName: 'Direct Debit Authorization',
            values: [
              { displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'The unique identifier of the direct debit authorization (Incassomachtiging) as System.Guid' },
              { displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'The URI of the direct debit authorization (Incassomachtiging)' },
            ],
          },
        ],
      },
      { displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'The public identifier of the quotation (Offerte) as System.Guid' },
      {
        displayName: 'Invoice Address',
        name: 'factuuradres',
        type: 'fixedCollection',
        default: {},
        placeholder: 'Add Invoice Address',
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
                options: [
                  {
                    name: 'values',
                    displayName: 'Country',
                    values: [
                      { displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'The unique identifier of the country (Land) as System.Guid' },
                      { displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'The URI of the country (Land)' },
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
      { displayName: 'Invoice Discount', name: 'factuurkorting', type: 'number', default: undefined, description: 'The invoice-level discount (Factuurkorting) applied to the quotation (Offerte)' },
      { displayName: 'Is Quotation', name: 'isOfferte', type: 'boolean', default: true, description: 'Whether the document is a quotation (Offerte)' },
      {
        displayName: 'Lines',
        name: 'regels',
        type: 'fixedCollection',
        typeOptions: { multipleValues: true },
        default: {},
        placeholder: 'Add Line',
        description: 'The quotation lines (Regels) associated with the quotation (Offerte)',
        options: [
          {
            displayName: 'Line',
            name: 'values',
            typeOptions: { multipleValues: false },
            values: [
              {
                displayName: 'Article',
                name: 'artikel',
                type: 'fixedCollection',
                default: {},
                description: 'The article (Artikel) associated with the quotation line',
                options: [
                  {
                    name: 'values',
                    displayName: 'Article',
                    values: [
                      { displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'The unique identifier of the article (Artikel) as System.Guid' },
                      { displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'The URI of the article (Artikel)' },
                    ],
                  },
                ],
              },
              { displayName: 'Description', name: 'omschrijving', type: 'string', default: undefined, description: 'The description (Omschrijving) of the quotation line' },
              { displayName: 'Discount Percentage', name: 'kortingsPercentage', type: 'number', default: undefined },
              {
                displayName: 'Extra Line Fields',
                name: 'extraRegelVelden',
                type: 'fixedCollection',
                typeOptions: { multipleValues: true },
                default: {},
                placeholder: 'Add Extra Line Field',
                description: 'Additional custom fields (Extra regelvelden) associated with the quotation line',
                options: [
                  {
                    displayName: 'Field',
                    name: 'values',
                    typeOptions: { multipleValues: false },
                    values: [
                      { displayName: 'Description', name: 'omschrijving', type: 'string', default: undefined, description: 'The description (Omschrijving) of the custom field' },
                      { displayName: 'Field Number', name: 'veldNummer', type: 'number', default: undefined },
                      { displayName: 'Value', name: 'waarde', type: 'string', default: undefined, description: 'The value (Waarde) of the custom field' },
                    ],
                  },
                ],
              },
              { displayName: 'Quantity', name: 'aantal', type: 'number', default: undefined },
              { displayName: 'Total', name: 'totaal', type: 'number', default: undefined, description: 'The total amount (Totaal) of the quotation line' },
              { displayName: 'Unit Price', name: 'stuksprijs', type: 'number', default: undefined },
            ],
          },
        ],
      },
      { displayName: 'Memo', name: 'memo', type: 'string', default: undefined, description: 'The internal note or memo associated with the quotation (Offerte)' },
      { displayName: 'Modified On', name: 'modifiedOn', type: 'dateTime', default: undefined, description: 'The date and time the quotation (Offerte) was last modified' },
      { displayName: 'Number', name: 'nummer', type: 'number', default: undefined, description: 'The quotation number (Offertenummer)' },
      { displayName: 'Order Reference', name: 'orderreferentie', type: 'string', default: undefined },
      { displayName: 'Payment Reference', name: 'betalingskenmerk', type: 'string', default: undefined },
      {
        displayName: 'Process Status',
        name: 'procesStatus',
        type: 'options',
        default: 'Order',
        description: 'The process status (Processtatus) of the quotation (Offerte)',
        options: [
          { name: 'Confirmation', value: 'Bevestiging' },
          { name: 'Order', value: 'Order' },
          { name: 'Packing Slip', value: 'Pakbon' },
          { name: 'Pickup Slip', value: 'Afhaalbon' },
          { name: 'Quotation', value: 'Offerte' },
          { name: 'Work Order', value: 'Werkbon' },
        ],
      },
      {
        displayName: 'Sales Invoice',
        name: 'verkoopfactuur',
        type: 'fixedCollection',
        default: {},
        description: 'The sales invoice (Verkoopfactuur) associated with the quotation (Offerte)',
        typeOptions: { multipleValues: false },
        options: [
          {
            name: 'values',
            displayName: 'Sales Invoice',
            values: [
              { displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'The unique identifier of the sales invoice (Verkoopfactuur) as System.Guid' },
              { displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'The URI of the sales invoice (Verkoopfactuur)' },
            ],
          },
        ],
      },
      {
        displayName: 'Sales Order VAT Entry Model\*',
        name: 'verkooporderBtwIngaveModel',
        type: 'options',
        default: 'Inclusief',
        description: 'The VAT entry model (Btw-ingavemodel) used for the sales order',
        options: [
          { name: 'Exclusive', value: 'Exclusief' },
          { name: 'Inclusive', value: 'Inclusief' },
          { name: 'None', value: 'Geen' },
        ],
      },
      { displayName: 'Total Excluding VAT', name: 'totaalExclusiefBtw', type: 'number', default: undefined },
      { displayName: 'Total Including VAT', name: 'totaalInclusiefBtw', type: 'number', default: undefined },
      { displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'The URI of the quotation (Offerte)' },
    ],
  },
];
