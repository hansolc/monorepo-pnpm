import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { defaultThemeClasses } from "@monorepo-pnpm/shared/md3";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className={defaultThemeClasses}>
      <App />
    </div>
  </StrictMode>
);
