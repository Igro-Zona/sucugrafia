<template>
	<button
		:disabled="disabled"
		:aria-disabled="disabled"
		:type="type ?? 'button'"
		:class="!unstyled && 'group inline-flex cursor-pointer gap-1.5 rounded-md p-1.5 transition-colors'"
	>
		<slot name="icon">
			<Icon
				v-if="icon"
				v-bind="normalizeIconProps(icon)"
			/>
		</slot>

		<span
			v-if="label || $slots.default"
			class="inline-flex gap-0.5 truncate transition-colors"
		>
			<slot>
				{{ label }}
			</slot>
		</span>

		<slot name="trailingIcon">
			<Icon
				v-if="trailingIcon"
				v-bind="normalizeIconProps(trailingIcon)"
			/>
		</slot>
	</button>
</template>

<script setup lang="ts">
import type { StyledComponentProps } from "~/types/Components";

export interface UiLinkProps extends StyledComponentProps {
	type?: "button" | "submit" | "reset";
	label?: string;
	icon?: string | IconProps;
	trailingIcon?: string | IconProps;
	disabled?: boolean;
}

const { normalizeIconProps } = useIcon();
defineProps<UiLinkProps>();
</script>
