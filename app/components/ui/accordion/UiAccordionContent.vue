<template>
	<AccordionContent
		v-bind="props"
		:class="
			twMerge(
				'overflow-hidden data-[state=closed]:animate-[accordion-animation-up_200ms_ease-out] data-[state=open]:animate-[accordion-animation-down_200ms_ease-out]',
				props.class,
			)
		"
	>
		<slot />
	</AccordionContent>
</template>

<script setup lang="ts">
import { twMerge, type ClassNameValue } from "tailwind-merge";
import { AccordionContent } from "reka-ui";

export interface UiAccordionContentProps {
	as?: AsPropDefault;
	class?: ClassNameValue;
	forceMount?: boolean;
}

const props = withDefaults(defineProps<UiAccordionContentProps>(), {
	as: "div",
	class: undefined,
	forceMount: undefined,
});
</script>
