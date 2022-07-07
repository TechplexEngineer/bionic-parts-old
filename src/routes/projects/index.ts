import type { RequestHandler } from '@sveltejs/kit';
const projects = [
	{
		name: 'Rapid React',
		partNumberPrefix: '22'
	},
	{
		name: 'N.E.R.D.',
		partNumberPrefix: 'NERD'
	},
	{
		name: 'TShirt Cannon',
		partNumberPrefix: 'TSHIRT'
	},
	{
		name: 'Powder Coating Oven',
		partNumberPrefix: 'oven'
	}
];

export const get: RequestHandler = async ({ locals }) => {
	console.log('GET projects');

	return {
		body: {
			projects: projects
		}
	};
};

function toDataUrl(data: Buffer, type: string) {
	// var data = self.result;
	let dataUrl = 'data:';

	if (type) {
		dataUrl += type + ';';
	}

	if (/text/i.test(type)) {
		dataUrl += 'charset=utf-8,';
		dataUrl += data.toString('utf8');
	} else {
		dataUrl += 'base64,';
		dataUrl += data.toString('base64');
	}

	return dataUrl;
}

export const post: RequestHandler = async ({ request, locals }) => {
	const form = await request.formData();
	const file: File = form.get('projectPhoto') as File;

	const project = {
		name: form.get('projectName'),
		partNumberPrefix: form.get('partPrefix'),
		photo: toDataUrl(Buffer.from(await file.arrayBuffer()), file.type)
	};
	console.log(`POST projects ${JSON.stringify(project)}`);

	projects.push(project as any);

	return {};
};
