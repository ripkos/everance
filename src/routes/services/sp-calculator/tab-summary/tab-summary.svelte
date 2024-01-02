<script lang="ts">
	import type {
		SPCalculatorResponse,
		SkillData,
	} from '$lib/workers/shared-db-worker/sp-calculator';
	import { responses } from '$lib/workers/shared-db-worker/client';
	import { MsgType } from '$lib/workers/shared-db-worker/server';
	import SpSelector from './sp-selector.svelte';
	import RemapSelector from './remap-selector.svelte';
	import { attributesNames, remapWritable } from './store';
	$: output = $responses.get(MsgType.SPCalculator)?.params as SPCalculatorResponse;
	remapWritable.subscribe((v) => {
		output.skills = output.skills;
	});
	$: totalTrainingTime = formatMinutes(
		output.skills.reduce((total: number, skill) => {
			return (
				total + (isNaN(skill.sp) ? 0 : getTrainingMinutes(skill.primary, skill.secondary, skill.sp))
			);
		}, 0)
	);

	function getTrainingMinutes(primaryId: number, secondaryId: number, sp: number): number {
		return sp / (($remapWritable.get(primaryId) ?? 0) + ($remapWritable.get(secondaryId) ?? 0));
	}
	function formatMinutes(m: number): string {
		let minutes = Math.floor(m);
		let hours = Math.floor(minutes / 60);
		let days = Math.floor(hours / 24);
		minutes -= hours * 60;
		hours -= days * 24;
		return (days ? `${days}d ` : '') + (hours ? `${hours}h` : '') + (minutes ? ` ${minutes}m` : '');
	}
</script>

<section class="root">
	{#if output}
		<RemapSelector className="remap"></RemapSelector>
		<SpSelector className="sp"></SpSelector>
		<summary class="island summary">
			<h2>Short summary</h2>
			<span>Total SP: {`${output?.sum.toLocaleString() ?? 'Error'}`}</span>
			<span>Total training time: {totalTrainingTime}</span>
		</summary>
		<section class="island attr">
			<h2>Attributes importance</h2>
			TBD
		</section>
		<section class="island suggested">
			<h2>Suggested remap</h2>
			TBD
		</section>
		<section class="island skills">
			<h2>Skills breakdown</h2>
			<table>
				<thead>
					<tr>
						<th> x </th>
						<th> Skill Name </th>
						<th> LVL </th>
						<th> SP amount </th>
						<th> PA </th>
						<th> SA </th>
						<th> TT </th>
					</tr>
				</thead>
				<tbody>
					{#each output.skills as skill}
						<tr>
							<td>
								{skill.order + 1}
							</td>
							<td>
								{skill.name}
							</td>
							<td>
								{skill.level}
							</td>
							<td>
								{skill.sp.toLocaleString()}
							</td>
							<td class={attributesNames.get(skill.primary)?.toLocaleLowerCase()}>
								{attributesNames.get(skill.primary)}
							</td>
							<td class={attributesNames.get(skill.secondary)?.toLocaleLowerCase()}>
								{attributesNames.get(skill.secondary)}
							</td>
							<td>
								{formatMinutes(getTrainingMinutes(skill.primary, skill.secondary, skill.sp))}
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</section>
	{:else}
		<span>Loading</span>
	{/if}
</section>

<style lang="scss">
	@use './shared';
	@import '../../../variables.scss';
	.root {
		width: 100%;
		height: 100%;
		display: grid;
		grid-gap: 1rem;
		grid-template-areas:
			'summary x sp'
			'attr suggested remap'
			'skills skills skills';
		grid-auto-columns: minmax(0, 1fr);
		grid-template-rows: 1fr 1fr auto;
		grid-auto-flow: column;
		@media screen and (max-width: $--mobile-width) {
			grid-gap: 0.33rem;
			grid-template-areas:
				'summary'
				'sp'
				'remap'
				'attr'
				'suggested'
				'skills';
			grid-auto-flow: row;
			grid-template-rows: 1fr;
		}
		.suggested {
			grid-area: suggested;
		}
		.skills {
			grid-area: skills;
		}
		.summary {
			grid-area: summary;
		}
		:global(.remap) {
			grid-area: remap;
		}
		.attr {
			grid-area: attr;
		}
		:global(.sp) {
			grid-area: sp;
		}
	}
	summary {
		span {
			display: block;
		}
	}
	.gap {
		gap: 1.75rem;
	}
	table {
		border-collapse: collapse;
		width: 100%;
		@media screen and (max-width: $--mobile-width) {
			display: block;
			overflow: auto;
		}
	}
	tr,
	td,
	th {
		border-width: 1px;
		border-color: aqua;
		border-style: solid;
	}
	.flex {
		display: flex;
		flex: 1;
		&.vertical {
			flex-direction: column;
		}
		&.row-reverse {
			flex-direction: row-reverse;
		}
	}
</style>
