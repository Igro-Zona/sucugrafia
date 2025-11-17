<template>
	<UModal
		:close="false"
		fullscreen
		:scrollable="false"
		title="Imagen"
		description="Descripcion del imagen"
		:ui="{
			header: 'hidden',
			content: ' aspect-video max-h-[80dvh] max-w-[80dvw]  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
			body: 'relative overflow-hidden',
		}"
	>
		<template #body>
			<NuxtPicture
				:key="src"
				:src="`/${src}`"
				class="block h-full w-full overflow-hidden rounded-xl"
				:img-attrs="{ alt: 'Gallery image', loading: 'lazy', class: 'w-full aspect-video  ' }"
			/>
		</template>
	</UModal>
</template>

<script setup lang="ts">
const { src } = defineProps<{
	src: string;
}>();
</script>
