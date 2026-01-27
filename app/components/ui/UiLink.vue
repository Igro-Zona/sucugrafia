<template>
	<NuxtLink
		v-bind="props"
		:external="external ?? isExternal"
		:target="target ?? (external || isExternal ? '_blank' : undefined)"
		:to
		:aria-current="ariaCurrent"
		:class="
			twMerge(
				'inline-flex gap-0.5 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white',
				className,
			)
		"
		:style="
			ariaCurrent === 'page' && events === false
				? {
						pointerEvents: 'none',
						cursor: 'default',
					}
				: undefined
		"
	>
		<slot />

		<Icon
			v-if="(external || isExternal) && externalIcon"
			name="i-lucide-arrow-up-right"
			size="15"
		/>
	</NuxtLink>
</template>

<script setup lang="ts">
import type { NuxtLinkProps } from "#app";
import { twMerge } from "tailwind-merge";

type UiLinkProps = {
	events?: boolean;
	externalIcon?: boolean;
	class?: string;
} & NuxtLinkProps;

const {
	events = false,
	externalIcon = true,
	class: className = "",
	to,
	external,
	target,
	noPrefetch,
	...props
} = defineProps<UiLinkProps>();

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
