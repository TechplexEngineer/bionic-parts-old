import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ locals }) => {
	console.log('GET projects');

	return {
		body: {
			projects: [
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
			]
		}
	};
};
