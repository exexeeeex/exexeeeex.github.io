import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@/shared/providers/theme/index.tsx";
import "@/shared/assets/styles/index.css";
import "@/shared/assets/styles/_global.scss";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider
			defaultTheme='dark'
			storageKey='_theme'
		>
			<App />
		</ThemeProvider>
	</StrictMode>,
);
