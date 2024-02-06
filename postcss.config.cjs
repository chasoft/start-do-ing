module.exports = {
	plugins: {
		'postcss-preset-mantine': {},
		'postcss-simple-vars': {
			variables: {
				'mantine-breakpoint-xs': '30em',	//  480px
				'mantine-breakpoint-sm': '40em',	//  640px
				'mantine-breakpoint-md': '48em',	//  768px
				'mantine-breakpoint-lg': '64em',	// 1024px
				'mantine-breakpoint-xl': '80em',	// 1280px
				'mantine-breakpoint-2xl': '96em',	// 1536px
				'mantine-breakpoint-3xl': '120em',// 1920px
			},
		},
	},
};