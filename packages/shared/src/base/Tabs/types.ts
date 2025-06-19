interface TabsContextValue {
  ariaLabel?: string;
  selected?: string;
  onSelect?: (option: string) => void;
  defaultSelected?: string;
  registerTab: (ref: HTMLElement | null) => void;
  tabRefs: React.MutableRefObject<(HTMLElement | null)[]>;
}

type RenderPropsTab = (state: {
  selected: boolean;
  hover?: boolean;
  props: React.HTMLAttributes<HTMLElement>;
}) => React.ReactNode;

export { TabsContextValue, RenderPropsTab };
