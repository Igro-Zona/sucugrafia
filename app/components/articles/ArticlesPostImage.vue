<template>
	<NuxtPicture
		quality="40"
		width="607"
		height="341"
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
		sizes="607px"
	/>
</template>

<script setup lang="ts">
export interface ArticlesPostImageProps {
	src: string;
}

defineProps<ArticlesPostImageProps>();
</script>
