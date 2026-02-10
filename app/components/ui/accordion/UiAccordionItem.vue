<template>
	<AccordionItem
		v-slot="{ open }"
		v-bind="props"
		:class="twMerge('border-muted border-b last:border-b-0', props.class)"
	>
		<slot :open="open" />
	</AccordionItem>
</template>

<script setup lang="ts">
import { twMerge, type ClassNameValue } from "tailwind-merge";
import { AccordionItem } from "reka-ui";

export interface UiAccordionItemProps {
	as?: AsPropDefault;
	class?: ClassNameValue;
	disabled?: boolean;
	unmountOnHide?: boolean;
	value: string;
}

defineSlots();
const props = withDefaults(defineProps<UiAccordionItemProps>(), {
	as: "div",
	class: undefined,
	disabled: false,
	unmountOnHide: true,
});
</script>
