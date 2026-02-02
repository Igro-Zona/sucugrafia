<template>
	<PaginationRoot
		v-slot="{ page: currentPage, pageCount }"
		:show-edges="true"
		:items-per-page="1"
		@update:page="emits('update:page', $event)"
	>
		<PaginationList
			v-slot="{ items }"
			class="flex items-center gap-1"
		>
			<UiLink
				class="ring-accented text-default! bg-default hover:bg-elevated inline-flex items-center rounded-md p-1.5 ring ring-inset aria-disabled:opacity-75"
				:class="currentPage === 1 ? 'bg-muted pointer-events-none cursor-default' : ''"
				to="/galeria?page=1"
				:events="true"
				aria-label="Primera página"
			>
				<Icon name="i-lucide-chevrons-left" />
			</UiLink>
			<UiLink
				class="ring-accented text-default! bg-default hover:bg-elevated inline-flex items-center rounded-md p-1.5 ring ring-inset aria-disabled:opacity-75"
				:class="currentPage === 1 ? 'bg-muted pointer-events-none cursor-default' : ''"
				:to="`/galeria?page=${currentPage - 1 === 0 ? currentPage : currentPage - 1}`"
				:events="true"
				aria-label="Página anterior"
			>
				<Icon name="i-lucide-chevron-left" />
			</UiLink>

			<template v-for="(item, index) in items">
				<UiLink
					v-if="item.type === 'page'"
					:key="index"
					class="ring-accented text-default! bg-default hover:bg-elevated inline-flex aspect-square w-9 items-center justify-center rounded-md p-1.5 ring ring-inset aria-disabled:opacity-75"
					:to="`/galeria?page=${item.value}`"
					:class="
						item.value === currentPage ? 'bg-primary text-inverted! ring-primary hover:bg-green-500' : ''
					"
					:events="true"
				>
					{{ item.value }}
				</UiLink>

				<div
					v-else
					:key="item.type"
					class="ring-accented bg-default inline-flex items-center rounded-md p-1.5 ring ring-inset"
				>
					<Icon name="i-lucide-ellipsis" />
				</div>
			</template>

			<UiLink
				class="ring-accented text-default! bg-default hover:bg-elevated inline-flex items-center rounded-md p-1.5 ring ring-inset aria-disabled:opacity-75"
				:class="currentPage === pageCount ? 'bg-muted pointer-events-none cursor-default' : ''"
				:to="`/galeria?page=${currentPage + 1 > pageCount ? pageCount : currentPage + 1}`"
				:events="true"
				aria-label="Siguiente página"
			>
				<Icon name="i-lucide-chevron-right" />
			</UiLink>
			<UiLink
				class="ring-accented text-default! bg-default hover:bg-elevated inline-flex items-center rounded-md p-1.5 ring ring-inset aria-disabled:opacity-75"
				:class="currentPage === pageCount ? 'bg-muted pointer-events-none cursor-default' : ''"
				:to="`/galeria?page=${pageCount}`"
				:events="true"
				aria-label="Última página"
			>
				<Icon name="i-lucide-chevrons-right" />
			</UiLink>
		</PaginationList>
	</PaginationRoot>
</template>

<script setup lang="ts">
import type { ClassNameValue } from "tailwind-merge";
import { PaginationList, PaginationRoot } from "reka-ui";

export interface GalleryPaginationProps {
	defaultPage?: number;
	page?: number;
	siblingCount: number;
	total: number;
	class?: ClassNameValue;
}

defineProps<GalleryPaginationProps>();
const emits = defineEmits(["update:page"]);
</script>
