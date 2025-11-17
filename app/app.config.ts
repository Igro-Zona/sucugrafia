export default defineAppConfig({
	ui: {
		colors: {
			primary: "green",
			secondary: "yellow",
			neutral: "neutral",
			day: "day",
			night: "night",
		},
		navigationMenu: {
			variants: {
				disabled: {
					true: {
						link: "cursor-default opacity-75",
					},
				},
			},
		},
	},
});
