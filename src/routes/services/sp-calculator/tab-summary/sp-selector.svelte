<script lang="ts">
	import { sp } from '../store';
	let spText = $sp.toLocaleString();

	const amounts = [
		{ value: 0, label: '0-5m' },
		{ value: 5000000, label: '5m-50m (20% penalty)' },
		{ value: 50000000, label: '50m-80m (40% penalty)' },
		{ value: 80000000, label: '80m+ (70% penalty)' },
	];

	function convertTextToSP() {
		let n = spText;
		n = n.replaceAll(',', '.').replaceAll(/s/g, '');
		const parsed = parseFloat(n);
		if (isNaN(parsed)) {
			$sp = 0;
		} else {
			$sp = n.toLowerCase().includes('m') ? parsed * 1000000 : parsed;
		}
		spText = $sp.toLocaleString();
	}
</script>

<section>
	<h2>SP Amount:</h2>
	{#each amounts as amount}
		<button
			on:click={() => {
				$sp = amount.value;
				spText = $sp.toLocaleString();
			}}>{amount.label}</button
		>
	{/each}
	<input
		type="text"
		bind:value={spText}
		on:change={() => {
			convertTextToSP();
		}}
		placeholder="0"
	/>
</section>
