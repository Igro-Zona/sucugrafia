<template>
	<UApp :locale="es">
		<AppHeader
			class="transition-transform"
			:class="{ '-translate-y-full': footerIsVisible }"
		/>

		<AppMain class="light:bg-muted">
			<NuxtPage />
		</AppMain>

		<AppFooter ref="footer" />
	</UApp>
</template>

<script setup lang="ts">
import { es } from "@nuxt/ui/locale";
import { useIntersectionObserver } from "@vueuse/core";

const footer = useTemplateRef("footer");
const footerIsVisible = ref(false);

useIntersectionObserver(footer, ([entry], _) => {
	footerIsVisible.value = entry?.isIntersecting || false;
});
</script>
