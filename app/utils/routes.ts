type RouteWithHandle<Handle extends string, Value> = {
	id: string
	pathname: string
	params: Params<string>
	data: unknown
	handle: Record<Handle, Value>
}

function isRecordWithKey<T extends string>(
	value: unknown,
	key: T
): value is Record<T, unknown> {
	return !!value && typeof value === "object" && key in value
}

export function hasHandle<Handle extends string, Value>(
	handle: Handle,
	valuePredicate?: (v: unknown) => v is Value
) {
	return (
		route:
			| {
					handle: unknown
			  }
			| RouteWithHandle<Handle, Value>
	): route is RouteWithHandle<Handle, Value> => {
		return (
			!!route.handle &&
			isRecordWithKey(route.handle, handle) &&
			(!valuePredicate ||
				(handle in route.handle && valuePredicate(route.handle[handle])))
		)
	}
}

export function isString(value: unknown): value is string {
	return typeof value === "string"
}

export function isJSXElement(value: unknown): value is JSX.Element {
	if (typeof value !== "object" || value === null) {
		return false // Not an object, so definitely not a JSX element
	}
	const maybeEl = value as JSX.Element // Narrow the type
	return typeof maybeEl.type === "function" && "key" in value
}
