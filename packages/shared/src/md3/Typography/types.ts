const roleMap = {
  display: "display",
  headline: "headline",
  title: "title",
  label: "label",
  body: "body",
} as const;

const sizeMap = {
  sm: "small",
  md: "medium",
  lg: "large",
} as const;

type Role = keyof typeof roleMap;
type Size = keyof typeof sizeMap;

export { roleMap, sizeMap };
export type { Role, Size };
