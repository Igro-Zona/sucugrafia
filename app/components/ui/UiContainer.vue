<template>
	<div :class="twMerge('mx-auto w-full max-w-(--ui-container) px-4 sm:px-6 lg:px-8', props.class)">
		<slot />
	</div>
</template>

<script setup lang="ts">
import { twMerge, type ClassNameValue } from "tailwind-merge";

export interface UiContainerProps {
	class?: ClassNameValue;
}

const props = withDefaults(defineProps<UiContainerProps>(), {
	class: undefined,
});
</script>
