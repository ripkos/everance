<script lang="ts">
	import { pwaInfo } from 'virtual:pwa-info';
	$: webManifestLink = pwaInfo ? pwaInfo.webManifest.linkTag : '';
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
