
import { INodeProperties } from 'n8n-workflow';

export const kasboekingenDescription: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    default: 'getManyKasboekingen',
    options: [
      { name: 'Delete Cash Entry', value: 'deleteKasboekingen', action: 'Delete cash entry', description: 'Delete a cash entry (Kasboeking) from SnelStart' },
      { name: 'Get Cash Entry', value: 'getKasboekingen', action: 'Get cash entry', description: 'Retrieve a cash entry (Kasboeking) from SnelStart' },
      { name: 'Get Many Cash Entries', value: 'getManyKasboekingen', action: 'Get many cash entries', description: 'Retrieve multiple cash entries (Kasboekingen) from SnelStart' },
      { name: 'Post Many Cash Entries', value: 'postManyKasboekingen', action: 'Post many cash entries', description: 'Post multiple cash entries (Kasboekingen) to SnelStart' },
      { name: 'Put Cash Entry', value: 'putKasboekingen', action: 'Put cash entry', description: 'Put a cash entry (Kasboeking) in SnelStart' },
    ],
    displayOptions: {
      show: { resource: ['kasboekingen'] },
    },
  },
  {
    displayName:
      'Heads-up: Not all POST and PUT endpoints are fully tested. Some fields may be missing and some are required even if the official docs mark them optional. Refer to the provider’s docs and API error messages. Fields marked (*) are verified as required.',
    name: 'postNotice',
    type: 'notice',
    default: '',
    displayOptions: {
      show: {
        resource: ['kasboekingen'],
        operation: ['postManyKasboekingen', 'putKasboekingen'],
      },
    },
  },
  {
    displayName: 'Cash Entry ID',
    name: 'kasboeking_id',
    type: 'string',
    default: undefined,
    required: true,
    description: 'The unique identifier of the cash entry (Kasboeking) as System.Guid',
    displayOptions: {
      show: {
        resource: ['kasboekingen'],
        operation: ['getKasboekingen', 'deleteKasboekingen', 'putKasboekingen'],
      },
    },
  },
  {
    displayName: 'Date',
    name: 'datum',
    type: 'dateTime',
    default: undefined,
    required: true,
    description: 'The date (Datum) of the cash entry (Kasboeking)',
    displayOptions: {
      show: {
        resource: ['kasboekingen'],
        operation: ['postManyKasboekingen', 'putKasboekingen'],
      },
    },
  },
  {
    displayName: 'Amount Spent',
    name: 'bedragUitgegeven',
    type: 'number',
    default: undefined,
    required: true,
    description: 'The amount spent (Bedrag uitgegeven) in the cash entry (Kasboeking)',
    displayOptions: {
      show: {
        resource: ['kasboekingen'],
        operation: ['postManyKasboekingen', 'putKasboekingen'],
      },
    },
  },
  {
    displayName: 'Amount Received',
    name: 'bedragOntvangen',
    type: 'number',
    default: undefined,
    required: true,
    description: 'The amount received (Bedrag ontvangen) in the cash entry (Kasboeking)',
    displayOptions: {
      show: {
        resource: ['kasboekingen'],
        operation: ['postManyKasboekingen', 'putKasboekingen'],
      },
    },
  },
  {
    displayName: 'Journal',
    name: 'dagboek',
    type: 'fixedCollection',
    default: {},
    placeholder: 'Add Journal',
    description: 'The journal (Dagboek) associated with the cash entry (Kasboeking)',
    required: true,
    typeOptions: { multipleValues: false },
    displayOptions: {
      show: {
        resource: ['kasboekingen'],
        operation: ['postManyKasboekingen', 'putKasboekingen'],
      },
    },
    options: [
      {
        displayName: 'Journal',
        name: 'values',
        values: [
          { displayName: 'ID', name: 'id', type: 'string', default: undefined, required: true, description: 'The ID of the journal (Dagboek) the cash entry belongs to' },
          { displayName: 'URI', name: 'uri', type: 'string', default: undefined, required: true, description: 'The URI of the journal (Dagboek) the cash entry belongs to' },
        ],
      },
    ],
  },
  {
    displayName: 'Return All',
    name: 'returnAll',
    type: 'boolean',
    default: true,
    description: 'Whether to return all results or only up to a given limit',
    displayOptions: {
      show: {
        resource: ['kasboekingen'],
        operation: ['getManyKasboekingen'],
      },
    },
  },
  {
    displayName: 'Add Field',
    name: 'fields',
    type: 'collection',
    placeholder: 'Add Field',
    default: {},
    displayOptions: {
      show: {
        resource: ['kasboekingen'],
        operation: ['postManyKasboekingen', 'putKasboekingen'],
      },
    },
    options: [
      { displayName: 'Description', name: 'omschrijving', type: 'string', default: undefined, description: 'The description (Omschrijving) of the cash entry (Kasboeking)' },
      { displayName: 'Document Number', name: 'boekstuk', type: 'string', default: undefined, description: 'The document number (Boekstuk) of the cash entry (Kasboeking)' },
      {
        displayName: 'General Ledger Posting Lines',
        name: 'grootboekBoekingsRegels',
        type: 'fixedCollection',
        default: {},
        placeholder: 'Add General Ledger Posting Line',
        description: 'The general ledger posting lines (Grootboekboekingsregels) associated with the cash entry (Kasboeking)',
        typeOptions: { multipleValues: true },
        options: [
          {
            displayName: 'Line',
            name: 'values',
            typeOptions: { multipleValues: false },
            values: [
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
                      { displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'The unique identifier of the cost center (Kostenplaats) as System.Guid' },
                      { displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'The URI of the cost center (Kostenplaats)' },
                    ],
                  },
                ],
              },
              { displayName: 'Credit', name: 'credit', type: 'number', default: undefined, description: 'The credit amount (Creditbedrag) of the general ledger posting line' },
              { displayName: 'Debit', name: 'debet', type: 'number', default: undefined, description: 'The debit amount (Debetbedrag) of the general ledger posting line' },
              { displayName: 'Description', name: 'omschrijving', type: 'string', default: undefined, description: 'The description (Omschrijving) of the general ledger posting line' },
              {
                displayName: 'General Ledger Account',
                name: 'grootboek',
                type: 'fixedCollection',
                default: {},
                options: [
                  {
                    name: 'values',
                    displayName: 'General Ledger Account',
                    values: [
                      { displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'The unique identifier of the general ledger account (Grootboek) as System.Guid' },
                      { displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'The URI of the general ledger account (Grootboek)' },
                    ],
                  },
                ],
              },
              { displayName: 'VAT Type', name: 'btwSoort', type: 'string', default: undefined, description: 'The VAT type (Btw-soort) of the general ledger posting line' },
            ]
          },
        ],
      },
      { displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'The unique identifier of the cash entry (Kasboeking) as System.Guid' },
      { displayName: 'Mark for Attention', name: 'markering', type: 'boolean', default: false, description: 'Whether the cash entry (Kasboeking) is marked (Markering) as requiring extra attention in SnelStart' },
      { displayName: 'Modified By Accountant', name: 'gewijzigdDoorAccountant', type: 'boolean', default: false, description: 'Whether the cash entry (Kasboeking) was modified by an accountant (Gewijzigd door accountant)' },
      { displayName: 'Modified On', name: 'modifiedOn', type: 'dateTime', default: undefined, description: 'The date and time the cash entry (Kasboeking) was last modified or created' },
      {
        displayName: 'Purchase Entry Posting Lines',
        name: 'inkoopboekingBoekingsRegels',
        type: 'fixedCollection',
        default: {},
        placeholder: 'Add Purchase Entry Posting Line',
        description: 'The purchase entry posting lines (Inkoopboekingboekingsregels) associated with the cash entry (Kasboeking)',
        typeOptions: { multipleValues: true },
        options: [
          {
            displayName: 'Line',
            name: 'values',
            typeOptions: { multipleValues: false },
            values: [
              { displayName: 'Credit', name: 'credit', type: 'number', default: undefined, description: 'The credit amount (Creditbedrag) of the purchase entry posting line' },
              { displayName: 'Debit', name: 'debet', type: 'number', default: undefined, description: 'The debit amount (Debetbedrag) of the purchase entry posting line' },
              { displayName: 'Description', name: 'omschrijving', type: 'string', default: undefined, description: 'The description (Omschrijving) of the purchase entry posting line' },
              {
                displayName: 'Entry ID',
                name: 'boekingId',
                type: 'fixedCollection',
                default: {},
                options: [
                  {
                    displayName: 'Entry ID',
                    name: 'values',
                    placeholder: 'Add Entry ID',
                    values: [
                      { displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'The unique identifier of the purchase entry (Inkoopboeking) as System.Guid' },
                      { displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'The URI of the purchase entry (Inkoopboeking)' },
                    ],
                  },
                ],
              },
            ]
          },
        ],
      },
      {
        displayName: 'Sales Entry Posting Lines',
        name: 'verkoopboekingBoekingsRegels',
        type: 'fixedCollection',
        typeOptions: { multipleValues: true },
        default: {},
        placeholder: 'Add Sales Entry Posting Line',
        description: 'The sales entry posting lines (Verkoopboekingboekingsregels) associated with the cash entry (Kasboeking)',
        options: [
          {
            displayName: 'Line',
            name: 'values',
            typeOptions: { multipleValues: false },
            values: [
              { displayName: 'Credit', name: 'credit', type: 'number', default: undefined, description: 'The credit amount (Creditbedrag) of the sales entry posting line' },
              { displayName: 'Debit', name: 'debet', type: 'number', default: undefined, description: 'The debit amount (Debetbedrag) of the sales entry posting line' },
              { displayName: 'Description', name: 'omschrijving', type: 'string', default: undefined, description: 'The description (Omschrijving) of the sales entry posting line' },
              {
                displayName: 'Entry ID',
                name: 'boekingId',
                type: 'fixedCollection',
                default: {},
                options: [
                  {
                    name: 'values',
                    displayName: 'Entry ID',
                    placeholder: 'Add Entry ID',
                    values: [
                      { displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'The unique identifier of the sales entry (Verkoopboeking) as System.Guid' },
                      { displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'The URI of the sales entry (Verkoopboeking)' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      { displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'The URI of the cash entry (Kasboeking)' },
      {
        displayName: 'VAT Posting Lines',
        name: 'btwBoekingsregels',
        type: 'fixedCollection',
        typeOptions: { multipleValues: true },
        default: {},
        placeholder: 'Add VAT Posting Line',
        description: 'The VAT posting lines (Btw-boekingsregels) associated with the cash entry (Kasboeking)',
        options: [
          {
            displayName: 'Line',
            name: 'values',
            typeOptions: { multipleValues: false },
            values: [
              { displayName: 'Credit', name: 'credit', type: 'number', default: undefined, description: 'The credit amount (Creditbedrag) of the VAT posting line' },
              { displayName: 'Debit', name: 'debet', type: 'number', default: undefined, description: 'The debit amount (Debetbedrag) of the VAT posting line' },
              { displayName: 'Rate', name: 'tarief', type: 'string', default: undefined, description: 'The VAT rate (Btw-tarief) of the posting line' },
              { displayName: 'Type', name: 'type', type: 'string', default: undefined, description: 'The VAT type (Btw-soort) of the posting line' },
            ],
          },
        ],
      },
    ],
  },
  {
    displayName: 'Options',
    name: 'options',
    type: 'collection',
    placeholder: 'Add Option',
    default: {},
    displayOptions: {
      show: {
        resource: ['kasboekingen'],
        operation: ['getKasboekingen', 'getManyKasboekingen'],
      },
    },
    options: [
      { displayName: 'Filter', name: '$filter', type: 'string', default: undefined, description: 'OData filter string to filter the results' },
      { displayName: 'Skip', name: '$skip', type: 'number', default: undefined, description: 'The number of items to skip', displayOptions: { show: { '/returnAll': [false] }, }, },
      { displayName: 'Top', name: '$top', type: 'number', default: undefined, description: 'The number of items to return', displayOptions: { show: { '/returnAll': [false] }, }, },
    ]
  },
]
