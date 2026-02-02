<template>
	<section
		:aria-label="title"
		:class="twMerge('space-y-6', props.class)"
	>
		<h2 class="font-latto text-primary text-2xl font-bold sm:text-3xl">{{ title }}</h2>
		<slot />
	</section>
</template>

<script setup lang="ts">
import { twMerge, type ClassNameValue } from "tailwind-merge";

export interface UiSectionProps {
	title: string;
	class?: ClassNameValue;
}

const props = withDefaults(defineProps<UiSectionProps>(), {
	class: undefined,
});
</script>
