<template>
	<NuxtLink
		v-bind="props"
		:external="isExternal ? isExternal : external"
		:target="isExternal || external ? '_blank' : target"
		:to
		:aria-current="ariaCurrent"
		:class="styled ? twMerge('inline-flex', className) : twMerge('inline-flex', className)"
	>
		<slot />
	</NuxtLink>
</template>

<script setup lang="ts">
import type { NuxtLinkProps } from "#app";
import { twMerge } from "tailwind-merge";

type UiLinkProps = {
	styled?: boolean;
	class?: string;
} & NuxtLinkProps;

const { styled = true, class: className = "", to, external, target, noPrefetch, ...props } = defineProps<UiLinkProps>();

const EXTERNAL_REGEX = /^(https?:)?\/\//;
const isExternal = computed(() => {
	return EXTERNAL_REGEX.test(to?.toString() ?? "");
});

const route = useRoute();
const ariaCurrent = computed(() => {
	const currentPath = route.path;
	const targetPath = to?.toString();

	if (!targetPath) return undefined;
	if (currentPath === targetPath) return "page";
	if (currentPath.startsWith(targetPath)) return "step";
	return undefined;
});
</script>

<style scoped></style>
