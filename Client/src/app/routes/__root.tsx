import { Fragment } from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
	component: () => (
		<Fragment>
			<Outlet />
			{/*<TanStackRouterDevtools />*/}
		</Fragment>
	)
});
