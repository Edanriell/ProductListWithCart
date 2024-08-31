import { createRouter, RouterProvider } from "@tanstack/react-router";

import { NotFoundPage } from "@pages/not-found/ui";

import { routeTree } from "../routeTree.gen.ts";

const router = createRouter({
	routeTree,
	defaultNotFoundComponent: () => <NotFoundPage />
});

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

export const TanStackRouterProvider = () => <RouterProvider router={router} />;
