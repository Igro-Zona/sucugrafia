<template>
	<Primitive
		:as="as"
		aria-busy="true"
		aria-label="loading"
		aria-live="polite"
		role="alert"
		:class="twMerge('bg-elevated animate-pulse rounded-md', className)"
	>
		<slot />
	</Primitive>
</template>

<script setup lang="ts">
import type { AsTag } from "reka-ui";
import { Primitive } from "reka-ui";
import { twMerge } from "tailwind-merge";

const { class: className = "", as = "div" } = defineProps<{
	class?: string;
	as?: AsTag | Component;
}>();
</script>
