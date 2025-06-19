import { getContext, setContext } from 'svelte';

const key = {};

export function setWebTitleContext(WebTitle: string) {
	setContext(key, WebTitle);
}

export function getWebTitleContext() {
	return getContext(key) as string;
}
