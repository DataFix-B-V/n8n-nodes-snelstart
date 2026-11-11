import { INodeProperties } from 'n8n-workflow';

export const dagboekenDescription: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    default: 'getManyDagboeken',
    options: [
      { name: "Get Many Journals", value: "getManyDagboeken", action: "Get many journals", description: "Retrieve multiple journals (Dagboeken) from SnelStart" }
    ],
    displayOptions: {
      show: { resource: ['dagboeken'] },
    },
  },
]
