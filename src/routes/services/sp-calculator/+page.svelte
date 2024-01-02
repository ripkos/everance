<script lang="ts">
	import type { Tab } from '$lib/components/tabs/tabs';
	import Tabs from '$lib/components/tabs/tabs.svelte';
	import TabsSelector from '../../../lib/components/tabs/tabs-selector.svelte';
	import TabInstruction from './instruction/tab-instruction.svelte';
	import TabSkillPlan from './skill-plan/tab-skill-plan.svelte';
	import TabSummary from './tab-summary/tab-summary.svelte';
	import { SPTabs } from './tabs';
	import blur from '$lib/assets/blur3.webp';

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

<article style="--blur: url({blur})">
	<TabsSelector {tabs} bind:currentTab={$currentTabStore}></TabsSelector>
	<Tabs {tabs} currentTab={$currentTabStore}></Tabs>
</article>

<style lang="scss">
	@import '../../variables.scss';
	article {
		position: relative;
		display: flex;
		flex: 1;
		flex-direction: column;
		padding: 1.5rem;
		@media screen and (max-width: $--mobile-width) {
			padding: 0.5rem;
		}
	}
</style>
