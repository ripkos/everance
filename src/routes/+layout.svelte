<script lang="ts">
	import { pwaInfo } from 'virtual:pwa-info';
	import './global.css';
	import bg from '$lib/assets/bg.webp';
	const links = [
		{ link: '/', name: 'Home' },
		{ link: '/services/sp-calculator', name: 'SP calculator' },
	];
</script>

<svelte:head>
	{#if pwaInfo}
		<link rel="manifest" href="/manifest.webmanifest" />
	{/if}
	<meta name="theme-color" content="#00000" />
</svelte:head>
<header>
	<nav>
		<ul>
			{#each links as { link, name }}
				<li>
					<a href={link}>{name}</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>
<main style="--bg: url({bg});">
	<slot />
</main>
<footer>
	<section>TBD - legal note</section>
</footer>

<style lang="scss">
	* {
		color: white;
	}
	header {
		background: linear-gradient(180deg, rgb(36, 36, 42) 0%, rgb(16, 16, 24) 97%, rgb(0, 0, 0) 100%);
		nav {
			ul {
				display: flex;
				flex-direction: row;
				list-style-type: none;
				gap: 16px;
				justify-content: center;
				align-items: center;
				min-height: 2.5rem;
				
				li {
					a {
						text-decoration: none;
						&:hover {
							color: #00aeff;
						}
					}
				}
			}
		}
	}
	main {
		flex-grow: 1;
		display: flex;
		background-image: var(--bg);
	}

	footer {
		background: linear-gradient(180deg, rgb(0, 0, 0) 0%, rgb(16, 16, 24) 3%, rgb(36, 36, 42) 100%);
	}
</style>
