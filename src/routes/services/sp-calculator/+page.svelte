<script lang="ts">
	import type { Tab } from '$lib/components/tabs/tabs';
	import Tabs from '$lib/components/tabs/tabs.svelte';
	import TabsSelector from '../../../lib/components/tabs/tabs-selector.svelte';
	import TabInstruction from './instruction/tab-instruction.svelte';
	import TabSkillPlan from './skill-plan/tab-skill-plan.svelte';
	import TabSummary from './tab-summary/tab-summary.svelte';
	import { SPTabs } from './tabs';

	import { currentTabStore } from './tabs';


	const tabs: Tab<SPTabs>[] = [
		{ component: TabInstruction, value: SPTabs.Instruction, name: 'Instruction' },
		{ component: TabSkillPlan, value: SPTabs.SkillQueue, name: 'Skill plan' },
		{ component: TabSummary, value: SPTabs.Summary, name: 'Summary' },
	];
</script>

<svelte:head>
	<title>SP Calculator | ExR</title>
</svelte:head>

<article>
	<TabsSelector {tabs} bind:currentTab={$currentTabStore}></TabsSelector>
	<Tabs {tabs} currentTab={$currentTabStore}></Tabs>
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
