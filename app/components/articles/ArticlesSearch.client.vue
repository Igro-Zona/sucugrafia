<template>
	<UiModal
		v-model:open="open"
		title="Buscar articulos"
		description="bla"
		class="h-1/5 w-full rounded-none md:max-w-200 md:rounded-lg"
	>
		<ArticleCommandPalette
			v-model:search-term="searchTerm"
			:label="mappedNavigationGroup.label"
			:items="mappedNavigationGroup.items"
			:post-filter="mappedNavigationGroup.postFilter"
			@update:model-value="onSelect"
			@update:open="open = $event"
		/>
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
export interface ArticlesSearchProps {
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
const mappedNavigationGroup = computed(() => {
	if (!props.navigation?.length) return {};

	if (props.navigation.some((link) => !!link.children?.length)) {
		const group = props.navigation[0];
		return { label: group?.title, items: mapNavigationItems(group?.children || [], props.files || []), postFilter };
	}

	return {};
});

function onSelect() {
	open.value = false;
	searchTerm.value = "";
}
</script>
