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
		:class="twMerge('block aspect-video w-97', className)"
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
import { twMerge } from "tailwind-merge";

const { src, class: className = "" } = defineProps<{
	src: string;
	class?: string;
}>();
</script>
