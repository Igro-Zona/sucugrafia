<template>
	<section
		:aria-label="title"
		:class="twMerge('space-y-6', className)"
	>
		<h2 class="font-latto text-primary text-2xl font-bold sm:text-3xl">{{ title }}</h2>
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
