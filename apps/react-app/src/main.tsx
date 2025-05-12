import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "@monorepo-pnpm/shared/dist/shared.css";
import { defaultThemeClasses } from "@monorepo-pnpm/shared";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className={defaultThemeClasses}>
      <App />
    </div>
  </StrictMode>
);
