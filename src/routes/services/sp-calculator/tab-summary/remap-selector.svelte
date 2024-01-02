<script lang="ts">
	import { Attributes, attributesNames, remapWritable, defaultRemap } from './store';
	let editMode = false;
	let remapTmp = new Map<Attributes, number>($remapWritable);
	let remapSum = 0;
	export let className = '';

	function updateAttr(id: Attributes, isIncrease: boolean) {
		let value = remapTmp.get(id) as number;
		let diff = isIncrease ? 1 : -1;
		remapTmp.set(id, value + diff);
		remapSum -= diff;
		remapTmp = new Map(Array.from(remapTmp));
	}

	function resetToDefault() {
		remapTmp = new Map(defaultRemap);
		remapSum = 0;
		if (!editMode) remapWritable.set(remapTmp);
	}
</script>

<aside class="island {className}">
	<h2>Remap</h2>
	<span>Free points: {remapSum}</span>
	{#each remapTmp as { 0: id, 1: value }}
		<div>
			<span>{value}</span>
			<span class={attributesNames.get(id)?.toLowerCase()}>{attributesNames.get(id)}</span>
			<button
				on:click={() => updateAttr(id, true)}
				class:hidden={!editMode || remapSum < 1 || value > 26}>+</button
			>
			<button on:click={() => updateAttr(id, false)} class:hidden={!editMode || value < 18}
				>-</button
			>
		</div>
	{/each}
	<button
		class:hidden={editMode}
		on:click={() => {
			editMode = true;
		}}>Edit</button
	>

	<button
		class:hidden={!editMode}
		on:click={() => {
			editMode = false;
			$remapWritable = remapTmp;
		}}>Save</button
	>
	<button
		class:hidden={!editMode}
		on:click={() => {
			editMode = false;
			remapTmp = new Map($remapWritable);
			remapSum = 0;
		}}>Discard</button
	>
	<button on:click={resetToDefault}>Reset to default</button>
</aside>

<style lang="scss">
	@import './shared.scss';

	span,
	button {
		display: inline;
	}
	.hidden {
		visibility: hidden;
	}
</style>
