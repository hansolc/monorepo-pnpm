import { ElementType, Ref, useMemo } from "react";
import { PropsWithAs, RenderProps } from "src/types";
import useButtonState from "../hooks/useButtonState";
import { renderWithComponent } from "src/utils/render";

type ButtonRenderProps = {
  hover: boolean;
  disabled: boolean;
  active: boolean;
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

  // TODO: focus-visible 처리
  // 마우스 클릭시 focus 발생하며 UI적으로 맞지 않음
  // 보통 css에서 focus-visible로 키보드 사용시에만 focus되도록 처리
  const { state, eventProps, dataProps } = useButtonState({ disabled });
  const { active, hover } = state;

  const slot = useMemo(() => {
    return {
      active,
      disabled,
      hover,
    };
  }, [active, disabled, hover]);

  const buttonProps = {
    ref,
    ...eventProps,
    ...dataProps,
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
