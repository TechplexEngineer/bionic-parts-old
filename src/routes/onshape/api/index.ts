import type { RequestHandler, RequestHandlerOutput } from '@sveltejs/kit';
import OnshapeApi, { WVM } from '$lib/OnshapeAPI';
import type { GetBillOfMaterialsResponse } from '$lib/OnshapeAPI/GetBillOfMaterialsResponse';

const accessKey = import.meta.env.VITE_ONSHAPE_ACCESS_KEY;
const secretKey = import.meta.env.VITE_ONSHAPE_SECRET_KEY;

export const Onshape = new OnshapeApi({
	accessKey: accessKey,
	secretKey: secretKey,
	debug: true
});

/** @type {import('./__types/index').RequestHandler} */
export const get: RequestHandler = async ({ locals, url }): Promise<any> => {
	console.log('GET bom', locals, url.searchParams);

	// const did = 'f2dd281fff1cee4d67627c2e'; //toolbox drawer
	const did = url.searchParams.get('did');
	const wid = url.searchParams.get('wid');
	const eid = url.searchParams.get('eid');
	const method = url.searchParams.get('method');
	const resource = url.searchParams.get('resource');
	const subresource = url.searchParams.get('subresource');

	if (!did || !wid || !eid || !method || !method) {
		//this is an error
		//No document selected @todo
		return {};
	}

	switch (method.toLowerCase()) {
		case 'get':
			return {
				body: {
					data: await Onshape.get({
						d: did,
						w: wid,
						e: eid,
						resource: resource || '',
						subresource: subresource || undefined
					})
				}
			};
			break;
		case 'post':
			return {
				body: {
					data: await Onshape.post({
						d: did,
						w: wid,
						e: eid,
						resource: resource || '',
						subresource: subresource || undefined,
						body: {}
					})
				}
			};
			break;
		default:
			return {
				status: 404
			};
	}

	// const res = await Onshape.GetOrCreateBillOfMaterials(did, wid, eid);
	// if ('status' in res && res.status / 100 != 2) {
	// 	console.log('Error! Unable to create BOM', res);
	// 	return {
	// 		status: 404
	// 	};
	// }

	// const bom = await Onshape.GetBillOfMaterials(did, WVM.W, wid, eid, {
	// 	generateIfAbsent: true,
	// 	indented: true,
	// 	multiLevel: true
	// });
	// if ('status' in bom && bom.status / 100 != 2) {
	// 	console.log('Error!', bom);
	// 	return {
	// 		status: 404
	// 	};
	// }
	//
	// // console.log(bom);
	//
	// return {
	// 	body: {
	// 		bom: bom as GetBillOfMaterialsResponse
	// 	}
	// };
};
