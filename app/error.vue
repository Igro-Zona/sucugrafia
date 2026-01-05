<template>
	<UApp :locale="es">
		<AppOverlay />
		<AppHeader />

		<AppMain class="flex items-center justify-center">
			<div class="flex max-w-200 flex-col items-center justify-center p-4">
				<p
					v-if="error.statusCode"
					class="text-primary text-base font-semibold"
				>
					{{ error.statusCode }}
				</p>
				<h2
					v-if="error.statusMessage"
					class="text-highlighted mt-2 text-center text-4xl font-bold sm:text-5xl"
				>
					{{ error.statusMessage }}
				</h2>
				<p
					v-if="error.message && error.message !== error.statusMessage"
					class="text-muted mt-4 text-center text-lg"
				>
					{{ error.message }}
				</p>
				<UiLink
					:styled="false"
					class="text-inverted bg-inverted hover:bg-inverted/80 active:bg-inverted/60 mt-8 flex items-center justify-center gap-2 rounded-full px-3 py-2 font-medium"
					to="/"
				>
					<Icon
						name="i-lucide-arrow-left"
						size="24"
					/>
					<span>Volver al inicio</span></UiLink
				>
			</div>
		</AppMain>

		<AppFooter />
	</UApp>
</template>

<script setup lang="ts">
import type { NuxtError } from "#app";
import { es } from "@nuxt/ui/locale";

const { error } = defineProps<{
	error: NuxtError;
}>();
</script>
