<template>
	<div
		aria-hidden="true"
		class="absolute inset-0 overflow-hidden"
	>
		<!-- <UiSkeleton class="aspect-video w-115" /> -->

		<UMarquee
			reverse
			orientation="vertical"
			:overlay="false"
			:ui="{
				root: '[--duration:40s] absolute w-115 -left-30 -top-200 h-500 transform-3d rotate-x-55 rotate-y-0 rotate-z-30',
			}"
		>
			<NuxtPicture
				v-for="src in images"
				:key="src"
				quality="60"
				width="460"
				height="259"
				densities="1x 2x"
				format="avif,webp"
				legacy-format="jpg"
				:src="src"
				provider="cloudinary"
				class="block aspect-video w-115"
				:img-attrs="{
					alt: '',
					class: 'rounded-md object-cover w-full aspect-video',
				}"
				loading="eager"
				sizes="460px"
			/>
		</UMarquee>
		<UMarquee
			orientation="vertical"
			:overlay="false"
			:ui="{
				root: '[--duration:40s] absolute w-115 -top-205 left-120 h-500 transform-3d rotate-x-55 rotate-y-0 rotate-z-30',
			}"
		>
			<NuxtPicture
				v-for="src in images"
				:key="src"
				quality="60"
				width="460"
				height="259"
				densities="1x 2x"
				format="avif,webp"
				legacy-format="jpg"
				:src="src"
				provider="cloudinary"
				class="block aspect-video w-115"
				:img-attrs="{
					alt: '',
					class: 'rounded-md object-cover w-full aspect-video',
				}"
				loading="eager"
				sizes="460px"
			/>
		</UMarquee>
		<UMarquee
			reverse
			orientation="vertical"
			:overlay="false"
			:ui="{
				root: 'hidden md:flex [--duration:40s] absolute w-115 -top-195 left-255 h-500 transform-3d rotate-x-55 rotate-y-0 rotate-z-30',
			}"
		>
			<NuxtPicture
				v-for="src in images"
				:key="src"
				quality="60"
				width="460"
				height="259"
				densities="1x 2x"
				format="avif,webp"
				legacy-format="jpg"
				:src="src"
				provider="cloudinary"
				class="block aspect-video w-115"
				:img-attrs="{
					alt: '',
					class: 'rounded-md object-cover w-full aspect-video',
				}"
				loading="eager"
				sizes="460px"
			/>
		</UMarquee>
	</div>
</template>

<script setup lang="ts">
const images = Array.from({ length: 8 }, (_, i) => `img${i + 1}.jpg`);
</script>
