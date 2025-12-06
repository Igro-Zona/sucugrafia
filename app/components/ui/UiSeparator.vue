<template>
	<Separator
		v-bind="props"
		:class="twMerge(`w-full border-t border-${color}`, className)"
	/>
</template>

<script setup lang="ts">
import { Separator, type SeparatorProps } from "reka-ui";
import { twMerge } from "tailwind-merge";

type MySeparatorProps = {
	class?: string;
	color?: string;
} & SeparatorProps;

const { color = "default", class: className = "", ...props } = defineProps<MySeparatorProps>();
</script>
