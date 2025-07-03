import { ElementType, Ref, useEffect, useId, useMemo, useRef } from "react";
import { PropsWithAs, RenderProps } from "src/types";
import { useAction, useData } from "../context";
import { mergeRefs, renderWithComponent } from "src/utils/render";
import useEvent from "@hooks/useEvent";
import { Keys } from "src/utils/keyboard";
import useTabState from "./hooks/useTabState";

type TabRenderProps = {
  selected: boolean;
  hover: boolean;
  disabled: boolean;
  focus: boolean;
  active: boolean;
};

export type TabProps<TTag extends ElementType = "button"> = PropsWithAs<
  TTag,
  {
    autoFocus?: boolean;
    disabled?: boolean;
    children?: RenderProps<TabRenderProps>;
  }
>;

export default function TabFn<TTag extends ElementType = "button">(
  props: TabProps<TTag>,
  ref: Ref<HTMLElement>
) {
  const localId = useId();
  const {
    as,
    disabled = false,
    autoFocus = false,
    id = `base-tab-${localId}`,
    children,
    ...rest
  } = props;

  const { tabs, selectedIndex, panels } = useData("Tab");
  const action = useAction("Tab");
  const localRef = useRef<HTMLElement | null>(null);
  const tabRef = mergeRefs(localRef, ref);
  const myIndex = tabs.indexOf(localRef);
  const selected = selectedIndex === myIndex;

  const { state, eventProps, dataProps } = useTabState({ disabled, selected });

  useEffect(() => {
    if (localRef.current) {
      return action.registerTab(localRef);
    }
  }, [action, localRef]);

  const handleKeyDown = useEvent((event: KeyboardEvent) => {
    const list = tabs
      .map((tab) => tab.current)
      .filter(Boolean) as HTMLElement[];

    if (list.length === 0) return;

    const currentIndex = list.findIndex(
      (tab) => tab === document.activeElement
    );

    if (event.key === Keys.Tab) {
      // 첫 번째 탭으로 포커스
      event.preventDefault(); // 기본 Tab 동작 방지
      list[0]?.focus();
      return;
    }

    switch (event.key) {
      case Keys.ArrowLeft: {
        event.preventDefault();
        const prevIndex = (currentIndex - 1 + list.length) % list.length;
        list[prevIndex]?.focus();
        return;
      }

      case Keys.ArrowRight: {
        event.preventDefault();
        const nextIndex = (currentIndex + 1) % list.length;
        list[nextIndex]?.focus();
        return;
      }

      case Keys.Enter:
      case Keys.Space: {
        event.preventDefault();
        if (currentIndex !== -1) {
          action.change(currentIndex);
        }
        return;
      }
    }
  });

  const handleClick = useEvent(() => {
    action.change(myIndex);
  });

  const slot = useMemo(() => {
    return {
      ...state,
      autoFocus,
      disabled,
    };
  }, [state, autoFocus, disabled]);

  const tabProps = {
    role: "tab",
    id,
    "aria-controls": panels[myIndex]?.current?.id,
    "aria-selected": selected,
    tabIndex: selected ? 0 : -1,
    disabled: disabled || undefined,
    autoFocus,
    ref: tabRef,
    onKeyDown: handleKeyDown,
    onClick: handleClick,
    ...eventProps,
    ...dataProps,
    ...rest,
  };

  return renderWithComponent({
    as: as ?? "button",
    children,
    ref: tabRef,
    props: tabProps,
    slot: slot,
  });
}
