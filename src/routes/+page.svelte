<script lang="ts">
	import type { PageData } from './$types';
	import HomeHeader from '$lib/custom-components/GlobalHeader.svelte';

	let { data }: { data: PageData } = $props();
</script>

<HomeHeader isHome imgLogo={null} descHeader={'Akses cepat informasi & layanan FIK UPNVJ tes'} />
<main></main>
