<template>
	<ListboxRoot
		:class="!unstyled && 'divide-default flex min-h-0 min-w-0 flex-col divide-y'"
		highlight-on-hover
		@update:model-value="$emit('update:modelValue')"
	>
		<ListboxFilter
			v-model="searchTerm"
			as-child
		>
			<UiInput
				:icon="{
					name: 'lucide:search',
					size: 20,
					class: 'text-dimmed',
				}"
				:input="{
					'type': 'text',
					'autocomplete': 'off',
					'aria-disabled': 'false',
					'placeholder': 'Buscar',
				}"
			>
				<template #trailing>
					<UiButton
						icon="lucide:x"
						aria-label="Cerrar"
						class="hover:bg-muted active:bg-muted/50 focus-visible:outline-offset-0!"
						@click="$emit('update:open', false)"
					/>
				</template>
			</UiInput>
		</ListboxFilter>

		<ListboxContent class="relative flex flex-col overflow-hidden">
			<div
				v-if="filteredItems"
				role="presentation"
				class="divide-default relative flex-1 scroll-py-1 divide-y overflow-y-auto"
			>
				<ListboxGroup class="isolate p-1">
					<ListboxGroupLabel
						v-if="label"
						class="text-highlighted gap-1.5 p-1.5 text-sm font-semibold"
					>
						{{ label }}
					</ListboxGroupLabel>

					<ListboxItem
						v-for="(item, index) in filteredItems"
						:key="index"
						:value="item"
						as-child
					>
						<UiLink
							class="group hover:bg-muted relative flex w-full items-start gap-1.5 p-1.5 text-sm focus-visible:outline-offset-0!"
							:to="item?.to"
							tabindex="0"
						>
							<template #icon>
								<Icon
									:name="item.level && item.level > 1 ? 'lucide:hash' : 'lucide:file'"
									:size="20"
									class="text-dimmed group-hover:text-default transition-colors"
								/>

								<span
									v-if="item.label || item.suffix"
									class="flex min-w-0 flex-1 flex-col text-start"
								>
									<span class="text-dimmed space-x-1 truncate">
										<span class="text-highlighted [&>mark]:text-inverted [&>mark]:bg-primary">{{ item.label }}</span>
										<span
											v-if="item.suffix"
											class="text-dimmed [&>mark]:text-inverted [&>mark]:bg-primary"
											>{{ item.suffix }}</span
										>
									</span>
								</span>
							</template>
						</UiLink>
					</ListboxItem>
				</ListboxGroup>
			</div>

			<div
				v-else
				class="text-muted py-6 text-center text-sm"
			>
				{{ searchTerm ? "No hay coincidencias" : "No hay datos disponibles " }}
			</div>
		</ListboxContent>
	</ListboxRoot>
</template>

<!-- eslint-disable @typescript-eslint/no-empty-object-type -->
<script setup lang="ts">
import type { StyledComponentProps } from "~/types/Components";
import { useFuse } from "@vueuse/integrations/useFuse";
import { refThrottled } from "@vueuse/core";
import type { ContentFilteredItem } from "~/composables/useSearch";

export interface ArticleCommandPaletteItem extends ContentFilteredItem {}
export interface ArticleCommandPaletteProps extends StyledComponentProps {
	label?: string;
	items?: ArticleCommandPaletteItem[];
	postFilter?: (searchTerm: string, items: ArticleCommandPaletteItem[]) => ArticleCommandPaletteItem[];
}

defineEmits(["update:modelValue", "update:open"]);
const props = defineProps<ArticleCommandPaletteProps>();

const searchTerm = defineModel<string>("searchTerm", { default: "" });

const fuse = {
	fuseOptions: { ignoreLocation: true, threshold: 0.1, keys: ["label", "suffix"] },
	resultLimit: 42,
	matchAllWhenSearchEmpty: true,
};
const { results: fuseResults } = useFuse(searchTerm, props.items || [], fuse);
const throttledFuseResults = refThrottled(fuseResults, 16, true);

function processItems(items: ArticleCommandPaletteItem[]) {
	let processedItems = items;
	if (props.postFilter) processedItems = props.postFilter(searchTerm.value, processedItems);
	return processedItems.slice(0, fuse.resultLimit);
}
const filteredItems = computed(() => {
	const items = throttledFuseResults.value.map((result) => result.item);
	const processedItems = processItems(items);
	return processedItems.length ? processedItems : undefined;
});
</script>
