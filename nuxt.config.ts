import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	modules: [
		"nitro-cloudflare-dev",
		"@nuxt/eslint",
		"@nuxt/icon",
		"@nuxt/fonts",
		"reka-ui/nuxt",
		"@nuxt/image",
		"@nuxtjs/seo",
		"@nuxt/content",
		"nuxt-aos",
	],

	runtimeConfig: {
		cloudinaryApiKey: "",
		cloudinaryApiSecret: "",
		cloudinaryCloudName: "",
	},

	vite: {
		plugins: [tailwindcss({ optimize: true })],
		optimizeDeps: { include: ["@vueuse/core", "reka-ui", "tailwindcss/colors", "@vue/devtools-core", "@vue/devtools-kit"] },
		build: {
			sourcemap: false,
			rollupOptions: {
				onwarn(warning, warn) {
					if (warning.code === "SOURCEMAP_BROKEN") return;
					warn(warning);
				},
			},
		},
	},

	app: { rootAttrs: { class: "isolate" }, head: { htmlAttrs: { class: "dark" } } },
	css: ["~/assets/css/main.css"],
	components: [{ path: "~/components", pathPrefix: false }],
	fonts: { defaults: { weights: ["400 700"], styles: ["normal"], subsets: ["latin-ext", "latin"] } },

	typescript: { typeCheck: "build" },
	eslint: { checker: { eslintPath: "eslint" } },
	image: { cloudinary: { baseURL: "https://res.cloudinary.com/dk7roc9rs/image/upload" } },
	ogImage: false,
	sitemap: { zeroRuntime: true },

	nitro: {
		sourceMap: false,
		preset: "cloudflare_module",
		cloudflare: {
			deployConfig: true,
			wrangler: {
				d1_databases: [
					{
						binding: "DB",
						database_name: "content",
						database_id: "85935025-4a15-4768-9463-a83fd7b0f1d8",
					},
				],
			},
		},
	},

	icon: {
		provider: "none",
		serverBundle: false,
		clientBundle: { scan: true, includeCustomCollections: true, sizeLimitKb: 4096 },
		customCollections: [{ prefix: "sucua", dir: "./app/assets/icons" }],
	},

	content: {
		database: { type: "d1", bindingName: "DB" },
		build: {
			markdown: {
				toc: { depth: 3, searchDepth: 3 },
				remarkPlugins: { "remark-reading-time": {} },
				highlight: false,
			},
		},
		renderer: { anchorLinks: true },
	},

	robots: {
		blockAiBots: true,
		blockNonSeoBots: true,
		autoI18n: false,
	},

	site: {
		url: "https://sucugrafia.sucua.workers.dev",
		name: "Sucugrafia",
		defaultLocale: "es-EC",
		title: "Sucugrafia - Mejor forma para conocer a cantón Sucua",
		description:
			"Descubre Sucugrafia: historia, cultura y tradición en un solo lugar. Explora una galería vibrante y artículos únicos que revelan la esencia del cantón Sucúa.",
	},
});
