<template>
	<nav
		:aria-label="props.label"
		class="py-8 text-sm lg:py-12"
	>
		<h3 class="font-semibold">{{ props.label }}</h3>

		<ul
			v-if="children"
			class="text-muted mt-6 space-y-4"
		>
			<li
				v-for="(item, index) in props.children"
				:key="index"
				class="hover:text-default cursor-pointer transition-colors"
			>
				<UiLink v-bind="item">{{ item.label }}</UiLink>
			</li>
		</ul>
	</nav>
</template>

<script setup lang="ts">
import type { NuxtLinkProps } from "#app";

type ChildrenProps = {
	label: string;
} & NuxtLinkProps;

const props = defineProps<{
	label: string;
	children?: ChildrenProps[];
}>();
</script>

<style scoped></style>
