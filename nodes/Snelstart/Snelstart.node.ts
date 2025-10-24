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
} from 'n8n-workflow';

import { makeRequest, getBody, createRequestOptions } from './GenericFunctions';
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
					{ name: 'Offertes', value: 'offertes' }
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
			...offertesDescription
		]
		};

// Return of all the input data
async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
	const resource = this.getNodeParameter('resource', 0) as string;
	const operation = this.getNodeParameter('operation', 0) as string;

	// LOGGING EMPTY LINE 3x
	this.logger?.info?.('');
	this.logger?.info?.('');
	this.logger?.info?.('');

	if (!resource) {
			throw new NodeOperationError(this.getNode(), '“Resource” is required.');
		}
	if (!operation) {
			throw new NodeOperationError(this.getNode(), '“Operation” is required for the selected resource.');
		}

	const items = this.getInputData();
	const returnData: INodeExecutionData[] = [];


	for (let i = 0; i < items.length; i++) {
			try {
				// Create request options for this resource/operation
				let [endpoint, method, urlParams, optionalUrlParams] = await createRequestOptions.call(this, resource, operation);

				// LOGGING
				this.logger?.info?.(`urlParams: ${urlParams?.join(", ")}, optionalUrlParams: ${optionalUrlParams?.join(", ")}`);

				// Replace required URL params; validate presence
				for (const param of urlParams) {
					const value = String(this.getNodeParameter(param, i, '')).trim();
					if (!value) {
						throw new NodeOperationError(this.getNode(), `Missing required parameter: “${param}”`, {
							itemIndex: i,
						});
					}
					endpoint = endpoint.replace(`{${param}}`, value);
				}

				// Get the options from the node parameters
				const parameters = this.getNodeParameter('parameters', i, {}) as IDataObject;

				// Collect query params directly from parameters
				const queryParams: string[] = [];
				for (const [param, value] of Object.entries(parameters)) {
					if (value != null && value !== '') {
						queryParams.push(`${param}=${encodeURIComponent(String(value))}`);
					}
				}

				// Collect optional URL params, outside of "parameters"
				const externalParameters = ['instanceId'] as string[];
				for (const param of externalParameters) {
					const value = String(this.getNodeParameter(param, i, '')).trim();
					if (value) {
						queryParams.push(`${param}=${encodeURIComponent(value)}`);
					}
				}

				// Append query string if we have any params
				if (queryParams.length) {
					endpoint += `?${queryParams.join('&')}`;
				}

				// LOGGING
				this.logger?.info?.(`Parameters: ${JSON.stringify(parameters)}`);
				this.logger?.info?.(`Final endpoint: ${endpoint}`);

				// Build body from node parameters
				let body: any;

				// Special case for certain operations
				if (resource === 'artikelen' && operation === 'putArtikelenCustomFields') {
					body = [{
						name: this.getNodeParameter('name', i, '') as string,
						value: this.getNodeParameter('value', i, '') as string,
					}];
					this.logger?.info?.(`Body: ${JSON.stringify(body, null, 2)}`);
				} else if (resource === 'bankafschriftbestanden' && operation === 'postBankafschriftbestand') {
					body = [{
						name: this.getNodeParameter('name', i, '') as string,
						base64EncodedContent: this.getNodeParameter('base64EncodedContent', i, '') as string,
					}];
					this.logger?.info?.(`Body: ${JSON.stringify(body, null, 2)}`);
				} else {
					body = await getBody.call(this, resource, operation, i);
				}

				// External request → wrap failures with NodeApiError
				let response: unknown;
				try {
					response = await makeRequest.call(
						this,
						method as IHttpRequestMethods,
						endpoint,
						body,
					);
				} catch (error) {
					if (this.continueOnFail && this.continueOnFail()) {
						returnData.push({
							json: { error: (error as Error)?.message ?? error },
							pairedItem: { item: i },
						});
						continue;
					}
					throw new NodeApiError(this.getNode(), { message: (error as Error)?.message ?? String(error) }, {
						itemIndex: i,
						message: 'Snelstart API request failed',
					});
				}

				// Normalize response
				if (Array.isArray(response)) {
					for (const item of response) {
						returnData.push({ json: item as IDataObject, pairedItem: { item: i } });
					}
				} else if (response && typeof response === 'object') {
					returnData.push({ json: response as IDataObject, pairedItem: { item: i } });
				} else {
					returnData.push({ json: { message: response as string }, pairedItem: { item: i } });
				}
			} catch (error) {
				if (this.continueOnFail && this.continueOnFail()) {
					returnData.push({
						json: { error: (error as Error)?.message ?? error },
						pairedItem: { item: i },
					});
					continue;
				}
				// Ensure consistent formatting if something unexpected bubbles up
				if (!(error instanceof NodeApiError) && !(error instanceof NodeOperationError)) {
					throw new NodeOperationError(this.getNode(), (error as Error)?.message ?? 'Unknown error', {
						itemIndex: i,
					});
				}
				throw error;
			}
		}

		return [returnData];
	}
}
