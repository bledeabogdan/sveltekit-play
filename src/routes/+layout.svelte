<script lang="ts">
	import { page } from '$app/stores';
	import { isAuthRoute } from '$lib/shared/utils';

	$: onAuthRoute = isAuthRoute($page.route.id);
</script>

{#if !onAuthRoute}
	<a href="/logout">Logout</a>
{/if}
<slot />
