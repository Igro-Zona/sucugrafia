<template>
	<UiGrid
		as="nav"
		class="py-8 lg:py-10"
		aria-label="Menú"
	>
		<div
			v-for="(column, columnIndex) in columns"
			:key="columnIndex"
		>
			<h3
				v-if="column.columnLabel"
				class="font-latto mb-4 font-bold"
			>
				{{ column.columnLabel }}
			</h3>

			<ul class="text-muted space-y-2 text-sm">
				<li
					v-for="(link, index) in column.links"
					:key="index"
				>
					<UiLink
						v-bind="link"
						class="rounded-sm"
					/>
				</li>
			</ul>
		</div>
	</UiGrid>
</template>

<script setup lang="ts">
import type { UiLinkProps } from "~/components/ui/UiLink.vue";

export type FooterColumn = {
	columnLabel?: string;
	links: UiLinkProps[];
};

defineProps<{
	columns: FooterColumn[];
}>();
</script>
