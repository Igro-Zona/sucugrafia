<template>
	<UiModal
		title="Imagen"
		description="Descripcion de la imagen"
		class="box-content! h-auto! min-h-0! w-full rounded-none pt-20 shadow-none! ring-0! md:max-w-3xl lg:max-w-7xl"
	>
		<NuxtPicture
			quality="90"
			densities="1x 2x"
			format="avif,webp"
			legacy-format="jpg"
			:src="src"
			provider="cloudinary"
			class="aspect-video w-full overflow-hidden"
			:img-attrs="{
				alt: '',
				class: 'object-cover w-full h-full',
			}"
			sizes="390px sm:640px lg:1024px xl:1280px"
		/>
	</UiModal>
</template>

<script setup lang="ts">
defineProps<{ src: string }>();
</script>
