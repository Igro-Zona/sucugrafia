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
		"@nuxt/content",
		"@nuxt/image",
		"@nuxtjs/seo",
		"nuxt-aos",
	],

	vite: {
		resolve: {
			alias: {
				lodash: "lodash-es",
			},
		},
	},

	css: ["~/assets/css/main.css"],
	app: {
		head: {
			htmlAttrs: {
				class: "dark",
			},
		},
	},

	components: [
		{
			path: "~/components",
			pathPrefix: false,
		},
	],

	mdc: {
		components: {
			prose: false,
		},
	},

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
		clientBundle: {
			icons: ["lucide:menu", "simple-icons:github", "lucide:chevron-down"],
			scan: true,
			includeCustomCollections: true,
			sizeLimitKb: 4096,
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
		domains: ["sucugrafia.sucua.workers.dev", "res.cloudinary.com"],
		cloudinary: {
			baseURL: "https://res.cloudinary.com/dk7roc9rs/image/upload",
			modifiers: {},
		},
		screens: {
			sm: 640,
			md: 768,
			lg: 1024,
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
