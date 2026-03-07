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
		"@nuxt/content",
		"@nuxt/image",
		"@nuxtjs/seo",
		"nuxt-aos",
	],

	runtimeConfig: {
		cloudinaryApiKey: "",
		cloudinaryApiSecret: "",
		cloudinaryCloudName: "",
	},

	vite: {
		// @ts-expect-error - Vite Plugin type mismatch between @tailwindcss/vite and @nuxt/vite-builder
		plugins: [tailwindcss()],
		optimizeDeps: { include: ["@vueuse/core", "reka-ui", "tailwindcss/colors"] },
		build: { sourcemap: false, rollupOptions: { output: { manualChunks: { vue: ["vue"], reka: ["reka-ui"] } } } },
	},

	app: { rootAttrs: { class: "isolate" }, head: { htmlAttrs: { class: "dark" } } },
	css: ["~/assets/css/main.css"],
	components: [{ path: "~/components", pathPrefix: false }],
	fonts: { defaults: { weights: ["400 700"], styles: ["normal"], subsets: ["latin-ext", "latin"] } },

	typescript: { typeCheck: "build" },
	eslint: { checker: true },
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

	site: {
		url: "https://sucugrafia.sucua.workers.dev",
		name: "Sucugrafia",
		defaultLocale: "es-EC",
	},
});
