import { INodeProperties } from 'n8n-workflow';

export const btwtarievenDescription: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    default: 'getManyBtwtarieven',
    options: [
      { name: "Get Many Btwtarieven", value: "getManyBtwtarieven", action: "Get many btwtarieven" }
    ],
    displayOptions: {
      show: { resource: ['btwtarieven'] },
    },
  },
]
