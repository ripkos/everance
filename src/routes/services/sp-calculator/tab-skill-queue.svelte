<script lang="ts">
	import { MsgType, type Msg } from '$lib/workers/shared-db-worker/shared-db-worker';

	const placeholder = `Energy Grid Upgrades 5
Electronics Upgrades 4
Electronics Upgrades 5
Navigation 4
Warp Drive Operation 3
Evasive Maneuvering 2
Evasive Maneuvering 3
High Speed Maneuvering 2
High Speed Maneuvering 3
Hull Upgrades 3
Hull Upgrades 4
Hull Upgrades 5
Mechanics 4
Mechanics 5
Gunnery 5
Sharpshooter 3
Sharpshooter 4
Rapid Firing 3
Rapid Firing 4
Motion Prediction 3
Motion Prediction 4
Controlled Bursts 3
Controlled Bursts 4`;
	export let worker: SharedWorker;
	export let input: string;

	async function sendCalculateSP() {
		const msg: Msg = { type: MsgType.SPCalculator, params: input };
		worker.port.postMessage(msg);
	}
</script>

<section class="flex" style="gap: 16px;">
	<div class="flex vertical">
		<h2 class="align-center">Skill queue go there</h2>
		<textarea bind:value={input} on:change={sendCalculateSP} {placeholder} />
	</div>
</section>

<style>
	.align-center {
		text-align: center;
	}
	.flex {
		display: flex;
		flex: 1;
	}
	.flex.vertical {
		flex-direction: column;
	}
	textarea {
		resize: none;
		height: 100%;
	}
</style>
