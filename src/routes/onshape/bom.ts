import type { RequestHandler, RequestHandlerOutput } from '@sveltejs/kit';
import OnshapeApi, { WVM } from '$lib/onshape';
import type { GetBillOfMaterialsResponse } from '$lib/onshape/GetBillOfMaterialsResponse';

const accessKey = import.meta.env.VITE_ONSHAPE_ACCESS_KEY;
const secretKey = import.meta.env.VITE_ONSHAPE_SECRET_KEY;

export const Onshape = new OnshapeApi({
	accessKey: accessKey,
	secretKey: secretKey,
	debug: false
});

/** @type {import('./__types/index').RequestHandler} */
export const get: RequestHandler = async ({
	locals,
	url
}): Promise<RequestHandlerOutput<{ bom: GetBillOfMaterialsResponse }>> => {
	console.log('GET projects', locals, url.searchParams);

	// const did = 'f2dd281fff1cee4d67627c2e'; //toolbox drawer
	const did = url.searchParams.get('did');
	const wid = url.searchParams.get('wid');
	const eid = url.searchParams.get('eid'); //should be an assembly

	if (!did || !wid || !eid) {
		//this is an error
		//No document selected @todo
		return {};
	}

	const bom = await Onshape.GetBillOfMaterials(did, WVM.W, wid, eid);
	if ('status' in bom && bom.status / 100 != 2) {
		console.log('Error!');
		return {
			status: 404
		};
	}

	// console.log(bom);

	return {
		body: {
			bom: bom as GetBillOfMaterialsResponse
		}
	};
};