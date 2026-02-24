<template>
	<AccordionRoot
		:as="as"
		:as-child="asChild"
		:default-value="defaultValue"
		:model-value="modelValue"
		:disabled="disabled"
		:collapsible="true"
		type="single"
		:unmount-on-hide="unmountOnHide"
		:class="!unstyled && 'font-latto w-full text-2xl'"
		@update:model-value="$emit('update:modelValue', $event)"
	>
		<AccordionItem
			v-for="(item, index) in items"
			:key="index"
			v-slot="{ open }"
			:value="item.value ?? String(index)"
			:disabled="item.disabled"
			:class="[!unstyled && 'border-muted border-b last:border-b-0', item.class]"
		>
			<AccordionHeader
				class="flex"
				:as="item.as"
				:as-child="item.asChild"
			>
				<AccordionTrigger
					:class="[
						!item.unstyled &&
							'group hover:text-primary flex min-w-0 flex-1 cursor-pointer items-center gap-4 py-3.5 font-medium',
						!item.unstyled && item.disabled && 'opacity-75',
					]"
					:disabled="item.disabled"
				>
					<slot
						name="header"
						:item="item"
						:index="index"
						:open="open"
					>
						<Icon
							v-if="item.icon"
							v-bind="normalizeIconProps(item.icon)"
							class="size-5 shrink-0"
						/>

						<span
							v-if="item.label"
							class="wrap-break-words truncate text-start text-lg sm:text-xl"
						>
							{{ item.label }}
						</span>

						<Icon
							v-if="item.trailingIcon"
							v-bind="normalizeIconProps(item.trailingIcon)"
							class="ms-auto size-6 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180"
						/>
					</slot>
				</AccordionTrigger>
			</AccordionHeader>

			<AccordionContent
				v-if="item.content || $slots.content"
				:class="[
					!item.unstyled &&
						'overflow-hidden data-[state=closed]:animate-[accordion-animation-up_200ms_ease-out] data-[state=open]:animate-[accordion-animation-down_200ms_ease-out]',
					item.contentClass,
				]"
			>
				<slot
					:item="item"
					:index="index"
					:open="open"
				>
					<div class="pb-3.5 text-lg">
						{{ item.content }}
					</div>
				</slot>
			</AccordionContent>
		</AccordionItem>
	</AccordionRoot>
</template>

<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import type { StyledPrimitiveComponentProps } from "~/types/Components";

export interface UiAccordionItem extends StyledPrimitiveComponentProps {
	disabled?: boolean;
	unmountOnHide?: boolean;
	value?: string;
	class?: any;
	label?: string;
	icon?: string | IconProps;
	trailingIcon?: string | IconProps;
	contentClass?: any;
	content?: string;
}

export interface UiAccordionProps extends StyledPrimitiveComponentProps {
	defaultValue?: string;
	disabled?: boolean;
	modelValue?: string;
	unmountOnHide?: boolean;
	items?: UiAccordionItem[];
}

defineEmits(["update:modelValue"]);
defineProps<UiAccordionProps>();
const { normalizeIconProps } = useIcon();
</script>
