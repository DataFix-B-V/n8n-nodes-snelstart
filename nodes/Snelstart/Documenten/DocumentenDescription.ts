
import { INodeProperties } from 'n8n-workflow';

export const documentenDescription: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    default: 'getManyDocumentenDocumenttypePid',
    options: [
      { name: "Delete Document", value: "deleteDocumenten", action: "Delete document", description: "Delete a document (Document) from SnelStart" },
      { name: "Get Document", value: "getDocumenten", action: "Get document", description: "Retrieve a document (Document) from SnelStart" },
      { name: "Get Many Documents by Document Type and PID", value: "getManyDocumentenDocumenttypePid", action: "Get many documents by document type and PID", description: "Retrieve multiple documents (Documenten) by document type (Documenttype) and parent identifier (PID) from SnelStart" },
      { name: "Post Many Documents by Document Type", value: "postManyDocumentenDocumenttype", action: "Post many documents by document type", description: "Post multiple documents (Documenten) of a specified document type (Documenttype) to SnelStart" },
      { name: "Put Document", value: "putDocumenten", action: "Put document", description: "Put a document (Document) in SnelStart" }
    ],
    displayOptions: {
      show: { resource: ['documenten'] },
    },
  },
  {
    displayName: 'Document ID',
    name: 'documenten_id',
    type: 'string',
    default: undefined,
    description: 'The unique identifier of the document (Document)',
    required: true,
    displayOptions: {
      show: {
        resource: ['documenten'],
        operation: ['deleteDocumenten', 'getDocumenten', 'putDocumenten'],
      },
    },
  },
  {
    displayName: 'Document Type',
    name: 'documenttype',
    type: 'options',
    default: 'inkoopboekingen',
    description: 'The type (Documenttype) of the document',
    required: true,
    options: [
      { name: 'Purchase Entries', value: 'inkoopboekingen' },
      { name: 'Relations', value: 'relaties' },
      { name: 'Sales Entries', value: 'verkoopboekingen' },
    ],
    displayOptions: {
      show: {
        resource: ['documenten'],
        operation: ['getManyDocumentenDocumenttypePid', 'postManyDocumentenDocumenttype'],
      },
    },
  },
  {
    displayName: 'PID',
    name: 'pid',
    type: 'string',
    default: undefined,
    description: 'The parent identifier (PID) of the resource associated with the specified document type (Documenttype)',
    required: true,
    displayOptions: {
      show: {
        resource: ['documenten'],
        operation: ['getManyDocumentenDocumenttypePid'],
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
        resource: ['documenten'],
        operation: ['postManyDocumentenDocumenttype', 'putDocumenten'],
      },
    },
    options: [
      { displayName: 'Content', name: 'content', type: 'string', default: undefined, description: 'The content of the document (Document)' },
      { displayName: 'File Name', name: 'fileName', type: 'string', default: undefined, description: 'The file name of the document (Document)' },
      { displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'The unique identifier of the document (Document)' },
      { displayName: 'Parent Identifier', name: 'parentIdentifier', type: 'string', default: undefined, description: 'The public identifier of the parent resource associated with the document' },
      { displayName: 'Read Only', name: 'readOnly', type: 'boolean', default: false, description: 'Whether the document is read-only' },
      { displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'The relative URI of the resource associated with the identifier' }
    ],
  },
]
