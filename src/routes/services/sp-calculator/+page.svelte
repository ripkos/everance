<script lang="ts">
	import { MsgType, type Msg } from '$lib/workers/shared-db-worker/shared-db-worker';
	import SharedWorker from '$lib/workers/shared-db-worker/shared-db-worker?sharedworker';
	import type { SPCalculatorResponseDTO } from '$lib/workers/shared-db-worker/sp-calculator';
	import { onMount } from 'svelte';
	import SpSelector from './sp-selector.svelte';
	import TabInstruction from './tab-instruction.svelte';
	import TabSkillQueue from './tab-skill-queue.svelte';
	import TabSummary from './tab-summary.svelte';
	import { SPTabs } from './tabs';
	import TabsSelector from './tabs-selector.svelte';

	let currentTab = SPTabs.SkillQueue;

	let worker: SharedWorker;
	let output: SPCalculatorResponseDTO | null;

	onMount(async () => {
		worker = new SharedWorker();
		worker.port.onmessage = (e) => {
			const response: Msg = e.data;
			switch (response.type) {
				case MsgType.SPCalculator:
					output = response.params as SPCalculatorResponseDTO;
			}
		};
	});
</script>

<svelte:head>
	<title>SP Calculator | ExR</title>
</svelte:head>

<div>
	<SpSelector></SpSelector>
	<TabsSelector bind:currentTab></TabsSelector>
	{#if currentTab == SPTabs.Instruction}
		<TabInstruction></TabInstruction>
	{/if}
	{#if currentTab == SPTabs.SkillQueue}
		<TabSkillQueue {worker}></TabSkillQueue>
	{/if}
	{#if currentTab == SPTabs.Summary}
		<TabSummary {output}></TabSummary>
	{/if}
</div>

<style lang="scss">
	div {
		display: flex;
		flex: 1;
		flex-direction: column;
		background-color: rgba(24, 24, 24, 0.4);
		border: 1px solid #cbd2d9;
		border-radius: 0.5rem;
		padding: 1.5rem;
	}
</style>
