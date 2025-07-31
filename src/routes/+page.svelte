<script lang="ts">
	import type { PageData } from './$types';
	import HomeHeader from '$lib/custom-components/GlobalHeader.svelte';
	import FirstSectionComponent from '$lib/custom-components/first-section/FirstSectionComponent.svelte';
	import SecondSectionComponent from '$lib/custom-components/second-section/SecondSectionComponent.svelte';
	import ThirdSectionComponent from '$lib/custom-components/third-section/ThirdSectionComponent.svelte';
	import FourthSectionComponent from '$lib/custom-components/fourth-section/FourthSectionComponent.svelte';
	import FifthSectionComponent from '$lib/custom-components/fifth-section/FifthSectionComponent.svelte';

	let { data }: { data: PageData } = $props();
</script>

<HomeHeader isHome imgLogo={null} descHeader={'Akses cepat informasi & layanan FIK UPNVJ tes'} />
<main>
	<FirstSectionComponent
		cardOneTitle="Judul 1"
		cardOneDesc="deskripsi 1"
		cardTwoDesc="deskripsi 2"
		cardTwoTitle="Judul 2"
		imageOne=""
		images={[]}
		video=""
	/>
	<SecondSectionComponent />
	<ThirdSectionComponent />
	<FourthSectionComponent />
	<FifthSectionComponent />
</main>
