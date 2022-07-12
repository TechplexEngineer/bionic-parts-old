import { GetProjects } from '$lib/projects';
import type { Project } from '$lib/projects';

import type { RequestHandler } from './__types/index';

export const get: RequestHandler = async ({ locals, url }) => {
	return {
		body: {
			projects: await GetProjects()
		}
	};
};
