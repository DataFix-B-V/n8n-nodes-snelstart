
import { INodeProperties } from 'n8n-workflow';

export const btwaangiftesDescription: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    default: 'getManyBtwaangiftes',
    options: [
      { name: 'Get Many VAT Returns', value: 'getManyBtwaangiftes', action: 'Get many VAT returns', description: 'Retrieve multiple VAT returns (Btw-aangiftes) from SnelStart' },
      { name: 'Get VAT Return', value: 'getBtwaangiftes', action: 'Get VAT return', description: 'Retrieve a VAT return (Btw-aangifte) from SnelStart' },
      { name: 'Put VAT Return Externally Filed', value: 'putBtwaangiftesExternAangeven', action: 'Put VAT return externally filed', description: 'Update whether a VAT return (Btw-aangifte) has been filed externally (Extern aangegeven) in SnelStart' }
    ],
    displayOptions: {
      show: { resource: ['btwaangifte'] },
    },
  },
  {
    displayName:
      'Heads-up: Not all PUT endpoints are fully tested. Some fields may be missing and some are required even if the official docs mark them optional. Refer to the provider’s docs and API error messages. Fields marked (*) are verified as required.',
    name: 'postNotice',
    type: 'notice',
    default: '',
    displayOptions: {
      show: {
        resource: ['btwaangifte'],
        operation: ['putBtwaangiftesExternAangeven'],
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
        resource: ['btwaangifte'],
        operation: ['getManyBtwaangiftes'],
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
        resource: ['btwaangifte'],
        operation: ['getManyBtwaangiftes'],
      },
    },
    options: [
      { displayName: 'Filter', name: '$filter', type: 'string', default: undefined, description: 'OData filter string to filter the results' },
      { displayName: 'Skip', name: '$skip', type: 'number', default: 0, description: 'The number of items to skip', displayOptions: { show: { '/returnAll': [false] }, }, },
      { displayName: 'Top', name: '$top', type: 'number', default: undefined, description: 'The number of items to return', displayOptions: { show: { '/returnAll': [false] }, }, },
    ]
  },
  {
    displayName: 'VAT Return ID',
    name: 'btw_aangifte_id',
    type: 'string',
    default: undefined,
    description: 'The ID of the VAT return (Btw-aangifte)',
    displayOptions: {
      show: {
        resource: ['btwaangifte'],
        operation: ['getBtwaangiftes', 'putBtwaangiftesExternAangeven'],
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
        resource: ['btwaangifte'],
        operation: ['putBtwaangiftesExternAangeven'],
      },
    },
    options: [
      {
        displayName: 'Is Externally Filed',
        name: 'isExternAangegeven',
        type: 'boolean',
        default: false,
        description: 'Whether the VAT return (Btw-aangifte) has been filed externally (Extern aangegeven)',
      },
    ],
  }
]
