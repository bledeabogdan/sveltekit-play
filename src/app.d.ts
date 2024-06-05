// See https://kit.svelte.dev/docs/types#app

import type { Redirect_1 } from '@sveltejs/kit';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			fetchTest: (input: URL | RequestInfo, init?: RequestInit) => Promise<Response | Redirect_1>;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
