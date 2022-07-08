import type { RequestHandler } from '@sveltejs/kit';
import OnshapeApi, { DrawingExportType, WVM } from '$lib/onshape';

const accessKey = import.meta.env.VITE_ONSHAPE_ACCESS_KEY;
const secretKey = import.meta.env.VITE_ONSHAPE_SECRET_KEY;

export const Onshape = new OnshapeApi({
	accessKey: accessKey,
	secretKey: secretKey,
	debug: true
});

/** @type {import('./__types/index').RequestHandler} */
export const get: RequestHandler = async ({ locals, url }) => {
	console.log('GET onshape/drawing', locals, url.searchParams);

	// const did = 'f2dd281fff1cee4d67627c2e'; //toolbox drawer
	const did = url.searchParams.get('did');
	const wid = url.searchParams.get('wid');
	const eid = url.searchParams.get('eid'); //should be an assembly

	if (!did || !wid || !eid) {
		//this is an error
		//No document selected @todo
		return {
			status: 404
		};
	}
	const res = await Onshape.ExportDrawing(did, WVM.W, wid, eid, DrawingExportType.SVG);

	console.log(res);

	return {
		body: {}
	};
};
