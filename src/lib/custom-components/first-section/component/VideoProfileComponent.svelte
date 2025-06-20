<script lang="ts">
	import { AspectRatio } from '$lib/components/ui/aspect-ratio/index.js';

	let { imageOne, video }: { imageOne: string; video: string } = $props();
</script>

<div class="grid grid-flow-row gap-[1%]">
	<AspectRatio ratio={8 / 5}>
		<img
			class="h-auto w-full rounded-md drop-shadow-sm"
			src={imageOne}
			alt="Pictures"
		/></AspectRatio
	>
	<AspectRatio ratio={8 / 5}>
		<video class="w-full rounded-lg" id="video" autoplay loop muted controls>
			<source src={video} type="video/mp4" />
			Your browser does not support the video tag.
		</video></AspectRatio
	>
</div>
