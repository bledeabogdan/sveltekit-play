import type { PageServerLoadEvent } from './$types';

export async function load(event: PageServerLoadEvent) {
	return {
		posts: await loadPosts(event)
	};
}

async function loadPosts({ locals }: PageServerLoadEvent) {
	// INFO: This is a test endpoint that returns a list of posts (use another one if you want)
	const posts = (await locals.fetchTest('http://localhost:3001/posts')) as Response;

	return await posts.json();
}
