<template>
	<NuxtPicture
		quality="90"
		densities="1x 2x"
		format="avif,webp"
		legacy-format="jpg"
		:src="src"
		provider="cloudinary"
		class="absolute inset-0"
		:img-attrs="{
			alt: '',
			class: 'object-cover w-full h-full',
		}"
		sizes="390px sm:640px lg:1024px xl:1280px"
	/>
</template>

<script setup lang="ts">
export interface GalleryModalImageProps {
	src: string;
}

defineProps<GalleryModalImageProps>();
</script>
