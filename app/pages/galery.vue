<template>
	<AppPage title="Nuestra galeria">
		<ScrollAreaRoot
			class="h-[80dvh]"
			style="--scrollbar-size: 10px"
		>
			<ScrollAreaViewport
				class="my-4 grid h-full auto-rows-max grid-cols-1 gap-4 px-4 md:grid-cols-2 lg:grid-cols-3"
				:as-child="true"
			>
				<button
					v-for="src in images"
					:key="src"
					class="cursor-pointer"
					@click="open(src)"
				>
					<NuxtPicture
						provider="cloudinary"
						:src="`${src}`"
						class="block overflow-hidden rounded-xl object-cover"
						:img-attrs="{ alt: 'Gallery image', loading: 'lazy', class: 'w-full aspect-video  ' }"
					/>
				</button>
			</ScrollAreaViewport>
			<ScrollAreaScrollbar class="bg-muted w-2.5 rounded-2xl p-[1.5px]">
				<ScrollAreaThumb class="bg-secondary cursor-grab rounded-2xl" />
			</ScrollAreaScrollbar>
		</ScrollAreaRoot>
	</AppPage>
</template>

<script setup lang="ts">
import { ScrollAreaRoot, ScrollAreaScrollbar, ScrollAreaThumb, ScrollAreaViewport } from "reka-ui";
import ImageModal from "~/components/ImageModal.vue";

const images = Array.from({ length: 8 }, (_, i) => `img${i + 1}.jpg`);

const overlay = useOverlay();
const modal = overlay.create(ImageModal);

async function open(src: string) {
	modal.open({
		src: src,
	});
}
</script>
