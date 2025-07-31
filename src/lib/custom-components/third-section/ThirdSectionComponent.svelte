<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { AspectRatio } from '$lib/components/ui/aspect-ratio/index.js';
	import Button from '$lib/components/ui/button/button.svelte';
	import Calendar from '@lucide/svelte/icons/calendar';
	import Library from '@lucide/svelte/icons/library-big';
	import Statistic from '@lucide/svelte/icons/chart-no-axes-column-increasing';
	import Book from '@lucide/svelte/icons/book-open';
</script>

<div class="mt-2 mb-1 w-full">
	<Card.Root class="mr-5 ml-5 bg-emerald-500/30 drop-shadow-lg backdrop-blur-sm">
		<Card.Header>
			<Card.Title>Test</Card.Title>
			<Card.Description>Test Desk</Card.Description>
		</Card.Header>
		<Card.Content>
			<AspectRatio ratio={32 / 5}>
				<div class="grid h-full w-full grid-flow-col gap-[1%]">
					<Button
						class="h-full bg-orange-500 font-semibold text-white drop-shadow-md hover:bg-orange-200"
						href="#"
					>
						<div class="flex h-full flex-col items-center justify-center">
							<Library class="!size-9 h-[30px] w-[30px]" />
							<h6>Readzone</h6>
						</div>
					</Button>
					<Button
						class="h-full bg-orange-500 font-semibold text-white drop-shadow-md hover:bg-orange-200"
						href="#"
					>
						<div class="flex h-full flex-col items-center justify-center">
							<Calendar class="!size-9 h-[30px] w-[30px]" />
							<h6>Kalender Akademik</h6>
						</div>
					</Button>
					<Button
						class="h-full bg-orange-500 font-semibold text-white drop-shadow-md hover:bg-orange-200"
						href="#"
					>
						<div class="flex h-full flex-col items-center justify-center">
							<Book class="!size-9 h-[30px] w-[30px]" />
							<h6>POB FIK UPNVJ</h6>
						</div>
					</Button>
					<Button
						class="h-full bg-orange-500 font-semibold text-white drop-shadow-md hover:bg-orange-200"
						href="#"
					>
						<div class="flex h-full flex-col items-center justify-center">
							<Statistic class="!size-9 h-[30px] w-[30px]" />
							<h6>Statistik FIK UPNVJ</h6>
						</div>
					</Button>
				</div>
			</AspectRatio>
		</Card.Content>
	</Card.Root>
</div>
