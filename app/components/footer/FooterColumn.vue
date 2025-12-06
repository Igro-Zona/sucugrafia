<template>
	<div>
		<h3 class="font-semibold">{{ label }}</h3>

		<ul
			v-if="links"
			class="text-muted mt-6 space-y-4"
		>
			<li
				v-for="(link, index) in links"
				:key="index"
				class="hover:text-default cursor-pointer transition-colors"
			>
				<UiLink v-bind="link">{{ link.label }}</UiLink>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import type { NuxtLinkProps } from "#app";

type LinkProps = {
	label: string;
} & NuxtLinkProps;

const { label = "", links = undefined } = defineProps<{
	label?: string;
	links?: LinkProps[];
}>();
</script>

<style scoped></style>
