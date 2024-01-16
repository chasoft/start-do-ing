import React from "react";
import { getMediaBreakpoint } from ".";

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = React.useState(
    () => getMediaBreakpoint()[0]
  );

  useIsomorphicLayoutEffect(() => {
    function updateBreakpoint() {
      setBreakpoint(getMediaBreakpoint()[0]);
    }
    window.addEventListener("resize", updateBreakpoint);
    updateBreakpoint();
    return () => window.removeEventListener("resize", updateBreakpoint);
  }, []);

  return breakpoint;
}
