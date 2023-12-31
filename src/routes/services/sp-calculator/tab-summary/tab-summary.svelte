<script lang="ts">
	import type { SPCalculatorResponse } from '$lib/workers/shared-db-worker/sp-calculator';
	import { responses } from '$lib/workers/shared-db-worker/client';
	import { MsgType } from '$lib/workers/shared-db-worker/server';
	$: output =  $responses.get(MsgType.SPCalculator)?.params as SPCalculatorResponse
</script>

<section class="flex" style="gap: 16px;">
	<div class="flex vertical">
		{#if output}
			<section>
				<h2>Short summary</h2>
				<span>Total SP: {`${output?.sum.toLocaleString() ?? 'Error'}`}</span>
			</section>
			<section>
				<h2>Skill breakdown</h2>
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
									{skill.sp?.toLocaleString()}
								</td>
								<td>
									{skill.primary}
								</td>
								<td>
									{skill.secondary}
								</td>
								<td> TODO </td>
							</tr>
						{/each}
					</tbody>
				</table>
			</section>
		{:else}
			<span>Loading</span>
		{/if}
	</div>
</section>

<style>
	table {
		border-collapse: collapse;
	}
	tr,
	td,
	th {
		border-width: 1px;
		border-color: aqua;
		border-style: solid;
	}
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
</style>
