<template>
	<NuxtLink
		v-bind="linkProps"
		:external="external ?? isExternal"
		:target="target ?? (external || isExternal ? '_blank' : undefined)"
		:aria-current="ariaCurrent"
		:class="[
			twMerge(
				'inline-flex gap-0.5 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white',
				props.class,
			),
			ariaCurrent === 'page' && !(events ? events : false) && 'pointer-events-none cursor-default',
		]"
	>
		<slot />
		<Icon
			v-if="(external || isExternal) && externalIcon"
			v-bind="icon"
		/>
	</NuxtLink>
</template>

<script setup lang="ts">
import type { NuxtLinkProps } from "#app";
import { twMerge, type ClassNameValue } from "tailwind-merge";

export interface UiLinkProps extends Omit<NuxtLinkProps, "noPrefetch"> {
	events?: boolean;
	externalIcon?: boolean;
	icon?: IconProps;
	class?: ClassNameValue;
}

const props = withDefaults(defineProps<UiLinkProps>(), {
	events: false,
	externalIcon: true,
	icon: () => ({ name: "lucide:arrow-up-right", size: 16 }),
	class: undefined,
});
const { events, externalIcon, icon, class: _class, ...linkProps } = props;

const isExternal = computed(() => isExternalUrl(props.to?.toString()));

const route = useRoute();
const ariaCurrent = computed(() => {
	const targetPath = props.to?.toString();
	if (!targetPath) return undefined;
	if (route.path === targetPath) return "page";
	return route.path.startsWith(targetPath) ? "step" : undefined;
});
</script>
