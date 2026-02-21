<template>
	<NuxtLink
		v-bind="linkProps"
		:data-active="isActive"
		:external="external ?? isExternal"
		:target="target ?? (external || isExternal ? '_blank' : undefined)"
		:aria-current="resolveAriaCurrent"
		:class="{
			'group hover:text-highlighted focus-visible:text-default inline-flex cursor-pointer gap-1.5 rounded-md transition-colors':
				!unstyled,
			'pointer-events-none cursor-default': resolveAriaCurrent === 'page' && !events,
		}"
	>
		<slot name="icon">
			<Icon
				v-if="icon"
				v-bind="normalizeIconProps(icon)"
			/>
		</slot>

		<span
			v-if="label || $slots.default || externalIcon || $slots.externalIcon"
			class="inline-flex gap-0.5 truncate transition-colors"
		>
			<slot>
				{{ label }}
			</slot>

			<slot name="externalIcon">
				<Icon
					v-if="(external || isExternal) && externalIcon"
					v-bind="
						normalizeIconProps(typeof externalIcon === 'boolean' ? { name: 'lucide:arrow-up-right', size: 16 } : externalIcon)
					"
				/>
			</slot>
		</span>

		<slot name="trailingIcon">
			<Icon
				v-if="trailingIcon"
				v-bind="normalizeIconProps(trailingIcon)"
			/>
		</slot>
	</NuxtLink>
</template>

<script setup lang="ts">
import type { NuxtLinkProps } from "#app";
import type { AriaAttributes } from "vue";
import type { StyledComponentProps } from "~/types/Components";
import { reactiveOmit } from "@vueuse/core";

export interface UiLinkProps extends Omit<NuxtLinkProps, "noPrefetch">, StyledComponentProps {
	label?: string;
	events?: boolean;
	icon?: string | IconProps;
	externalIcon?: boolean | string | IconProps;
	trailingIcon?: string | IconProps;
	ariaCurrent?: AriaAttributes["aria-current"];
}

const { normalizeIconProps } = useIcon();
const props = defineProps<UiLinkProps>();
const linkProps = reactiveOmit(props, ["label", "events", "icon", "externalIcon", "trailingIcon", "unstyled", "ariaCurrent"]);

const route = useRoute();
const targetPath = computed(() => props.to?.toString());
const resolveAriaCurrent = computed(() => {
	if (props.ariaCurrent) return props.ariaCurrent;
	if (!targetPath.value) return undefined;
	if (route.path === targetPath.value) return "page";
	return route.path.startsWith(targetPath.value) ? "step" : undefined;
});
const isActive = computed(() => route.path === targetPath.value);
const isExternal = computed(() => isExternalUrl(targetPath.value));
</script>
