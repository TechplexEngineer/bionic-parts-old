import type { RequestHandler } from './__types/[projectId=nodots]';

import { GetProjects } from '$lib/projects';
import OnshapeAPI, { WVM } from '$lib/OnshapeAPI';
import type { ErrorResponse } from '$lib/OnshapeAPI';
import type { GetDocumentResponse } from '$lib/OnshapeAPI/GetDocumentResponse';

const accessKey = import.meta.env.VITE_ONSHAPE_ACCESS_KEY;
const secretKey = import.meta.env.VITE_ONSHAPE_SECRET_KEY;

export const Onshape = new OnshapeAPI({
	accessKey: accessKey,
	secretKey: secretKey,
	debug: false
});

function isErrorReponse(res: ErrorResponse | any): boolean {
	return 'status' in res && res.status / 100 != 2;
}

export const get: RequestHandler = async ({ locals, url, params }) => {
	const debug = false;
	if (debug) {
		const project = {
			name: 'Putney Shed',
			slug: 'ps',
			onshapeDID: '62e5c91a5ef9c6c7cc872683',
			mainAssemblyEid: '50c529be999a4c00a3a1fda7'
		};

		const doc = {
			jsonType: 'document',
			documentThumbnailElementId: '',
			isUpgradedToLatestVersion: true,
			betaCapabilityIds: [],
			isOrphaned: false,
			public: true,
			defaultElementId: '50c529be999a4c00a3a1fda7',
			recentVersion: null,
			hasRelevantInsertables: false,
			canUnshare: false,
			userAccountLimitsBreached: false,
			supportTeamUserAndShared: false,
			isUsingManagedWorkflow: false,
			likedByCurrentUser: false,
			sequence: null,
			permission: 'OWNER',
			tags: [],
			projectId: null,
			thumbnail: {
				sizes: [
					{
						sheetName: null,
						size: '300x300',
						href: 'https://cad.onshape.com/api/thumbnails/d/62e5c91a5ef9c6c7cc872683/w/817073021fb43ae716fda5e3/s/300x300?t=1654720783873',
						uniqueId: null,
						mediaType: 'image/png',
						viewOrientation: '',
						renderMode: ''
					},
					{
						sheetName: null,
						size: '300x170',
						href: 'https://cad.onshape.com/api/thumbnails/d/62e5c91a5ef9c6c7cc872683/w/817073021fb43ae716fda5e3/s/300x170?t=1654720783873',
						uniqueId: null,
						mediaType: 'image/png',
						viewOrientation: '',
						renderMode: ''
					},
					{
						sheetName: null,
						size: '70x40',
						href: 'https://cad.onshape.com/api/thumbnails/d/62e5c91a5ef9c6c7cc872683/w/817073021fb43ae716fda5e3/s/70x40?t=1654720783873',
						uniqueId: null,
						mediaType: 'image/png',
						viewOrientation: '',
						renderMode: ''
					},
					{
						sheetName: null,
						size: '600x340',
						href: 'https://cad.onshape.com/api/thumbnails/d/62e5c91a5ef9c6c7cc872683/w/817073021fb43ae716fda5e3/s/600x340?t=1654720783873',
						uniqueId: null,
						mediaType: 'image/png',
						viewOrientation: '',
						renderMode: ''
					}
				],
				secondarySizes: null,
				id: null,
				href: 'https://cad.onshape.com/api/thumbnails/d/62e5c91a5ef9c6c7cc872683/w/817073021fb43ae716fda5e3?t=1654720783873'
			},
			defaultWorkspace: {
				canDelete: false,
				isReadOnly: false,
				overrideDate: null,
				lastModifier: {
					state: 1,
					image:
						'https://profiles.onshape.com/bf514dcaf57f7f49371d967309a06ddb615f7976efe6fc9027a0d0e8dad1bf62.png',
					name: 'Blake Bourque',
					id: '56c1e0aae4b0692ed2011ddb',
					href: 'https://cad.onshape.com/api/v1/users/56c1e0aae4b0692ed2011ddb'
				},
				type: 'workspace',
				parent: '99f3d3c55b51c48dfbd9ae80',
				description: '',
				creator: {
					state: 1,
					image:
						'https://profiles.onshape.com/bf514dcaf57f7f49371d967309a06ddb615f7976efe6fc9027a0d0e8dad1bf62.png',
					name: 'Blake Bourque',
					id: '56c1e0aae4b0692ed2011ddb',
					href: 'https://cad.onshape.com/api/v1/users/56c1e0aae4b0692ed2011ddb'
				},
				modifiedAt: '2022-06-08T20:35:04.242+00:00',
				thumbnail: null,
				createdAt: '2022-06-08T18:27:21.539+00:00',
				documentId: '62e5c91a5ef9c6c7cc872683',
				microversion: 'a63affce129297c6cc4a2beb',
				parents: null,
				name: 'Main',
				id: '817073021fb43ae716fda5e3',
				href: 'https://cad.onshape.com/api/v1/documents/d/62e5c91a5ef9c6c7cc872683/workspaces/817073021fb43ae716fda5e3'
			},
			parentId: null,
			permissionSet: [
				'COPY',
				'DELETE',
				'OWNER',
				'WRITE',
				'READ',
				'COMMENT',
				'LINK',
				'EXPORT',
				'RESHARE'
			],
			notes: null,
			notRevisionManaged: false,
			trash: false,
			totalWorkspacesUpdating: 0,
			totalWorkspacesScheduledForUpdate: 0,
			documentLabels: [],
			numberOfTimesReferenced: 0,
			numberOfTimesCopied: 0,
			likes: 0,
			documentType: 0,
			createdWithEducationPlan: true,
			anonymousAccessAllowed: true,
			anonymousAllowsExport: true,
			trashedAt: null,
			hasReleaseRevisionableObjects: false,
			resourceType: 'document',
			isMutable: false,
			isContainer: false,
			canMove: true,
			owner: {
				isEnterpriseOwnedResource: false,
				type: 0,
				image:
					'https://profiles.onshape.com/bf514dcaf57f7f49371d967309a06ddb615f7976efe6fc9027a0d0e8dad1bf62.png',
				name: 'Blake Bourque',
				id: '56c1e0aae4b0692ed2011ddb',
				href: 'https://cad.onshape.com/api/v1/users/56c1e0aae4b0692ed2011ddb'
			},
			description: null,
			modifiedAt: '2022-06-08T20:35:04.228+00:00',
			createdAt: '2022-06-08T18:27:21.396+00:00',
			createdBy: {
				state: 1,
				image:
					'https://profiles.onshape.com/bf514dcaf57f7f49371d967309a06ddb615f7976efe6fc9027a0d0e8dad1bf62.png',
				name: 'Blake Bourque',
				id: '56c1e0aae4b0692ed2011ddb',
				href: 'https://cad.onshape.com/api/v1/users/56c1e0aae4b0692ed2011ddb'
			},
			modifiedBy: {
				state: 1,
				image:
					'https://profiles.onshape.com/bf514dcaf57f7f49371d967309a06ddb615f7976efe6fc9027a0d0e8dad1bf62.png',
				name: 'Blake Bourque',
				id: '56c1e0aae4b0692ed2011ddb',
				href: 'https://cad.onshape.com/api/v1/users/56c1e0aae4b0692ed2011ddb'
			},
			isEnterpriseOwned: false,
			name: 'Putney Shed',
			id: '62e5c91a5ef9c6c7cc872683',
			href: 'https://cad.onshape.com/api/v1/documents/62e5c91a5ef9c6c7cc872683'
		};

		const bom = {
			bomTable: {
				formatVersion: '1.2',
				id: 'd49fdf2dcb764365238d3588',
				name: 'BOM : Shed',
				type: 'multiLevel',
				createdAt: '2022-07-17T22:54:01.120Z',
				templateId: 'dc9153301b06a1d59d889555',
				bomSource: {
					document: { id: '62e5c91a5ef9c6c7cc872683', name: 'Putney Shed' },
					workspace: { id: '817073021fb43ae716fda5e3', name: 'Main' },
					element: {
						id: '50c529be999a4c00a3a1fda7',
						type: 'Assembly',
						name: 'Shed',
						state: 'In Design'
					},
					href: 'https://cad.onshape.com/api/assemblies/d/62e5c91a5ef9c6c7cc872683/w/817073021fb43ae716fda5e3/e/50c529be999a4c00a3a1fda7',
					viewHref:
						'https://cad.onshape.com/documents/62e5c91a5ef9c6c7cc872683/w/817073021fb43ae716fda5e3/e/50c529be999a4c00a3a1fda7',
					configuration: ''
				},
				headers: [
					{
						name: 'Item',
						propertyName: 'item',
						visible: true,
						propertyId: '5ace8269c046ad612c65a0ba'
					},
					{
						name: 'Quantity',
						propertyName: 'quantity',
						visible: true,
						propertyId: '5ace84d3c046ad611c65a0dd'
					},
					{
						name: 'Name',
						propertyName: 'name',
						visible: true,
						propertyId: '57f3fb8efa3416c06701d60d'
					},
					{
						name: 'Appearance',
						propertyName: 'appearance',
						visible: false,
						propertyId: '57f3fb8efa3416c06701d60c'
					},
					{
						name: 'Description',
						propertyName: 'description',
						visible: false,
						propertyId: '57f3fb8efa3416c06701d60e'
					},
					{
						name: 'Part number',
						propertyName: 'partNumber',
						visible: false,
						propertyId: '57f3fb8efa3416c06701d60f'
					},
					{
						name: 'Revision',
						propertyName: 'revision',
						visible: false,
						propertyId: '57f3fb8efa3416c06701d610'
					},
					{
						name: 'State',
						propertyName: 'state',
						visible: false,
						propertyId: '57f3fb8efa3416c06701d611'
					},
					{
						name: 'Vendor',
						propertyName: 'vendor',
						visible: false,
						propertyId: '57f3fb8efa3416c06701d612'
					},
					{
						name: 'Project',
						propertyName: 'project',
						visible: false,
						propertyId: '57f3fb8efa3416c06701d613'
					},
					{
						name: 'Product line',
						propertyName: 'productLine',
						visible: false,
						propertyId: '57f3fb8efa3416c06701d614'
					},
					{
						name: 'Material',
						propertyName: 'material',
						visible: false,
						propertyId: '57f3fb8efa3416c06701d615'
					},
					{
						name: 'Title 1',
						propertyName: 'title1',
						visible: false,
						propertyId: '57f3fb8efa3416c06701d616'
					},
					{
						name: 'Title 2',
						propertyName: 'title2',
						visible: false,
						propertyId: '57f3fb8efa3416c06701d617'
					},
					{
						name: 'Title 3',
						propertyName: 'title3',
						visible: false,
						propertyId: '57f3fb8efa3416c06701d618'
					},
					{
						name: 'Not revision managed',
						propertyName: 'notRevisionManaged',
						visible: false,
						propertyId: '57f3fb8efa3416c06701d61d'
					},
					{
						name: 'Exclude from BOM',
						propertyName: 'excludeFromBom',
						visible: false,
						propertyId: '57f3fb8efa3416c06701d61e'
					},
					{
						name: 'Unit of measure',
						propertyName: '57f3fb8efa3416c06701d623',
						visible: false,
						propertyId: '57f3fb8efa3416c06701d623'
					},
					{
						name: 'Mass',
						propertyName: '57f3fb8efa3416c06701d626',
						visible: false,
						propertyId: '57f3fb8efa3416c06701d626'
					},
					{
						name: 'Subassembly BOM behavior',
						propertyName: 'bomBehavior',
						visible: false,
						propertyId: '57f3fb8efa3416c06701d633'
					},
					{
						name: 'Tessellation quality',
						propertyName: '5ace8269c046ad612c65a0bb',
						visible: false,
						propertyId: '5ace8269c046ad612c65a0bb'
					}
				],
				items: [
					{
						itemSource: {
							viewHref:
								'https://cad.onshape.com/documents/62e5c91a5ef9c6c7cc872683/w/817073021fb43ae716fda5e3/e/d5b504038cd5cdb2688de31f?configuration=default',
							fullConfiguration: 'default',
							configuration: 'default',
							partId: 'JHD',
							elementId: 'd5b504038cd5cdb2688de31f',
							documentId: '62e5c91a5ef9c6c7cc872683',
							wvmType: 'w',
							wvmId: '817073021fb43ae716fda5e3',
							isStandardContent: false,
							relatedOccurrences: [
								'M751U4PxAvSmpcs5g.In+mBDekH/tMgblVG',
								'M751U4PxAvSmpcs5g.IZdZsTxx8faGnuJKt',
								'M751U4PxAvSmpcs5g.IEgMDnCyPAZhUlAK5',
								'M751U4PxAvSmpcs5g.IW2vWSnAeX+PGc34/',
								'MpoY99ZW+fLSN6mBe',
								'M751U4PxAvSmpcs5g.IpQXnNEqSFkDloJHQ',
								'M751U4PxAvSmpcs5g.IvSlumgb9kfzQ1R92',
								'M751U4PxAvSmpcs5g.I0rv3ZdmgsblLztAg',
								'M751U4PxAvSmpcs5g.I+x7wMzmODOz4PTUE',
								'MKpk1mQfrNtSlQnSp'
							],
							indentLevel: 0
						},
						title2: '',
						title3: '',
						name: '2x8x10',
						excludeFromBom: false,
						description: '',
						appearance: {
							color: { red: 157, green: 207, blue: 237 },
							opacity: 255,
							isGenerated: true
						},
						notRevisionManaged: false,
						partNumber: 'floor-stringer',
						item: '1',
						material: { libraryName: 'Team4909', displayName: 'Wood 2x8', properties: [], id: '' },
						'57f3fb8efa3416c06701d626': '',
						title1: '',
						'5ace8269c046ad612c65a0bb': 'Auto',
						project: '',
						quantity: 10,
						productLine: '',
						state: 'Order',
						bomBehavior: 'N/A',
						vendor: '',
						'57f3fb8efa3416c06701d623': 'Each',
						revision: ''
					},
					{
						itemSource: {
							viewHref:
								'https://cad.onshape.com/documents/62e5c91a5ef9c6c7cc872683/w/817073021fb43ae716fda5e3/e/d5b504038cd5cdb2688de31f?configuration=default',
							fullConfiguration: 'default',
							configuration: 'default',
							partId: 'JID',
							elementId: 'd5b504038cd5cdb2688de31f',
							documentId: '62e5c91a5ef9c6c7cc872683',
							wvmType: 'w',
							wvmId: '817073021fb43ae716fda5e3',
							isStandardContent: false,
							relatedOccurrences: ['MdU6OX3nxt4SKFocI', 'M1pzOYvB+tj3gSzSu'],
							indentLevel: 0
						},
						title2: 'Milling',
						title3: '',
						name: '2x8x12',
						excludeFromBom: false,
						description: '',
						appearance: {
							color: { red: 157, green: 207, blue: 237 },
							opacity: 255,
							isGenerated: true
						},
						notRevisionManaged: false,
						partNumber: '',
						item: '2',
						material: { libraryName: 'Team4909', displayName: '2x4', properties: [], id: '' },
						'57f3fb8efa3416c06701d626': '',
						title1: '',
						'5ace8269c046ad612c65a0bb': 'Auto',
						project: '',
						quantity: 2,
						productLine: '',
						state: 'In Design',
						bomBehavior: 'N/A',
						vendor: '',
						'57f3fb8efa3416c06701d623': 'Each',
						revision: ''
					},
					{
						itemSource: {
							viewHref:
								'https://cad.onshape.com/documents/62e5c91a5ef9c6c7cc872683/w/817073021fb43ae716fda5e3/e/d5b504038cd5cdb2688de31f?configuration=default',
							fullConfiguration: 'default',
							configuration: 'default',
							partId: 'JOD',
							elementId: 'd5b504038cd5cdb2688de31f',
							documentId: '62e5c91a5ef9c6c7cc872683',
							wvmType: 'w',
							wvmId: '817073021fb43ae716fda5e3',
							isStandardContent: false,
							relatedOccurrences: ['MOOGmht+l8gdqQY6S'],
							indentLevel: 0
						},
						title2: '',
						title3: '',
						name: 'Subfloor 27"x4\'',
						excludeFromBom: false,
						description: '',
						appearance: {
							color: { red: 165, green: 165, blue: 165 },
							opacity: 255,
							isGenerated: true
						},
						notRevisionManaged: false,
						partNumber: '',
						item: '3',
						material: { libraryName: '', displayName: '', properties: [], id: '' },
						'57f3fb8efa3416c06701d626': '',
						title1: '',
						'5ace8269c046ad612c65a0bb': 'Auto',
						project: '',
						quantity: 1,
						productLine: '',
						state: 'In Design',
						bomBehavior: 'N/A',
						vendor: '',
						'57f3fb8efa3416c06701d623': 'Each',
						revision: ''
					},
					{
						itemSource: {
							viewHref:
								'https://cad.onshape.com/documents/62e5c91a5ef9c6c7cc872683/w/817073021fb43ae716fda5e3/e/d5b504038cd5cdb2688de31f?configuration=default',
							fullConfiguration: 'default',
							configuration: 'default',
							partId: 'JND',
							elementId: 'd5b504038cd5cdb2688de31f',
							documentId: '62e5c91a5ef9c6c7cc872683',
							wvmType: 'w',
							wvmId: '817073021fb43ae716fda5e3',
							isStandardContent: false,
							relatedOccurrences: ['Mg6cMXnNfQdNISWVx'],
							indentLevel: 0
						},
						title2: '',
						title3: '',
						name: 'Subfloor 27"x8\'',
						excludeFromBom: false,
						description: '',
						appearance: {
							color: { red: 165, green: 165, blue: 165 },
							opacity: 255,
							isGenerated: true
						},
						notRevisionManaged: false,
						partNumber: '',
						item: '4',
						material: { libraryName: '', displayName: '', properties: [], id: '' },
						'57f3fb8efa3416c06701d626': '',
						title1: '',
						'5ace8269c046ad612c65a0bb': 'Auto',
						project: '',
						quantity: 1,
						productLine: '',
						state: 'In Design',
						bomBehavior: 'N/A',
						vendor: '',
						'57f3fb8efa3416c06701d623': 'Each',
						revision: ''
					},
					{
						itemSource: {
							viewHref:
								'https://cad.onshape.com/documents/62e5c91a5ef9c6c7cc872683/w/817073021fb43ae716fda5e3/e/d5b504038cd5cdb2688de31f?configuration=default',
							fullConfiguration: 'default',
							configuration: 'default',
							partId: 'JMD',
							elementId: 'd5b504038cd5cdb2688de31f',
							documentId: '62e5c91a5ef9c6c7cc872683',
							wvmType: 'w',
							wvmId: '817073021fb43ae716fda5e3',
							isStandardContent: false,
							relatedOccurrences: ['Mgm15rQLvgiQQA5K/', 'MTpkjFmngCxA4CgpA'],
							indentLevel: 0
						},
						title2: '',
						title3: '',
						name: "Subfloor 4'x4'",
						excludeFromBom: false,
						description: '',
						appearance: {
							color: { red: 165, green: 165, blue: 165 },
							opacity: 255,
							isGenerated: true
						},
						notRevisionManaged: false,
						partNumber: '',
						item: '5',
						material: { libraryName: '', displayName: '', properties: [], id: '' },
						'57f3fb8efa3416c06701d626': '',
						title1: '',
						'5ace8269c046ad612c65a0bb': 'Auto',
						project: '',
						quantity: 2,
						productLine: '',
						state: 'In Design',
						bomBehavior: 'N/A',
						vendor: '',
						'57f3fb8efa3416c06701d623': 'Each',
						revision: ''
					},
					{
						itemSource: {
							viewHref:
								'https://cad.onshape.com/documents/62e5c91a5ef9c6c7cc872683/w/817073021fb43ae716fda5e3/e/d5b504038cd5cdb2688de31f?configuration=default',
							fullConfiguration: 'default',
							configuration: 'default',
							partId: 'JPD',
							elementId: 'd5b504038cd5cdb2688de31f',
							documentId: '62e5c91a5ef9c6c7cc872683',
							wvmType: 'w',
							wvmId: '817073021fb43ae716fda5e3',
							isStandardContent: false,
							relatedOccurrences: ['Mu2VVwkmwDWhkzYQB', 'MVoO+55gH1Mr02cjQ'],
							indentLevel: 0
						},
						title2: '',
						title3: '',
						name: "Subfloor 4'x8'",
						excludeFromBom: false,
						description: '',
						appearance: {
							color: { red: 165, green: 165, blue: 165 },
							opacity: 255,
							isGenerated: true
						},
						notRevisionManaged: false,
						partNumber: '',
						item: '6',
						material: { libraryName: '', displayName: '', properties: [], id: '' },
						'57f3fb8efa3416c06701d626': '',
						title1: '',
						'5ace8269c046ad612c65a0bb': 'Auto',
						project: '',
						quantity: 2,
						productLine: '',
						state: 'In Design',
						bomBehavior: 'N/A',
						vendor: '',
						'57f3fb8efa3416c06701d623': 'Each',
						revision: ''
					},
					{
						itemSource: {
							viewHref:
								'https://cad.onshape.com/documents/62e5c91a5ef9c6c7cc872683/w/817073021fb43ae716fda5e3/e/1c92d84f321121864a92da8a?configuration=default',
							fullConfiguration: 'default',
							configuration: 'default',
							partId: '',
							href: 'https://cad.onshape.com/api/assemblies/d/62e5c91a5ef9c6c7cc872683/w/817073021fb43ae716fda5e3/e/1c92d84f321121864a92da8a?configuration=default',
							elementId: '1c92d84f321121864a92da8a',
							documentId: '62e5c91a5ef9c6c7cc872683',
							wvmType: 'w',
							wvmId: '817073021fb43ae716fda5e3',
							isStandardContent: false,
							relatedOccurrences: ['MUNz1MBUMLDeEwk6T', 'Ml4wEPGi1uhvq0qW2'],
							indentLevel: 0
						},
						title2: '',
						title3: '',
						name: 'Front Wall',
						excludeFromBom: false,
						description: '',
						appearance: 'N/A',
						notRevisionManaged: false,
						partNumber: '',
						item: '7',
						material: 'N/A',
						'57f3fb8efa3416c06701d626': '',
						title1: '',
						'5ace8269c046ad612c65a0bb': 'N/A',
						project: '',
						quantity: 2,
						productLine: '',
						state: 'In Design',
						bomBehavior: 'Show assembly and components',
						vendor: '',
						'57f3fb8efa3416c06701d623': 'Each',
						revision: ''
					},
					{
						itemSource: {
							viewHref:
								'https://cad.onshape.com/documents/62e5c91a5ef9c6c7cc872683/w/817073021fb43ae716fda5e3/e/d5b504038cd5cdb2688de31f?configuration=default',
							fullConfiguration: 'default',
							configuration: 'default',
							partId: 'JTD',
							elementId: 'd5b504038cd5cdb2688de31f',
							documentId: '62e5c91a5ef9c6c7cc872683',
							wvmType: 'w',
							wvmId: '817073021fb43ae716fda5e3',
							isStandardContent: false,
							relatedOccurrences: [
								'MUNz1MBUMLDeEwk6T.MuJs4PzDZe2PL9cJA.INrMKJTLiV+ugoN7g',
								'Ml4wEPGi1uhvq0qW2.Mltyim6AcAL61IRRI',
								'Ml4wEPGi1uhvq0qW2.MuJs4PzDZe2PL9cJA.I62KO8ATnHAQDPvy1',
								'MUNz1MBUMLDeEwk6T.MuJs4PzDZe2PL9cJA.I62KO8ATnHAQDPvy1',
								'Ml4wEPGi1uhvq0qW2.MuJs4PzDZe2PL9cJA.INrMKJTLiV+ugoN7g',
								'MUNz1MBUMLDeEwk6T.MovtWq9my51Qk3gRn',
								'MUNz1MBUMLDeEwk6T.Mltyim6AcAL61IRRI',
								'Ml4wEPGi1uhvq0qW2.MovtWq9my51Qk3gRn'
							],
							indentLevel: 1
						},
						title2: '',
						title3: '',
						name: 'Front Wall 2x4x93',
						excludeFromBom: false,
						description: '',
						appearance: {
							color: { red: 59, green: 97, blue: 180 },
							opacity: 255,
							isGenerated: true
						},
						notRevisionManaged: false,
						partNumber: '',
						item: '7.1',
						material: { libraryName: '', displayName: '', properties: [], id: '' },
						'57f3fb8efa3416c06701d626': '',
						title1: '',
						'5ace8269c046ad612c65a0bb': 'Auto',
						project: '',
						quantity: 4,
						productLine: '',
						state: 'In Design',
						bomBehavior: 'N/A',
						vendor: '',
						'57f3fb8efa3416c06701d623': 'Each',
						revision: ''
					},
					{
						itemSource: {
							viewHref:
								'https://cad.onshape.com/documents/62e5c91a5ef9c6c7cc872683/w/817073021fb43ae716fda5e3/e/d5b504038cd5cdb2688de31f?configuration=default',
							fullConfiguration: 'default',
							configuration: 'default',
							partId: 'JUD',
							elementId: 'd5b504038cd5cdb2688de31f',
							documentId: '62e5c91a5ef9c6c7cc872683',
							wvmType: 'w',
							wvmId: '817073021fb43ae716fda5e3',
							isStandardContent: false,
							relatedOccurrences: [
								'MUNz1MBUMLDeEwk6T.MXc8O2eQS+EkuOOVM',
								'MUNz1MBUMLDeEwk6T.MCaMBhyN8WCOddnwW',
								'Ml4wEPGi1uhvq0qW2.MCaMBhyN8WCOddnwW',
								'Ml4wEPGi1uhvq0qW2.MXc8O2eQS+EkuOOVM'
							],
							indentLevel: 1
						},
						title2: '',
						title3: '',
						name: 'Front Wall Sil 2x4x4',
						excludeFromBom: false,
						description: '',
						appearance: {
							color: { red: 59, green: 97, blue: 180 },
							opacity: 255,
							isGenerated: true
						},
						notRevisionManaged: false,
						partNumber: '',
						item: '7.2',
						material: { libraryName: '', displayName: '', properties: [], id: '' },
						'57f3fb8efa3416c06701d626': '',
						title1: '',
						'5ace8269c046ad612c65a0bb': 'Auto',
						project: '',
						quantity: 2,
						productLine: '',
						state: 'In Design',
						bomBehavior: 'N/A',
						vendor: '',
						'57f3fb8efa3416c06701d623': 'Each',
						revision: ''
					},
					{
						itemSource: {
							viewHref:
								'https://cad.onshape.com/documents/62e5c91a5ef9c6c7cc872683/w/817073021fb43ae716fda5e3/e/d5b504038cd5cdb2688de31f?configuration=default',
							fullConfiguration: 'default',
							configuration: 'default',
							partId: 'JXD',
							elementId: 'd5b504038cd5cdb2688de31f',
							documentId: '62e5c91a5ef9c6c7cc872683',
							wvmType: 'w',
							wvmId: '817073021fb43ae716fda5e3',
							isStandardContent: false,
							relatedOccurrences: [
								'MUNz1MBUMLDeEwk6T.MDh738GPRmWHPCJjX',
								'Ml4wEPGi1uhvq0qW2.MDh738GPRmWHPCJjX'
							],
							indentLevel: 1
						},
						title2: '',
						title3: '',
						name: 'Sheathing 4x4x.5',
						excludeFromBom: false,
						description: '',
						appearance: {
							color: { red: 234, green: 234, blue: 234 },
							opacity: 255,
							isGenerated: true
						},
						notRevisionManaged: false,
						partNumber: '',
						item: '7.3',
						material: { libraryName: '', displayName: '', properties: [], id: '' },
						'57f3fb8efa3416c06701d626': '',
						title1: '',
						'5ace8269c046ad612c65a0bb': 'Auto',
						project: '',
						quantity: 1,
						productLine: '',
						state: 'In Design',
						bomBehavior: 'N/A',
						vendor: '',
						'57f3fb8efa3416c06701d623': 'Each',
						revision: ''
					},
					{
						itemSource: {
							viewHref:
								'https://cad.onshape.com/documents/62e5c91a5ef9c6c7cc872683/w/817073021fb43ae716fda5e3/e/d2cdd1a4cf07cd53303fe339?configuration=default',
							fullConfiguration: 'default',
							configuration: 'default',
							partId: '',
							href: 'https://cad.onshape.com/api/assemblies/d/62e5c91a5ef9c6c7cc872683/w/817073021fb43ae716fda5e3/e/d2cdd1a4cf07cd53303fe339?configuration=default',
							elementId: 'd2cdd1a4cf07cd53303fe339',
							documentId: '62e5c91a5ef9c6c7cc872683',
							wvmType: 'w',
							wvmId: '817073021fb43ae716fda5e3',
							isStandardContent: false,
							relatedOccurrences: ['MQiQF0J0b9vY1AzQp', 'MVmjHlzQtHtTW3Uh4'],
							indentLevel: 0
						},
						title2: '',
						title3: '',
						name: 'Side Wall',
						excludeFromBom: false,
						description: '',
						appearance: 'N/A',
						notRevisionManaged: false,
						partNumber: '1234',
						item: '8',
						material: 'N/A',
						'57f3fb8efa3416c06701d626': '',
						title1: '',
						'5ace8269c046ad612c65a0bb': 'N/A',
						project: '',
						quantity: 2,
						productLine: '',
						state: 'In Design',
						bomBehavior: 'Show assembly and components',
						vendor: '',
						'57f3fb8efa3416c06701d623': 'Each',
						revision: ''
					},
					{
						itemSource: {
							viewHref:
								'https://cad.onshape.com/documents/62e5c91a5ef9c6c7cc872683/w/817073021fb43ae716fda5e3/e/d5b504038cd5cdb2688de31f?configuration=default',
							fullConfiguration: 'default',
							configuration: 'default',
							partId: 'JaD',
							elementId: 'd5b504038cd5cdb2688de31f',
							documentId: '62e5c91a5ef9c6c7cc872683',
							wvmType: 'w',
							wvmId: '817073021fb43ae716fda5e3',
							isStandardContent: false,
							relatedOccurrences: [
								'MVmjHlzQtHtTW3Uh4.MnjVSOzVTLXJEky9u',
								'MQiQF0J0b9vY1AzQp.MnjVSOzVTLXJEky9u',
								'MVmjHlzQtHtTW3Uh4.MzLva1LrVSfcsiBqS',
								'MQiQF0J0b9vY1AzQp.MzLva1LrVSfcsiBqS'
							],
							indentLevel: 1
						},
						title2: '',
						title3: '',
						name: 'Side Wall Sil 2x4x10',
						excludeFromBom: false,
						description: '',
						appearance: {
							color: { red: 196, green: 226, blue: 243 },
							opacity: 255,
							isGenerated: true
						},
						notRevisionManaged: false,
						partNumber: '1234',
						item: '8.1',
						material: { libraryName: '', displayName: '', properties: [], id: '' },
						'57f3fb8efa3416c06701d626': '',
						title1: '',
						'5ace8269c046ad612c65a0bb': 'Auto',
						project: '',
						quantity: 2,
						productLine: '',
						state: 'In Design',
						bomBehavior: 'N/A',
						vendor: '',
						'57f3fb8efa3416c06701d623': 'Each',
						revision: ''
					},
					{
						itemSource: {
							viewHref:
								'https://cad.onshape.com/documents/62e5c91a5ef9c6c7cc872683/w/817073021fb43ae716fda5e3/e/d5b504038cd5cdb2688de31f?configuration=default',
							fullConfiguration: 'default',
							configuration: 'default',
							partId: 'JTD',
							elementId: 'd5b504038cd5cdb2688de31f',
							documentId: '62e5c91a5ef9c6c7cc872683',
							wvmType: 'w',
							wvmId: '817073021fb43ae716fda5e3',
							isStandardContent: false,
							relatedOccurrences: [
								'MVmjHlzQtHtTW3Uh4.M+gU0bhDPxa6NSsLa.IEsFZ91/43WTRXomW',
								'MQiQF0J0b9vY1AzQp.M+gU0bhDPxa6NSsLa.IA1Snn4X3z1dJfl67',
								'MVmjHlzQtHtTW3Uh4.M+gU0bhDPxa6NSsLa.IxQkHqMEhl+CFIsUz',
								'MVmjHlzQtHtTW3Uh4.M+gU0bhDPxa6NSsLa.IVJBABPQTWkIr8dzj',
								'MVmjHlzQtHtTW3Uh4.M+gU0bhDPxa6NSsLa.IA1Snn4X3z1dJfl67',
								'MQiQF0J0b9vY1AzQp.M+gU0bhDPxa6NSsLa.I1MhJOM2w0IKAhNMk',
								'MVmjHlzQtHtTW3Uh4.MOOqTHMwZnmOXWZbC',
								'MVmjHlzQtHtTW3Uh4.M+gU0bhDPxa6NSsLa.Ib0uDadalJAniSbBT',
								'MQiQF0J0b9vY1AzQp.M331ZOgTmspjyWApx',
								'MVmjHlzQtHtTW3Uh4.M+gU0bhDPxa6NSsLa.I1MhJOM2w0IKAhNMk',
								'MQiQF0J0b9vY1AzQp.M+gU0bhDPxa6NSsLa.IEsFZ91/43WTRXomW',
								'MVmjHlzQtHtTW3Uh4.M331ZOgTmspjyWApx',
								'MQiQF0J0b9vY1AzQp.M+gU0bhDPxa6NSsLa.IVJBABPQTWkIr8dzj',
								'MQiQF0J0b9vY1AzQp.M+gU0bhDPxa6NSsLa.Ib0uDadalJAniSbBT',
								'MQiQF0J0b9vY1AzQp.MOOqTHMwZnmOXWZbC',
								'MQiQF0J0b9vY1AzQp.M+gU0bhDPxa6NSsLa.IxQkHqMEhl+CFIsUz'
							],
							indentLevel: 1
						},
						title2: '',
						title3: '',
						name: 'Front Wall 2x4x93',
						excludeFromBom: false,
						description: '',
						appearance: {
							color: { red: 59, green: 97, blue: 180 },
							opacity: 255,
							isGenerated: true
						},
						notRevisionManaged: false,
						partNumber: '1234',
						item: '8.2',
						material: { libraryName: '', displayName: '', properties: [], id: '' },
						'57f3fb8efa3416c06701d626': '',
						title1: '',
						'5ace8269c046ad612c65a0bb': 'Auto',
						project: '',
						quantity: 8,
						productLine: '',
						state: 'In Design',
						bomBehavior: 'N/A',
						vendor: '',
						'57f3fb8efa3416c06701d623': 'Each',
						revision: ''
					},
					{
						itemSource: {
							viewHref:
								'https://cad.onshape.com/documents/62e5c91a5ef9c6c7cc872683/w/817073021fb43ae716fda5e3/e/d5b504038cd5cdb2688de31f?configuration=default',
							fullConfiguration: 'default',
							configuration: 'default',
							partId: 'JXD',
							elementId: 'd5b504038cd5cdb2688de31f',
							documentId: '62e5c91a5ef9c6c7cc872683',
							wvmType: 'w',
							wvmId: '817073021fb43ae716fda5e3',
							isStandardContent: false,
							relatedOccurrences: [
								'MQiQF0J0b9vY1AzQp.Mm07C3xPf9iQmBMGx',
								'MVmjHlzQtHtTW3Uh4.Mm07C3xPf9iQmBMGx',
								'MQiQF0J0b9vY1AzQp.Mlhu1w8C2Qm0xOy99',
								'MVmjHlzQtHtTW3Uh4.Mlhu1w8C2Qm0xOy99'
							],
							indentLevel: 1
						},
						title2: '',
						title3: '',
						name: 'Sheathing 4x4x.5',
						excludeFromBom: false,
						description: '',
						appearance: {
							color: { red: 234, green: 234, blue: 234 },
							opacity: 255,
							isGenerated: true
						},
						notRevisionManaged: false,
						partNumber: '1234',
						item: '8.3',
						material: { libraryName: '', displayName: '', properties: [], id: '' },
						'57f3fb8efa3416c06701d626': '',
						title1: '',
						'5ace8269c046ad612c65a0bb': 'Auto',
						project: '',
						quantity: 2,
						productLine: '',
						state: 'In Design',
						bomBehavior: 'N/A',
						vendor: '',
						'57f3fb8efa3416c06701d623': 'Each',
						revision: ''
					},
					{
						itemSource: {
							viewHref:
								'https://cad.onshape.com/documents/62e5c91a5ef9c6c7cc872683/w/817073021fb43ae716fda5e3/e/d5b504038cd5cdb2688de31f?configuration=default',
							fullConfiguration: 'default',
							configuration: 'default',
							partId: 'JdD',
							elementId: 'd5b504038cd5cdb2688de31f',
							documentId: '62e5c91a5ef9c6c7cc872683',
							wvmType: 'w',
							wvmId: '817073021fb43ae716fda5e3',
							isStandardContent: false,
							relatedOccurrences: [
								'MVmjHlzQtHtTW3Uh4.MAtRYPI0a2yJGp4ay',
								'MQiQF0J0b9vY1AzQp.MAtRYPI0a2yJGp4ay'
							],
							indentLevel: 1
						},
						title2: '',
						title3: '',
						name: 'Side Wall Sheathing 2x4x24',
						excludeFromBom: false,
						description: '',
						appearance: {
							color: { red: 234, green: 234, blue: 234 },
							opacity: 255,
							isGenerated: false
						},
						notRevisionManaged: false,
						partNumber: '1234',
						item: '8.4',
						material: { libraryName: '', displayName: '', properties: [], id: '' },
						'57f3fb8efa3416c06701d626': '',
						title1: '',
						'5ace8269c046ad612c65a0bb': 'Auto',
						project: '',
						quantity: 1,
						productLine: '',
						state: 'In Design',
						bomBehavior: 'N/A',
						vendor: '',
						'57f3fb8efa3416c06701d623': 'Each',
						revision: ''
					},
					{
						itemSource: {
							viewHref:
								'https://cad.onshape.com/documents/62e5c91a5ef9c6c7cc872683/w/817073021fb43ae716fda5e3/e/e6c7bde0e7bc7cc014f649d8?configuration=default',
							fullConfiguration: 'default',
							configuration: 'default',
							partId: '',
							href: 'https://cad.onshape.com/api/assemblies/d/62e5c91a5ef9c6c7cc872683/w/817073021fb43ae716fda5e3/e/e6c7bde0e7bc7cc014f649d8?configuration=default',
							elementId: 'e6c7bde0e7bc7cc014f649d8',
							documentId: '62e5c91a5ef9c6c7cc872683',
							wvmType: 'w',
							wvmId: '817073021fb43ae716fda5e3',
							isStandardContent: false,
							relatedOccurrences: ['MuOiC0UnV0oRT+YtB'],
							indentLevel: 0
						},
						title2: '',
						title3: '',
						name: 'Back Wall',
						excludeFromBom: false,
						description: '',
						appearance: 'N/A',
						notRevisionManaged: false,
						partNumber: '1234',
						item: '9',
						material: 'N/A',
						'57f3fb8efa3416c06701d626': '',
						title1: '',
						'5ace8269c046ad612c65a0bb': 'N/A',
						project: '',
						quantity: 1,
						productLine: '',
						state: 'In Design',
						bomBehavior: 'Show assembly and components',
						vendor: '',
						'57f3fb8efa3416c06701d623': 'Each',
						revision: ''
					},
					{
						itemSource: {
							viewHref:
								'https://cad.onshape.com/documents/62e5c91a5ef9c6c7cc872683/w/817073021fb43ae716fda5e3/e/d5b504038cd5cdb2688de31f?configuration=default',
							fullConfiguration: 'default',
							configuration: 'default',
							partId: 'JgD',
							elementId: 'd5b504038cd5cdb2688de31f',
							documentId: '62e5c91a5ef9c6c7cc872683',
							wvmType: 'w',
							wvmId: '817073021fb43ae716fda5e3',
							isStandardContent: false,
							relatedOccurrences: [
								'MuOiC0UnV0oRT+YtB.Mhmp605OUkRjxg8BP',
								'MuOiC0UnV0oRT+YtB.MIxoo9bvvxasA4Fmc'
							],
							indentLevel: 1
						},
						title2: '',
						title3: '',
						name: 'Back Wall Sil 2x4x12',
						excludeFromBom: false,
						description: '',
						appearance: {
							color: { red: 127, green: 127, blue: 127 },
							opacity: 255,
							isGenerated: true
						},
						notRevisionManaged: false,
						partNumber: '1234',
						item: '9.1',
						material: { libraryName: '', displayName: '', properties: [], id: '' },
						'57f3fb8efa3416c06701d626': '',
						title1: '',
						'5ace8269c046ad612c65a0bb': 'Auto',
						project: '',
						quantity: 2,
						productLine: '',
						state: 'In Design',
						bomBehavior: 'N/A',
						vendor: '',
						'57f3fb8efa3416c06701d623': 'Each',
						revision: ''
					},
					{
						itemSource: {
							viewHref:
								'https://cad.onshape.com/documents/62e5c91a5ef9c6c7cc872683/w/817073021fb43ae716fda5e3/e/d5b504038cd5cdb2688de31f?configuration=default',
							fullConfiguration: 'default',
							configuration: 'default',
							partId: 'JTD',
							elementId: 'd5b504038cd5cdb2688de31f',
							documentId: '62e5c91a5ef9c6c7cc872683',
							wvmType: 'w',
							wvmId: '817073021fb43ae716fda5e3',
							isStandardContent: false,
							relatedOccurrences: [
								'MuOiC0UnV0oRT+YtB.MsT8wg9dIe9X3iRzG.IPdd4/j7ybgiwjtlC',
								'MuOiC0UnV0oRT+YtB.M7dU9QXMlNdPn48BE',
								'MuOiC0UnV0oRT+YtB.MsT8wg9dIe9X3iRzG.ItAQTdP3Uq+mGPsEa',
								'MuOiC0UnV0oRT+YtB.MsT8wg9dIe9X3iRzG.If75n7NfPcnBuxhdY',
								'MuOiC0UnV0oRT+YtB.MsT8wg9dIe9X3iRzG.I/XhcPcduwBzpOj4U',
								'MuOiC0UnV0oRT+YtB.MsT8wg9dIe9X3iRzG.IlV08sE99nzua8zaf',
								'MuOiC0UnV0oRT+YtB.M3x5x9YhnZXMfDop/',
								'MuOiC0UnV0oRT+YtB.MsT8wg9dIe9X3iRzG.Ine1F1wphzgnWxhZ6',
								'MuOiC0UnV0oRT+YtB.MsT8wg9dIe9X3iRzG.IrXF4dP2MHRmXvrEz',
								'MuOiC0UnV0oRT+YtB.MsT8wg9dIe9X3iRzG.IEzCWTNy6kDnAqAoC'
							],
							indentLevel: 1
						},
						title2: '',
						title3: '',
						name: 'Front Wall 2x4x93',
						excludeFromBom: false,
						description: '',
						appearance: {
							color: { red: 59, green: 97, blue: 180 },
							opacity: 255,
							isGenerated: true
						},
						notRevisionManaged: false,
						partNumber: '',
						item: '9.2',
						material: { libraryName: '', displayName: '', properties: [], id: '' },
						'57f3fb8efa3416c06701d626': '',
						title1: '',
						'5ace8269c046ad612c65a0bb': 'Auto',
						project: '',
						quantity: 10,
						productLine: '',
						state: 'In Design',
						bomBehavior: 'N/A',
						vendor: '',
						'57f3fb8efa3416c06701d623': 'Each',
						revision: ''
					},
					{
						itemSource: {
							viewHref:
								'https://cad.onshape.com/documents/62e5c91a5ef9c6c7cc872683/w/817073021fb43ae716fda5e3/e/d5b504038cd5cdb2688de31f?configuration=default',
							fullConfiguration: 'default',
							configuration: 'default',
							partId: 'JXD',
							elementId: 'd5b504038cd5cdb2688de31f',
							documentId: '62e5c91a5ef9c6c7cc872683',
							wvmType: 'w',
							wvmId: '817073021fb43ae716fda5e3',
							isStandardContent: false,
							relatedOccurrences: [
								'MuOiC0UnV0oRT+YtB.MB4kPxt65trA23yTW',
								'MuOiC0UnV0oRT+YtB.MZedbG76xds49JryT',
								'MuOiC0UnV0oRT+YtB.MtEeqFzzZEXv1UAqn'
							],
							indentLevel: 1
						},
						title2: '',
						title3: '',
						name: 'Sheathing 4x4x.5',
						excludeFromBom: false,
						description: '',
						appearance: {
							color: { red: 234, green: 234, blue: 234 },
							opacity: 255,
							isGenerated: true
						},
						notRevisionManaged: false,
						partNumber: '',
						item: '9.3',
						material: { libraryName: '', displayName: '', properties: [], id: '' },
						'57f3fb8efa3416c06701d626': '',
						title1: '',
						'5ace8269c046ad612c65a0bb': 'Auto',
						project: '',
						quantity: 3,
						productLine: '',
						state: 'In Design',
						bomBehavior: 'N/A',
						vendor: '',
						'57f3fb8efa3416c06701d623': 'Each',
						revision: ''
					},
					{
						itemSource: {
							viewHref:
								'https://cad.onshape.com/documents/62e5c91a5ef9c6c7cc872683/w/817073021fb43ae716fda5e3/e/bfbd91460d6bb12451999cc4?configuration=default',
							fullConfiguration: 'default',
							configuration: 'default',
							partId: '',
							href: 'https://cad.onshape.com/api/assemblies/d/62e5c91a5ef9c6c7cc872683/w/817073021fb43ae716fda5e3/e/bfbd91460d6bb12451999cc4?configuration=default',
							elementId: 'bfbd91460d6bb12451999cc4',
							documentId: '62e5c91a5ef9c6c7cc872683',
							wvmType: 'w',
							wvmId: '817073021fb43ae716fda5e3',
							isStandardContent: false,
							relatedOccurrences: ['MolMgtik0ZRcsHTRm'],
							indentLevel: 0
						},
						title2: '',
						title3: '',
						name: 'Roof',
						excludeFromBom: false,
						description: '',
						appearance: 'N/A',
						notRevisionManaged: false,
						partNumber: '',
						item: '10',
						material: 'N/A',
						'57f3fb8efa3416c06701d626': '',
						title1: '',
						'5ace8269c046ad612c65a0bb': 'N/A',
						project: '',
						quantity: 1,
						productLine: '',
						state: 'In Design',
						bomBehavior: 'Show assembly and components',
						vendor: '',
						'57f3fb8efa3416c06701d623': 'Each',
						revision: ''
					},
					{
						itemSource: {
							viewHref:
								'https://cad.onshape.com/documents/62e5c91a5ef9c6c7cc872683/w/817073021fb43ae716fda5e3/e/76410cc01205644a1a50f549?configuration=default',
							fullConfiguration: 'default',
							configuration: 'default',
							partId: 'JLD',
							elementId: '76410cc01205644a1a50f549',
							documentId: '62e5c91a5ef9c6c7cc872683',
							wvmType: 'w',
							wvmId: '817073021fb43ae716fda5e3',
							isStandardContent: false,
							relatedOccurrences: [
								'MolMgtik0ZRcsHTRm.Myq/4mBjEfCJbHivm.IVwkmrg6NvsAdSMzo',
								'MolMgtik0ZRcsHTRm.Myq/4mBjEfCJbHivm.IKKzGDA8nF1G0Iw7p',
								'MolMgtik0ZRcsHTRm.Myq/4mBjEfCJbHivm.IACKYNSPgyGbBbOh0',
								'MolMgtik0ZRcsHTRm.MLTPYP4+4m8Lv1Ivc.IVQ43UNQWsCyHPpDT',
								'MolMgtik0ZRcsHTRm.Myq/4mBjEfCJbHivm.IM9I2nvgW9WtS73dh',
								'MolMgtik0ZRcsHTRm.MxTHQA5gGckcutwWq',
								'MolMgtik0ZRcsHTRm.Myq/4mBjEfCJbHivm.I8M89Utu2ADrdkWho',
								'MolMgtik0ZRcsHTRm.Myq/4mBjEfCJbHivm.IVm5Hpz7E7NpyBViP',
								'MolMgtik0ZRcsHTRm.Myq/4mBjEfCJbHivm.IAOOWs+NKuRW3Cb9v',
								'MolMgtik0ZRcsHTRm.Myq/4mBjEfCJbHivm.I4of/A9yl092tG7pQ',
								'MolMgtik0ZRcsHTRm.Myq/4mBjEfCJbHivm.IJNFkmVMV4frUHOm5',
								'MolMgtik0ZRcsHTRm.Myq/4mBjEfCJbHivm.I+Z/e9c/pvLemqCDD',
								'MolMgtik0ZRcsHTRm.Myq/4mBjEfCJbHivm.IWM9AjH7ZALX+k6xO',
								'MolMgtik0ZRcsHTRm.Myq/4mBjEfCJbHivm.IRZY2g4JEC6RUzqYw',
								'MolMgtik0ZRcsHTRm.Myq/4mBjEfCJbHivm.I1UcGMWTyYJt2zasy',
								'MolMgtik0ZRcsHTRm.Myq/4mBjEfCJbHivm.Ifp9LlYw4+FabGP0O',
								'MolMgtik0ZRcsHTRm.Myq/4mBjEfCJbHivm.I5zBi9ZB1mkDT5ENM',
								'MolMgtik0ZRcsHTRm.Myq/4mBjEfCJbHivm.IdZeJTHK3s9AeofYF',
								'MolMgtik0ZRcsHTRm.Myq/4mBjEfCJbHivm.IKPASfl0rLBO3v5AC',
								'MolMgtik0ZRcsHTRm.Myq/4mBjEfCJbHivm.I9IQ5A4BCbGkuoR1F'
							],
							indentLevel: 1
						},
						title2: '',
						title3: '',
						name: 'Roof Joist 2x4x8',
						excludeFromBom: false,
						description: '',
						appearance: {
							color: { red: 157, green: 207, blue: 237 },
							opacity: 255,
							isGenerated: true
						},
						notRevisionManaged: false,
						partNumber: '',
						item: '10.1',
						material: { libraryName: '', displayName: '', properties: [], id: '' },
						'57f3fb8efa3416c06701d626': '',
						title1: '',
						'5ace8269c046ad612c65a0bb': 'Auto',
						project: '',
						quantity: 20,
						productLine: '',
						state: 'In Design',
						bomBehavior: 'N/A',
						vendor: '',
						'57f3fb8efa3416c06701d623': 'Each',
						revision: ''
					},
					{
						itemSource: {
							viewHref:
								'https://cad.onshape.com/documents/62e5c91a5ef9c6c7cc872683/w/817073021fb43ae716fda5e3/e/76410cc01205644a1a50f549?configuration=default',
							fullConfiguration: 'default',
							configuration: 'default',
							partId: 'JMD',
							elementId: '76410cc01205644a1a50f549',
							documentId: '62e5c91a5ef9c6c7cc872683',
							wvmType: 'w',
							wvmId: '817073021fb43ae716fda5e3',
							isStandardContent: false,
							relatedOccurrences: ['MolMgtik0ZRcsHTRm.M/d9/43V9NUvdkpVH'],
							indentLevel: 1
						},
						title2: '',
						title3: '',
						name: 'Peak 2x6x15',
						excludeFromBom: false,
						description: '',
						appearance: {
							color: { red: 165, green: 165, blue: 165 },
							opacity: 255,
							isGenerated: true
						},
						notRevisionManaged: false,
						partNumber: '',
						item: '10.2',
						material: { libraryName: '', displayName: '', properties: [], id: '' },
						'57f3fb8efa3416c06701d626': '',
						title1: '',
						'5ace8269c046ad612c65a0bb': 'Auto',
						project: '',
						quantity: 1,
						productLine: '',
						state: 'In Design',
						bomBehavior: 'N/A',
						vendor: '',
						'57f3fb8efa3416c06701d623': 'Each',
						revision: ''
					},
					{
						itemSource: {
							viewHref:
								'https://cad.onshape.com/documents/62e5c91a5ef9c6c7cc872683/w/817073021fb43ae716fda5e3/e/76410cc01205644a1a50f549?configuration=default',
							fullConfiguration: 'default',
							configuration: 'default',
							partId: 'JND',
							elementId: '76410cc01205644a1a50f549',
							documentId: '62e5c91a5ef9c6c7cc872683',
							wvmType: 'w',
							wvmId: '817073021fb43ae716fda5e3',
							isStandardContent: false,
							relatedOccurrences: [
								'MolMgtik0ZRcsHTRm.Myq/4mBjEfCJbHivm.IWxNKHL04cAtppPm4',
								'MolMgtik0ZRcsHTRm.Myq/4mBjEfCJbHivm.IIeoyTyBm9HBXWWqs',
								'MolMgtik0ZRcsHTRm.Myq/4mBjEfCJbHivm.IsGde3Z5bRz2y7Lcp',
								'MolMgtik0ZRcsHTRm.MdEJv0nMFYE03iA9o',
								'MolMgtik0ZRcsHTRm.Myq/4mBjEfCJbHivm.I4Xil5OebJ4iHZkzJ',
								'MolMgtik0ZRcsHTRm.Myq/4mBjEfCJbHivm.I/ffTB5o9MI0TVDBM',
								'MolMgtik0ZRcsHTRm.Myq/4mBjEfCJbHivm.Ihim9ziBNBsucEVQr',
								'MolMgtik0ZRcsHTRm.Myq/4mBjEfCJbHivm.INlol/hf4f1jogihd',
								'MolMgtik0ZRcsHTRm.Myq/4mBjEfCJbHivm.IKA9Ppv6+WbCdfov/',
								'MolMgtik0ZRcsHTRm.Myq/4mBjEfCJbHivm.IsdEpcQDvcFw/xwEN'
							],
							indentLevel: 1
						},
						title2: '',
						title3: '',
						name: 'Truss Con. 2x4x4',
						excludeFromBom: false,
						description: '',
						appearance: {
							color: { red: 59, green: 97, blue: 180 },
							opacity: 255,
							isGenerated: true
						},
						notRevisionManaged: false,
						partNumber: '',
						item: '10.3',
						material: { libraryName: '', displayName: '', properties: [], id: '' },
						'57f3fb8efa3416c06701d626': '',
						title1: '',
						'5ace8269c046ad612c65a0bb': 'Auto',
						project: '',
						quantity: 10,
						productLine: '',
						state: 'In Design',
						bomBehavior: 'N/A',
						vendor: '',
						'57f3fb8efa3416c06701d623': 'Each',
						revision: ''
					}
				]
			}
		};

		return {
			body: {
				project,
				doc,
				bom
			}
		};
	}

	// return {
	// 	project: {
	// 		"name": "Putney Shed",
	// 		"slug": "ps",
	// 		"onshapeDID": "62e5c91a5ef9c6c7cc872683",
	// 		"mainAssemblyEid": "50c529be999a4c00a3a1fda7"
	// 	},
	//
	// }

	console.log('projectID', params.projectId);
	const project = (await GetProjects({ bySlug: params.projectId }))[0];
	if (isErrorReponse(project)) {
		return {
			status: 400
		};
	}
	console.log('---- PROJECT', JSON.stringify(project));

	const doc = await Onshape.GetDocument(project.onshapeDID);
	if (isErrorReponse(doc)) {
		return {
			status: 400
		};
	}
	console.log('---- Doc:', JSON.stringify(doc));

	const bom = await Onshape.GetBillOfMaterials(
		project.onshapeDID,
		WVM.W,
		(doc as GetDocumentResponse).defaultWorkspace.id,
		project.mainAssemblyEid,
		{
			generateIfAbsent: true,
			indented: true,
			multiLevel: false
		}
	);
	if ('status' in bom && bom.status / 100 != 2) {
		console.log('Error!', bom);
		return {
			status: 404
		};
	}
	console.log('---- bom:', JSON.stringify(bom));

	return {
		body: {
			project: project,
			bom: bom
		}
	};
};
