<template>
	<AppRoot>
		<AppHeader />

		<AppMain class="flex items-center justify-center">
			<div class="flex max-w-200 flex-col items-center justify-center p-4">
				<p
					v-if="error.status"
					class="text-primary text-base font-semibold"
				>
					{{ error.status }}
				</p>
				<h2
					v-if="error.statusText"
					class="text-highlighted mt-2 text-center text-4xl font-bold sm:text-5xl"
				>
					{{ error.statusText }}
				</h2>
				<p
					v-if="error.message && error.message !== error.statusText"
					class="text-muted mt-4 text-center text-lg"
				>
					{{ error.message }}
				</p>
				<UiLink
					:events="true"
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
	</AppRoot>
</template>

<script setup lang="ts">
import type { NuxtError } from "#app";

export interface ErrorRouteProps {
	error: NuxtError;
}

defineProps<ErrorRouteProps>();
</script>
