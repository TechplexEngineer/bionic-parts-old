import { createHmac } from 'node:crypto';
import type { GetDocumentResponse } from './GetDocumentResponse';
import type { GetBillOfMaterialsResponse } from './GetBillOfMaterialsResponse';
import type {
	GetElementsInDocumentOptional,
	GetElementsInDocumentResponse
} from './GetElementsInDocument';
import type { BTTranslateFormatParams, BTTranslationRequestInfo } from './BTTranslationRequestInfo';
import { BTTranslationRequestInfo_State } from './BTTranslationRequestInfo';
import type { GetBillOfMaterialsOptions } from './GetBillOfMaterialsOptions';

async function signDataHmac265_broken_for_post(key: string, data: string): Promise<string> {
	// encoder to convert string to Uint8Array
	const enc = new TextEncoder();

	const hmac512 = await crypto.subtle.importKey(
		'raw', // raw format of the key - should be Uint8Array
		enc.encode(key),
		{
			// algorithm details
			name: 'HMAC',
			hash: { name: 'SHA-512' }
		},
		false, // export = false
		['sign', 'verify'] // what this key can do
	);

	const signature = await crypto.subtle.sign('HMAC', hmac512, enc.encode(data));
	return Buffer.from(signature).toString('base64');
	// return Array.prototype.map.call(b, (x) => x.toString().padStart(2, '0')).join('');
}

async function signDataHmac265(key: string, data: string): Promise<string> {
	const hmac = createHmac('sha256', key);
	hmac.update(data);
	return hmac.digest('base64');
}

// function signDataHmac265(key:string, data:string): string {
// 	const hmac = createHmac('sha256', key);
// 	hmac.update(data);
// 	return hmac.digest('base64');
// }

/**
 * Wrapper for setTimeout to create delays
 * @param ms number of miliseconds to delay
 * @returns Void
 */
export const delay = (ms: number): Promise<void> =>
	new Promise((resolve) => setTimeout(resolve, ms));

// creates random 25-character string
export const buildNonce = function () {
	const chars = [
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
		'K',
		'L',
		'M',
		'N',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'T',
		'U',
		'V',
		'W',
		'X',
		'Y',
		'Z',
		'0',
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9'
	];
	let nonce = '';
	for (let i = 0; i < 25; i++) {
		nonce += chars[Math.floor(Math.random() * chars.length)];
	}
	return nonce;
};

export interface ErrorResponse {
	code: number;
	moreInfoUrl: string;
	message: string;
	status: number;
}

export const copyObject = function (object: any) {
	if (object === null || typeof object !== 'object') {
		return object;
	}
	const copy = {} as any;
	const keys = Object.keys(object);
	for (let i = 0; i < keys.length; i++) {
		if (object.hasOwn(keys[i])) {
			copy[keys[i]] = copyObject(object[keys[i]]);
		}
	}
	return copy;
};

export const buildDWMVEPath = function (opts: {
	resource: string;
	d?: string;
	w?: string;
	v?: string;
	m?: string;
	e?: string;
	subresource?: string;
}) {
	let path = '/api/' + opts.resource + '/d/' + opts.d;
	if ('w' in opts) {
		path += '/w/' + opts.w;
	} else if ('v' in opts) {
		path += '/v/' + opts.v;
	} else if ('m' in opts) {
		path += '/m/' + opts.m;
	}
	if ('e' in opts) {
		path += '/e/' + opts.e;
	}
	if ('subresource' in opts) {
		path += '/' + opts.subresource;
	}

	return path;
};

export const buildQueryString = function (opts: { query: any }) {
	if (!('query' in opts) || typeof opts.query !== 'object' || opts.query == null) {
		return '';
	}
	return new URLSearchParams(opts.query).toString();
	// return queryString.stringify(opts.query);
};

export const inputHeadersFromOpts = function (opts: { headers?: any }) {
	return !('headers' in opts) || typeof opts.headers !== 'object' || opts.headers == null
		? {}
		: copyObject(opts.headers);
};

export type OnshapeApiCreds = {
	baseUrl?: string;
	accessKey: string;
	secretKey: string;
	debug: boolean;
};

export enum WVM {
	W = 'w',
	V = 'm',
	M = 'm'
}

export interface GetPartsResponse {
	defaultColorHash: string;
	ordinal: number;
	propertySourceTypes: { [key: string]: any };
	isMesh: boolean;
	state: string;
	description: any;
	revision: any;
	partId: string;
	bodyType: string;
	elementId: string;
	microversionId: string;
	partNumber: any;
	partQuery: string;
	configurationId: string;
	isHidden: boolean;
	partIdentity: any;
	isFlattenedBody: boolean;
	thumbnailConfigurationId: string;
	appearance: Appearance;
	meshState: string;
	name: string;
}

export interface Appearance {
	isGenerated: boolean;
	color: any[];
	opacity: number;
}

export type GetOpts =
	| {
			d: string;
			w?: string;
			v?: string;
			m?: string;
			e?: string;
			resource: string;
			subresource?: string;
			baseUrl?: string;
			query?: { [key: string]: string };
			headers?: any;
			rawResponse?: boolean;
	  }
	| {
			path?: string;
			baseUrl?: string;
			query?: { [key: string]: string };
			rawResponse?: boolean;
	  };

// export type PostOpts = GetOpts & { body: any };
export type PostOpts =
	| {
			d: string;
			w?: string;
			v?: string;
			m?: string;
			e?: string;
			resource: string;
			subresource?: string;
			baseUrl?: string;
			query?: { [key: string]: string };
			headers?: any;
			body: any;
	  }
	| {
			path?: string;
			baseUrl?: string;
			query?: { [key: string]: string };
			body: any;
	  };

export enum DrawingExportType {
	INSPECTION_LIST = 'INSPECTION_LIST',
	DRAWING_JSON = 'DRAWING_JSON',
	PDF = 'PDF',
	DWG = 'DWG',
	DXF = 'DXF',
	DWT = 'DWT',
	PNG = 'PNG',
	JPEG = 'JPEG',
	SVG = 'SVG'
}

export default class Onshape {
	private creds: OnshapeApiCreds;

	constructor(creds: OnshapeApiCreds) {
		this.creds = creds;
		if (!this.creds.accessKey) {
			throw new Error('Missing Access Key');
		}
		if (!this.creds.secretKey) {
			throw new Error('Missing Secret Key');
		}
		if (!this.creds.baseUrl) {
			this.creds.baseUrl = 'https://cad.onshape.com';
		}
		if (typeof this.creds.debug !== 'boolean') {
			this.creds.debug = false;
		}
	}

	private async buildHeaders(method: string, path: string, queryString: string, inputHeaders: any) {
		const headers = copyObject(inputHeaders);
		// the Date header needs to be reasonably (5 minutes) close to the server time when the request is received
		const authDate = new Date().toUTCString();
		// the On-Nonce header is a random (unique) string that serves to identify the request
		const onNonce = buildNonce();
		if (!('Content-Type' in headers)) {
			headers['Content-Type'] = 'application/json';
		}
		// the Authorization header needs to have this very particular format, which the server uses to validate the request
		// the access key is provided for the server to retrieve the API key; the signature is encrypted with the secret key
		const hmacString = (
			method +
			'\n' +
			onNonce +
			'\n' +
			authDate +
			'\n' +
			headers['Content-Type'] +
			'\n' +
			path +
			'\n' +
			queryString +
			'\n'
		).toLowerCase();
		const signature = await signDataHmac265(this.creds.secretKey, hmacString);

		const asign = 'On ' + this.creds.accessKey + ':HmacSHA256:' + signature;

		headers['On-Nonce'] = onNonce;
		headers['Date'] = authDate;
		headers['Authorization'] = asign;

		if (!('Accept' in headers)) {
			headers['Accept'] = 'application/vnd.onshape.v1+json';
		}

		return headers;
	}

	/*
	 * opts: {
	 *   d: document ID
	 *   w: workspace ID (only one of w, v, m)
	 *   v: version ID (only one of w, v, m)
	 *   m: microversion ID (only one of w, v, m)
	 *   e: elementId
	 *   baseUrl: base URL; if present, overrides apikey.js
	 *   resource: top-level resource (partstudios)
	 *   subresource: sub-resource, if any (massproperties)
	 *   path: from /api/...; if present, overrides the other options
	 *   accept: accept header (default: application/vnd.onshape.v1+json)
	 *   query: query object
	 *   headers: headers object
	 * }
	 */
	public async get(opts: GetOpts) {
		let path = '';
		if ('path' in opts) {
			path = opts.path as any;
		} else {
			path = buildDWMVEPath(opts as any);
		}
		const baseUrl = 'baseUrl' in opts ? opts.baseUrl : this.creds.baseUrl;
		const inputHeaders = inputHeadersFromOpts(opts as any);
		let queryString = buildQueryString(opts as any);
		const headers = await this.buildHeaders('GET', path, queryString, inputHeaders);
		if (queryString !== '') queryString = '?' + queryString;
		const requestUrl = baseUrl + path + queryString;
		if (this.creds.debug) {
			console.log(`GET ${requestUrl}`, headers);
		}
		const res = await fetch(requestUrl, {
			method: 'GET',
			headers: headers
		});
		if (opts.rawResponse) {
			return res;
		}
		return await res.json();
	}

	public async GetDocument(documentId: string): Promise<GetDocumentResponse> {
		const opts: GetOpts = {
			path: `/api/documents/${documentId}`
		};
		return (await this.get(opts)) as any;
	}

	/**
	 * Get parts in a part studio
	 */
	public async GetParts(
		documentId: string,
		wvm: WVM,
		wvmId: string,
		elementId: string
	): Promise<GetPartsResponse> {
		const opts: GetOpts = {
			d: documentId,
			e: elementId,
			resource: 'parts'
		};
		opts[wvm] = wvmId;
		return (await this.get(opts as any)) as any;
	}

	/**
	 * Get Elements "tabs" in a document
	 */
	public async GetElementsInDocument(
		documentId: string,
		wvm: WVM,
		wvmId: string,
		optional: GetElementsInDocumentOptional = {}
	): Promise<GetElementsInDocumentResponse> {
		const opts: GetOpts = {
			d: documentId,
			resource: 'documents',
			subresource: 'elements',
			query: optional as any
		};
		opts[wvm] = wvmId;
		return (await this.get(opts)) as any;
	}

	/**
	 * Get an existing bill of materials for an assembly
	 */
	public async GetBillOfMaterials(
		documentId: string,
		wvm: WVM,
		wvmId: string,
		elementId: string,
		options: GetBillOfMaterialsOptions = {}
	): Promise<GetBillOfMaterialsResponse | ErrorResponse> {
		const opts: GetOpts = {
			d: documentId,
			e: elementId,
			resource: 'assemblies',
			subresource: 'bom',
			query: options as { [key: string]: string }
		};
		opts[wvm] = wvmId;
		return (await this.get(opts)) as GetBillOfMaterialsResponse | ErrorResponse;
	}

	public async GetOrCreateBillOfMaterials(
		documentId: string,
		workspaceId: string,
		elementId: string
	): Promise<GetBillOfMaterialsResponse | ErrorResponse> {
		const opts: GetOpts = {
			d: documentId,
			w: workspaceId,
			e: elementId,
			resource: 'assemblies',
			subresource: 'bomelement'
		};
		return (await this.post(opts as any)) as any;
	}

	public async GetPartStudioStl(
		documentId: string,
		wvm: WVM,
		wvmId: string,
		elementId: string,
		options?: any
	) {
		const opts: GetOpts = {
			d: documentId,
			e: elementId,
			query: options,
			resource: 'partstudios',
			subresource: 'stl',
			headers: {
				Accept: 'application/vnd.onshape.v1+octet-stream'
			}
		};
		opts[wvm] = wvmId;
		return (await this.get(opts as any)) as any;
	}

	public async post(opts: PostOpts) {
		let path = '';
		if ('path' in opts) {
			path = opts.path as any;
		} else {
			path = buildDWMVEPath(opts as any);
		}
		const method = 'POST';
		const baseUrl = 'baseUrl' in opts ? opts.baseUrl : this.creds.baseUrl;
		const inputHeaders = inputHeadersFromOpts(opts as any);
		let queryString = buildQueryString(opts as any);
		const headers = await this.buildHeaders(method, path, queryString, inputHeaders);
		if (queryString !== '') queryString = '?' + queryString;
		const requestUrl = baseUrl + path + queryString;
		if (this.creds.debug) {
			console.log(`${method} ${requestUrl}\n`, headers, '\n', JSON.stringify(opts.body));
		}
		const res = await fetch(requestUrl, {
			method: method,
			headers: headers,
			body: JSON.stringify(opts.body)
		});
		return await res.json();
	}

	public async BlobElement_CreateTranslation(
		documentId: string,
		wv: WVM.W | WVM.V,
		wvId: string,
		elementId: string,
		body: BTTranslateFormatParams
	): Promise<BTTranslationRequestInfo | ErrorResponse> {
		const opts: PostOpts = {
			d: documentId,
			e: elementId,
			resource: 'blobelements',
			subresource: 'translations',
			body: body
		};
		opts[wv] = wvId;
		return (await this.post(opts as any)) as any;
	}

	public async Translations_GetInfo(
		translationId: string
	): Promise<BTTranslationRequestInfo | ErrorResponse> {
		const opts: GetOpts = {
			path: `/api/translations/${translationId}`
		};
		return (await this.get(opts as any)) as any;
	}

	public async BlobElements_Download(
		documentId: string,
		workspaceId: string,
		elementId: string
	): Promise<Response> {
		const opts: GetOpts = {
			d: documentId,
			w: workspaceId,
			e: elementId,
			resource: 'blobelements',
			headers: {
				Accept: 'application/vnd.onshape.v1+octet-stream'
			},
			rawResponse: true
		};
		return (await this.get(opts as any)) as any;
	}

	public async ExportDrawing(
		documentId: string,
		wv: WVM.W | WVM.V,
		wvId: string,
		elementId: string,
		exportType: DrawingExportType
	): Promise<Response> {
		let transRes = await this.BlobElement_CreateTranslation(documentId, wv, wvId, elementId, {
			//formatName: exportType
			formatName: 'PDF',
			destinationName: 'name.pdf'
		});
		if ('status' in transRes && transRes.status / 100 != 2) {
			throw new Error('Unable to create translation: ' + JSON.stringify(transRes));
		}
		console.log('REQ State', (transRes as BTTranslationRequestInfo).requestState);
		//@todo check error
		while (
			(transRes as BTTranslationRequestInfo).requestState == BTTranslationRequestInfo_State.ACTIVE
		) {
			console.log('Translation not ready, waiting 500ms');
			await delay(500);
			transRes = await this.Translations_GetInfo(
				(transRes as BTTranslationRequestInfo).id as string
			); //try in loop
		}

		console.log('Data', transRes as BTTranslationRequestInfo);

		const resultElementIds = (transRes as BTTranslationRequestInfo)?.resultElementIds;
		if (!(resultElementIds && resultElementIds.length))
			//undefined or 0 or 1
			throw new Error('No resultElementIds');

		return await this.BlobElements_Download(
			documentId,
			(transRes as BTTranslationRequestInfo).workspaceId || '',
			resultElementIds[0]
		);
	}
}
