<script lang="ts">
	import * as Form from '$lib/components/ui/form/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import {
		loginFormSchema,
		type LoginFormSchema
	} from '$lib/custom-components/auth/schema/login-schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	let { data }: { data: { form: SuperValidated<Infer<LoginFormSchema>> } } = $props();

	const form = superForm(data.form, {
		validators: zodClient(loginFormSchema)
	});

	const { form: formData, enhance } = form;
</script>

<Card.Root class="mx-auto w-full max-w-lg">
	<Card.Header>
		<Card.Title class="text-2xl">Masuk</Card.Title>
		<Card.Description>Masukkan username dan password anda.</Card.Description>
	</Card.Header>
	<Card.Content>
		<div class="grid gap-4">
			<form method="POST" use:enhance>
				<div class="grid gap-2">
					<Form.Field {form} name="username">
						<Form.Control>
							{#snippet children({ props })}
								<Form.Label>Username</Form.Label>
								<Input {...props} type="email" placeholder="user" bind:value={$formData.username} />
							{/snippet}
						</Form.Control>
						<Form.Description>Insert your username.</Form.Description>
						<Form.FieldErrors />
					</Form.Field>
				</div>
				<div class="grid gap-2">
					<Form.Field {form} name="password">
						<Form.Control>
							{#snippet children({ props })}
								<Form.Label>Password</Form.Label>
								<Input {...props} type="password" bind:value={$formData.password} />
							{/snippet}
						</Form.Control>
						<Form.Description>Insert your password.</Form.Description>
						<Form.FieldErrors />
					</Form.Field>
				</div>
				<Form.Button class="w-full">Login</Form.Button>
			</form>
		</div>
	</Card.Content>
</Card.Root>
