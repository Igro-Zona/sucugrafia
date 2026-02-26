<template>
	<section
		:aria-label="title"
		:class="!unstyled && 'space-y-6'"
	>
		<slot name="title">
			<h2
				v-if="title"
				class="font-latto text-primary text-2xl font-bold sm:text-3xl"
			>
				{{ title }}
			</h2>
		</slot>

		<slot />
	</section>
</template>

<script setup lang="ts">
import type { StyledComponentProps } from "~/types/Components";

export interface UiSectionProps extends StyledComponentProps {
	title?: string;
}

defineProps<UiSectionProps>();
</script>
