// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	modules: ["nitro-cloudflare-dev", "@nuxt/ui", "@nuxt/eslint", "@nuxtjs/color-mode", "@nuxt/fonts"],
	css: ["~/assets/css/main.css"],
	components: [
		{
			path: "~/components",
			pathPrefix: false,
		},
	],
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
			weights: ["400 700"],
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
		},
	},
	typescript: {
		typeCheck: "build",
	},
});
