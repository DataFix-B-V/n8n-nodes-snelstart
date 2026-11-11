
import { INodeProperties } from 'n8n-workflow';

export const grootboekmutatiesDescription: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    default: 'getManyGrootboekmutaties',
    options: [
      { name: "Get General Ledger Entry", value: "getGrootboekmutaties", action: "Get general ledger entry", description: "Retrieve a general ledger entry (Grootboekmutatie) from SnelStart" },
      { name: "Get Many General Ledger Entries", value: "getManyGrootboekmutaties", action: "Get many general ledger entries", description: "Retrieve multiple general ledger entries (Grootboekmutaties) from SnelStart" },
    ],
    displayOptions: {
      show: { resource: ['grootboekmutaties'] },
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
        resource: ['grootboekmutaties'],
        operation: ['getManyGrootboekmutaties'],
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
        resource: ['grootboekmutaties'],
        operation: ['getManyGrootboekmutaties'],
      },
    },
    options: [
      { displayName: 'Filter', name: '$filter', type: 'string', default: undefined, description: 'OData filter string to filter the results' },
      { displayName: 'Skip', name: '$skip', type: 'number', default: undefined, description: 'The number of items to skip', displayOptions: { show: { '/returnAll': [false] }, }, },
      { displayName: 'Top', name: '$top', type: 'number', default: undefined, description: 'The number of items to return', displayOptions: { show: { '/returnAll': [false] }, }, },
    ],
  },
  {
    displayName: 'General Ledger Entry ID',
    name: 'grootboek_mutatie_id',
    type: 'string',
    default: undefined,
    description: 'The unique identifier of the general ledger entry (Grootboekmutatie) as System.Guid',
    required: true,
    displayOptions: {
      show: {
        resource: ['grootboekmutaties'],
        operation: ['getGrootboekmutaties'],
      },
    },
  },
]
