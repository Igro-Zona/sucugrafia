<template>
	<NuxtPicture
		quality="60"
		width="318"
		height="179"
		densities="1x 2x"
		format="avif,webp"
		legacy-format="jpg"
		:src
		provider="cloudinary"
		class="block aspect-video w-full"
		:img-attrs="{
			alt: '',
			class: 'object-cover w-full h-full',
		}"
		loading="lazy"
		sizes="318px sm:389px"
	/>
</template>

<script setup lang="ts">
const { src } = defineProps<{
	src: string;
}>();
</script>
