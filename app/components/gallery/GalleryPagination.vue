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
				class="ring-accented text-default! bg-default hover:bg-elevated inline-flex items-center rounded-md p-1.5 ring ring-inset aria-disabled:opacity-75"
				to="/gallery?page=1"
				:events="true"
				:style="
					currentPage === 1
						? {
								pointerEvents: 'none',
								cursor: 'default',
							}
						: undefined
				"
			>
				<Icon
					name="i-lucide-chevrons-left"
					size="24"
				/>
			</UiLink>
			<UiLink
				class="ring-accented text-default! bg-default hover:bg-elevated inline-flex items-center rounded-md p-1.5 ring ring-inset aria-disabled:opacity-75"
				:to="`/gallery?page=${currentPage - 1 === 0 ? currentPage : currentPage - 1}`"
				:events="true"
				:style="
					currentPage === 1
						? {
								pointerEvents: 'none',
								cursor: 'default',
							}
						: undefined
				"
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
					:class="item.value === currentPage ? 'bg-primary text-inverted! ring-primary' : ''"
					:events="true"
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
				class="ring-accented text-default! bg-default hover:bg-elevated inline-flex items-center rounded-md p-1.5 ring ring-inset aria-disabled:opacity-75"
				:to="`/gallery?page=${currentPage + 1 > pageCount ? pageCount : currentPage + 1}`"
				:events="true"
				:style="
					currentPage === pageCount
						? {
								pointerEvents: 'none',
								cursor: 'default',
							}
						: undefined
				"
			>
				<Icon
					name="i-lucide-chevron-right"
					size="24"
				/>
			</UiLink>
			<UiLink
				class="ring-accented text-default! bg-default hover:bg-elevated inline-flex items-center rounded-md p-1.5 ring ring-inset aria-disabled:opacity-75"
				:to="`/gallery?page=${pageCount}`"
				:events="true"
				:style="
					currentPage === pageCount
						? {
								pointerEvents: 'none',
								cursor: 'default',
							}
						: undefined
				"
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
