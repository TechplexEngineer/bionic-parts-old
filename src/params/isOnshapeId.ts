/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param: string) {
	return /^[\da-f]+$/.test(param);
}
