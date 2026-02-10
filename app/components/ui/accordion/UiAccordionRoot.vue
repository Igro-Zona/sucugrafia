<template>
	<AccordionRoot
		v-bind="forwardedPropsEmits"
		:class="twMerge('font-latto w-full text-2xl', props.class)"
	>
		<slot />
	</AccordionRoot>
</template>

<script setup lang="ts">
import { twMerge, type ClassNameValue } from "tailwind-merge";
import { AccordionRoot, useForwardPropsEmits } from "reka-ui";

export interface UiAccordionRootProps {
	as?: AsPropDefault;
	class?: ClassNameValue;
	type?: "single" | "multiple";
	collapsible?: boolean;
	defaultValue?: string | string[];
	modelValue?: string | string[];
	orientation?: "vertical" | "horizontal";
	disabled?: boolean;
	unmountOnHide?: boolean;
}

const emits = defineEmits(["update:modelValue"]);
const props = withDefaults(defineProps<UiAccordionRootProps>(), {
	as: "div",
	class: undefined,
	type: "single",
	collapsible: true,
	defaultValue: undefined,
	modelValue: undefined,
	orientation: "vertical",
	disabled: false,
	unmountOnHide: true,
});
const forwardedPropsEmits = useForwardPropsEmits(props, emits);
</script>
