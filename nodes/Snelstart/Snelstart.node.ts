import {
	IDataObject,
	IExecuteFunctions,
	IHttpRequestMethods,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	NodeConnectionType,
	NodeApiError,
	NodeOperationError,
	JsonObject,
} from 'n8n-workflow';

import { createRequestOptions, createQs, paginateRequest } from './GenericFunctions';
import { artikelenDescription } from './Artikelen/ArtikelenDescription';
import { actieprijzenDescription } from './Actieprijzen/ActieprijzenDescription';
import { artikelomzetgroepenDescription } from './Artikelomzetgroepen/ArtikelomzetgroepenDescription';
import { authorizationDescription } from './Authorization/AuthorizationDescription';
import { bankafschriftbestandenDescription } from './Bankafschriftbestanden/BankafschriftbestandenDescription';
import { bankboekingenDescription } from './Bankboekingen/BankboekingenDescription';
import { btwaangiftesDescription } from './Btwaangiftes/BtwaangiftesDescription';
import { btwtarievenDescription } from './Btwtarieven/BtwtarievenDescription';
import { companyInfoDescription } from './CompanyInfo/CompanyInfoDescription';
import { dagboekenDescription } from './Dagboeken/DagboekenDescription';
import { documentenDescription } from './Documenten/DocumentenDescription';
import { echoDescription } from './Echo/EchoDescription';
import { grootboekenDescription } from './Grootboeken/GrootboekenDescription';
import { grootboekmutatiesDescription } from './Grootboekmutaties/GrootboekmutatiesDescription';
import { inkoopboekingenDescription } from './Inkoopboekingen/InkoopboekingenDescription';
import { inkoopfacturenDescription } from './Inkoopfacturen/InkoopfacturenDescription';
import { kasboekingenDescription } from './Kasboekingen/KasboekingenDescription';
import { kostenplaatsenDescription } from './Kostenplaatsen/KostenplaatsenDescription';
import { landenDescription } from './Landen/LandenDescription';
import { memoriaalboekingenDescription } from './Memoriaalboekingen/MemoriaalboekingenDescription';
import { offertesDescription } from './Offertes/OffertesDescription';
import { prijsafsprakenDescription } from './Prijsafspraken/PrijsafsprakenDescription';
import { rapportagesDescription } from './Rapportages/RapportagesDescription';
import { relatiesDescription } from './Relaties/RelatiesDescription';
import { vatratedefinitionsDescription } from './Vatratedefinitions/VatratedefinitionsDescription';
import { vatratesDescription } from './Vatrates/VatratesDescription';
import { verkoopboekingenDescription } from './Verkoopboekingen/VerkoopboekingenDescription';
import { verkoopfacturenDescription } from './Verkoopfacturen/VerkoopfacturenDescription';
import { verkoopordersDescription } from './Verkooporders/VerkoopordersDescription';
import { verkoopordersjablonenDescription } from './Verkoopordersjablonen/VerkoopordersjablonenDescription';

export class Snelstart implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Snelstart',
		name: 'snelstart',
		group: ['transform'],
		version: 1,
		subtitle: '={{ $parameter["operation"] + ": " + $parameter["resource"] }}',
		description: 'Node for controlling Snelstart with the Snelstart API',
		icon: 'file:SnelstartIcon.svg',
		defaults: {
			name: 'Snelstart',
		},
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		usableAsTool: true,
		credentials: [
			{
				name: 'snelstartCredentialsApi',
				required: true,
			},
		],
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				default: 'echo',
				options: [
					{ name: 'Actieprijzen', value: 'actieprijzen' },
					{ name: 'Artikelen', value: 'artikelen' },
					{ name: 'Artikelomzetgroepen', value: 'artikelomzetgroepen' },
					{ name: 'Authorization', value: 'authorization' },
					{ name: 'Bankafschriftbestanden', value: 'bankafschriftbestanden' },
					{ name: 'Bankboekingen', value: 'bankboekingen' },
					{ name: 'Btwaangifte', value: 'btwaangifte' },
					{ name: 'Btwtarieven', value: 'btwtarieven' },
					{ name: 'Company Info', value: 'companyInfo' },
					{ name: 'Dagboeken', value: 'dagboeken' },
					{ name: 'Documenten', value: 'documenten' },
					{ name: 'Echo', value: 'echo' },
					{ name: 'Grootboeken', value: 'grootboeken' },
					{ name: 'Grootboekmutatie', value: 'grootboekmutaties' },
					{ name: 'Inkoopboekingen', value: 'inkoopboekingen' },
					{ name: 'Inkoopfacturen', value: 'inkoopfacturen' },
					{ name: 'Kasboekingen', value: 'kasboekingen' },
					{ name: 'Kostenplaatsen', value: 'kostenplaatsen' },
					{ name: 'Landen', value: 'landen' },
					{ name: 'Memoriaalboekingen', value: 'memoriaalboekingen' },
					{ name: 'Offerte', value: 'offertes' },
					{ name: 'Prijsafspraken', value: 'prijsafspraken' },
					{ name: 'Rapportage', value: 'rapportages' },
					{ name: 'Relatie', value: 'relaties' },
					{ name: 'Vatrate', value: 'vatrates' },
					{ name: 'Vatratedefinition', value: 'vatratedefinitions' },
					{ name: 'Verkoopboekingen', value: 'verkoopboekingen' },
					{ name: 'Verkoopfacturen', value: 'verkoopfacturen' },
					{ name: 'Verkooporder', value: 'verkooporders' },
					{ name: 'Verkoopordersjablonen', value: 'verkoopordersjablonen' },
				],
			},
			...artikelenDescription,
			...actieprijzenDescription,
			...artikelomzetgroepenDescription,
			...authorizationDescription,
			...bankafschriftbestandenDescription,
			...bankboekingenDescription,
			...btwaangiftesDescription,
			...btwtarievenDescription,
			...companyInfoDescription,
			...dagboekenDescription,
			...documentenDescription,
			...echoDescription,
			...grootboekenDescription,
			...grootboekmutatiesDescription,
			...inkoopboekingenDescription,
			...inkoopfacturenDescription,
			...kasboekingenDescription,
			...landenDescription,
			...kostenplaatsenDescription,
			...memoriaalboekingenDescription,
			...offertesDescription,
			...prijsafsprakenDescription,
			...rapportagesDescription,
			...relatiesDescription,
			...vatratesDescription,
			...vatratedefinitionsDescription,
			...verkoopboekingenDescription,
			...verkoopfacturenDescription,
			...verkoopordersDescription,
			...verkoopordersjablonenDescription,
		]
	};

	// Return of all the input data
	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const chunkSize = 10;
		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;
		let returnData: INodeExecutionData[] = [];

		if (!resource) {
			throw new NodeOperationError(this.getNode(), '“Resource” is required.');
		}
		if (!operation) {
			throw new NodeOperationError(this.getNode(), '“Operation” is required for the selected resource.');
		}

		let responseData: IDataObject[] = [];
		const items = this.getInputData();
		let [endpoint, method, urlParams] = await createRequestOptions.call(this, resource, operation);
		const options = this.getNodeParameter('options', 0, {}) as IDataObject;
		const qs = await createQs.call(this, options);

		for (let i = 0; i < items.length; i++) {
			try {
				try {
				} catch (error) {
					if (this.continueOnFail()) {
						returnData.push({
							json: { error: (error as Error)?.message ?? 'Unknown error' },
							pairedItem: { item: i },
						});
						continue;
					}
					throw new NodeOperationError(this.getNode(), (error as Error)?.message ?? 'Unknown error', {
						itemIndex: i,
					});
				}

				for (const param of urlParams) {
					const value = String(this.getNodeParameter(param, i, '')).trim();
					if (!value) {
						const errMsg = `Missing required parameter: “${param}”`;
						if (this.continueOnFail()) {
							returnData.push({
								json: { error: errMsg },
								pairedItem: { item: i },
							});
							continue;
						}
						throw new NodeOperationError(this.getNode(), errMsg, {
							itemIndex: i,
						});
					}
					endpoint = endpoint.replace(`{${param}}`, value);
				}

				try {
					responseData = await paginateRequest.call(this, endpoint, method as IHttpRequestMethods, qs, chunkSize, resource, operation, i);
					for (const itemData of responseData) {
						returnData.push({ json: itemData, pairedItem: { item: i } });
					}
				} catch (error) {
					if (this.continueOnFail()) {
						returnData.push({
							json: { error: (error as Error)?.message ?? 'Unknown error' },
							pairedItem: { item: i },
						});
						continue;
					}
					throw new NodeApiError(this.getNode(), error as JsonObject, { itemIndex: i });
				}
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({
						json: { error: (error as Error)?.message ?? 'Unknown error' },
						pairedItem: { item: i },
					});
					continue;
				}
				throw new NodeApiError(this.getNode(), error as JsonObject, { itemIndex: i });
			}
		}
		return [returnData];
	}
}

