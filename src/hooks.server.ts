import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	if (event.url.pathname === '/dashboard') {
		throw redirect(307, '/dashboard/banner-1');
	}

	const response = await resolve(event);
	return response;
};