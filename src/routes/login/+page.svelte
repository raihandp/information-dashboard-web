<script lang="ts">
	import type { PageData } from './$types';
	import LoginComponent from '$lib/custom-components/auth/LoginComponent.svelte';

	let { data }: { data: PageData } = $props();
</script>

<div class="flex h-screen w-full items-center justify-center px-4">
	<LoginComponent {data} />
</div>
