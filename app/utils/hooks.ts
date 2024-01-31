/* FRAMEWORK */
import React from "react";
import { useMatches, useSearchParams } from "@remix-run/react";

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { getMediaBreakpoint } from ".";
import type { CustomRouteHandle } from "./types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { DEFAULT_BLOCK } from "~/data";

/***************************************************************************
 *
 *  HOOKS
 *
 **************************************************************************/

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

export function useCurrentLayoutId() {
  const matches = useMatches();
  const activeHandle = matches[matches.length - 1].handle as CustomRouteHandle;
  const currenLayoutId = activeHandle.layoutId ?? DEFAULT_BLOCK.id;
  return currenLayoutId;
}

export function useIsFullscreen() {
  const [searchParams] = useSearchParams();
  const isFullScreen = searchParams.get("full") === "true";
  return [isFullScreen];
}
