<template>
	<AppRoot>
		<AppHeader :class="{ '-translate-y-full': isFooterVisible }" />

		<AppMain class="flex flex-col items-center justify-center">
			<UiContainer class="box-border flex flex-col items-center p-10">
				<p
					v-if="error.status"
					class="text-primary font-bold"
				>
					{{ error.status }}
				</p>
				<h1
					v-if="error.statusText"
					class="text-highlighted font-latto mt-2 text-center text-4xl font-bold sm:text-5xl"
				>
					{{ error.statusText }}
				</h1>
				<p
					v-if="error.message && error.message !== error.statusText"
					class="text-muted mt-4 text-lg"
				>
					{{ error.message }}
				</p>
				<UiLink
					:events="true"
					class="text-inverted! font-latto bg-inverted hover:bg-inverted/80 active:bg-inverted/60 mt-8 rounded-full! px-3 py-2 font-semibold"
					to="/"
					icon="lucide:arrow-left"
					label="Volver al inicio"
				/>
			</UiContainer>
		</AppMain>

		<AppFooter ref="footer" />
	</AppRoot>
</template>

<script setup lang="ts">
import type { NuxtError } from "#app";

export interface ErrorRouteProps {
	error: NuxtError;
}

defineProps<ErrorRouteProps>();

const footer = useTemplateRef("footer");
const { isVisible: isFooterVisible } = useElementVisibility(footer);
</script>
