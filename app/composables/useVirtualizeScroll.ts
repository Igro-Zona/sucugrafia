import { useVirtualizer, type VirtualItem, type VirtualizerOptions } from "@tanstack/vue-virtual";
import type { CSSProperties } from "vue";

type MaybeRef<T> = T | Ref<T>;
export type VirtualScrollOptions = {
	virtualizerOptions: Omit<
		VirtualizerOptions<Element, Element>,
		"observeElementRect" | "observeElementOffset" | "scrollToFn"
	>;
};

export default function (options: MaybeRef<VirtualScrollOptions>) {
	const virtualizerOptions = computed(() => unref(options).virtualizerOptions);

	const lanes = computed(() => virtualizerOptions.value.lanes ?? 1);
	const gap = computed(() => virtualizerOptions.value.gap ?? 0);

	const virtualizer = useVirtualizer(virtualizerOptions);

	const virtualItems = computed(() => virtualizer.value.getVirtualItems());

	const isMounted = ref(false);
	onMounted(() => {
		isMounted.value = true;
		virtualizer.value.measure();
	});

	const totalSize = computed(() => {
		if (!isMounted.value) return 216;
		return virtualizer.value.getTotalSize();
	});

	watch(
		lanes,
		() => {
			virtualizer.value.measure();
		},
		{ flush: "sync" },
	);

	function measureElement(el: Element | ComponentPublicInstance | null) {
		if (el) {
			const element = el instanceof Element ? el : (el as ComponentPublicInstance).$el;
			virtualizer.value.measureElement(element);
		}
	}

	const virtualViewportStyle = computed<CSSProperties>(() => ({
		position: "relative",
		blockSize: `${totalSize.value}px`,
	}));

	function getVirtualItemStyle(virtualItem: VirtualItem): CSSProperties {
		const laneSize = `calc((100% - ${(lanes.value - 1) * gap.value}px) / ${lanes.value})`;

		const lanePosition =
			lanes.value > 1 && virtualItem.lane !== undefined
				? `calc(${virtualItem.lane} * ((${laneSize}) + ${gap.value}px))`
				: 0;

		return {
			position: "absolute",
			insetBlockStart: 0,
			insetInlineStart: lanePosition,
			inlineSize: laneSize,
			blockSize: `${virtualItem.size}px`,
			transform: `translateY(${virtualItem.start}px)`,
		};
	}

	return {
		virtualizer,
		virtualItems,
		measureElement,
		virtualViewportStyle,
		getVirtualItemStyle,
	};
}
