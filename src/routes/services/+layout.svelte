<script lang="ts">
	import bg2 from '$lib/assets/bg2.webp';
</script>

<div class="layout" style="--bg: url({bg2});">
	<slot />
</div>

<style lang="scss">
	div {
		flex: 1;
		display: flex;
		background-size: cover;
		background-attachment: fixed;
		background-repeat: no-repeat;
		background-position: center;
		background-image: var(--bg);
	}
</style>
