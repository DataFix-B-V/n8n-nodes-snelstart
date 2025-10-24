import { INodeProperties } from 'n8n-workflow';

export const dagboekenDescription: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    default: 'getManyDagboeken',
    options: [
      { name: "Get Many Dagboeken", value: "getManyDagboeken", action: "Get many dagboeken" }
    ],
    displayOptions: {
      show: { resource: ['dagboeken'] },
    },
  },
]
