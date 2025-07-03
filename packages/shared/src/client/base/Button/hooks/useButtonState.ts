import { useActive, useFocus, useHover } from "@hooks/useDomState";

interface UseButtonProps {
  disabled?: boolean;
}

export default function useButtonState({ disabled }: UseButtonProps) {
  const {
    dataProps: hoverData,
    eventProps: hoverEvents,
    state: hover,
  } = useHover({ disabled });
  const {
    dataProps: activeData,
    eventProps: activeEvents,
    state: active,
  } = useActive({ disabled });

  const disabledData =
    disabled !== undefined
      ? { "data-disabled": disabled ? "" : undefined }
      : {};

  return {
    state: { hover, active },
    eventProps: {
      ...hoverEvents,
      ...activeEvents,
    },
    dataProps: {
      ...hoverData,
      ...activeData,
      ...disabledData,
    },
  };
}
