import * as React from "react";

export function useEventListener<K extends keyof DocumentEventMap>(
  ref: React.RefObject<HTMLElement>,
  type: K,
  listener: (event: DocumentEventMap[K]) => any,
  deps?: any[],
  options?: boolean | EventListenerOptions
) {
  React.useEffect(() => {
    if (!ref.current) return undefined;

    ref.current.addEventListener(type, listener, options);

    return () => {
      if (ref.current) {
        ref.current.removeEventListener(type, listener, options);
      }
    };
  }, deps);
}
