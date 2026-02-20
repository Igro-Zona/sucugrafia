<template>
	<UiGrid
		as="nav"
		class="py-8 lg:py-10"
		aria-label="Menú"
	>
		<div
			v-for="(column, columnIndex) in columns"
			:key="columnIndex"
			class="font-latto"
		>
			<h3
				v-if="column.columnLabel"
				class="mb-4 text-lg font-bold"
			>
				{{ column.columnLabel }}
			</h3>

			<ul class="text-muted space-y-2">
				<li
					v-for="({ label, ...linkProps }, index) in column.links"
					:key="index"
				>
					<UiLink
						v-bind="linkProps"
						class="hover:text-default cursor-pointer transition-colors"
						>{{ label }}</UiLink
					>
				</li>
			</ul>
		</div>
	</UiGrid>
</template>

<script setup lang="ts">
export type FooterColumn = {
	columnLabel?: string;
	links: LinkProps[];
};

defineProps<{
	columns: FooterColumn[];
}>();
</script>
