
import { INodeProperties } from 'n8n-workflow';

export const verkoopordersjablonenDescription: INodeProperties[] = [
  {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    default: 'getManyVerkoopordersjablonen',
    options: [
      { name: "Get Many Sales Order Templates", value: "getManyVerkoopordersjablonen", action: "Get many sales order templates", description: "Retrieve multiple sales order templates (Verkoopordersjablonen) from SnelStart" },
      { name: "Get Sales Order Template", value: "getVerkoopordersjablonen", action: "Get a sales order template", description: "Retrieve a specific sales order template (Verkoopordersjabloon) from SnelStart" }
    ],
    displayOptions: {
      show: { resource: ['verkoopordersjablonen'] },
    },
  },
  {
    displayName: 'Sales Order Template ID',
    name: 'verkooporder_sjabloon_id',
    type: 'string',
    default: '',
    required: true,
    description: 'The ID of the sales order template to retrieve',
    displayOptions: {
      show: {
        resource: ['verkoopordersjablonen'],
        operation: ['getVerkoopordersjablonen'],
      },
    },
  }
]
