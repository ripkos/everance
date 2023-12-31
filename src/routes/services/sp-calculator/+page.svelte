<script lang="ts">
	import SpSelector from './tab-summary/sp-selector.svelte';
	import TabInstruction from './tab-instruction.svelte';
	import TabSkillQueue from './tab-skill-queue.svelte';
	import TabSummary from './tab-summary/tab-summary.svelte';
	import { SPTabs } from './tabs';
	import TabsSelector from './tabs-selector.svelte';

	let currentTab = SPTabs.SkillQueue;
</script>

<svelte:head>
	<title>SP Calculator | ExR</title>
</svelte:head>

<article>
	<SpSelector></SpSelector>
	<TabsSelector bind:currentTab></TabsSelector>
	{#if currentTab == SPTabs.Instruction}
		<TabInstruction></TabInstruction>
	{:else if currentTab == SPTabs.SkillQueue}
		<TabSkillQueue></TabSkillQueue>
	{:else if currentTab == SPTabs.Summary}
		<TabSummary></TabSummary>
	{:else}
		You are not supposed to be there!
	{/if}
</article>

<style lang="scss">
	article {
		display: flex;
		flex: 1;
		flex-direction: column;
		background-color: rgba(24, 24, 24, 0.4);
		border: 1px solid #cbd2d9;
		border-radius: 0.5rem;
		padding: 1.5rem;
	}
</style>
