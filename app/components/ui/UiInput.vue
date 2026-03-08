<!-- eslint-disable vue/html-self-closing -->
<template>
	<Primitive
		:as="as"
		:as-child="asChild"
		:class="!unstyled && 'relative inline-flex items-center [&>input]:h-12'"
	>
		<span
			v-if="icon || $slots.leading"
			class="absolute inset-y-0 inset-s-0 flex items-center ps-2.5"
		>
			<slot name="leading">
				<Icon
					v-if="icon"
					v-bind="normalizeIconProps(icon)"
				/>
			</slot>
		</span>

		<input
			v-bind="input"
			class="placeholder:text-dimmed text-highlighted w-full appearance-none gap-1.5 rounded-md border-0 bg-transparent px-2.5 py-1.5 ps-9 text-base/5 transition-colors focus:outline-none disabled:cursor-not-allowed disabled:opacity-75"
		/>

		<span
			v-if="trailingIcon || $slots.trailing"
			class="absolute inset-y-0 inset-e-0 flex items-center pe-2.5"
		>
			<slot name="trailing">
				<Icon
					v-if="trailingIcon"
					v-bind="normalizeIconProps(trailingIcon)"
				/>
			</slot>
		</span>
	</Primitive>
</template>

<script setup lang="ts">
import type { StyledPrimitiveComponentProps } from "~/types/Components";
import type { InputHTMLAttributes } from "vue";

export interface UiInputProps extends StyledPrimitiveComponentProps {
	input?: InputHTMLAttributes;
	icon?: string | IconProps;
	trailingIcon?: string | IconProps;
}

defineProps<UiInputProps>();
const { normalizeIconProps } = useIcon();
</script>
