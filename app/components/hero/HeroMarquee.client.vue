<template>
	<div
		aria-hidden="true"
		class="absolute top-0 -right-4 bottom-0 -left-4 z-2 overflow-hidden sm:-right-6 sm:-left-6 lg:-right-8 lg:-left-8"
	>
		<UMarquee
			reverse
			orientation="vertical"
			:overlay="false"
			:ui="{
				root: '[--duration:40s] absolute w-[460px] -left-[120px] -top-[800px] h-[2000px] transform-3d rotate-x-55 rotate-y-0 rotate-z-30',
			}"
		>
			<NuxtPicture
				v-for="src in images"
				:key="src"
				provider="cloudinary"
				:src="`${src}`"
				width="460"
				height="258"
				class="border-default block aspect-video overflow-hidden rounded-lg object-cover blur-[1px] brightness-50 filter"
				:img-attrs="{ alt: 'Gallery image', loading: 'lazy' }"
			/>
		</UMarquee>
		<UMarquee
			orientation="vertical"
			:overlay="false"
			:ui="{
				root: '[--duration:40s] absolute w-[460px] -top-[820px] left-[480px] h-[2000px] transform-3d rotate-x-55 rotate-y-0 rotate-z-30',
			}"
		>
			<NuxtPicture
				v-for="src in images"
				:key="src"
				provider="cloudinary"
				:src="`${src}`"
				width="460"
				height="258"
				class="border-default block aspect-video overflow-hidden rounded-lg object-cover blur-[1px] brightness-50 filter"
				:img-attrs="{ alt: 'Gallery image', loading: 'lazy' }"
			/>
		</UMarquee>
		<UMarquee
			reverse
			orientation="vertical"
			:overlay="false"
			:ui="{
				root: 'hidden md:flex [--duration:40s] absolute w-[460px] -top-[780px] left-[1020px] h-[2000px] transform-3d rotate-x-55 rotate-y-0 rotate-z-30',
			}"
		>
			<NuxtPicture
				v-for="src in images"
				:key="src"
				provider="cloudinary"
				:src="`${src}`"
				width="460"
				height="258"
				class="border-default block aspect-video overflow-hidden rounded-lg object-cover blur-[1px] brightness-50 filter"
				:img-attrs="{ alt: 'Gallery image', loading: 'lazy' }"
			/>
		</UMarquee>
	</div>
</template>

<script setup lang="ts">
const images = Array.from({ length: 8 }, (_, i) => `img${i + 1}.jpg`);
</script>
