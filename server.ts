import { logDevReady } from "@remix-run/cloudflare"
import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages"
import * as build from "@remix-run/dev/server-build"
import { getLoadContext } from "./load-context"

if (process.env.NODE_ENV === "development") {
	logDevReady(build)
}

export const onRequest = createPagesFunctionHandler({
	build,
	getLoadContext,
	mode: build.mode
})
