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
					class="relative h-full w-full"
					:as-child="true"
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
								class="h-full w-full cursor-pointer"
								:tabindex="trapActive ? 0 : -1"
								:aria-label="`Abrir imagen ${virtualItem.index + 1}`"
								@click="open(repeated[virtualItem.index] ?? '')"
							>
								<GalleryImage
									:src="repeated[virtualItem.index] ?? ''"
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

const images = Array.from({ length: 8 }, (_, i) => `img${i + 1}.jpg`);
const repeated = Array.from({ length: 8 }, () => images).flat();

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

const { width } = useWindowSize();
const gridGap = 16;
const gridLanes = computed(() => {
	if (width.value < 640) {
		return 1;
	} else if (width.value < 1040) {
		return 2;
	} else {
		return 3;
	}
});

function estimateItemHeight(): number {
	const viewport = scrollList.value?.viewport as HTMLElement | undefined;
	if (!viewport) return 216;

	const laneCount = Math.max(1, gridLanes.value);
	const totalGap = (laneCount - 1) * gridGap;
	const laneWidth = (viewport.clientWidth - totalGap) / laneCount;

	return Math.round((laneWidth * 9) / 16);
}

const virtualScrollOptions: Ref<VirtualScrollOptions> = ref({
	viewportWidth: width,
	virtualizerOptions: {
		getScrollElement: () => scrollList.value?.viewport as Element,
		estimateSize: () => estimateItemHeight(),
		gap: gridGap,
		lanes: gridLanes,
		count: repeated.length,
		overscan: 6,
	},
});
const { getVirtualItemStyle, measureElement, virtualItems, virtualViewportStyle } =
	useVirtualizeScroll(virtualScrollOptions);

const overlay = useOverlay();
const modal = overlay.create(ImageModal);
async function open(src: string) {
	modal.open({ src });
}
</script>
