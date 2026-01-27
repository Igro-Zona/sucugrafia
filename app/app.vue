<template>
	<UApp :locale="es">
		<AppOverlay />
		<AppHeader
			class="transition-transform"
			:class="{ '-translate-y-full': footerIsVisible }"
		/>

		<AppMain>
			<NuxtPage />
		</AppMain>

		<AppFooter ref="footer" />
	</UApp>
</template>

<script setup lang="ts">
import { es } from "@nuxt/ui/locale";
import { useIntersectionObserver } from "@vueuse/core";

useHead({
	link: [
		{
			rel: "icon",
			type: "image/png",
			href: "/favicon-96x96.png",
			sizes: "96x96",
		},
		{
			rel: "icon",
			type: "image/svg+xml",
			href: "/favicon.svg",
		},
		{
			rel: "shortcut icon",
			href: "/favicon.ico",
		},
		{
			rel: "apple-touch-icon",
			sizes: "180x180",
			href: "/apple-touch-icon.png",
		},
		{
			rel: "manifest",
			href: "/site.webmanifest",
		},
	],
	meta: [
		{
			name: "apple-mobile-web-app-title",
			content: "Sucugrafia",
		},
	],
});

const footer = useTemplateRef("footer");
const footerIsVisible = ref(false);

useIntersectionObserver(footer, ([entry], _) => {
	footerIsVisible.value = entry?.isIntersecting || false;
});
</script>
