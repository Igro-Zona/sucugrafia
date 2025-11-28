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
		contentSurround: {
			slots: {
				link: ["px-4 py-4"],
				linkLeading: ["group-hover:bg-secondary/10 ring group-hover:ring-secondary/50"],
				linkLeadingIcon: ["group-hover:text-secondary"],
				linkDescription: "text-left",
			},
		},
		theme: {
			dark: true,
		},
	},
});
