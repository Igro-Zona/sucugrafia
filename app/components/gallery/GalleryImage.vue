<template>
	<NuxtPicture
		quality="60"
		width="389"
		height="219"
		densities="1x 2x"
		format="avif,webp"
		legacy-format="jpg"
		:src
		provider="cloudinary"
		class="block aspect-video w-97"
		:img-attrs="{
			alt: '',
			class: 'object-cover w-full h-full',
			fetchpriority: 'low',
			decoding: 'async',
		}"
		loading="lazy"
		sizes="389px"
	/>
</template>

<script setup lang="ts">
const { src } = defineProps<{
	src: string;
}>();
</script>
