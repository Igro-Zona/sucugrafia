// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	modules: [
		"nitro-cloudflare-dev",
		"@nuxt/icon",
		"@nuxt/ui",
		"@nuxt/eslint",
		"@nuxtjs/color-mode",
		"@nuxt/fonts",
		"@nuxt/image",
		"@nuxt/content",
	],
	css: ["~/assets/css/main.css"],
	components: [
		{
			path: "~/components",
			pathPrefix: false,
		},
	],
	icon: {
		serverBundle: false,
		clientBundle: {
			scan: true,
			includeCustomCollections: true,
			sizeLimitKb: 256,
		},
		customCollections: [
			{
				provider: "",
				prefix: "sucua",
				dir: "./app/assets/icons",
			},
		],
	},
	ui: {
		theme: {
			colors: ["primary", "secondary", "info", "success", "warning", "error", "day", "night"],
		},
		experimental: {
			componentDetection: true,
		},
	},
	fonts: {
		defaults: {
			styles: ["normal"],
			subsets: ["latin-ext", "latin"],
		},
	},
	colorMode: {
		preference: "dark",
	},
	eslint: {
		checker: true,
	},
	nitro: {
		preset: "cloudflare_module",

		cloudflare: {
			deployConfig: true,
			nodeCompat: true,
			wrangler: {
				d1_databases: [
					{
						binding: "DB",
						database_name: "content",
						database_id: "0767df81-aea3-4baf-9cb9-d95fd60612ee",
					},
				],
			},
		},
	},
	typescript: {
		typeCheck: "build",
	},
	image: {
		quality: 90,
		format: ["avif", "webp"],
		densities: [1, 2],
		domains: ["sucugrafia.sucua.workers.dev"],
		cloudinary: {
			baseURL: "https://res.cloudinary.com/dk7roc9rs/image/upload",
		},
	},
	content: {
		database: {
			type: "d1",
			bindingName: "DB",
		},
		build: {
			markdown: {
				toc: {
					depth: 3,
				},
			},
			pathMeta: {
				forceLeadingSlash: false,
			},
		},
		renderer: {
			anchorLinks: false,
		},
	},
});
