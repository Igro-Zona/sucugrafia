// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	modules: [
		"nitro-cloudflare-dev",
		"@nuxt/icon",
		"@nuxt/ui",
		"@nuxt/content",
		"@nuxt/eslint",
		"@nuxtjs/color-mode",
		"@nuxt/fonts",
		"@nuxt/image",
		"@nuxtjs/seo",
	],
	css: ["~/assets/css/main.css"],
	app: {
		head: {
			htmlAttrs: {
				lang: "es",
			},
		},
	},
	components: [
		{
			path: "~/components",
			pathPrefix: false,
		},
	],
	site: {
		url: "https://sucugrafia.sucua.workers.dev",
		name: "Sucugrafia",
	},
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
				observability: {
					logs: { enabled: true },
				},
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
					searchDepth: 3,
				},
				remarkPlugins: {
					"remark-reading-time": {},
				},
			},
		},
		renderer: {
			anchorLinks: true,
		},
	},
});
