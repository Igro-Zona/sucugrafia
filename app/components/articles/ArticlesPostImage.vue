<template>
	<NuxtPicture
		quality="60"
		width="482"
		height="271"
		densities="1x 2x"
		format="avif,webp"
		legacy-format="jpg"
		:src="src"
		provider="cloudinary"
		class="block aspect-video w-full transition-transform group-hover:scale-110"
		:img-attrs="{
			alt: '',
			class: 'object-cover w-full  h-full',
		}"
		:loading="index === undefined ? 'lazy' : index <= 6 ? undefined : 'lazy'"
		sizes="482px"
	/>
</template>

<script setup lang="ts">
export interface ArticlesPostImageProps {
	src: string;
	index?: number;
}

defineProps<ArticlesPostImageProps>();
</script>
