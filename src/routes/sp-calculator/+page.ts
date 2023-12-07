export const ssr = false;
import type { PageLoad } from './$types';
import { dbService } from '$lib';
export const load = (async () => {
	await dbService.invTypes.init();
	return {};
}) satisfies PageLoad;
