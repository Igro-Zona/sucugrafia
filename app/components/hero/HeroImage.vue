<template>
	<NuxtPicture
		quality="40"
		width="460"
		height="259"
		densities="1x 2x"
		format="avif,webp"
		legacy-format="jpg"
		:src
		provider="cloudinary"
		class="block aspect-video w-115"
		:img-attrs="{
			alt: '',
			class: 'rounded-md object-cover w-full  h-full',
			fetchpriority: 'high',
			decoding: 'async',
		}"
		loading="eager"
		sizes="460px"
	/>
</template>

<script setup lang="ts">
const { src } = defineProps<{
	src: string;
}>();
</script>
