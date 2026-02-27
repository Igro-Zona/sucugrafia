<template>
	<UiModal
		v-model:open="open"
		title="Buscar articulos"
		description="bla"
		class="w-full rounded-none md:max-w-200 md:rounded-lg"
	>
		WIP
		{{ open }}
		<!-- <UCommandPalette
			v-model:search-term="searchTerm"
			:fuse="fuse"
			:groups="groups"
			@update:model-value="onSelect"
			@update:open="open = $event"
			/> -->
	</UiModal>
</template>

<script setup lang="ts">
import { onKeyStroke } from "@vueuse/core";

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
const searchTerm = defineModel<string>("searchTerm", { default: "" });

function toggleOpen() {
	open.value = !open.value;
}
onKeyStroke((e: KeyboardEvent) => {
	if (e.ctrlKey && e.key.toLowerCase() === "k") {
		e.preventDefault();
		toggleOpen();
	}
});

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
