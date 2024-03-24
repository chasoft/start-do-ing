/* FRAMEWORK & VITE*/
import {
	vitePlugin as remix,
	cloudflareDevProxyVitePlugin as remixCloudflareDevProxy
} from "@remix-run/dev"
import { defineConfig } from "vite"

/* PLUGINS / THIRD-PARTY PACKAGES */
import { cjsInterop } from "vite-plugin-cjs-interop"
import { visualizer } from "rollup-plugin-visualizer"
import mdx from "@mdx-js/rollup"
import remarkFrontmatter from "remark-frontmatter"
import remarkMdxFrontmatter from "remark-mdx-frontmatter"
import tsconfigPaths from "vite-tsconfig-paths"

/* UTILS */
import { getLoadContext } from "./load-context"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export default defineConfig({
	plugins: [
		/**
		 * https://remix.run/docs/en/main/future/vite#cloudflare-proxy
		 */
		remixCloudflareDevProxy({ getLoadContext }),
		/**
		 * https://remix.run/docs/en/main/future/vite#add-mdx-frontmatter-support
		 */
		mdx({
			remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter]
		}),
		/**
		 * The subset of supported Remix config options should be passed directly
		 * to the plugin
		 */
		remix({
			ignoredRouteFiles: ["**/*.css"]
		}),
		/**
		 * The Remix compiler leverages the paths option in your tsconfig.json
		 * to resolve path aliases. This is commonly used in the Remix community
		 * to define ~ as an alias for the app directory.
		 *
		 * Vite does not provide any path aliases by default. If you were relying
		 * on this feature, you can install the vite-tsconfig-paths plugin
		 * to automatically resolve path aliases from your tsconfig.json in Vite,
		 * matching the behavior of the Remix compiler:
		 *
		 * https://remix.run/docs/en/main/future/vite#configure-path-aliases
		 */
		tsconfigPaths(),
		/**
		 * Visualizer will create 2 files which can be opened in a browser:
		 * - ./build/client/stats.html
		 * - ./build/server/stats.html
		 * You can open them in your browser to see how the bundle is bundled.
		 */
		visualizer({ emitFile: true }),
		/**
		 * Unwrap default imports from CJS dependencies during SSR.
		 * To know now to use this plugin, please read usage section of this article
		 * https://www.npmjs.com/package/vite-plugin-cjs-interop
		 */
		cjsInterop({
			dependencies: ["@uiw/react-heat-map"]
		})
	],
	ssr: {
		resolve: {
			externalConditions: ["workerd", "worker"]
		}
	}
})
