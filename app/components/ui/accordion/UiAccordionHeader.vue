<template>
	<AccordionHeader
		:as="as"
		:class="twMerge('flex', props.class)"
	>
		<AccordionTrigger
			class="group focus-visible:outline-primary hover:text-primary flex min-w-0 flex-1 cursor-pointer items-center gap-4 py-3.5 font-medium"
			:class="{ 'opacity-75': disabled }"
			:disabled="disabled"
		>
			<slot />
		</AccordionTrigger>
	</AccordionHeader>
</template>

<script setup lang="ts">
import { twMerge, type ClassNameValue } from "tailwind-merge";
import { AccordionHeader, AccordionTrigger } from "reka-ui";

export interface UiAccordionHeaderProps {
	as?: AsPropDefault;
	class?: ClassNameValue;
	disabled?: boolean;
}

const props = withDefaults(defineProps<UiAccordionHeaderProps>(), {
	as: "div",
	class: undefined,
	disabled: false,
});
</script>
