<script lang="ts">
	import Autoplay from 'embla-carousel-autoplay';
	import { AspectRatio } from '$lib/components/ui/aspect-ratio/index.js';
	import * as Carousel from '$lib/components/ui/carousel/index.js';

	const plugin = Autoplay({ delay: 2000, stopOnInteraction: false });
	let { images }: { images: string[] } = $props();
</script>

<AspectRatio ratio={4 / 5}>
	<Carousel.Root
		plugins={[plugin]}
		opts={{
			align: 'start',
			loop: true
		}}
		class="h-auto w-full"
	>
		<Carousel.Content>
			{#each images as image, i (i)}
				<Carousel.Item>
					<img class="h-auto w-full rounded-md drop-shadow-sm" src={image} alt="Pictures" />
				</Carousel.Item>
			{/each}
		</Carousel.Content>
	</Carousel.Root>
</AspectRatio>
