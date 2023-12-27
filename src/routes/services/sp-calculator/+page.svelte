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

	let currentTab = SPTabs.SkillQueue;
	let worker: SharedWorker;
	const tabs = [
		{ tab: SPTabs.Instruction, name: 'Instruction' },
		{ tab: SPTabs.SkillQueue, name: 'Skill queue' },
		{ tab: SPTabs.Summary, name: 'Summary' }
	];
	let input = '';
	let output: SPCalculatorResponseDTO | null;
	let sp = 0;
	function changeActiveTab(newTab: SPTabs) {
		currentTab = newTab;
	}
	onMount(async () => {
		sp = Number(localStorage.getItem('sp')) ?? 0;
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

<div class="sp-calculator-wrapper">
	<div>{sp}</div>
	<SpSelector bind:sp></SpSelector>
	<section class="tabs">
		<div>
			{#each tabs as { tab, name }}
				<button class:active={tab == currentTab} on:click={() => changeActiveTab(tab)}>
					{name}
				</button>
			{/each}
		</div>
	</section>
	{#if currentTab == SPTabs.Instruction}
		<TabInstruction></TabInstruction>
	{/if}
	{#if currentTab == SPTabs.SkillQueue}
		<TabSkillQueue bind:input {worker}></TabSkillQueue>
	{/if}
	{#if currentTab == SPTabs.Summary}
		<TabSummary {output}></TabSummary>
	{/if}
</div>

<style lang="scss">
	$--active: rgb(22, 197, 197);
	$--hover: rgb(17, 113, 113);
	.sp-calculator-wrapper {
		display: flex;
		flex: 1;
		flex-direction: column;
		background-color: rgba(24, 24, 24, 0.4);
		border: 1px solid #cbd2d9;
		border-radius: 0.5rem;
		padding: 1.5rem;
		.tabs {
			display: block;
			text-align: center;
			padding-bottom: 1.5rem;
			div {
				background-color: rgba(24, 24, 24, 0.4);
				border: 1px solid #cbd2d9;
				border-radius: 0.5rem;
				display: inline-flex;
				overflow: hidden;
				button {
					cursor: pointer;
					border-color: rgba(0, 0, 0, 0);
					border-width: 0px;
					background: #fff;
					color: #333;
					outline: none;
					padding: 0.75em 0.75em 0.75em 1.25em;
					position: relative;
					text-decoration: none;
					&.active {
						background-color: $--active;
						&::after {
							background-color: $--active;
						}
						&::before {
							background-color: white;
						}
						&:hover {
							background: $--active;
							&::after {
								background-color: $--active;
							}
						}
					}
					&::after,
					&::before {
						background: rgba(0, 0, 0, 0);
						bottom: 0;
						clip-path: polygon(50% 50%, -50% -50%, 0 100%);
						content: '';
						left: 100%;
						position: absolute;
						top: 0;
						width: 1em;
						z-index: 1;
						background: white;
					}
					&::before {
						background: $--active;
						margin-left: 1px;
					}
					&:hover {
						background: $--hover;
						&::after {
							background-color: $--hover;
						}
					}
				}
			}
		}
	}
</style>
