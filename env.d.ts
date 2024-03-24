/// <reference types="vite/client" />
/// <reference types="@remix-run/cloudflare" />
/// <reference types="@cloudflare/workers-types" />

declare module "*.mdx" {
	let MDXComponent: (props: unknown) => JSX.Element
	export const frontmatter: unknown
	export default MDXComponent
}
