import { writable } from 'svelte/store';
import type { MsgResponse, MsgType } from './server';
import SharedWorker from '$lib/workers/shared-db-worker/server?sharedworker';
export const worker = new SharedWorker();
export const responses = writable(new Map<MsgType, MsgResponse>());

worker.port.onmessage = (e) => {
	const response: MsgResponse = e.data;
	responses.update((x) => x.set(response.type, response));
};
