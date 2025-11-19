import { HeroUIProvider } from "@heroui/react";
import { ToastProvider } from "@heroui/toast";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import App from "./App.tsx";
import ErrorFallback from "./components/ErrorFallback";
import "@fontsource/audiowide/400.css";
import "@fontsource/space-grotesk/300.css";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <HeroUIProvider>
        <ToastProvider placement="top-right" toastOffset={24} />
        <main className="light bg-background text-foreground min-h-screen">
          <App />
        </main>
      </HeroUIProvider>
    </ErrorBoundary>
  </StrictMode>
);
