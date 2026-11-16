
import { INodeProperties } from 'n8n-workflow';

export const inkoopboekingenDescription: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    default: 'getInkoopboekingen',
    options: [
      { name: "Create Purchase Entry From Attachment", value: "postManyInkoopboekingenCreateFromAttachment", action: "Create purchase entry from attachment", description: "Create a purchase entry (Inkoopboeking) from an uploaded attachment in SnelStart" },
      { name: "Delete Purchase Entry", value: "deleteInkoopboekingen", action: "Delete purchase entry", description: "Delete a purchase entry (Inkoopboeking) from SnelStart" },
      { name: "Get Purchase Entry", value: "getInkoopboekingen", action: "Get purchase entry", description: "Retrieve a purchase entry (Inkoopboeking) from SnelStart" },
      { name: "Get Purchase Entry Attachment Creation Status", value: "getManyInkoopboekingenGetCreateFromAttachmentStatus", action: "Get purchase entry attachment creation status", description: "Retrieve the status of a purchase entry (Inkoopboeking) being created from an attachment in SnelStart" },
      { name: "Post Many Purchase Entries", value: "postManyInkoopboekingen", action: "Post many purchase entries", description: "Post multiple purchase entries (Inkoopboekingen) to SnelStart" },
      { name: "Post Purchase Entry UBL", value: "postManyInkoopboekingenUbl", action: "Post purchase entry UBL", description: "Post a purchase entry (Inkoopboeking) using a UBL invoice to SnelStart" },
      { name: "Put Purchase Entry", value: "putInkoopboekingen", action: "Put purchase entry", description: "Put a purchase entry (Inkoopboeking) in SnelStart" }
    ],
    displayOptions: { show: { resource: ['inkoopboekingen'] } },
  },
  {
    displayName: 'Purchase Entry ID',
    name: 'inkoopboeking_id',
    type: 'string',
    default: undefined,
    description: 'The unique identifier of the purchase entry (Inkoopboeking) as System.Guid',
    required: true,
    displayOptions: {
      show: {
        resource: ['inkoopboekingen'],
        operation: ['getInkoopboekingen', 'putInkoopboekingen', 'deleteInkoopboekingen'],
      },
    },
  },
  {
    displayName: 'Invoice Date',
    name: 'factuurdatum',
    type: 'dateTime',
    default: undefined,
    description: 'The invoice date (Factuurdatum), which is also used as the date the purchase entry (Inkoopboeking) is recorded in the administration',
    required: true,
    displayOptions: {
      show: {
        resource: ['inkoopboekingen'],
        operation: ['postManyInkoopboekingen', 'putInkoopboekingen'],
      },
    },
  },
  {
    displayName: 'Invoice Number',
    name: 'factuurnummer',
    type: 'string',
    default: undefined,
    description: 'The invoice number (Factuurnummer) as stated on the purchase invoice',
    required: true,
    displayOptions: {
      show: {
        resource: ['inkoopboekingen'],
        operation: ['postManyInkoopboekingen' ,'putInkoopboekingen'],
      },
    },
  },
  {
    displayName: 'Supplier',
    name: 'leverancier',
    type: 'fixedCollection',
    placeholder: 'Add Supplier',
    typeOptions: { multipleValues: false },
    default: {},
    description: 'The supplier (Leverancier) associated with the purchase invoice',
    required: true,
    displayOptions: {
      show: {
        resource: ['inkoopboekingen'],
        operation: ['postManyInkoopboekingen', 'putInkoopboekingen'],
      },
    },
    options: [
      {
        displayName: 'Rule',
        name: 'values',
        values: [
          { displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'The unique identifier of the relation (Relatie) as System.Guid', required: true },
          { displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'The URI of the relation (Relatie)', required: true },
        ],
      },
    ],
  },
  {
    displayName: 'Posting Lines',
    name: 'boekingsregels',
    type: 'fixedCollection',
    typeOptions: { multipleValues: true },
    default: {},
    placeholder: 'Add Posting Line',
    description: 'The posting lines (Boekingsregels) associated with the purchase entry (Inkoopboeking)',
    required: true,
    displayOptions: {
      show: {
        resource: ['inkoopboekingen'],
        operation: ['postManyInkoopboekingen', 'putInkoopboekingen'],
      },
    },
    options: [
      {
        displayName: 'Line',
        name: 'values',
        values: [
          { displayName: 'Amount', name: 'bedrag', type: 'number', default: 0 },
          {
            displayName: 'Cost Center',
            name: 'kostenplaats',
            type: 'fixedCollection',
            default: {},
            options: [
              {
                displayName: 'Cost Center',
                name: 'values',
                values: [
                  { displayName: 'ID', name: 'id', type: 'string', default: undefined },
                  { displayName: 'URI', name: 'uri', type: 'string', default: undefined },
                ],
              },
            ],
          },
          { displayName: 'Description', name: 'omschrijving', type: 'string', default: undefined },
          {
            displayName: 'General Ledger Account',
            name: 'grootboek',
            type: 'fixedCollection',
            default: {},
            options: [
              {
                displayName: 'General Ledger Account',
                name: 'values',
                values: [
                  { displayName: 'ID', name: 'id', type: 'string', default: undefined },
                  { displayName: 'URI', name: 'uri', type: 'string', default: undefined },
                ],
              },
            ],
          },
          { displayName: 'VAT Type', name: 'btwSoort', type: 'string', default: undefined },
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
        resource: ['inkoopboekingen'],
        operation: ['postManyInkoopboekingen', 'putInkoopboekingen'],
      },
    },
    options: [
      { displayName: 'Accounting Document', name: 'boekstuk', type: 'string', default: undefined, description: 'The document number (Boekstuk) of the purchase entry (Inkoopboeking)' },
      { displayName: 'Description', name: 'omschrijving', type: 'string', default: undefined, description: 'The description (Omschrijving) of the purchase entry (Inkoopboeking)' },
      {
        displayName: 'Documents',
        name: 'documents',
        type: 'fixedCollection',
        placeholder: 'Add Document',
        typeOptions: { multipleValues: true },
        default: {},
        description: 'The documents linked to the purchase entry (Inkoopboeking)',
        options: [
          {
            displayName: 'Document',
            name: 'values',
            values: [
              { displayName: 'File Name', name: 'fileName', type: 'string', default: undefined, },
              { displayName: 'ID', name: 'id', type: 'string', default: undefined, },
              { displayName: 'Parent Identifier', name: 'parentIdentifier', type: 'string', default: undefined, },
              { displayName: 'Read Only', name: 'readOnly', type: 'boolean', default: false, },
              { displayName: 'URI', name: 'uri', type: 'string', default: undefined, },
            ],
          },
        ],
      },
      { displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'The unique identifier of the purchase entry (Inkoopboeking) as System.Guid' },
      { displayName: 'Invoice Amount', name: 'factuurbedrag', type: 'number', default: undefined, description: 'The total invoice amount (Factuurbedrag), including VAT (Btw)' },
      { displayName: 'Modified By Accountant', name: 'gewijzigdDoorAccountant', type: 'boolean', default: false, description: 'Whether the purchase entry (Inkoopboeking) was modified by an accountant (Gewijzigd door accountant)' },
      { displayName: 'Modified On', name: 'modifiedOn', type: 'dateTime', default: undefined, description: 'The date and time the purchase entry (Inkoopboeking) was last modified' },
      { displayName: 'Require Attention', name: 'markering', type: 'boolean', default: false, description: 'Whether the purchase entry (Inkoopboeking) is marked (Markering) as requiring attention' },
      { displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'The URI of the purchase entry (Inkoopboeking)' },
      {
        displayName: 'VAT',
        name: 'btw',
        type: 'fixedCollection',
        placeholder: 'Add VAT',
        typeOptions: { multipleValues: true },
        default: {},
        description: 'The VAT details (Btw) associated with the purchase entry (Inkoopboeking)',
        options: [
          {
            displayName: 'VAT Detail',
            name: 'values',
            values: [
              { displayName: 'VAT Amount', name: 'btwBedrag', type: 'number', default: 0 },
              { displayName: 'VAT Type', name: 'btwSoort', type: 'string', default: undefined },
            ],
          }
        ]
      },
    ],
  },
  {
    displayName: 'File Name',
    name: 'fileName',
    type: 'string',
    default: undefined,
    description: 'The name of the uploaded file',
    displayOptions: {
      show: {
        resource: ['inkoopboekingen'],
        operation: ['postManyInkoopboekingenCreateFromAttachment', 'postManyInkoopboekingenUbl'],
      },
    },
  },
  {
    displayName: 'Content',
    name: 'content',
    type: 'string',
    typeOptions: { alwaysOpenEditWindow: true },
    default: undefined,
    description: 'The Base64-encoded content of the uploaded file',
    displayOptions: {
      show: {
        resource: ['inkoopboekingen'],
        operation: ['postManyInkoopboekingenCreateFromAttachment', 'postManyInkoopboekingenUbl'],
      },
    },
  },
  {
    displayName: 'Instance ID',
    name: 'instanceId',
    type: 'string',
    default: undefined,
    description: 'The instance identifier used to check the status of a purchase entry (Inkoopboeking) created from an attachment',
    displayOptions: {
      show: {
        resource: ['inkoopboekingen'],
        operation: ['getManyInkoopboekingenGetCreateFromAttachmentStatus'],
      },
    },
  },
  {
    displayName: 'PDF Content',
    name: 'pdfContent',
    type: 'string',
    typeOptions: { alwaysOpenEditWindow: true },
    default: undefined,
    description: 'The Base64-encoded content of the PDF file',
    displayOptions: {
      show: {
        resource: ['inkoopboekingen'],
        operation: ['postManyInkoopboekingenUbl'],
      },
    },
  },
  {
    displayName: 'Force Persist',
    name: 'forcePersist',
    type: 'boolean',
    default: false,
    description: 'Whether to ignore validation warnings when saving the purchase entry',
    displayOptions: {
      show: {
        resource: ['inkoopboekingen'],
        operation: ['postManyInkoopboekingenUbl'],
      },
    },
  }
];
