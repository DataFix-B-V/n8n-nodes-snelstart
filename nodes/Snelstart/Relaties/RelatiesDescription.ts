import { INodeProperties } from 'n8n-workflow';

export const relatiesDescription: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    default: 'getManyRelaties',
    options: [
      { name: "Delete Relation", value: "deleteRelaties", action: "Delete relation", description: "Delete a relation (Relatie) from SnelStart" },
      { name: "Get Many Relations", value: "getManyRelaties", action: "Get many relations", description: "Retrieve multiple relations (Relaties) from SnelStart" },
      { name: "Get Relation", value: "getRelaties", action: "Get relation", description: "Retrieve a relation (Relatie) from SnelStart" },
      { name: "Get Relation Custom Fields", value: "getRelatiesCustomFields", action: "Get relation custom fields", description: "Retrieve custom fields (Extra velden) of a relation (Relatie) from SnelStart" },
      { name: "Get Relation Purchase Entries", value: "getRelatiesInkoopboekingen", action: "Get relation purchase entries", description: "Retrieve purchase entries (Inkoopboekingen) associated with a relation (Relatie) from SnelStart" },
      { name: "Get Relation Recurring Direct Debit Mandates", value: "getRelatiesDoorlopendeincassomachtigingen", action: "Get relation recurring direct debit mandates", description: "Retrieve recurring direct debit mandates (Doorlopende incassomachtigingen) of a relation (Relatie) from SnelStart" },
      { name: "Get Relation Sales Entries", value: "getRelatiesVerkoopboekingen", action: "Get relation sales entries", description: "Retrieve sales entries (Verkoopboekingen) associated with a relation (Relatie) from SnelStart" },
      { name: "Post Many Relations", value: "postManyRelaties", action: "Post many relations", description: "Post multiple relations (Relaties) to SnelStart" },
      { name: "Put Relation", value: "putRelaties", action: "Put relation", description: "Put a relation (Relatie) in SnelStart" },
      { name: "Put Relation Custom Fields", value: "putRelatiesCustomFields", action: "Put relation custom fields", description: "Put custom fields (Extra velden) of a relation (Relatie) in SnelStart" },
    ],
    displayOptions: {
      show: { resource: ['relaties'] },
    },
  },
  {
    displayName: 'Relation ID',
    name: 'relatie_id',
    type: 'string',
    default: '',
    required: true,
    description: 'The unique identifier of the relation (Relatie) as System.Guid',
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
      { displayName: 'Filter', name: '$filter', type: 'string', default: undefined, description: 'OData filter string to filter the results' },
      { displayName: 'Skip', name: '$skip', type: 'number', default: 0, description: 'The number of items to skip', displayOptions: { show: { '/returnAll': [false] }, }, },
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
        resource: ['relaties'],
        operation: ['postManyRelaties', 'putRelaties'],
      },
    },
    options: [
      { displayName: 'Attach UBL File', name: 'ublBestandAlsBijlage', type: 'boolean', default: false, description: 'Whether to attach the UBL file (UBL-bestand) to the email' },
      { displayName: 'Banking Enabled', name: 'bankieren', type: 'boolean', default: false, description: 'Whether banking (Bankieren) is enabled for the relation (Relatie)' },
      { displayName: 'BIC', name: 'bic', type: 'string', default: undefined },
      {
        displayName: 'Business Address',
        name: 'vestigingsAdres',
        type: 'fixedCollection',
        default: {},
        placeholder: 'Add Business Address',
        description: 'The business address (Vestigingsadres) of the relation (Relatie)',
        typeOptions: { multipleValues: false },
        options: [
          {
            name: 'values',
            displayName: 'Business Address',
            values: [
              { displayName: 'City', name: 'plaats', type: 'string', default: undefined },
              { displayName: 'Contact', name: 'contactpersoon', type: 'string', default: undefined },
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
      {
        displayName: 'Confirmation Email Settings',
        name: 'bevestigingsEmailVersturen',
        type: 'fixedCollection',
        default: {},
        placeholder: 'Add Confirmation Email Settings',
        description: 'Email settings for sending confirmations (Bevestigingen) to customer relations (Relatiesoort Klant)',
        typeOptions: { multipleValues: false },
        options: [
          {
            name: 'values',
            displayName: 'Confirmation Email Settings',
            values: [
              { displayName: 'CC Email', name: 'ccEmail', type: 'string', default: undefined },
              { displayName: 'Email', name: 'email', type: 'string', default: undefined, placeholder: 'name@email.com' },
              { displayName: 'Should Send', name: 'shouldSend', type: 'boolean', default: false },
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
        description: 'The correspondence address (Correspondentieadres) of the relation (Relatie)',
        typeOptions: { multipleValues: false },
        options: [
          {
            name: 'values',
            displayName: 'Correspondence Address',
            values: [
              { displayName: 'City', name: 'plaats', type: 'string', default: undefined },
              { displayName: 'Contact', name: 'contactpersoon', type: 'string', default: undefined },
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
      { displayName: 'Credit Limit', name: 'kredietLimiet', type: 'number', default: undefined, description: 'The default credit limit (Kredietlimiet) in EUR for the relation (Relatie)' },
      { displayName: 'Credit Term', name: 'krediettermijn', type: 'number', default: undefined, description: 'The default credit term (Krediettermijn) in days for the relation (Relatie)' },
      {
        displayName: 'Direct Debit Type',
        name: 'incassoSoort',
        type: 'options',
        default: 'Geen',
        options: [
          { name: 'B2B', value: 'B2B' },
          { name: 'Core', value: 'Core' },
          { name: 'None', value: 'Geen' },
        ],
        description: 'The direct debit type (Incassosoort) applicable to the relation (Relatie)',
      },
      {
        displayName: 'Documents',
        name: 'documents',
        type: 'fixedCollection',
        typeOptions: { multipleValues: true },
        default: {},
        placeholder: 'Add Document',
        description: 'The documents linked to the relation (Relatie)',
        options: [
          {
            displayName: 'Document',
            name: 'values',
            typeOptions: { multipleValues: false },
            values: [
              { displayName: 'File Name', name: 'fileName', type: 'string', default: undefined },
              { displayName: 'ID', name: 'id', type: 'string', default: undefined },
              { displayName: 'Parent Identifier', name: 'parentIdentifier', type: 'string', default: undefined, description: 'The unique identifier of the parent resource as System.Guid' },
              { displayName: 'Read Only', name: 'readOnly', type: 'boolean', default: false },
              { displayName: 'URI', name: 'uri', type: 'string', default: undefined },
            ],
          },
        ],
      },
      { displayName: 'Email', name: 'email', type: 'string', default: undefined, placeholder: 'name@email.com' },
      {
        displayName: 'Extra Fields',
        name: 'extraVeldenKlant',
        type: 'fixedCollection',
        typeOptions: { multipleValues: true },
        default: {},
        placeholder: 'Add Extra Field',
        description: 'Additional custom fields (Extra velden) for a customer (Klant) relation (Relatie)',
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
      { displayName: 'IBAN', name: 'iban', type: 'string', default: undefined },
      { displayName: 'Inactive', name: 'nonactief', type: 'boolean', default: false, description: 'Whether the relation (Relatie) is inactive (Non-actief)' },
      { displayName: 'Invoice Discount', name: 'factuurkorting', type: 'number', default: undefined, description: 'The default invoice discount (Factuurkorting) for the relation (Relatie)' },
      {
        displayName: 'Invoice Email Settings',
        name: 'factuurEmailVersturen',
        type: 'fixedCollection',
        default: {},
        placeholder: 'Add Invoice Email Settings',
        description: 'Email settings for sending invoices (Facturen) to customer relations (Relatiesoort Klant)',
        typeOptions: { multipleValues: false },
        options: [
          {
            name: 'values',
            displayName: 'Invoice Email Settings',
            values: [
              { displayName: 'CC Email', name: 'ccEmail', type: 'string', default: undefined },
              { displayName: 'Email', name: 'email', type: 'string', default: undefined, placeholder: 'name@email.com' },
              { displayName: 'Should Send', name: 'shouldSend', type: 'boolean', default: false },
            ],
          },
        ],
      },
      {
        displayName: 'Invoice To',
        name: 'factuurRelatie',
        type: 'fixedCollection',
        default: {},
        placeholder: 'Add Invoice Relation',
        description: 'The invoice relation (Factuurrelatie) to which invoices for this relation (Relatie) should be addressed',
        typeOptions: { multipleValues: false },
        options: [
          {
            name: 'values',
            displayName: 'Invoice Relation',
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
      { displayName: 'Modified On', name: 'modifiedOn', type: 'dateTime', default: undefined, description: 'The date and time the relation (Relatie) was last modified' },
      { displayName: 'Name', name: 'naam', type: 'string', default: undefined, description: 'The full name (Naam) of the relation (Relatie)' },
      { displayName: 'OIN', name: 'oin', type: 'string', default: undefined },
      {
        displayName: 'Payment Reminder Email Settings',
        name: 'aanmaningEmailVersturen',
        type: 'fixedCollection',
        default: {},
        placeholder: 'Add Payment Reminder Email Settings',
        description: 'Email settings for sending payment reminders (Aanmaningen) to customer relations (Relatiesoort Klant)',
        typeOptions: { multipleValues: false },
        options: [
          {
            name: 'values',
            displayName: 'Payment Reminder Email Settings',
            values: [
              { displayName: 'CC Email', name: 'ccEmail', type: 'string', default: undefined },
              { displayName: 'Email', name: 'email', type: 'string', default: undefined, placeholder: 'name@email.com' },
              { displayName: 'Should Send', name: 'shouldSend', type: 'boolean', default: false },
            ],
          },
        ],
      },
      {
        displayName: 'Payment Reminder Type',
        name: 'aanmaningsoort',
        type: 'options',
        default: 'Nee',
        options: [
          { name: 'Business', value: 'Onderneming' },
          { name: 'Consumer', value: 'Consument' },
          { name: 'None', value: 'Nee' },
        ],
        description: 'The payment reminder type (Aanmaningsoort) applicable to the relation (Relatie)',
      },
      { displayName: 'Phone', name: 'telefoon', type: 'string', default: undefined },
      { displayName: 'Public ID', name: 'id', type: 'string', default: undefined, description: 'The public identifier of the relation (Relatie) as System.Guid' },
      { displayName: 'Purchase Entries URI', name: 'inkoopBoekingenUri', type: 'string', default: undefined, description: 'The URI referencing purchase entries (Inkoopboekingen) associated with the relation (Relatie)' },
      {
        displayName: 'Purchase Order Email Settings',
        name: 'bestellingEmailVersturen',
        type: 'fixedCollection',
        default: {},
        placeholder: 'Add Purchase Order Email Settings',
        description: 'Email settings for sending purchase orders (Bestellingen)',
        typeOptions: { multipleValues: false },
        options: [
          {
            name: 'values',
            displayName: 'Purchase Order Email Settings',
            values: [
              { displayName: 'CC Email', name: 'ccEmail', type: 'string', default: undefined },
              { displayName: 'Email', name: 'email', type: 'string', default: undefined, placeholder: 'name@email.com' },
              { displayName: 'Should Send', name: 'shouldSend', type: 'boolean', default: false },
            ],
          },
        ],
      },
      {
        displayName: 'Quotation Email Settings',
        name: 'offerteEmailVersturen',
        type: 'fixedCollection',
        default: {},
        placeholder: 'Add Quotation Email Settings',
        description: 'Email settings for sending quotations (Offertes) to customer relations (Relatiesoort Klant)',
        typeOptions: { multipleValues: false },
        options: [
          {
            name: 'values',
            displayName: 'Quotation Email Settings',
            values: [
              { displayName: 'CC Email', name: 'ccEmail', type: 'string', default: undefined },
              { displayName: 'Email', name: 'email', type: 'string', default: undefined, placeholder: 'name@email.com' },
              { displayName: 'Should Send', name: 'shouldSend', type: 'boolean', default: false },
            ],
          },
        ],
      },
      {
        displayName: 'Quotation Request Email Settings',
        name: 'offerteAanvraagEmailVersturen',
        type: 'fixedCollection',
        default: {},
        placeholder: 'Add Quotation Request Email Settings',
        description: 'Email settings for sending quotation requests (Offerteaanvragen) to supplier relations (Relatiesoort Leverancier)',
        typeOptions: { multipleValues: false },
        options: [
          {
            name: 'values',
            displayName: 'Quotation Request Email Settings',
            values: [
              { displayName: 'CC Email', name: 'ccEmail', type: 'string', default: undefined },
              { displayName: 'Email', name: 'email', type: 'string', default: undefined, placeholder: 'name@email.com' },
              { displayName: 'Should Send', name: 'shouldSend', type: 'boolean', default: false },
            ],
          },
        ],
      },
      { displayName: 'Relation Code', name: 'relatiecode', type: 'number', default: undefined, description: 'The relation code (Relatiecode) identifying the relation (Relatie)' },
      {
        displayName: 'Relation Type',
        name: 'relatiesoort',
        type: 'multiOptions',
        default: [],
        description: 'The relation type (Relatiesoort), either Customer (Klant) or Supplier (Leverancier)',
        options: [
          { name: 'Customer', value: 'Klant' },
          { name: 'Supplier', value: 'Leverancier' },
        ],
      },
      { displayName: 'Sales Entries URI', name: 'verkoopBoekingenUri', type: 'string', default: undefined, description: 'The URI referencing sales entries (Verkoopboekingen) associated with the relation (Relatie)' },
      { displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'The URI of the relation (Relatie)' },
      { displayName: 'VAT Number', name: 'btwNummer', type: 'string', default: undefined },
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
        displayName: 'Customer Custom Fields',
        name: 'klantCustomFields',
        type: 'fixedCollection',
        typeOptions: { multipleValues: true },
        default: {},
        placeholder: 'Add Custom Field',
        description: 'Custom fields (Extra velden) for a customer (Klant) relation (Relatie)',
        options: [
          {
            displayName: 'Field',
            name: 'values',
            typeOptions: { multipleValues: false },
            values: [
              { displayName: 'Name', name: 'name', type: 'string', default: undefined, description: 'The name of the custom field' },
              { displayName: 'Value', name: 'value', type: 'json', default: '=', description: 'The value of the custom field as JSON' },
            ],
          },
        ],
      },
      {
        displayName: 'Supplier Custom Fields',
        name: 'leverancierCustomFields',
        type: 'fixedCollection',
        typeOptions: { multipleValues: true },
        default: {},
        placeholder: 'Add Custom Field',
        description: 'Custom fields (Extra velden) for a supplier (Leverancier) relation (Relatie)',
        options: [
          {
            displayName: 'Field',
            name: 'values',
            typeOptions: { multipleValues: false },
            values: [
              { displayName: 'Name', name: 'name', type: 'string', default: undefined, description: 'The name of the custom field' },
              { displayName: 'Value', name: 'value', type: 'json', default: '=', description: 'The value of the custom field as JSON' },
            ],
          },
        ],
      },
    ],
  },
];
