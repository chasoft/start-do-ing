import type { Config } from "tailwindcss"

export default {
	content: ["./app/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			xs: "480px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
			"3xl": "1920px"
		},
		extend: {
			/**
			 * For demo only, will prepare a list of images for rotation
			 */
			backgroundImage: {
				"left-block-1": "url('../app/assets/climbing.jpg')"
			}
		}
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/aspect-ratio"),
		require("@tailwindcss/container-queries"),
		require("daisyui")
	]
} satisfies Config
