import { INodeProperties } from 'n8n-workflow';

export const actieprijzenDescription: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    default: 'getManyActieprijzen',
    options: [
      { name: "Get Many Actieprijzen", value: "getManyActieprijzen", action: "Get many actieprijzen" }
    ],
    displayOptions: {
      show: { resource: ['actieprijzen'] },
    },
  },
]
