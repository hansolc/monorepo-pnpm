import { useState } from "react";

type DisabledProps = { disabled?: boolean };

type Handler = (...args: any[]) => boolean;

type InteractionHook<TEventKey extends string> = (props?: DisabledProps) => {
  state: boolean;
  eventProps: Partial<Record<TEventKey, (...args: any[]) => void>>;
  dataProps: Record<string, string>;
};

export function createInteractionHook<TEventKey extends string>(
  key: string,
  handlers: Record<TEventKey, Handler>
): InteractionHook<TEventKey> {
  return function useInteraction({ disabled = false } = {}) {
    const [value, setValue] = useState(false);

    if (disabled) {
      return {
        state: false,
        eventProps: {},
        dataProps: {},
      };
    }

    const wrappedEvents: Partial<Record<TEventKey, (...args: any[]) => void>> =
      {};

    for (const eventName in handlers) {
      wrappedEvents[eventName] = (...args: any[]) =>
        setValue(handlers[eventName](...args));
    }

    return {
      state: value,
      eventProps: wrappedEvents,
      dataProps: value ? { [`data-${key}`]: "" } : {},
    };
  };
}
