import { useActive, useFocus, useHover } from "@hooks/useDomState";

interface UseTabProps {
  selected: boolean;
  disabled?: boolean;
}

export default function useTabState({ disabled, selected }: UseTabProps) {
  const {
    dataProps: hoverData,
    eventProps: hoverEvents,
    state: hover,
  } = useHover({ disabled });
  const {
    dataProps: focusData,
    eventProps: focusEvents,
    state: focus,
  } = useFocus({ disabled });
  const {
    dataProps: activeData,
    eventProps: activeEvents,
    state: active,
  } = useActive({ disabled });

  return {
    state: { hover, focus, active, selected },
    eventProps: {
      ...hoverEvents,
      ...focusEvents,
      ...activeEvents,
    },
    dataProps: {
      ...hoverData,
      ...focusData,
      ...activeData,
    },
  };
}
