<template>
	<Primitive
		:as="as"
		:class="twMerge('flex flex-col lg:grid lg:grid-cols-10 lg:gap-10', props.class)"
	>
		<div class="lg:col-span-8">
			<slot />
		</div>

		<Slot
			v-if="!!slots.right"
			class="order-first lg:order-last lg:col-span-2"
		>
			<slot name="right" />
		</Slot>
	</Primitive>
</template>

<script setup lang="ts">
import { Primitive, Slot } from "reka-ui";
import { twMerge, type ClassNameValue } from "tailwind-merge";
export interface ArticlePageProps {
	as?: AsPropDefault;
	class?: ClassNameValue;
}
const slots = defineSlots();
const props = withDefaults(defineProps<ArticlePageProps>(), {
	as: "div",
	class: undefined,
});
</script>
