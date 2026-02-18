<template>
	<UiModalRoot
		v-bind="emits"
		v-model:open="open"
	>
		<UiModalPortal>
			<UiModalOverlay />

			<UiModalContent
				title="Buscar articulos"
				description="bla"
				class="bg-default divide-default ring-default fixed top-1/2 left-1/2 flex h-full max-h-[calc(100dvh-2rem)] w-[calc(100vw-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 flex-col divide-y overflow-hidden rounded-lg shadow-lg ring focus:outline-none sm:h-112 sm:max-h-[calc(100dvh-4rem)] sm:max-w-3xl"
				:open="undefined"
			>
				<!-- <UCommandPalette
			v-model:search-term="searchTerm"
			:fuse="fuse"
			:groups="groups"
			@update:model-value="onSelect"
			@update:open="open = $event"
			/> -->
				WIP
				{{ open }}
			</UiModalContent>
		</UiModalPortal>
	</UiModalRoot>
</template>

<script setup lang="ts">
type File = {
	id: string;
	title: string;
	titles: string[];
	level: number;
	content: string;
};
interface UseFuseOptions {
	resultLimit?: number;
	matchAllWhenSearchEmpty?: boolean;
}
export interface ArticlesSearchProps {
	fuse?: UseFuseOptions;
	navigation?: ContentNavigationItem[];
	files?: File[];
}

const props = defineProps<ArticlesSearchProps>();
const searchTerm = defineModel("searchTerm", { type: String, ...{ default: "" } });

function toggleOpen() {
	open.value = !open.value;
}
function handleShortcut(e: KeyboardEvent) {
	if (e.ctrlKey && e.key.toLowerCase() === "k") {
		e.preventDefault();
		toggleOpen();
	}
}
onMounted(() => {
	window.addEventListener("keydown", handleShortcut);
});
onBeforeUnmount(() => {
	window.removeEventListener("keydown", handleShortcut);
});

const emits = defineEmits(["update:open"]);
const { open, mapNavigationItems, postFilter } = useSearch();
const mappedNavigationGroups = computed(() => {
	if (!props.navigation?.length) {
		return [];
	}
	if (props.navigation.some((link) => !!link.children?.length)) {
		return props.navigation.map((group) => ({
			id: group.path,
			label: group.title,
			items: mapNavigationItems(group.children || [], props.files || []),
			postFilter,
		}));
	} else {
		return [{ id: "docs", items: mapNavigationItems(props.navigation, props.files || []), postFilter }];
	}
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const groups = computed(() => mappedNavigationGroups.value);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function onSelect() {
	open.value = false;
	searchTerm.value = "";
}
</script>
