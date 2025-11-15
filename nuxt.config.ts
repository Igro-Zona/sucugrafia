// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	modules: ["nitro-cloudflare-dev", "@nuxt/ui", "@nuxt/eslint"],
	css: ["~/assets/css/main.css"],

	ui: {
		experimental: {
			componentDetection: true,
		},
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
