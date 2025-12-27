<template>
	<UiContainer>
		<AppPage title="Nuestra galeria">
			<ScrollAreaRoot
				ref="scrollList"
				class="relative mt-4 h-[80dvh] w-full pr-4"
				role="feed"
			>
				<ScrollAreaViewport class="relative h-full w-full">
					<div :style="virtualViewportStyle">
						<article
							v-for="virtualItem in virtualItems"
							:key="String(virtualItem.key)"
							:ref="measureElement"
							:style="getVirtualItemStyle(virtualItem)"
							:data-index="virtualItem.index"
							class="overflow-hidden rounded-md"
						>
							<button
								class="focus:ring-primary h-full w-full cursor-pointer rounded-md outline-none focus:ring-2 focus:ring-offset-2"
								tabindex="0"
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

			<!-- <br />

			<UScrollArea
				v-slot="{ item }"
				:items="repeated"
				orientation="vertical"
				:virtualize="{
					estimateSize: 379,
					lanes: 3,
					gap: 8,
				}"
				class="h-[80dvh] w-full p-4"
			>
				<button
					:key="item"
					class="cursor-pointer"
					@click="open(item)"
				>
					<GalleryImage :src="item" />
				</button>
			</UScrollArea> -->
		</AppPage>
	</UiContainer>
</template>

<script setup lang="ts">
import { ScrollAreaRoot, ScrollAreaScrollbar, ScrollAreaThumb, ScrollAreaViewport } from "reka-ui";
import { useWindowSize } from "@vueuse/core";
import ImageModal from "~/components/ImageModal.vue";

const images = Array.from({ length: 8 }, (_, i) => `img${i + 1}.jpg`);
const repeated = Array.from({ length: 8 }, () => images).flat();

const scrollList = useTemplateRef("scrollList");
const { width } = useWindowSize();

const mylanes = computed(() => {
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

	const laneCount = Math.max(1, mylanes.value);
	const totalGap = (laneCount - 1) * 16;
	const laneWidth = (viewport.clientWidth - totalGap) / laneCount;

	return Math.round((laneWidth * 9) / 16);
}

const virtualScrollOptions: Ref<VirtualScrollOptions> = ref({
	virtualizerOptions: {
		getScrollElement: () => scrollList.value?.viewport as Element,
		estimateSize: () => estimateItemHeight(),
		gap: 16,
		lanes: mylanes,
		count: repeated.length,
		overscan: 6,
	},
});
const { getVirtualItemStyle, measureElement, virtualItems, virtualViewportStyle, virtualizer } =
	useVirtualizeScroll(virtualScrollOptions);

watch(
	[width, mylanes],
	() => {
		virtualizer.value?.measure();
	},
	{ flush: "sync" },
);

const overlay = useOverlay();
const modal = overlay.create(ImageModal);
async function open(src: string) {
	modal.open({ src });
}
</script>
