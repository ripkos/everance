<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

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
