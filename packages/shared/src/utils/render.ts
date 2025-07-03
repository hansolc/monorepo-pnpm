import { RenderProps } from "src/types";
import {
  cloneElement,
  createElement,
  Fragment,
  isValidElement,
  ElementType,
  ReactNode,
  ReactElement,
  Ref,
  forwardRef,
} from "react";

export function forwardRefWithAs<T extends ElementType>(
  component: T,
  name: string
) {
  return Object.assign(forwardRef(component as any), {
    displayName: name,
  });
}

export function mergeRefs<T>(
  ...refs: (React.Ref<T> | undefined)[]
): React.RefCallback<T> {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(value); // 콜백 ref 처리
      } else if (ref && typeof ref === "object") {
        (ref as React.MutableRefObject<T | null>).current = value; // 객체 ref 처리
      }
    });
  };
}

interface RenderComponentType<TSlot extends object> {
  as: ElementType;
  children: RenderProps<TSlot>;
  ref: Ref<HTMLElement>;
  slot?: TSlot;
  props?: Record<string, any>;
}

export function renderWithComponent<TSlot extends object>({
  as,
  slot,
  ref,
  props,
  children,
}: RenderComponentType<TSlot>): ReactElement | null {
  // render props 인 경우
  if (typeof children === "function") {
    const rendered = (children as (slot: TSlot | undefined) => ReactNode)(slot);

    // render props 인 경우에서 Component의 Tag가 Fragment인 경우
    // cloneElement 로 자식 노드에게 porps값 전달
    if (as === Fragment) {
      if (isValidElement(rendered)) {
        return cloneElement(rendered, {
          ...props,
          ref,
        });
      }

      if (process.env.NODE_ENV !== "production") {
        console.warn(
          "[renderWithComponent] as={Fragment}일 때 children(slot)은 반드시 단일 ReactElement를 반환해야 합니다."
        );
      }

      return null;
    }

    return createElement(as, {
      ...props,
      ref,
      children: rendered,
    });
  }

  // render props을 사용하지 않을 경우
  return createElement(as, {
    ...props,
    ref,
    children,
  });
}
