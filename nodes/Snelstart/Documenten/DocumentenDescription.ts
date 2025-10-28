import { INodeProperties } from 'n8n-workflow';

export const documentenDescription: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    default: 'getManyDocumentenDocumenttypePid',
    options: [
      { name: "Delete Documenten", value: "deleteDocumenten", action: "Delete documenten" },
			{ name: "Get Documenten", value: "getDocumenten", action: "Get documenten" },
			{ name: "Get Many Documenten Documenttype Pid", value: "getManyDocumentenDocumenttypePid", action: "Get many documenten documenttype pid" },
			{ name: "Post Many Documenten Documenttype", value: "postManyDocumentenDocumenttype", action: "Post many documenten documenttype" },
			{ name: "Put Documenten", value: "putDocumenten", action: "Put documenten" }
		],
    displayOptions: {
      show: { resource: ['documenten'] },
    },
  },
	{
		displayName:
			'Heads-up: Not all POST endpoints are fully tested. Some fields may be missing and some are required even if the official docs mark them optional. Refer to the provider’s docs and API error messages. Fields marked (*) are verified as required.',
		name: 'postNotice',
		type: 'notice',
		default: '',
		displayOptions: {
			show: {
				resource: ['documenten'],
				operation: ['postManyDocumentenDocumenttype', 'putDocumenten'],
			},
		},
	},
	{
		displayName: 'Documenten ID',
		name: 'documenten_id',
		type: 'string',
		default: undefined,
		description: 'Unique identifier for the document',
		required: true,
		displayOptions: {
			show: {
				resource: ['documenten'],
				operation: ['deleteDocumenten', 'getDocumenten', 'putDocumenten'],
			},
		},
	},
	{
		displayName: 'Documenttype',
		name: 'documenttype',
		type: 'options',
		default: 'inkoopboekingen',
		description: 'The type of document',
		required: true,
		options: [
			{ name: 'Inkoopboekingen', value: 'inkoopboekingen' },
			{ name: 'Verkoopboekingen', value: 'verkoopboekingen' },
			{ name: 'Relaties', value: 'relaties' },
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
		description: 'The identifier as specified in the document of the specified DocumentType',
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
			{ displayName: 'Content', name: 'content', type: 'string', default: undefined, description: 'The content of the document' },
			{ displayName: 'File Name', name: 'fileName', type: 'string', default: undefined, description: 'Returns the filename' },
			{ displayName: 'ID', name: 'id', type: 'string', default: undefined, description: 'The unique identifier for the document' },
			{ displayName: 'Parent Identifier', name: 'parentIdentifier', type: 'string', default: undefined, description: 'The public identifier of the linked parent' },
			{ displayName: 'Read Only', name: 'readOnly', type: 'boolean', default: false, description: 'Whether the document is read-only' },
			{ displayName: 'URI', name: 'uri', type: 'string', default: undefined, description: 'Returns the relative URI of the object to which the identifier belongs' }
		],
	},
]
