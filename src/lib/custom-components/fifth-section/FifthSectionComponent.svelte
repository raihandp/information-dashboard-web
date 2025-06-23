<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { AspectRatio } from '$lib/components/ui/aspect-ratio/index.js';
	import { Marquee } from '@selemondev/svelte-marquee';
	import '@selemondev/svelte-marquee/dist/style.css';
	import Globe from '@lucide/svelte/icons/globe';
	import Instagram from '@lucide/svelte/icons/instagram';
	import Youtube from '@lucide/svelte/icons/youtube';
</script>

<div class="mt-2 mb-5 w-full">
	<div
		class="mr-5 ml-5 rounded-lg bg-orange-500 p-3 font-semibold text-white drop-shadow-lg backdrop-blur-sm"
	>
		<Marquee
			direction="left"
			fade={true}
			reverse={false}
			pauseOnHover={false}
			class="[--duration:20s]"
			innerClassName="w-full"
		>
			<h3>Content 1 ontent 1 ontent 1 ontent 1 ontent 1</h3>
			<h3>Content 2</h3>
			<h3>Content 3</h3>
		</Marquee>
	</div>
	<div class="mt-3 flex items-center justify-around">
		<div class="flex flex-row items-center justify-center">
			<Instagram size="30px" />
			<h6 class="scroll-m-20 ps-1 text-lg font-semibold tracking-tight text-nowrap">@fikupnvj</h6>
		</div>
		<div class="flex flex-row items-center justify-center">
			<Globe size="30px" />
			<h6 class="scroll-m-20 ps-1 text-lg font-semibold tracking-tight text-nowrap">
				new-fik.upnvj.ac.id
			</h6>
		</div>
		<div class="flex flex-row items-center justify-center">
			<Youtube size="30px" />
			<h6 class="scroll-m-20 ps-1 text-lg font-semibold tracking-tight text-nowrap">@fikupnvj</h6>
		</div>
	</div>
</div>
