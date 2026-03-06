<template>
	<ScrollAreaRoot
		ref="scrollList"
		class="relative mt-4 h-300 w-full pr-4"
		tabindex="0"
		@keydown="handleKeydown"
	>
		<ScrollAreaViewport
			v-if="!isVirtualizerReady"
			class="relative h-full w-full"
			as-child
		>
			<div
				role="feed"
				class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
			>
				<article
					v-for="(image, index) in images"
					:key="index"
					class="relative aspect-video w-full overflow-hidden rounded-xs filter transition-[filter] focus-within:brightness-50 hover:brightness-120"
				>
					<h3 class="sr-only">Imagen {{ index + 1 }} de la galeria</h3>
					<UiButton
						unstyled
						class="absolute inset-0 cursor-pointer"
						:tabindex="tabindex"
						:aria-label="`Abrir imagen ${index + 1}`"
						@click="openImageModal(image)"
					/>
					<NuxtPicture
						quality="60"
						width="318"
						height="179"
						densities="1x 2x"
						format="avif,webp"
						legacy-format="jpg"
						:src="image"
						provider="cloudinary"
						class="h-full w-full"
						:img-attrs="{
							alt: '',
							class: 'object-cover w-full h-full',
						}"
						loading="lazy"
						sizes="318px sm:389px"
					/>
				</article>
			</div>
		</ScrollAreaViewport>

		<ScrollAreaViewport
			v-else
			as-child
			class="relative h-full w-full"
			@scroll="handleScroll"
		>
			<div
				:style="virtualViewportStyle"
				role="feed"
			>
				<article
					v-for="virtualItem in virtualItems"
					:key="String(virtualItem.key)"
					:ref="measureElement"
					:style="getVirtualItemStyle(virtualItem)"
					:data-index="virtualItem.index"
					class="relative overflow-hidden rounded-xs filter transition-[filter] focus-within:brightness-50 hover:brightness-120"
				>
					<h3 class="sr-only">Imagen {{ virtualItem.index + 1 }} de la galeria</h3>
					<UiButton
						unstyled
						class="absolute inset-0 cursor-pointer"
						:tabindex="tabindex"
						:aria-label="`Abrir imagen ${virtualItem.index + 1}`"
						@click="openImageModal(images[virtualItem.index] || '')"
					/>
					<NuxtPicture
						quality="60"
						width="318"
						height="179"
						densities="1x 2x"
						format="avif,webp"
						legacy-format="jpg"
						:src="images[virtualItem.index] || ''"
						provider="cloudinary"
						class="h-full w-full"
						:img-attrs="{
							alt: '',
							class: 'object-cover w-full h-full',
						}"
						loading="lazy"
						sizes="318px sm:389px"
					/>
				</article>
			</div>
		</ScrollAreaViewport>

		<ScrollAreaScrollbar
			force-mount
			orientation="vertical"
			class="bg-muted w-3 p-0.5"
		>
			<ScrollAreaThumb class="bg-primary cursor-grab rounded-2xl" />
		</ScrollAreaScrollbar>
	</ScrollAreaRoot>
</template>

<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";
import GalleryModal from "~/components/gallery/GalleryModal.vue";

export interface GalleryAreaProps {
	page: number;
	pagesMax: number;
	images: string[];
}
const emits = defineEmits(["infinite-scroll"]);
const { page, pagesMax, images } = defineProps<GalleryAreaProps>();

const isVirtualizerReady = ref(false);
onMounted(() => {
	isVirtualizerReady.value = true;
});

const scrollList = useTemplateRef("scrollList");
const { trapActive, handleKeydown } = useFocusOnKeydown(scrollList);
const tabindex = computed(() => (trapActive.value ? 0 : -1));

async function handleScroll() {
	if (!images.length) return;

	const viewport = scrollList.value?.viewport;
	if (!viewport) return;

	const nearBottom = viewport.scrollTop + viewport.clientHeight >= viewport.scrollHeight - 200;

	if (pagesMax && nearBottom && page < pagesMax) {
		emits("infinite-scroll");
	}
}

const { width } = useWindowSize();
const gridLanes = computed(() => (width.value < 640 ? 1 : width.value < 1024 ? 2 : 3));
const gridGap = 16;

function estimateItemHeight() {
	const viewport = scrollList.value?.viewport;
	if (!viewport) return 216;

	const totalGap = (gridLanes.value - 1) * gridGap;
	const laneWidth = (viewport.clientWidth - totalGap) / gridLanes.value;

	return Math.round((laneWidth * 9) / 16);
}

const virtualScrollOptions = computed<VirtualScrollOptions>(() => ({
	viewportWidth: width.value,
	virtualizerOptions: {
		getScrollElement: () => scrollList.value?.viewport as Element,
		estimateSize: () => estimateItemHeight(),
		gap: gridGap,
		lanes: gridLanes.value,
		count: images.length,
		overscan: 6,
	},
}));
const { getVirtualItemStyle, measureElement, virtualItems, virtualViewportStyle } = useVirtualizeScroll(virtualScrollOptions);

const { open } = useAppOverlay();
function openImageModal(src: string) {
	open(GalleryModal, { src });
}
</script>
