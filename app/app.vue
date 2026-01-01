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
			type: "image/ico",
			href: "/favicon.ico",
		},
	],
});

const footer = useTemplateRef("footer");
const footerIsVisible = ref(false);

useIntersectionObserver(footer, ([entry], _) => {
	footerIsVisible.value = entry?.isIntersecting || false;
});
</script>
