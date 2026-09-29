import { ROUTES } from "$lib/constants/routes";

/**
 * @description Defines the navigation menu items for the website.
 * @type {Array<{ label: string; href: string }>}
 */
export const MENUS = [
	{ label: "Home", href: ROUTES.HOME },
	{ label: "Docs", href: ROUTES.DOCS },
	{ label: "Blocks", href: ROUTES.BLOCKS },
	{ label: "Components", href: ROUTES.COMPONENTS },
	{ label: "Blog", href: ROUTES.BLOG },
] as const satisfies readonly {
	label: string;
	href: string;
}[];
