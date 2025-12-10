<template>
	<section
		:aria-label="title"
		:class="twMerge('space-y-6', className)"
	>
		<h2 class="font-latto text-secondary text-3xl font-bold">{{ title }}</h2>
		<slot />
	</section>
</template>

<script setup lang="ts">
import { twMerge } from "tailwind-merge";

const { title = "Sin titulo", class: className = "" } = defineProps<{
	title?: string;
	class?: string;
}>();
</script>
