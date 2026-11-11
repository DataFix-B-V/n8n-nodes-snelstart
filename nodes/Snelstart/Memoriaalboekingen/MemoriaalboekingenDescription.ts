
import { INodeProperties } from 'n8n-workflow';

export const memoriaalboekingenDescription: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    default: 'getMemoriaalboekingen',
    options: [
      { name: "Delete Journal Entry", value: "deleteMemoriaalboekingen", action: "Delete journal entry", description: "Delete a journal entry (Memoriaalboeking) from SnelStart" },
      { name: "Get Journal Entry", value: "getMemoriaalboekingen", action: "Get journal entry", description: "Retrieve a journal entry (Memoriaalboeking) from SnelStart" },
      { name: "Post Many Journal Entries", value: "postManyMemoriaalboekingen", action: "Post many journal entries", description: "Post multiple journal entries (Memoriaalboekingen) to SnelStart" },
      { name: "Put Journal Entry", value: "putMemoriaalboekingen", action: "Put journal entry", description: "Put a journal entry (Memoriaalboeking) in SnelStart" }
    ],
    displayOptions: {
      show: { resource: ['memoriaalboekingen'] },
    },
  },
  {
    displayName: 'Heads-up: Not all POST and PUT endpoints are fully tested. Some fields may be missing and some are required even if the official docs mark them optional. Refer to the provider’s docs and API error messages. Fields marked (*) are verified as required.',
    name: 'postNotice',
    type: 'notice',
    default: '',
    displayOptions: {
      show: {
        resource: ['memoriaalboekingen'],
        operation: ['postManyMemoriaalboekingen', 'putMemoriaalboekingen'],
      },
    },
  },
  {
    displayName: 'Journal Entry ID',
    name: 'memoriaal_boekingen_id',
    type: 'string',
    default: '',
    required: true,
    description: 'The unique identifier of the journal entry (Memoriaalboeking)',
    displayOptions: {
      show: {
        resource: ['memoriaalboekingen'],
        operation: ['deleteMemoriaalboekingen', 'putMemoriaalboekingen', 'getMemoriaalboekingen'],
      },
    },
  },
  {
    displayName: 'Date',
    name: 'datum',
    type: 'dateTime',
    default: undefined,
    description: 'The date (Datum) of the journal entry (Memoriaalboeking)',
    required: true,
    displayOptions: {
      show: {
        resource: ['memoriaalboekingen'],
        operation: ['postManyMemoriaalboekingen', 'putMemoriaalboekingen'],
      },
    },
  },
  {
    displayName: 'Journal',
    name: 'dagboek',
    type: 'fixedCollection',
    default: {},
    placeholder: 'Add Journal',
    description: 'The journal (Dagboek) associated with the journal entry (Memoriaalboeking)',
    required: true,
    typeOptions: { multipleValues: false },
    displayOptions: {
      show: {
        resource: ['memoriaalboekingen'],
        operation: ['postManyMemoriaalboekingen', 'putMemoriaalboekingen'],
      },
    },
    options: [
      {
        displayName: 'Journal',
        name: 'values',
        default: {},
        values: [
          { displayName: 'ID', name: 'id', type: 'string', default: undefined, required: true, description: 'The ID of the journal (Dagboek) associated with the journal entry (Memoriaalboeking)' },
          { displayName: 'URI', name: 'uri', type: 'string', default: undefined, required: true, description: 'The URI of the journal (Dagboek) associated with the journal entry (Memoriaalboeking)' },
        ],
      },
    ],
  },
  {
    displayName: 'Add Field',
    name: 'fields',
    type: 'collection',
    default: {},
    placeholder: 'Add Field',
    description: 'Add additional fields to the journal entry (Memoriaalboeking)',
    displayOptions: {
      show: {
        resource: ['memoriaalboekingen'],
        operation: ['postManyMemoriaalboekingen', 'putMemoriaalboekingen'],
      },
    },
    options: [
      { displayName: 'Description', name: 'omschrijving', type: 'string', default: undefined, description: 'The description (Omschrijving) of the journal entry (Memoriaalboeking)' },
      { displayName: 'Document Number', name: 'boekstuk', type: 'string', default: undefined, description: 'The document number (Boekstuk) of the journal entry (Memoriaalboeking)' },
      { displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'The unique identifier of the journal entry (Memoriaalboeking)' },
      {
        displayName: 'Journal Entry Posting Lines',
        name: 'memoriaalBoekingsRegels',
        type: 'fixedCollection',
        placeholder: 'Add Journal Entry Posting Line',
        typeOptions: { multipleValues: true },
        default: {},
        description: 'The posting lines (Memoriaalboekingsregels) associated with the journal entry (Memoriaalboeking)',
        options: [
          {
            displayName: 'Journal Entry Posting Line',
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
                      { displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'The ID of the cost center (Kostenplaats) associated with the journal entry posting line' },
                      { displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'The URI of the cost center (Kostenplaats) associated with the journal entry posting line' },
                    ],
                  },
                ],
              },
              { displayName: 'Credit', name: 'credit', type: 'number', default: 0, required: true, description: 'The credit amount (Creditbedrag) of the journal entry posting line' },
              { displayName: 'Debit', name: 'debet', type: 'number', default: 0, required: true, description: 'The debit amount (Debetbedrag) of the journal entry posting line' },
              { displayName: 'Description', name: 'omschrijving', type: 'string', default: undefined, required: true, description: 'The description (Omschrijving) of the journal entry posting line' },
              {
                displayName: 'General Ledger Account',
                name: 'grootboek',
                type: 'fixedCollection',
                default: {},
                placeholder: 'Add General Ledger Account',
                description: 'The general ledger account (Grootboek) associated with the journal entry posting line',
                required: true,
                typeOptions: { multipleValues: false },
                options: [
                  {
                    name: 'values',
                    displayName: 'General Ledger Account',
                    values: [
                      { displayName: 'ID', name: 'id', type: 'string', default: undefined, required: true, description: 'The ID of the general ledger account (Grootboek) associated with the journal entry posting line' },
                      { displayName: 'URI', name: 'uri', type: 'string', default: undefined, required: true, description: 'The URI of the general ledger account (Grootboek) associated with the journal entry posting line' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      { displayName: 'Mark for Attention', name: 'markering', type: 'boolean', default: false, description: 'Whether the journal entry (Memoriaalboeking) is marked (Markering) as requiring extra attention in SnelStart' },
      { displayName: 'Modified By Accountant', name: 'gewijzigdDoorAccountant', type: 'boolean', default: false, description: 'Whether the journal entry (Memoriaalboeking) was modified by an accountant (Gewijzigd door accountant)' },
      { displayName: 'Modified On', name: 'modifiedOn', type: 'dateTime', default: undefined, description: 'The date and time the journal entry (Memoriaalboeking) was created or last modified' },
      {
        displayName: 'Purchase Entry Posting Lines',
        name: 'inkoopboekingBoekingsRegels',
        type: 'fixedCollection',
        placeholder: 'Add Purchase Entry Posting Line',
        typeOptions: { multipleValues: true },
        default: {},
        description: 'The purchase entry posting lines (Inkoopboekingboekingsregels) associated with the journal entry (Memoriaalboeking)',
        options: [
          {
            displayName: 'Purchase Entry Posting Line',
            name: 'values',
            values: [
              { displayName: 'Amount', name: 'bedrag', type: 'number', default: 0, required: true, description: 'The amount (Bedrag) of the purchase entry posting line' },
              { displayName: 'Description', name: 'omschrijving', type: 'string', default: undefined, required: true, description: 'The description (Omschrijving) of the purchase entry posting line' },
              {
                displayName: 'Entry',
                name: 'boekingId',
                type: 'fixedCollection',
                default: {},
                placeholder: 'Add Entry',
                description: 'The purchase entry (Inkoopboeking) associated with the posting line',
                required: true,
                options: [
                  {
                    name: 'values',
                    displayName: 'Entry',
                    values: [
                      { displayName: 'ID', name: 'id', type: 'string', default: undefined, required: true, description: 'The ID of the purchase entry (Inkoopboeking) associated with the posting line' },
                      { displayName: 'URI', name: 'uri', type: 'string', default: undefined, required: true, description: 'The URI of the purchase entry (Inkoopboeking) associated with the posting line' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        displayName: 'Sales Entry Posting Lines',
        name: 'verkoopboekingBoekingsRegels',
        type: 'fixedCollection',
        placeholder: 'Add Sales Entry Posting Line',
        typeOptions: { multipleValues: true },
        default: {},
        description: 'The sales entry posting lines (Verkoopboekingboekingsregels) associated with the journal entry (Memoriaalboeking)',
        options: [
          {
            displayName: 'Sales Entry Posting Line',
            name: 'values',
            values: [
              { displayName: 'Amount', name: 'bedrag', type: 'number', default: 0, required: true, description: 'The amount (Bedrag) of the sales entry posting line' },
              { displayName: 'Description', name: 'omschrijving', type: 'string', default: undefined, required: true, description: 'The description (Omschrijving) of the sales entry posting line' },
              {
                displayName: 'Entry',
                name: 'boekingId',
                type: 'fixedCollection',
                default: {},
                placeholder: 'Add Entry',
                description: 'The sales entry (Verkoopboeking) associated with the posting line',
                required: true,
                options: [
                  {
                    name: 'values',
                    displayName: 'Entry',
                    values: [
                      { displayName: 'ID', name: 'id', type: 'string', default: undefined, required: true, description: 'The ID of the sales entry (Verkoopboeking) associated with the posting line' },
                      { displayName: 'URI', name: 'uri', type: 'string', default: undefined, required: true, description: 'The URI of the sales entry (Verkoopboeking) associated with the posting line' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      { displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'The URI of the journal entry (Memoriaalboeking)' },
    ],
  },
];
