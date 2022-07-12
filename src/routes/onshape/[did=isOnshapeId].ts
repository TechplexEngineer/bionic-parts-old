import OnshapeApi, { WVM } from '$lib/OnshapeAPI';
import type { GetElementsInDocumentOptional } from '$lib/OnshapeAPI/GetElementsInDocument';

const accessKey = import.meta.env.VITE_ONSHAPE_ACCESS_KEY;
const secretKey = import.meta.env.VITE_ONSHAPE_SECRET_KEY;

export const Onshape = new OnshapeApi({
	accessKey: accessKey,
	secretKey: secretKey,
	debug: false
});

import type { RequestHandler } from './__types/[did=isOnshapeId]';

export const get: RequestHandler = async ({ locals, url, params }) => {
	console.log('GET projects', locals, params.did);

	// const did = 'f2dd281fff1cee4d67627c2e'; //toolbox drawer
	const did = params.did;

	if (!did) {
		//this is an error
		//No document selected @todo
		return {
			status: 404
		};
	}

	const doc = await Onshape.GetDocument(did);
	if ('status' in doc && doc.status / 100 != 2) {
		throw new Error('Unable to create translation: ' + JSON.stringify(doc));
	}
	console.log(JSON.stringify(doc, null, '\t'));
	const wid = doc.defaultWorkspace.id;

	const elementTypeFilter = url.searchParams.get('type');

	const opts: GetElementsInDocumentOptional = {};
	if (elementTypeFilter) {
		if (elementTypeFilter.toLowerCase() == 'any') {
			delete opts.elementType;
		} else {
			opts.elementType = elementTypeFilter;
		}
	}
	const elements = await Onshape.GetElementsInDocument(did, WVM.W, wid, opts);
	// console.log(JSON.stringify(elements, null, '\t'));

	return {
		body: {
			doc: doc,
			elements: elements
		}
	};
};

export const post: RequestHandler = async ({ request, locals }) => {
	const form = await request.formData();
	// const file: File = form.get('projectPhoto') as File;

	// const project = {
	// 	name: form.get('projectName'),
	// 	partNumberPrefix: form.get('partPrefix'),
	// 	photo: toDataUrl(Buffer.from(await file.arrayBuffer()), file.type)
	// };
	// console.log(`POST projects ${JSON.stringify(project)}`);
	//
	// projects.push(project as any);

	return {};
};
