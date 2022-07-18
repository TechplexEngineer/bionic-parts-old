type Project = {
	name: string;
	slug: string;
	onshapeDID: string;
	mainAssemblyEid: string;
};
export type { Project };

export async function GetProjects(options: { bySlug?: string } = {}): Promise<Project[]> {
	const projects = [
		{
			name: 'Rapid React',
			slug: '22',
			onshapeDID: 'ef5af647c02e3b8511615776',
			mainAssemblyEid: '0cf335002fd47035deb8fc5a'
		},
		{
			name: 'Infinite Recharge v2',
			slug: '21',
			onshapeDID: '1333577c52d5bda83cdec384',
			mainAssemblyEid: '9f0992d2d272a76eee69125a'
		},
		// {
		// 	name: "N.E.R.D.",
		// 	partNumberPrefix: "NERD"
		// },
		// {
		// 	name: "TShirt Cannon",
		// 	partNumberPrefix: "TSHIRT"
		// },
		// {
		// 	name: "Powder Coating Oven",
		// 	partNumberPrefix: "oven"
		// }
		{
			name: 'Putney Shed',
			slug: 'ps',
			onshapeDID: '62e5c91a5ef9c6c7cc872683',
			mainAssemblyEid: '50c529be999a4c00a3a1fda7'
		}
	];
	return new Promise((resolve) => {
		resolve(
			projects.filter((p) => {
				return options?.bySlug ? p.slug == options.bySlug : true;
			})
		);
	});
}
