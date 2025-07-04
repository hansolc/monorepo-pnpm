import { themeContract } from "@monorepo-pnpm/shared/server";
import { createTheme } from "@vanilla-extract/css";

export const lightColors = {
  primary: "#545A92",
  surfaceTint: "#545A92",
  onPrimary: "#FFFFFF",
  primaryContainer: "#DFE0FF",
  onPrimaryContainer: "#3C4279",
  secondary: "#5B5D72",
  onSecondary: "#FFFFFF",
  secondaryContainer: "#E0E0F9",
  onSecondaryContainer: "#444559",
  tertiary: "#77536C",
  onTertiary: "#FFFFFF",
  tertiaryContainer: "#FFD7EF",
  onTertiaryContainer: "#5E3C53",
  error: "#BA1A1A",
  onError: "#FFFFFF",
  errorContainer: "#FFDAD6",
  onErrorContainer: "#93000A",
  background: "#FBF8FF",
  onBackground: "#1B1B21",
  surface: "#FBF8FF",
  onSurface: "#1B1B21",
  surfaceVariant: "#E3E1EC",
  onSurfaceVariant: "#46464F",
  outline: "#777680",
  outlineVariant: "#C7C5D0",
  shadow: "#000000",
  scrim: "#000000",
  inverseSurface: "#303036",
  inverseOnSurface: "#F2EFF7",
  inversePrimary: "#BDC2FF",
  primaryFixed: "#DFE0FF",
  onPrimaryFixed: "#0E154B",
  primaryFixedDim: "#BDC2FF",
  onPrimaryFixedVariant: "#3C4279",
  secondaryFixed: "#E0E0F9",
  onSecondaryFixed: "#181A2C",
  secondaryFixedDim: "#C4C4DD",
  onSecondaryFixedVariant: "#444559",
  tertiaryFixed: "#FFD7EF",
  onTertiaryFixed: "#2E1127",
  tertiaryFixedDim: "#E7B9D6",
  onTertiaryFixedVariant: "#5E3C53",
  surfaceDim: "#DBD9E0",
  surfaceBright: "#FBF8FF",
  surfaceContainerLowest: "#FFFFFF",
  surfaceContainerLow: "#F5F2FA",
  surfaceContainer: "#EFEDF4",
  surfaceContainerHigh: "#EAE7EF",
  surfaceContainerHighest: "#E4E1E9",
};

export const lightThemeClasses = createTheme(themeContract, {
  colors: lightColors,
});
