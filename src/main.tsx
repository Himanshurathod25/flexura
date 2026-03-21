import { hydrateRoot, createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root")!;

if (rootElement.hasChildNodes()) {
  // Pre-rendered HTML exists (from react-snap or static fallback) — hydrate it
  hydrateRoot(rootElement, <App />);
} else {
  // No pre-rendered content — render normally
  createRoot(rootElement).render(<App />);
}

