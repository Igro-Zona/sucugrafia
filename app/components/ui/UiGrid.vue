<template>
	<div :class="twMerge('grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3', props.class)">
		<slot />
	</div>
</template>

<script setup lang="ts">
import { twMerge, type ClassNameValue } from "tailwind-merge";

export interface UiGridProps {
	class?: ClassNameValue;
}

const props = withDefaults(defineProps<UiGridProps>(), {
	class: undefined,
});
</script>
