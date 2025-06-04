import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { defaultThemeClasses } from "@monorepo-pnpm/shared";
import "./index.css";
import "../../../packages/shared/dist/shared.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className={defaultThemeClasses}>
      <App />
    </div>
  </StrictMode>
);
