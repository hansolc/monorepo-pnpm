import { Role, Size } from "src/server/Typography/types";
import { AppbarSize } from "../types";

export const headlineMap: Record<AppbarSize, { variants: Role; size: Size }> = {
  sm: { variants: "title", size: "lg" },
  md: { variants: "headline", size: "sm" },
  lg: { variants: "headline", size: "md" },
};

export const subtitleMap: Record<AppbarSize, { variants: Role; size: Size }> = {
  sm: { variants: "body", size: "sm" },
  md: { variants: "body", size: "md" },
  lg: { variants: "body", size: "lg" },
};
