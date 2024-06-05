import { isAsset, isAuthRoute } from '$lib/shared/utils';
import { Redirect_1, redirect } from '@sveltejs/kit';

export async function handle({ event, resolve }): Promise<Response | Redirect_1> {
	// SKIP IF ASSET OR AUTH ROUTE
	if (isAsset(event.route.id, event.url) || isAuthRoute(event.route.id)) {
		return await resolve(event);
	}

	// CHECK IF SESSION COOKIE EXISTS
	console.log('Checking if session cookie exists...', event.cookies.get('session'));
	if (event.cookies.get('session') === undefined) {
		console.log('Unauthorized: redirecting to login page...');
		return redirect(302, '/login');
	}

	// BIND INTERCEPTED FETCH FUNCTION TO LOCALS
	console.log('Binding fetchTest to locals...');
	event.locals.fetchTest = async function (input: URL | RequestInfo, requestInit?: RequestInit) {
		const response = await fetch(input, requestInit);

		if (!response.ok && response.status === 401) {
			console.log('Unauthorized: redirecting to logout page...');
			return redirect(302, '/logout');
		}

		return response;
	};

	// CONTINUE TO RESOLVE EVENT
	console.log('Handling event...');
	return await resolve(event);
}

export async function handleError({ error }) {
	console.error('Error', error);
}
