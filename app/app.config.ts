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
		accordion: {
			slots: {
				root: "w-full font-latto text-2xl",
				item: "border-b border-muted last:border-b-0",
				header: "flex",
				trigger:
					"group flex-1 flex items-center gap-4 font-medium focus-visible:outline-primary min-w-0 hover:text-primary cursor-pointer",
				content:
					"data-[state=open]:animate-[accordion-down_200ms_ease-out] data-[state=closed]:animate-[accordion-up_200ms_ease-out] overflow-hidden focus:outline-none",
				body: "text-lg pb-3.5",
				leadingIcon: "shrink-0 size-5",
				trailingIcon:
					"shrink-0 size-6 ms-auto group-data-[state=open]:rotate-180 transition-transform duration-200",
				label: "text-start wrap-break-words text-lg sm:text-xl",
			},
			variants: {
				disabled: {
					true: {
						trigger: "cursor-not-allowed opacity-75",
					},
				},
			},
		},
	},
	icon: {
		size: "30px",
		mode: "svg",
	},
});
