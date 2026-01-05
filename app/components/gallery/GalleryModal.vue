<template>
	<UiModalRoot>
		<UiModalPortal>
			<UiModalOverlay />

			<UiModalContent
				title="Imagen"
				description="Descripcion de la imagen"
				class="aspect-video p-0 lg:max-w-350"
			>
				<GalleryModalImage :src />
			</UiModalContent>
		</UiModalPortal>
	</UiModalRoot>
</template>

<script setup lang="ts">
const { src } = defineProps<{
	src: string;
}>();
</script>
