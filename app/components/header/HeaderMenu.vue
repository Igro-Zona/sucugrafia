<template>
	<nav
		:class="[
			twMerge('relative flex shrink-0 gap-1.5', props.class),
			orientation === 'horizontal' ? 'items-center justify-between' : 'flex-col',
		]"
	>
		<ul :class="orientation === 'horizontal' ? 'flex items-center' : undefined">
			<li
				v-for="(item, index) in items"
				:key="index"
				as="li"
				class="min-w-0"
				:class="orientation === 'horizontal' ? 'py-2' : undefined"
			>
				<UiLink
					v-bind="{ ...item, icon: undefined, label: undefined }"
					class="data-[active=true]:before:bg-elevated router-link-active:before:bg-elevated focus-visible:before:ring-primary text-muted hover:text-highlighted hover:before:bg-elevated/50 relative flex w-full items-center gap-1.5 px-2.5 py-1.5 transition-colors before:absolute before:inset-x-px before:inset-y-0 before:z-[-100] before:rounded-md before:transition-colors focus-visible:outline-none focus-visible:before:ring-2 focus-visible:before:ring-inset"
				>
					<Icon
						v-if="item.icon?.name"
						v-bind="item.icon"
						class="menu-icon text-dimmed group-hover:text-default size-5 transition-colors"
					/>
					<span class="truncate">{{ item.label }}</span>
				</UiLink>
			</li>
		</ul>
	</nav>
</template>

<script setup lang="ts">
import { twMerge, type ClassNameValue } from "tailwind-merge";
import type { UiLinkProps } from "../ui/UiLink.vue";

export interface HeaderMenuItem extends UiLinkProps {
	label?: string;
}
export interface HeaderMenuProps {
	items: HeaderMenuItem[];
	orientation?: "horizontal" | "vertical";
	class?: ClassNameValue;
}

const props = withDefaults(defineProps<HeaderMenuProps>(), {
	orientation: "horizontal",
	class: undefined,
});
</script>
