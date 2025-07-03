import { useCallback, useEffect, useRef } from "react";

export default function useEvent<T extends (...args: any[]) => any>(
  callback: T
): T {
  const callbackRef = useRef(callback);
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  return useCallback(
    ((...args) => {
      return callbackRef.current(...args);
    }) as T,
    []
  );
}
