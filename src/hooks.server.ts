import { redirect } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	event.locals.fetchTest = async function (input: URL | RequestInfo, requestInit?: RequestInit) {
		const response = await fetch(input, requestInit);

		if (!response.ok && response.status === 401) {
			console.log('Unauthorized: redirecting to logout page...');
			return redirect(302, '/logout');
		}

		return response;
	};

	return await resolve(event);
}

export async function handleError({ error }) {
	console.error(error);
}
