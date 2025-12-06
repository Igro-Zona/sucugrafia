// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	modules: [
		"nitro-cloudflare-dev",
		"@nuxt/eslint",
		"@nuxt/icon",
		"@nuxt/fonts",
		"@nuxt/ui",
		"@nuxt/image",
		"@nuxt/content",
		"@nuxtjs/seo",
	],

	css: ["~/assets/css/main.css"],
	app: {
		head: {
			htmlAttrs: {
				class: "dark",
			},
		},
		pageTransition: {
			name: "page",
			mode: "out-in",
		},
	},

	components: [
		{
			path: "~/components",
			pathPrefix: false,
		},
	],

	nitro: {
		preset: "cloudflare_module",
		cloudflare: {
			deployConfig: true,
		},
	},

	typescript: {
		typeCheck: "build",
	},

	eslint: {
		checker: true,
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

	fonts: {
		defaults: {
			styles: ["normal"],
			subsets: ["latin-ext", "latin"],
		},
	},

	ui: {
		experimental: {
			componentDetection: true,
		},
		colorMode: false,
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

	site: {
		url: "https://sucugrafia.sucua.workers.dev",
		name: "Sucugrafia",
		defaultLocale: "es-EC",
	},
});
