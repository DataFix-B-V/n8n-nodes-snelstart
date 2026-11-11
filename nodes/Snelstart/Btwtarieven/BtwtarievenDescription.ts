import { INodeProperties } from 'n8n-workflow';

export const btwtarievenDescription: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    default: 'getManyBtwtarieven',
    options: [
      { name: "Get Many VAT Rates", value: "getManyBtwtarieven", action: "Get many VAT rates", description: "Retrieve multiple VAT rates (Btw-tarieven) from SnelStart" }
    ],
    displayOptions: {
      show: { resource: ['btwtarieven'] },
    },
  },
]
