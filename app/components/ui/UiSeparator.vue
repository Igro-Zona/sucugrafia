<template>
	<Separator :class="twMerge(`w-full border-t border-${color}`, props.class)" />
</template>

<script setup lang="ts">
import { Separator, type SeparatorProps } from "reka-ui";
import { twMerge, type ClassNameValue } from "tailwind-merge";

export interface UiSeparatorProps extends SeparatorProps {
	color?: string;
	class?: ClassNameValue;
}

const props = withDefaults(defineProps<UiSeparatorProps>(), {
	color: "default",
	class: undefined,
});
</script>
