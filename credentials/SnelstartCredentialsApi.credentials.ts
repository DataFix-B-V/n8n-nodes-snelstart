import {
	IAuthenticateGeneric,
	ICredentialDataDecryptedObject,
	ICredentialTestRequest,
	ICredentialType,
	IHttpRequestHelper,
	INodeProperties,
	Icon,
} from 'n8n-workflow';

export class SnelstartCredentialsApi implements ICredentialType {
	name = 'snelstartCredentialsApi';
	displayName = 'Snelstart Credentials API';

	documentationUrl = 'https://b2bapi-developer.snelstart.nl/';
	icon: Icon = 'file:SnelstartIcon.svg';

	properties: INodeProperties[] = [
		{
			displayName: 'Snelstart Client Key',
			name: 'clientKey',
			type: 'string',
			description: 'Log in to SnelStart Web, open the desired link tile and select “set up link” to generate the key.',
			typeOptions: { password: true },
			default: '',
			required: true,
		},
		{
			displayName: 'Subscription Key',
			name: 'subscriptionKey',
			type: 'string',
			description: 'This key can be managed by a partner in the Products menu item and provides access to the API.',
			typeOptions: { password: true },
			default: '',
			required: true,
		},
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'hidden',
			default: '',
			required: false,
			typeOptions: {
				expirable: true,
			},
		}
	];

	// Getting the access token and its expiry time
	async preAuthentication(
		this: IHttpRequestHelper,
		credentials: ICredentialDataDecryptedObject,
	): Promise<{ accessToken: string; expiresAt?: number }> {
		// Requesting a new access token using the client key
		const response = await this.helpers.httpRequest({
			method: 'POST',
			url: 'https://auth.snelstart.nl/b2b/token',
			json: false,
			headers: {
				'content-type': 'application/x-www-form-urlencoded',
			},
			body: {
				grant_type: 'clientkey',
				clientkey: credentials.clientKey,
			},
		});

		return { accessToken: response.access_token};
	}

	// This credential is currently not used by any node directly
	// but the HTTP Request node can use it to make requests.
	// The credential is also testable due to the `test` property below
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'Authorization': '={{ "Bearer " + $credentials.accessToken }}',
				'Ocp-Apim-Subscription-Key': '={{ $credentials.subscriptionKey }}',
			},
		},
	};

	// The block below tells how this credential can be tested
	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://b2bapi.snelstart.nl',
			url: '/echo/resource?params1=sample',
			method: 'GET',
		},
	};
}
