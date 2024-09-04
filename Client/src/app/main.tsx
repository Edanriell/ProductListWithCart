import "./styles/styles.less";

import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import { ReduxProvider, TanStackRouterProvider } from "@app/providers";

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<StrictMode>
			<ReduxProvider>
				<TanStackRouterProvider />
			</ReduxProvider>
		</StrictMode>
	);
}
