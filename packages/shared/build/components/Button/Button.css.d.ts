import { RecipeVariants } from "@vanilla-extract/recipes";
export declare const storiesButton: import("@vanilla-extract/recipes").RuntimeFn<{
    size: {
        sm: {
            height: number;
            fontSize: "0.75rem";
        };
        md: {
            height: number;
            fontSize: "0.875rem";
        };
        lg: {
            height: number;
            fontSize: "1.125rem";
        };
    };
    ty: {
        elevated: (string | {
            selectors: {
                "&:not(:disabled):hover::after": import("@vanilla-extract/css").CSSProperties;
                "&:not(:disabled):focus::after": import("@vanilla-extract/css").CSSProperties;
                "&:not(:disabled):active::after": import("@vanilla-extract/css").CSSProperties;
            };
        })[];
        filled: (string | {
            selectors: {
                "&:not(:disabled):hover::after": import("@vanilla-extract/css").CSSProperties;
                "&:not(:disabled):focus::after": import("@vanilla-extract/css").CSSProperties;
                "&:not(:disabled):active::after": import("@vanilla-extract/css").CSSProperties;
            };
        })[];
        filledTonal: (string | {
            selectors: {
                "&:not(:disabled):hover::after": import("@vanilla-extract/css").CSSProperties;
                "&:not(:disabled):focus::after": import("@vanilla-extract/css").CSSProperties;
                "&:not(:disabled):active::after": import("@vanilla-extract/css").CSSProperties;
            };
        })[];
        outlined: (string | {
            backgroundColor: "transparent";
            outline: `1px solid var(--${string})` | `1px solid var(--${string}, ${string})` | `1px solid var(--${string}, ${number})`;
            selectors: {
                "&:not(:disabled):hover::after": import("@vanilla-extract/css").CSSProperties;
                "&:not(:disabled):focus::after": import("@vanilla-extract/css").CSSProperties;
                "&:not(:disabled):active::after": import("@vanilla-extract/css").CSSProperties;
            };
        })[];
        text: (string | {
            backgroundColor: "transparent";
            selectors: {
                "&:not(:disabled):hover::after": import("@vanilla-extract/css").CSSProperties;
                "&:not(:disabled):focus::after": import("@vanilla-extract/css").CSSProperties;
                "&:not(:disabled):active::after": import("@vanilla-extract/css").CSSProperties;
            };
        })[];
    };
}>;
export declare const buttonIcon: Record<"sm" | "md" | "lg", string>;
export type StoriesButtonProps = Required<NonNullable<RecipeVariants<typeof storiesButton>>>;
//# sourceMappingURL=Button.css.d.ts.map