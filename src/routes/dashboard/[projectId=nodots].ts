import type { RequestHandler } from './__types/[projectId]';

import { GetProjects } from '$lib/projects';
import OnshapeAPI, { ErrorResponse, WVM } from '$lib/OnshapeAPI';

const accessKey = import.meta.env.VITE_ONSHAPE_ACCESS_KEY;
const secretKey = import.meta.env.VITE_ONSHAPE_SECRET_KEY;

export const Onshape = new OnshapeAPI({
	accessKey: accessKey,
	secretKey: secretKey,
	debug: true
});

function isErrorReponse(res: ErrorResponse | any): boolean {
	return 'status' in res && res.status / 100 != 2;
}

export const get: RequestHandler = async ({ locals, url, params }) => {
	// console.log(locals, url, params);
	return {
		status: 400,
		body: new Error({ fred: 'was here' })
	};

	// console.log('projectID', params.projectId);
	const project = (await GetProjects({ bySlug: params.projectId }))[0];
	if (isErrorReponse(project)) {
		return {
			status: 400
		};
	}
	// console.log('---- PROJECT', project);

	const doc = await Onshape.GetDocument(project.onshapeDID);
	// console.log('---- Doc:', doc);

	const bom = await Onshape.GetBillOfMaterials(
		project.onshapeDID,
		WVM.W,
		doc.defaultWorkspace.id,
		project.mainAssemblyEid,
		{
			generateIfAbsent: true,
			indented: true,
			multiLevel: true
		}
	);
	if ('status' in bom && bom.status / 100 != 2) {
		console.log('Error!', bom);
		return {
			status: 404
		};
	}

	return {
		body: {
			project: project
		}
	};
};
