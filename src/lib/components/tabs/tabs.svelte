<script lang="ts" generics="T">
	import type { Tab } from './tabs';

	export let tabs: Tab<T>[] = [];
	export let currentTab: T;
</script>

{#each tabs as { component, value }}
	{#if currentTab === value}
		<svelte:component this={component} />
	{/if}
{/each}
