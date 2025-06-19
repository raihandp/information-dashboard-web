<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Home from '@lucide/svelte/icons/house';
	import { getWebTitleContext } from '$lib/context/title-context';

	interface Props {
		isHome: boolean;
		imgLogo: string | null;
		descHeader: string;
	}

	let { isHome = true, imgLogo = null, descHeader }: Props = $props();
</script>

<header class="m-5 flex flex-row items-center justify-between">
	<div class="flex items-center">
		<div>
			{#if imgLogo}
				<img class="me-5 max-h-16 max-w-16" src={imgLogo} alt="Logo UPNVJ" />
			{/if}
			<h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">
				{getWebTitleContext()}
			</h3>
			<p>{descHeader}</p>
		</div>
	</div>
	{#if !isHome}
		<Button href="/" variant="outline" size="icon">
			<Home />
		</Button>
	{/if}
</header>
