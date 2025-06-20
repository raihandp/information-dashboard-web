<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import PostPictureComponent from './component/PostPictureComponent.svelte';

	let {
		cardOneTitle = '',
		cardOneDesc = '',
		cardTwoTitle = '',
		cardTwoDesc = ''
	}: {
		cardOneTitle: string;
		cardOneDesc: string;
		cardTwoTitle: string;
		cardTwoDesc: string;
	} = $props();
</script>

<div class="grid w-full grid-flow-col gap-[1%] pt-2 pr-5 pb-2 pl-5">
	<Card.Root class="bg-emerald-500/30 drop-shadow-lg backdrop-blur-sm">
		<Card.Header>
			<Card.Title>{cardOneTitle}</Card.Title>
			<Card.Description>{cardOneDesc}</Card.Description>
		</Card.Header>
		<Card.Content></Card.Content>
	</Card.Root>
	<Card.Root class="bg-emerald-500/30 drop-shadow-lg backdrop-blur-sm">
		<Card.Header>
			<Card.Title>{cardTwoTitle}</Card.Title>
			<Card.Description>{cardTwoDesc}</Card.Description>
		</Card.Header>
		<Card.Content>
			<PostPictureComponent />
		</Card.Content>
	</Card.Root>
</div>
