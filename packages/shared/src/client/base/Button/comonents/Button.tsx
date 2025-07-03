import { ElementType, Ref, useMemo } from "react";
import { PropsWithAs, RenderProps } from "src/types";
import useButtonState from "../hooks/useButtonState";
import { renderWithComponent } from "src/utils/render";
import { useFocusVisible } from "@hooks/useDomState";
import { Keys } from "src/utils/keyboard";

type ButtonRenderProps = {
  hover: boolean;
  disabled: boolean;
  active: boolean;
  focus: boolean;
};

export type ButtonProps<TTag extends ElementType = "button"> = PropsWithAs<
  TTag,
  {
    disabled?: boolean;
    children?: RenderProps<ButtonRenderProps>;
    type?: "button" | "submit" | "reset";
  }
>;

function ButtonFn<TTag extends ElementType = "button">(
  props: ButtonProps<TTag>,
  ref: Ref<HTMLElement>
) {
  const { as, disabled = false, children, ...rest } = props;

  const { state, eventProps, dataProps } = useButtonState({ disabled });
  const { active, hover } = state;
  // Button은 기본적으로 click시 focus => onClick 발생
  // 마우스로 클릭시 focus가 되지 않도록 설정(focus-visible)
  // keyboard Tab 버튼 클릭시에만 focus 되도록 설정
  const {
    state: focus,
    eventProps: focusEvents,
    dataProps: focusDatas,
  } = useFocusVisible({
    disabled,
    triggerFocusEvent: (e) => e.key === Keys.Tab,
  });

  const slot: ButtonRenderProps = useMemo(() => {
    return {
      active,
      disabled,
      hover,
      focus,
    };
  }, [active, disabled, hover, focus]);

  const buttonProps = {
    ref,
    ...eventProps,
    ...focusEvents,
    ...dataProps,
    ...focusDatas,
    ...rest,
  };

  return renderWithComponent({
    as: as ?? "button",
    children,
    ref,
    slot,
    props: buttonProps,
  });
}

export default ButtonFn;
