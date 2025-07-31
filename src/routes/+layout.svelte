<script lang="ts">
	import '../app.css';
	import { setWebTitleContext, getWebTitleContext } from '$lib/context/title-context';
	import { WEB_TITLE } from '$lib/assets/Constants';

	let { children } = $props();

	setWebTitleContext(WEB_TITLE);
</script>

<svelte:head>
	<title>{getWebTitleContext()}</title>
</svelte:head>

{@render children()}
