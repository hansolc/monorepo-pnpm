import { CSSProperties } from "@vanilla-extract/css";
import { vars } from "../../styles/theme/color.css";
interface BackgroundOpacityStyleProps {
    bg?: keyof typeof vars.colors;
    opacity: 0.08 | 0.1;
    outline?: string;
    outlineColor?: keyof typeof vars.colors;
}
export declare const backgroundOpacityStyle: ({ bg, opacity, outline, outlineColor, ...rest }: BackgroundOpacityStyleProps) => CSSProperties;
export {};
//# sourceMappingURL=util.d.ts.map