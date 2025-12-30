<template>
	<UiContainer>
		<AppPage title="Nuestra galeria">
			<ScrollAreaRoot
				ref="scrollList"
				class="relative mt-4 h-[80dvh] w-full pr-4"
				tabindex="0"
				@keydown="handleKeydown"
			>
				<ScrollAreaViewport
					v-if="!isVirtualizerReady"
					class="relative h-full w-full"
					:as-child="true"
				>
					<div
						role="feed"
						class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
					>
						<article
							v-for="(image, index) in images"
							:key="index"
							class="aspect-video w-full overflow-hidden rounded-xs filter transition-[filter] hover:brightness-120"
						>
							<button
								type="button"
								class="h-full w-full cursor-pointer"
								:tabindex="trapActive ? 0 : -1"
								:aria-label="`Abrir imagen ${index + 1}`"
								@click="open(image)"
							>
								<GalleryImage
									:src="image"
									class="h-full w-full object-cover"
								/>
							</button>
						</article>
					</div>
				</ScrollAreaViewport>

				<ScrollAreaViewport
					v-else
					class="relative h-full w-full"
					:as-child="true"
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
							class="overflow-hidden rounded-xs filter transition-[filter] hover:brightness-120"
						>
							<button
								type="button"
								class="h-full w-full cursor-pointer"
								:tabindex="trapActive ? 0 : -1"
								:aria-label="`Abrir imagen ${virtualItem.index + 1}`"
								@click="open(images[virtualItem.index] || '')"
							>
								<GalleryImage
									:src="images[virtualItem.index] || ''"
									class="h-full w-full object-cover"
								/>
							</button>
						</article>
					</div>
				</ScrollAreaViewport>

				<ScrollAreaScrollbar
					orientation="vertical"
					class="bg-muted w-3 p-0.5"
					:force-mount="true"
				>
					<ScrollAreaThumb class="bg-primary cursor-grab rounded-2xl" />
				</ScrollAreaScrollbar>
			</ScrollAreaRoot>
		</AppPage>
	</UiContainer>
</template>

<script setup lang="ts">
import { ScrollAreaRoot, ScrollAreaScrollbar, ScrollAreaThumb, ScrollAreaViewport } from "reka-ui";
import { useWindowSize } from "@vueuse/core";
import { useFocusTrap } from "@vueuse/integrations/useFocusTrap";
import ImageModal from "~/components/ImageModal.vue";

const isVirtualizerReady = ref(false);

const route = useRoute();
const page = ref(route.query.page ? Number(route.query.page) : 1);
const images = ref<string[]>([]);
const pagesMax = await usePageCount();
const { data } = await useFetch("/api/cloudinary-images", {
	query: { limit: 10, page: page },
});
images.value.push(...(data.value ?? []));
watch(data, () => {
	images.value.push(...(data.value ?? []));
});

const scrollList = useTemplateRef("scrollList");
const { activate } = useFocusTrap(scrollList);
const trapActive = ref(false);
function handleKeydown(e: KeyboardEvent) {
	if (e.key === "Enter") {
		trapActive.value = true;
		activate();
	} else if (e.key === "Escape") {
		trapActive.value = false;
	}
}

async function handleScroll() {
	const viewport = scrollList.value?.viewport as HTMLElement;
	if (!viewport) return;

	const nearBottom = viewport.scrollTop + viewport.clientHeight >= viewport.scrollHeight - 200;

	if (pagesMax.value && nearBottom && page.value < pagesMax.value) {
		page.value++;
	}
}

const { width } = useWindowSize();
const gridLanes = computed(() => {
	if (width.value < 640) {
		return 1;
	} else if (width.value < 1024) {
		return 2;
	} else {
		return 3;
	}
});
const gridGap = 16;

function estimateItemHeight(): number {
	const viewport = scrollList.value?.viewport as HTMLElement | undefined;
	if (!viewport) return 216;

	const laneCount = Math.max(1, gridLanes.value);
	const totalGap = (laneCount - 1) * gridGap;
	const laneWidth = (viewport.clientWidth - totalGap) / laneCount;

	return Math.round((laneWidth * 9) / 16);
}
const virtualScrollOptions = computed<VirtualScrollOptions>(() => ({
	viewportWidth: width.value,
	virtualizerOptions: {
		getScrollElement: () => scrollList.value?.viewport as Element,
		estimateSize: () => estimateItemHeight(),
		gap: gridGap,
		lanes: gridLanes.value,
		count: images.value.length,
		overscan: 6,
	},
}));
const { getVirtualItemStyle, measureElement, virtualItems, virtualViewportStyle } =
	useVirtualizeScroll(virtualScrollOptions);

onMounted(() => {
	isVirtualizerReady.value = true;
});

const overlay = useOverlay();
const modal = overlay.create(ImageModal);
async function open(src: string) {
	modal.open({ src });
}
</script>
