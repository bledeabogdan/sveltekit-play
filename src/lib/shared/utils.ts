
/**
 * Whether the given route is an asset route.
 *
 * @param routeId
 * The route ID to check.
 *
 * @param url
 * The URL to check.
 */
export function isAsset(routeId: string | null, url: URL) {
	return (
		routeId === null && (url.pathname.startsWith('/@fs') || url.pathname.endsWith('/favicon.ico'))
	);
}

/**
 * Whether the given route is an auth route.
 *
 * @param routeId
 * The route ID to check.
 */
export function isAuthRoute(routeId: string | null) {
	return routeId !== null && (routeId.startsWith('/login') || routeId.startsWith('/logout'));
}
