<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<ul>
	{#each data.posts as post}
		<li>
			{post.title}
		</li>
	{/each}
</ul>
