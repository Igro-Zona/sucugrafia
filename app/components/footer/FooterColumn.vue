<template>
	<div>
		<h3 class="font-semibold">{{ columnLabel }}</h3>

		<ul
			v-if="links"
			class="text-muted mt-6 space-y-4"
		>
			<li
				v-for="({ label, ...linkProps }, index) in links"
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
</template>

<script setup lang="ts">
import type { NuxtLinkProps } from "#app";

type LinkProps = {
	label: string;
} & NuxtLinkProps;

export interface FooterColumnProps {
	columnLabel?: string;
	links?: LinkProps[];
}

withDefaults(defineProps<FooterColumnProps>(), {
	columnLabel: "Sin titulo",
	links: undefined,
});
</script>
