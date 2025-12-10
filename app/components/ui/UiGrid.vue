<template>
	<div :class="twMerge('grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3', className)">
		<slot />
	</div>
</template>

<script setup lang="ts">
import { twMerge } from "tailwind-merge";

const { class: className = "" } = defineProps<{
	class?: string;
}>();
</script>
