<script lang="ts">
	import { MsgType, type Msg } from '$lib/workers/db-worker';
	import SharedWorker from '$lib/workers/db-worker?sharedworker'
	import { onMount } from 'svelte';
	let a = ''
	let worker: SharedWorker;
	let b = ['Pusty'];
	onMount(async () => {
		worker = new SharedWorker()
		worker.port.onmessage = ((e)=>{
			b=e.data.params;
		})
	});
	async function sendMsg() {
		const msg: Msg = {type: MsgType.TEST, params: a}
		worker.port.postMessage(msg);
	}
</script>

<input bind:value={a} type='text'>
<button on:click={sendMsg}>Click</button>

{#each b as element }
	<div>{element}</div>
{/each}