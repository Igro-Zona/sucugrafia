<template>
	<UiModal
		:title="title"
		:description="title"
		class="box-content! h-auto! min-h-0! w-full rounded-none shadow-none! ring-0! md:max-w-3xl lg:max-w-7xl"
	>
		<div class="flex flex-col gap-2 p-2 sm:p-4">
			<div class="flex grow items-center justify-between gap-2">
				<h2 class="max-h-12 overflow-y-scroll text-lg font-bold text-pretty sm:text-2xl">
					{{ title }}
				</h2>
				<UiButton
					icon="lucide:x"
					aria-label="Cerrar"
					@click="close"
				/>
			</div>

			<p
				v-if="description"
				class="font-latto text-muted max-h-18 overflow-y-scroll text-pretty"
			>
				{{ description }}
			</p>
		</div>
		<NuxtPicture
			quality="90"
			densities="1x 2x"
			format="avif,webp"
			legacy-format="jpg"
			:src="src"
			provider="cloudinary"
			class="aspect-video w-full overflow-hidden"
			:img-attrs="{
				alt: title ?? '',
				class: 'object-cover w-full h-full',
			}"
			sizes="390px sm:640px lg:1024px xl:1280px"
		/>
	</UiModal>
</template>

<script setup lang="ts">
import type { Image } from "~/composables/useImagesStore";
const { close } = useAppOverlay();
defineProps<Image>();
</script>
