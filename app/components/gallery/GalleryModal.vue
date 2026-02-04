<template>
	<UiModalRoot>
		<UiModalPortal>
			<UiModalOverlay />

			<UiModalContent
				title="Imagen"
				description="Descripcion de la imagen"
				class="aspect-video p-0 lg:max-w-350"
			>
				<GalleryModalImage :src="src" />
			</UiModalContent>
		</UiModalPortal>
	</UiModalRoot>
</template>

<script setup lang="ts">
export interface GalleryModalProps {
	src: string;
}

defineProps<GalleryModalProps>();
</script>
