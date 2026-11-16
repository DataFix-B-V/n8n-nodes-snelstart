
import { INodeProperties } from 'n8n-workflow';

export const grootboekenDescription: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    default: 'getManyGrootboeken',
    options: [
      { name: 'Get General Ledger Account', value: 'getGrootboeken', action: 'Get general ledger account', description: 'Retrieve a general ledger account (Grootboek) from SnelStart' },
      { name: 'Get Many General Ledger Accounts', value: 'getManyGrootboeken', action: 'Get many general ledger accounts', description: 'Retrieve multiple general ledger accounts (Grootboeken) from SnelStart' },
      { name: 'Post Many General Ledger Accounts', value: 'postManyGrootboeken', action: 'Post many general ledger accounts', description: 'Post multiple general ledger accounts (Grootboeken) to SnelStart' }
    ],
    displayOptions: {
      show: { resource: ['grootboeken'] },
    },
  },
  {
    displayName: 'General Ledger Account ID',
    name: 'grootboek_id',
    type: 'string',
    default: undefined,
    description: 'The unique identifier of the general ledger account (Grootboek) as System.Guid',
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
      { displayName: 'Filter', name: '$filter', type: 'string', default: undefined, description: 'OData filter string to filter the results' },
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
      { displayName: 'Account Code', name: 'rekeningCode', type: 'string', default: undefined, description: 'The account code (Rekeningcode) of the general ledger account (Grootboek)' },
      { displayName: 'Cost Center Required', name: 'kostenplaatsVerplicht', type: 'boolean', default: false, description: 'Whether a cost center (Kostenplaats) is required when posting entries to the general ledger account' },
      { displayName: 'Description', name: 'omschrijving', type: 'string', default: undefined, description: 'The description (Omschrijving) of the general ledger account (Grootboek)' },
      { displayName: 'General Ledger Category', name: 'grootboekRubriek', type: 'string', default: undefined, description: 'The category (Grootboekrubriek) of the general ledger account (Grootboek)' },
      { displayName: 'General Ledger Function', name: 'grootboekfunctie', type: 'string', default: undefined, description: 'The function (Grootboekfunctie) of the general ledger account (Grootboek)' },
      { displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'The public identifier of the general ledger account (Grootboek) as System.Guid' },
      { displayName: 'Inactive', name: 'nonactief', type: 'boolean', default: false, description: 'Whether the general ledger account (Grootboek) is inactive (Non-actief) within the administration and can be considered deleted' },
      { displayName: 'Modified On', name: 'modifiedOn', type: 'dateTime', default: undefined, description: 'The date and time the general ledger account (Grootboek) was last modified or created' },
      { displayName: 'Number', name: 'nummer', type: 'number', default: undefined, description: 'The account number (Nummer) of the general ledger account (Grootboek)' },
      {
        displayName: 'RGS Code',
        name: 'rgsCode',
        type: 'fixedCollection',
        placeholder: 'Add RGS Code',
        typeOptions: { multipleValues: true },
        default: {},
        description: 'The Reference Classification System of Financial Information (Referentie Grootboekschema, RGS) code associated with the general ledger account (Grootboek)',
        options: [
          {
            displayName: 'Rule',
            name: 'values',
            values: [
              { displayName: 'RGS Code', name: 'rgsCode', type: 'string', default: undefined },
              { displayName: 'Version', name: 'versie', type: 'string', default: undefined, description: 'The version (Versie) of the RGS code' },
            ],
          },
        ],
      },
      { displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'The relative URI of the general ledger account (Grootboek)' },
      { displayName: 'VAT Rate Code', name: 'vatRateCode', type: 'string', default: undefined, description: 'The VAT rate code associated with the VAT rate (Btw-tarief)' },
      {
        displayName: 'VAT Type',
        name: 'btwSoort',
        type: 'string',
        default: 'Hoog',
        description: 'The VAT type (Btw-soort) associated with the general ledger account (Grootboek). Read-only in the API; represented as an array.',
        options: [
          { name: 'High', value: 'Hoog' },
          { name: 'Low', value: 'Laag' },
          { name: 'Other', value: 'Overig' },
        ],
      },
    ],
  }
]
