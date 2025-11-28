<template>
	<div :class="twMerge('mx-auto w-full max-w-(--ui-container) px-4 sm:px-6 lg:px-8', props.class)">
		<slot />
	</div>
</template>

<script setup lang="ts">
import { twMerge } from "tailwind-merge";

const props = defineProps<{
	class?: string;
}>();
</script>
