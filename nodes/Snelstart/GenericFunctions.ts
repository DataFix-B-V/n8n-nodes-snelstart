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
import kasboekingenConfig from './Kasboekingen/KasboekingenFieldConfig.json';
import kostenplaatsenConfig from './Kostenplaatsen/KostenplaatsenFieldConfig.json';
import landenConfig from './Landen/LandenFieldConfig.json';
import memoriaalboekingenConfig from './Memoriaalboekingen/MemoriaalboekingenFieldConfig.json';
import offertesConfig from './Offertes/OffertesFieldConfig.json';
import prijsafsprakenConfig from './Prijsafspraken/PrijsafsprakenFieldConfig.json';
import rapportagesConfig from './Rapportages/RapportagesFieldConfig.json';
import relatiesConfig from './Relaties/RelatiesFieldConfig.json';
import vatratedefinitionsConfig from './Vatratedefinitions/VatratedefinitionsFieldConfig.json';
import vatratesConfig from './Vatrates/VatratesFieldConfig.json';
import verkoopboekingenConfig from './Verkoopboekingen/VerkoopboekingenFieldConfig.json';
import verkoopfacturenConfig from './Verkoopfacturen/VerkoopfacturenFieldConfig.json';
import verkoopordersConfig from './Verkooporders/VerkoopordersFieldConfig.json';
import verkoopordersjablonenConfig from './Verkoopordersjablonen/VerkoopordersjablonenFieldConfig.json';

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
			configObj = kasboekingenConfig;
			break;
		case 'landen':
			configObj = landenConfig;
			break;
		case 'kostenplaatsen':
			configObj = kostenplaatsenConfig;
			break;
		case 'memoriaalboekingen':
			configObj = memoriaalboekingenConfig;
			break;
		case 'offertes':
			configObj = offertesConfig;
			break;
		case 'prijsafspraken':
			configObj = prijsafsprakenConfig;
			break;
		case 'rapportages':
			configObj = rapportagesConfig;
			break;
		case 'relaties':
			configObj = relatiesConfig;
			break;
		case 'vatratedefinitions':
			configObj = vatratedefinitionsConfig;
			break;
		case 'vatrates':
			configObj = vatratesConfig;
			break;
		case 'verkoopboekingen':
			configObj = verkoopboekingenConfig;
			break;
		case 'verkoopfacturen':
			configObj = verkoopfacturenConfig;
			break;
		case 'verkooporders':
			configObj = verkoopordersConfig;
			break;
		case 'verkoopordersjablonen':
			configObj = verkoopordersjablonenConfig;
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

// Format error object to JsonObject
function toJsonObject(e: unknown): JsonObject {
	if (e && typeof e === 'object') return e as JsonObject;
	return { message: e as string};
}

export type SnelstartRequestResponse =
	| IDataObject | IDataObject[] | string | number | boolean| null;

// Make an authenticated API request to Snelstart
export async function makeRequest(
	this: IExecuteFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	body: object = {},
	qs: IDataObject = {},
): Promise<SnelstartRequestResponse> {
	const credentialType = 'snelstartCredentialsApi';
	const credentials = await this.getCredentials(credentialType);
	const baseURL = 'https://b2bapi.snelstart.nl/v2';

	if (!credentials) {
		throw new NodeOperationError(
			this.getNode(),
			'Missing credentials “snelstartCredentialsApi”. Configure credentials on the node.',
		);
	}

	const normalizedExtra = endpoint ? `/${endpoint.replace(/^\/+/, '')}` : '';
	const uri  = `${baseURL}${normalizedExtra}`;

	const options: IHttpRequestOptions = {
		method,
		body,
		qs,
		url: uri,
		json: true,
	};

	try {
		const res = await this.helpers.httpRequestWithAuthentication.call(
			this,
			credentialType,
			options,
		);

		this.logger.info(res)

		return res as SnelstartRequestResponse;
	} catch (error) {
		throw new NodeApiError(
			this.getNode(),
			toJsonObject(error) as JsonObject,
			{
				message: `${error?.message || 'jsmAssets API request failed'}`,
				description: `${JSON.stringify(toJsonObject(error), null, 2)}`,
			},
		);
	}
}


// Unwrap the "values" layer of fixedCollections recursively
const hasOwn = Object.prototype.hasOwnProperty;
const isPlainObject = (v: unknown): v is Record<string, unknown> =>
  !!v && typeof v === 'object' && !Array.isArray(v);

// Unwrap the "values" layer of fixedCollections recursively
function unwrapFC(value: unknown): unknown {
		if (value == null) return value;

		// Check if value is empty
		if (value === '' || value === undefined) return undefined;

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

// Clean object recursively
export async function clean(v: any): Promise<any> {
  // remove null/undefined/""
  if (v === null || v === undefined || v === '') return undefined;

  // arrays: clean items, drop empty ones
  if (Array.isArray(v)) {
	const arr = await Promise.all(v.map(clean));
	const filteredArr = arr.filter((x) => x !== undefined);
	return filteredArr.length ? filteredArr : undefined;
  }

  // objects: clean properties, drop empty objects
  if (typeof v === 'object') {
	const obj: any = {};
	for (const k of Object.keys(v)) {
	  const cv = await clean(v[k]);
	  if (cv !== undefined) obj[k] = cv;
	}
	return Object.keys(obj).length ? obj : undefined;
  }

  // keep numbers (including 0) and booleans (including false)
  return v;
}

// Build request body from node parameters
export async function getBody(
	this: | IExecuteFunctions | IWebhookFunctions | IHookFunctions | ILoadOptionsFunctions,
	resource: string,
	operation: string,
	itemIndex: number,
): Promise<IDataObject> {
	try {
		const bodyType = this.getNodeParameter('specifyBody', itemIndex, 'fields') as string;
		if (bodyType === 'json') {
			const rawBody = this.getNodeParameter('jsonBody', itemIndex, '') as string;
			if (!rawBody || rawBody.trim() === '') {
				return {};
			}
			let parsed: IDataObject;
			try {
				parsed = JSON.parse(rawBody);
			} catch (error) {
				throw new NodeOperationError(this.getNode(), `Invalid JSON: ${(error as Error).message}`, { itemIndex });
			}
			const cleaned = await clean(parsed);
			return cleaned;
		}


		const urlParams = await createRequestOptions.call(this, resource, operation);
		const pathParamSet = new Set<string>((urlParams?.[2] ?? []) as string[]);

		let finalParameters: IDataObject = {};

		// Merge the fields collection *into* finalParameters (do not keep a "fields" wrapper)
		const fields = this.getNodeParameter('fields', itemIndex, {}) as IDataObject;
		if (fields && typeof fields === 'object') {
			for (const [subKey, rawVal] of Object.entries(fields)) {
				this.logger.info(`Key: ${subKey}: ${JSON.stringify(rawVal)}`);
				const val = unwrapFC(rawVal);
				this.logger.info(`Unwrap Key: ${subKey}: ${JSON.stringify(val)}`);
				if (val !== '' && val !== undefined && !(Array.isArray(val) && val.length === 0) && !(typeof val === 'object' && val && Object.keys(val as object).length === 0)) {
					finalParameters[subKey] = val;
				}
			}
		}

		// Add other node parameters except defaults and "fields" itself
		const excludedFields = ['overwriteBaseUrl', 'resource', 'operation', 'parameters', 'fields', 'options', 'instanceId', 'returnAll'];
		for (const [key, value] of Object.entries(this.getNode().parameters)) {
			if (excludedFields.includes(key)) continue;
			if (value === '' || value === undefined) continue;
			if (pathParamSet.has(key)) continue;

			const paramValue = this.getNodeParameter(key, itemIndex, {}) as IDataObject;
			if (paramValue !== undefined) {
				finalParameters[key] = unwrapFC(paramValue) as IDataObject;
			}
		}

		const body: IDataObject = { ...finalParameters };
		const cleanedBody = await clean(body);

		return cleanedBody;
	} catch (error) {
			throw new NodeOperationError(this.getNode(), toJsonObject(error), { itemIndex });
	}
}

export async function createQs(this: IExecuteFunctions, options: IDataObject): Promise<IDataObject> {
	// Append query string if we have any options
	const qs: IDataObject = {};

	for (const [key, value] of Object.entries(options)) {
			qs[key] = value;
		}

	return qs;
	}

export async function paginateRequest(
	this: IExecuteFunctions,
	endpoint: string,
	method: IHttpRequestMethods,
	qs: IDataObject,
	chunkSize: number,
	resource: string,
	operation: string,
	itemIndex: number,
): Promise<IDataObject[]> {

	const body = await getBody.call(this, resource, operation, itemIndex);
	this.logger.info(`Body: ${JSON.stringify(body)}`);
	const returnAll = this.getNodeParameter('returnAll', itemIndex, false) as boolean;

	// If user sets $top, use it; otherwise default to chunkSize
	const top = (qs['$top'] as number) || chunkSize;

	// Initialize pagination values
	if (operation.startsWith('getMany')) {
		qs['$skip'] = qs['$skip'] as number || 0;
		qs['$top']  = top;
	}

	const returnedData: IDataObject[] = [];

	while (true) {
		const response: any = await makeRequest.call(this, method, endpoint, body, qs);

		// Add items to result
		if (Array.isArray(response)) {
			returnedData.push(...response);
		} else {
			returnedData.push(response as IDataObject);
		}

		// Stop if this is not a getMany
		if (!operation.startsWith('getMany')) break;

		// Stop if empty page
		if (response.length === 0) break;

		// If not returnAll → stop after one request
		if (!returnAll) break;

		// Prepare next page
		qs['$skip'] = (qs['$skip'] as number) + chunkSize;
	}

	return returnedData;
}


