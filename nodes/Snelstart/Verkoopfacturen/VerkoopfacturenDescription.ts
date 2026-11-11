import { INodeProperties } from 'n8n-workflow';

export const verkoopfacturenDescription: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    default: 'getManyVerkoopfacturen',
    options: [
      { name: "Get Many Sales Invoices", value: "getManyVerkoopfacturen", action: "Get many sales invoices", description: "Retrieve multiple sales invoices (Verkoopfacturen) from SnelStart" },
      { name: "Get Sales Invoice", value: "getVerkoopfacturen", action: "Get a sales invoice", description: "Retrieve a specific sales invoice (Verkoopfactuur) from SnelStart" },
      { name: "Get Sales Invoice UBL", value: "getVerkoopfacturenUbl", action: "Get a sales invoice UBL", description: "Retrieve a specific sales invoice (Verkoopfactuur) in UBL format from SnelStart" }
    ],
    displayOptions: {
      show: { resource: ['verkoopfacturen'] },
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
        resource: ['verkoopfacturen'],
        operation: ['getManyVerkoopfacturen'],
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
        resource: ['verkoopfacturen'],
        operation: ['getManyVerkoopfacturen'],
      },
    },
    options: [
      { displayName: 'Filter', name: '$filter', type: 'string', default: undefined, description: 'OData $filter' },
      { displayName: 'Skip', name: '$skip', type: 'number', default: 0, description: 'The number of items to skip', displayOptions: { show: { '/returnAll': [false] }, }, },
      { displayName: 'Top', name: '$top', type: 'number', default: undefined, description: 'The number of items to return', displayOptions: { show: { '/returnAll': [false] }, }, },
    ]
  },
  {
    displayName: 'Sales Invoice ID',
    name: 'verkoop_factuur_id',
    type: 'string',
    default: '',
    required: true,
    description: 'The ID of the sales invoice to retrieve',
    displayOptions: {
      show: {
        resource: ['verkoopfacturen'],
        operation: ['getVerkoopfacturen', 'getVerkoopfacturenUbl'],
      },
    },
  }
]