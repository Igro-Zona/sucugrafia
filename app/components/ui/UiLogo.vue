<template>
	<Primitive
		:as="as"
		:class="twMerge('text-highlighted flex items-center gap-1 text-2xl font-semibold', props.class)"
	>
		<Icon
			v-if="icon?.name"
			v-bind="icon"
			class="text-primary"
		/>
		<span>Sucu<span class="text-primary">grafia</span></span>
	</Primitive>
</template>

<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "reka-ui";
import { twMerge, type ClassNameValue } from "tailwind-merge";

export interface UiLogoProps extends PrimitiveProps {
	as?: AsPropDefault;
	icon?: IconProps;
	class?: ClassNameValue;
}

const props = withDefaults(defineProps<UiLogoProps>(), {
	as: "div",
	icon: undefined,
	class: undefined,
});
</script>
