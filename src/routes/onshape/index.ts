import type { RequestHandler, RequestHandlerOutput } from '@sveltejs/kit';
import OnshapeApi, { WVM } from '$lib/onshape';
import type { GetDocumentResponse } from '$lib/onshape/GetDocumentResponse';
import type { GetElementsInDocumentResponse } from '$lib/onshape/GetElementsInDocument';

const accessKey = import.meta.env.VITE_ONSHAPE_ACCESS_KEY;
const secretKey = import.meta.env.VITE_ONSHAPE_SECRET_KEY;

export const Onshape = new OnshapeApi({
	accessKey: accessKey,
	secretKey: secretKey,
	debug: true
});

/** @type {import('./__types/index').RequestHandler} */
export const get: RequestHandler = async ({
	locals,
	url
}): Promise<
	RequestHandlerOutput<{ doc: GetDocumentResponse; elements: GetElementsInDocumentResponse }>
> => {
	console.log('GET projects', locals, url.searchParams.get('did'));

	// const did = 'f2dd281fff1cee4d67627c2e'; //toolbox drawer
	const did = url.searchParams.get('did');

	if (!did) {
		//this is an error
		//No document selected @todo
		return {};
	}

	const doc = await Onshape.GetDocument(did);
	console.log(JSON.stringify(doc, null, '\t'));
	const wid = doc.defaultWorkspace.id;

	const elements = await Onshape.GetElementsInDocument(did, WVM.W, wid);
	console.log(JSON.stringify(elements, null, '\t'));

	// const wid = '606e94ad4692296338edd039'; // main version
	const eid_ps = 'c2494edebdb1eabcaa6a5370';
	const eid_asm = 'e1b650854533c47944c9cb13';
	// console.log(JSON.stringify(await Onshape.GetDocument(did), null, '\t'));

	// console.log(
	// 	JSON.stringify(
	// 		await Onshape.GetElementsInDocument(did, WVM.W, wid, { elementType: 'Assembly' }),
	// 		null,
	// 		'\t'
	// 	)
	// );

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
