// import { BREAKPOINT_TYPE } from "~/data/constants";

type RouteWithHandle<Handle extends string, Value> = {
  id: string;
  pathname: string;
  params: Params<string>;
  data: unknown;
  handle: Record<Handle, Value>;
};

function isRecordWithKey<T extends string>(
  value: unknown,
  key: T
): value is Record<T, unknown> {
  return !!value && typeof value === "object" && key in value;
}

export function hasHandle<Handle extends string, Value>(
  handle: Handle,
  valuePredicate?: (v: unknown) => v is Value
) {
  return (
    route:
      | {
          handle: unknown;
        }
      | RouteWithHandle<Handle, Value>
  ): route is RouteWithHandle<Handle, Value> => {
    return (
      !!route.handle &&
      isRecordWithKey(route.handle, handle) &&
      (!valuePredicate ||
        (handle in route.handle && valuePredicate(route.handle[handle])))
    );
  };
}

export function isString(value: unknown): value is string {
  return typeof value === "string";
}

/**
 * Default breakpoint for server is `lg`
 */
// export function getCurrentBreakpoint(): BREAKPOINT_TYPE {
//   d
// }
