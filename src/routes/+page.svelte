<script lang="ts">
	import type { PageData } from './$types';
	import HomeHeader from '$lib/custom-components/GlobalHeader.svelte';
	import FirstSectionComponent from '$lib/custom-components/first-section/FirstSectionComponent.svelte';

	let { data }: { data: PageData } = $props();
</script>

<HomeHeader isHome imgLogo={null} descHeader={'Akses cepat informasi & layanan FIK UPNVJ tes'} />
<main>
	<FirstSectionComponent
		cardOneTitle="Judul 1"
		cardOneDesc="deskripsi 1"
		cardTwoDesc="deskripsi 2"
		cardTwoTitle="Judul 2"
	/>
</main>
