export default defineAppConfig({
	ui: {
		colors: {
			primary: "green",
			secondary: "yellow",
			neutral: "neutral",
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
				link: ["px-4 py-4 bg-default"],
				linkLeading: ["group-hover:bg-primary/10 ring group-hover:ring-primary/50"],
				linkLeadingIcon: ["group-hover:text-primary"],
				linkDescription: "text-left",
			},
		},
	},
	icon: {
		size: "1.5rem",
		class: "icon",
		mode: "svg",
		cssLayer: "base",
		fallbackToApi: false,
	},
});
