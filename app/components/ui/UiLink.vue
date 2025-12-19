<template>
	<NuxtLink
		v-bind="props"
		:external="isExternal ? isExternal : external"
		:target="isExternal || external ? '_blank' : target"
		:to
		:aria-current="ariaCurrent"
		:aria-disabled="ariaCurrent === 'page'"
		:class="styled ? twMerge(styles, className) : twMerge(styles, className)"
	>
		<slot />

		<Icon
			v-if="(isExternal || external) && styled"
			name="i-lucide-arrow-up-right"
			size="15"
		/>
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

const styles = computed(() => {
	if (ariaCurrent.value === "page" && styled === true) {
		return "inline-flex gap-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white rounded-md cursor-default";
	}
	return "inline-flex gap-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white rounded-md";
});
</script>
