<template>
	<Primitive
		aria-busy="true"
		aria-label="loading"
		aria-live="polite"
		role="alert"
		:class="twMerge('bg-elevated animate-pulse rounded-md', props.class)"
	>
		<slot />
	</Primitive>
</template>

<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "reka-ui";
import { twMerge, type ClassNameValue } from "tailwind-merge";

export interface UiSkeletonProps extends PrimitiveProps {
	as?: AsPropDefault;
	class?: ClassNameValue;
}

const props = withDefaults(defineProps<UiSkeletonProps>(), {
	as: "div",
	class: undefined,
});
</script>
