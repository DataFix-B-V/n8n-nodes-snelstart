import {
	IDataObject,
	IExecuteFunctions,
	IHookFunctions,
	IHttpRequestMethods,
	ILoadOptionsFunctions,
	IHttpRequestOptions,
	IWebhookFunctions,
	NodeApiError,
	NodeOperationError,
} from 'n8n-workflow';
import type { JsonObject } from 'n8n-workflow';

import artikelenConfig from './Artikelen/ArtikelenFieldConfig.json';
import actieprijzenConfig from './Actieprijzen/ActieprijzenFieldConfig.json';
import artikelomzetgroepenConfig from './Artikelomzetgroepen/ArtikelomzetgroepenFieldConfig.json';
import authorizationConfig from './Authorization/AuthorizationFieldConfig.json';
import bankafschriftbestandenConfig from './Bankafschriftbestanden/BankafschriftbestandenFieldConfig.json';
import bankboekingenConfig from './Bankboekingen/BankboekingenFieldConfig.json';
import btwaangiftesConfig from './Btwaangiftes/BtwaangiftesFieldConfig.json';
import btwtarievenConfig from './Btwtarieven/BtwtarievenFieldConfig.json';
import companyInfoConfig from './CompanyInfo/CompanyInfoFieldConfig.json';
import dagboekenConfig from './Dagboeken/DagboekenFieldConfig.json';
import documentenConfig from './Documenten/DocumentenFieldConfig.json';
import echoConfig from './Echo/EchoFieldConfig.json';
import grootboekenConfig from './Grootboeken/GrootboekenFieldConfig.json';
import grootboekmutatiesConfig from './Grootboekmutaties/GrootboekmutatiesFieldConfig.json';
import inkoopboekingenConfig from './Inkoopboekingen/InkoopboekingenFieldConfig.json';
import inkoopfacturenConfig from './Inkoopfacturen/InkoopfacturenFieldConfig.json';
import kasboekingeConfig from './Kasboekingen/KasboekingenFieldConfig.json';
import kostenplaatConfig from './Kostenplaatsen/KostenplaatsenFieldConfig.json';
import landenConfig from './Landen/LandenFieldConfig.json';
import memoriaalboekingenConfig from './Memoriaalboekingen/MemoriaalboekingenFieldConfig.json';
import offertesConfig from './Offertes/OffertesFieldConfig.json';

// --- helpers ---
function toJsonObject(e: unknown): JsonObject {
	if (e && typeof e === 'object') return e as JsonObject;
	return { message: String(e ?? 'Unknown error') } as unknown as JsonObject;
}

export type SnelstartRequestResponse =
	| IDataObject | IDataObject[] | string | number | boolean| null;

export async function makeRequest(
	this: IExecuteFunctions,
	method: IHttpRequestMethods,
	// baseUrl: string,
	extraUrl: string,
	body: object = {},
): Promise<SnelstartRequestResponse> {
	const credentialType = 'snelstartCredentialsApi';
	const credentials = await this.getCredentials(credentialType);
	// const baseURL = 'https://b2bapi.snelstart.nl/v2';
	const baseURL = 'http://localhost:3001/v2';

	if (!credentials) {
		throw new NodeOperationError(
			this.getNode(),
			'Missing credentials “snelstartCredentialsApi”. Configure credentials on the node.',
		);
	}

	const normalizedExtra = extraUrl ? `/${extraUrl.replace(/^\/+/, '')}` : '';
	const endpoint = `${baseURL}${normalizedExtra}`;

	const options: IHttpRequestOptions = {
		method,
		body,
		url: endpoint,
		json: true,
	};

	try {
		const res = await this.helpers.httpRequestWithAuthentication.call(
			this,
			credentialType,
			options,
		);
		return res as SnelstartRequestResponse;
	} catch (error) {
		throw new NodeApiError(this.getNode(), toJsonObject(error), {
			message: 'Snelstart API request failed',
		});
	}
}

export type RequestOptionsTuple = [string, string, string[], string[]];

export async function createRequestOptions(
	this: IExecuteFunctions | IWebhookFunctions | IHookFunctions | ILoadOptionsFunctions,
	resource: string,
	operation: string,
): Promise<RequestOptionsTuple> {
	let configObj: any;
	switch (resource) {
		case 'artikelen':
			configObj = artikelenConfig;
			break;
		case 'actieprijzen':
			configObj = actieprijzenConfig;
			break;
		case 'artikelomzetgroepen':
			configObj = artikelomzetgroepenConfig;
			break;
		case 'authorization':
			configObj = authorizationConfig;
			break;
		case 'bankafschriftbestanden':
			configObj = bankafschriftbestandenConfig;
			break;
		case 'bankboekingen':
			configObj = bankboekingenConfig;
			break;
		case 'btwaangifte':
			configObj = btwaangiftesConfig;
			break;
		case 'btwtarieven':
			configObj = btwtarievenConfig;
			break;
		case 'companyInfo':
			configObj = companyInfoConfig;
			break;
		case 'dagboeken':
			configObj = dagboekenConfig;
			break;
		case 'documenten':
			configObj = documentenConfig;
			break;
		case 'echo':
			configObj = echoConfig;
			break;
		case 'grootboeken':
			configObj = grootboekenConfig;
			break;
		case 'grootboekmutaties':
			configObj = grootboekmutatiesConfig;
			break;
		case 'inkoopboekingen':
			configObj = inkoopboekingenConfig;
			break;
		case 'inkoopfacturen':
			configObj = inkoopfacturenConfig;
			break;
		case 'kasboekingen':
			configObj = kasboekingeConfig;
			break;
		case 'landen':
			configObj = landenConfig;
			break;
		case 'kostenplaatsen':
			configObj = kostenplaatConfig;
			break;
		case 'memoriaalboekingen':
			configObj = memoriaalboekingenConfig;
			break;
		case 'offertes':
			configObj = offertesConfig;
			break;
		default:
			throw new NodeOperationError(
				this.getNode(),
				`Unknown resource: “${resource}”.`,
			);
	}

	const cfg = configObj[operation as keyof typeof configObj] as
		| { url: string; method: string; urlParams: string[]; optionalUrlParams?: string[] }
		| undefined;
	if (!cfg || typeof cfg !== 'object') {
		throw new NodeOperationError(
			this.getNode(),
			`Invalid ${resource} operation: “${operation}”.`,
		);
	}
	return [cfg.url, cfg.method, cfg.urlParams, cfg.optionalUrlParams ?? []];
}

// Unwrap the "values" layer of fixedCollections recursively
const hasOwn = Object.prototype.hasOwnProperty;
const isPlainObject = (v: unknown): v is Record<string, unknown> =>
  !!v && typeof v === 'object' && !Array.isArray(v);

// Unwrap the "values" layer of fixedCollections recursively
function unwrapFC(value: unknown): unknown {
		if (value == null) return value;

		// Arrays: unwrap each element
		if (Array.isArray(value)) return value.map(unwrapFC);

		// Non-objects: return as-is
		if (!isPlainObject(value)) return value;

		// Only unwrap own { values: ... } shells
		if (Object.keys(value).length === 1 && hasOwn.call(value, 'values')) {
			return unwrapFC((value as { values: unknown }).values);
		}

		for (const [key, val] of Object.entries(value)) {
			(value as any)[key] = unwrapFC(val);
		}
		return value;
	}


// Build request body from node parameters
export async function getBody(
	this: | IExecuteFunctions | IWebhookFunctions | IHookFunctions | ILoadOptionsFunctions,
	resource: string,
	operation: string,
	itemIndex: number,
): Promise<IDataObject> {
	try {
		const urlParams = await createRequestOptions.call(this, resource, operation);
		const pathParamSet = new Set<string>((urlParams?.[2] ?? []) as string[]);

		let finalParameters: IDataObject = {};

		// Merge the fields collection *into* finalParameters (do not keep a "fields" wrapper)
		const fields = this.getNodeParameter('fields', itemIndex, {}) as IDataObject;
		if (fields && typeof fields === 'object') {
			for (const [subKey, rawVal] of Object.entries(fields)) {
				this.logger?.info?.(`Field subKey: ${subKey} with raw value: ${JSON.stringify(rawVal)}`);
				const val = unwrapFC(rawVal);
				if (val !== '' && val !== undefined && !(Array.isArray(val) && val.length === 0) && !(typeof val === 'object' && val && Object.keys(val as object).length === 0)) {
					finalParameters[subKey] = val as IDataObject;
				}
			}
		}

		// Add other node parameters except defaults and "fields" itself
		const excludedFields = ['overwriteBaseUrl', 'resource', 'operation', 'parameters', 'fields', 'options', 'instanceId'];
		for (const [key, value] of Object.entries(this.getNode().parameters)) {
			this.logger?.info?.(`Field: ${key} with value: ${JSON.stringify(value)}`);
			if (excludedFields.includes(key)) continue;
			if (value === '' || value === undefined) continue;
			if (pathParamSet.has(key)) continue;

			const paramValue = this.getNodeParameter(key, itemIndex, {}) as IDataObject;
			if (paramValue !== undefined) {
				finalParameters[key] = unwrapFC(paramValue) as IDataObject;
			}
		}

		const body: IDataObject = { ...finalParameters };

		// LOGGING the body
		this.logger?.info?.(`Body: ${JSON.stringify(body, null, 2)}`);

		return body;
	} catch (error) {
		this.logger?.error?.(
			`Error in getBody for resource: ${resource}, operation: ${operation}`,
			{ error: error instanceof Error ? error.message : String(error) },
		);
		throw new NodeOperationError(this.getNode(), toJsonObject(error), { itemIndex });
	}
}
