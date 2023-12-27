<script lang="ts">
	import type { SPCalculatorResponseDTO } from '$lib/workers/shared-db-worker/sp-calculator';

	export let output: SPCalculatorResponseDTO | null;
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
									{skill.sp}
								</td>
								<td>
									{skill.primary}
								</td>
								<td>
									{skill.primary}
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
