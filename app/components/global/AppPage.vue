<template>
	<section
		:aria-label="title"
		class="pt-5"
	>
		<h2 class="font-latto text-2xl font-bold">{{ title }}</h2>
		<slot />
	</section>
</template>

<script setup lang="ts">
const { title } = defineProps<{
	title: string;
}>();
</script>
