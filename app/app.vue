<template>
	<UApp :locale="es">
		<AppHeader />

		<AppMain class="light:bg-muted">
			<NuxtPage />
		</AppMain>

		<AppFooter />
	</UApp>
</template>

<script setup lang="ts">
import { es } from "@nuxt/ui/locale";
</script>

<style>
.page-enter-active,
.page-leave-active {
	transition: all 0.1s;
}
.page-enter-from,
.page-leave-to {
	opacity: 0;
	filter: opacity(8px) blur(2px);
}
</style>
