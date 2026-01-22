<template>
	<PaginationRoot
		v-slot="{ page: currentPage, pageCount }"
		v-bind="rootProps"
		:show-edges="true"
		:items-per-page="1"
	>
		<PaginationList
			v-slot="{ items }"
			class="flex items-center gap-1"
		>
			<UiLink
				:styled="false"
				class="ring-accented text-default! bg-default hover:bg-elevated inline-flex items-center rounded-md p-1.5 ring ring-inset aria-disabled:opacity-75"
				to="/gallery?page=1"
				:style="currentPage === 1 ? 'pointer-events: none' : void 0"
				:disabled="currentPage === 1"
			>
				<Icon
					name="i-lucide-chevrons-left"
					size="24"
				/>
			</UiLink>
			<UiLink
				:styled="false"
				class="ring-accented text-default! bg-default hover:bg-elevated inline-flex items-center rounded-md p-1.5 ring ring-inset aria-disabled:opacity-75"
				:to="`/gallery?page=${currentPage - 1}`"
				:style="currentPage - 1 < 1 ? 'pointer-events: none' : void 0"
				:disabled="currentPage - 1 < 1"
			>
				<Icon
					name="i-lucide-chevron-left"
					size="24"
				/>
			</UiLink>

			<template v-for="(item, index) in items">
				<UiLink
					v-if="item.type === 'page'"
					:key="index"
					class="ring-accented text-default! bg-default hover:bg-elevated inline-flex aspect-square w-9 items-center justify-center rounded-md p-1.5 ring ring-inset aria-disabled:opacity-75"
					:to="`/gallery?page=${item.value}`"
					:styled="false"
					:class="
						item.value === currentPage ? 'bg-primary text-inverted! ring-primary pointer-events-none' : ''
					"
				>
					{{ item.value }}
				</UiLink>

				<div
					v-else
					:key="item.type"
					class="ring-accented bg-default inline-flex items-center rounded-md p-1.5 ring ring-inset"
				>
					<Icon
						name="i-lucide-ellipsis"
						size="24"
					/>
				</div>
			</template>

			<UiLink
				:styled="false"
				class="ring-accented text-default! bg-default hover:bg-elevated inline-flex items-center rounded-md p-1.5 ring ring-inset aria-disabled:opacity-75"
				:to="`/gallery?page=${currentPage + 1}`"
				:style="currentPage + 1 > pageCount ? 'pointer-events: none' : void 0"
				:disabled="currentPage + 1 > pageCount"
			>
				<Icon
					name="i-lucide-chevron-right"
					size="24"
				/>
			</UiLink>
			<UiLink
				:styled="false"
				class="ring-accented text-default! bg-default hover:bg-elevated inline-flex items-center rounded-md p-1.5 ring ring-inset aria-disabled:opacity-75"
				:to="`/gallery?page=${pageCount}`"
				:style="pageCount === currentPage ? 'pointer-events: none' : void 0"
				:disabled="pageCount === currentPage"
			>
				<Icon
					name="i-lucide-chevrons-right"
					size="24"
				/>
			</UiLink>
		</PaginationList>
	</PaginationRoot>
</template>

<script setup lang="ts">
import { PaginationList, PaginationRoot, useForwardPropsEmits } from "reka-ui";
import { reactivePick } from "@vueuse/core";

const emits = defineEmits(["update:page"]);
const props = defineProps<{
	defaultPage?: number;
	page?: number;
	siblingCount: number;
	total: number;
	class?: string;
}>();
const rootProps = useForwardPropsEmits(
	reactivePick(props, "defaultPage", "page", "siblingCount", "total", "class"),
	emits,
);
</script>
