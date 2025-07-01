import type { PageServerLoad, Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { loginFormSchema } from '$lib/custom-components/auth/schema/login-schema';
import { zod } from 'sveltekit-superforms/adapters';

export const load = (async () => {
	return {
		form: await superValidate(zod(loginFormSchema))
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(loginFormSchema));
		if (!form.valid) {
			return fail(400, {
				form
			});
		}
		return {
			form
		};
	}
};
