<script lang="ts" generics="T">
	import type { Tab } from './tabs';

	export let currentTab: T;
	export let tabs: Tab<T>[];
</script>

<aside>
	<div>
		{#each tabs as { value, name }}
			<button class:active={value == currentTab} on:click={() => (currentTab = value)}>
				{name}
			</button>
		{/each}
	</div>
</aside>

<style lang="scss">
	$--active: rgb(22, 197, 197);
	$--hover: rgb(17, 113, 113);
	aside {
		display: block;
		text-align: center;
		padding-bottom: 1.5rem;
		div {
			background-color: rgba(24, 24, 24, 0.4);
			border: 1px solid #cbd2d9;
			border-radius: 0.5rem;
			display: inline-flex;
			overflow: hidden;
			button {
				cursor: pointer;
				border-color: rgba(0, 0, 0, 0);
				border-width: 0px;
				background: #fff;
				color: #333;
				outline: none;
				padding: 0.75em 0.75em 0.75em 1.25em;
				position: relative;
				text-decoration: none;
				&.active {
					background-color: $--active;
					&::after {
						background-color: $--active;
					}
					&::before {
						background-color: white;
					}
					&:hover {
						background: $--active;
						&::after {
							background-color: $--active;
						}
					}
				}
				&::after,
				&::before {
					background: rgba(0, 0, 0, 0);
					bottom: 0;
					clip-path: polygon(50% 50%, -50% -50%, 0 100%);
					content: '';
					left: 100%;
					position: absolute;
					top: 0;
					width: 1em;
					z-index: 1;
					background: white;
				}
				&::before {
					background: $--active;
					margin-left: 1px;
				}
				&:hover {
					background: $--hover;
					&::after {
						background-color: $--hover;
					}
				}
			}
		}
	}
</style>
