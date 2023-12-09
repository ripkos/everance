<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	import { dbService } from '$lib';
	import type { DbSetWrapper } from '$lib/db/db-set-wrapper';
	import type { InvTypes } from '$lib/db/models/inv-types';
	import { onMount } from 'svelte';
	onMount(async () => {
		await dbService.invTypes.init();
	});
</script>

{#await data}
	<p>Loading...</p>
{:then loadedData}
	<a>TEST</a>
{/await}
