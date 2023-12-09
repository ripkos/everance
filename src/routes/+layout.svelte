<script lang="ts">
	import type { LayoutData } from './$types';
	import { pwaInfo } from 'virtual:pwa-info';

	$: webManifestLink = pwaInfo ? pwaInfo.webManifest.linkTag : '';
	export let data: LayoutData;
</script>

<svelte:head>
	{@html webManifestLink}
</svelte:head>

<nav>
	<ul>
		<li>
			<a href="/">Home</a>
		</li>
		<li>
			<a href="/sp-calculator">SP calculator</a>
		</li>
	</ul>
</nav>
<section>
	<slot />
</section>
