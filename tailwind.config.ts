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
		extend: {}
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/aspect-ratio"),
		require("@tailwindcss/container-queries"),
		require("daisyui")
	]
} satisfies Config
