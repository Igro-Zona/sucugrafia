<template>
	<NuxtPicture
		quality="60"
		width="384"
		height="216"
		densities="1x 2x"
		format="avif,webp"
		legacy-format="jpg"
		:src
		provider="cloudinary"
		class="block aspect-video w-96"
		:img-attrs="{
			alt: '',
			class: 'rounded-xs object-cover w-full  h-full',
			fetchpriority: 'low',
			decoding: 'async',
		}"
		loading="lazy"
		sizes="384px"
	/>
</template>

<script setup lang="ts">
const { src } = defineProps<{
	src: string;
}>();
</script>
