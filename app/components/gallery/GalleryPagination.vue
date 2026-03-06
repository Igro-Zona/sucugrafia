<template>
	<PaginationRoot
		v-slot="{ page: currentPage, pageCount }"
		:default-page="defaultPage"
		:page="page"
		:sibling-count="siblingCount"
		:total="total"
		show-edges
		:items-per-page="1"
	>
		<PaginationList
			v-slot="{ items }"
			class="flex items-center gap-2"
		>
			<PaginationFirst as-child>
				<UiButton
					class="ring-accented bg-default hover:bg-muted/75 disabled:bg-muted ring focus-visible:outline-offset-0!"
					:disabled="currentPage === 1"
					aria-label="Primera página"
					icon="lucide:chevrons-left"
					@click="$emit('update:page', 1)"
				/>
			</PaginationFirst>

			<PaginationPrev as-child>
				<UiButton
					class="ring-accented bg-default hover:bg-muted/75 disabled:bg-muted ring focus-visible:outline-offset-0!"
					:disabled="currentPage === 1"
					aria-label="Página anterior"
					icon="lucide:chevron-left"
					@click="$emit('update:page', Math.max(1, currentPage - 1))"
				/>
			</PaginationPrev>

			<template
				v-for="(item, index) in items"
				:key="index"
			>
				<PaginationListItem
					v-if="item.type === 'page'"
					as-child
					:value="item.value"
				>
					<UiButton
						class="ring-accented bg-default hover:bg-muted/75 disabled:text-inverted disabled:bg-primary w-9 justify-center ring focus-visible:outline-offset-0!"
						:disabled="item.value === currentPage"
						@click="$emit('update:page', item.value)"
					>
						{{ item.value }}
					</UiButton>
				</PaginationListItem>

				<PaginationEllipsis
					v-else
					as-child
				>
					<div class="ring-accented bg-default inline-flex items-center p-1.5 ring ring-inset">
						<Icon name="lucide:ellipsis" />
					</div>
				</PaginationEllipsis>
			</template>

			<PaginationNext as-child>
				<UiButton
					class="ring-accented bg-default hover:bg-muted/75 disabled:bg-muted ring focus-visible:outline-offset-0!"
					:disabled="currentPage === pageCount"
					aria-label="Siguiente página"
					icon="lucide:chevron-right"
					@click="$emit('update:page', Math.min(pageCount, currentPage + 1))"
				/>
			</PaginationNext>
			<PaginationLast as-child>
				<UiButton
					class="ring-accented bg-default hover:bg-muted/75 disabled:bg-muted ring focus-visible:outline-offset-0!"
					:disabled="currentPage === pageCount"
					aria-label="Última página"
					icon="lucide:chevrons-right"
					@click="$emit('update:page', pageCount)"
				/>
			</PaginationLast>
		</PaginationList>
	</PaginationRoot>
</template>

<script setup lang="ts">
export interface GalleryPaginationProps {
	defaultPage?: number;
	page?: number;
	siblingCount: number;
	total: number;
}

defineEmits(["update:page"]);
defineProps<GalleryPaginationProps>();
</script>
