<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { AspectRatio } from '$lib/components/ui/aspect-ratio/index.js';
</script>

<div class="mt-2 mb-1 w-full">
	<Card.Root class="mr-5 ml-5 bg-emerald-500/30 drop-shadow-lg backdrop-blur-sm">
		<Card.Header>
			<Card.Title>Test</Card.Title>
			<Card.Description>Test Desk</Card.Description>
		</Card.Header>
		<Card.Content>
			<AspectRatio ratio={32 / 5}></AspectRatio>
		</Card.Content>
	</Card.Root>
</div>
