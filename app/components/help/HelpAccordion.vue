<template>
	<UiAccordionRoot :class="props.class">
		<UiAccordionItem
			v-for="(item, index) in items"
			:key="index"
			:value="item.value ?? String(index)"
			:disabled="item.disabled"
			:class="item.class"
		>
			<UiAccordionHeader
				as="h3"
				:disabled="item.disabled"
			>
				<Icon
					v-if="item.icon?.name"
					v-bind="item.icon"
					:class="twMerge('size-5 shrink-0', item.icon.class)"
				/>

				<span
					v-if="item.label"
					class="wrap-break-words text-start text-lg sm:text-xl"
				>
					{{ item.label }}
				</span>

				<Icon
					v-bind="item.trailingIcon"
					:name="item.trailingIcon?.name ?? 'lucide:chevron-down'"
					:class="
						twMerge(
							'ms-auto size-6 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180',
							item.trailingIcon?.class,
						)
					"
				/>
			</UiAccordionHeader>

			<UiAccordionContent v-if="item.content">
				<div class="pb-3.5 text-lg">
					{{ item.content }}
				</div>
			</UiAccordionContent>
		</UiAccordionItem>
	</UiAccordionRoot>
</template>

<script setup lang="ts">
import { twMerge, type ClassNameValue } from "tailwind-merge";
import UiAccordionContent from "../ui/accordion/UiAccordionContent.vue";

export type HelpAccordionItem = {
	label?: string;
	icon?: IconProps;
	trailingIcon?: IconProps;
	content?: string;
	value?: string;
	disabled?: boolean;
	class?: ClassNameValue;
};
export interface HelpAccordionProps {
	items: HelpAccordionItem[];
	class?: ClassNameValue;
}

const props = withDefaults(defineProps<HelpAccordionProps>(), {
	class: undefined,
});
</script>
