<template>
	<div
		aria-hidden="true"
		class="absolute inset-0 overflow-hidden"
	>
		<UiMarquee
			reverse
			class="absolute -top-80 left-0 h-200 w-115 rotate-x-35 rotate-y-20 rotate-z-30 brightness-40 filter transform-3d"
		>
			<HeroImage
				v-for="src in images"
				:key="src"
				:src="src"
			/>
		</UiMarquee>

		<UiMarquee
			class="absolute -top-80 left-152 h-200 w-115 rotate-x-35 rotate-y-20 rotate-z-30 brightness-40 filter transform-3d"
		>
			<HeroImage
				v-for="src in images"
				:key="src"
				:src="src"
			/>
		</UiMarquee>

		<UiMarquee
			reverse
			class="absolute -top-80 left-304 h-200 w-115 rotate-x-35 rotate-y-20 rotate-z-30 brightness-40 filter transform-3d"
		>
			<HeroImage
				v-for="src in images"
				:key="src"
				:src="src"
			/>
		</UiMarquee>
	</div>
</template>

<script setup lang="ts">
const images = await useImages(8);
</script>
