import { createTheme, DEFAULT_THEME, mergeMantineTheme } from "@mantine/core"

export const themeOverride = createTheme({
	breakpoints: {
		xs: "30em", //  480px
		sm: "40em", //  640px
		md: "48em", //  768px
		lg: "64em", // 1024px
		xl: "80em", // 1280px
		"2xl": "96em", // 1536px
		"3xl": "120em" // 1920px
	}
})

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride)
