<template>
	<DialogOverlay
		:class="
			twMerge(
				'bg-elevated/75 fixed inset-0 data-[state=closed]:animate-[fade-out_200ms_ease-in] data-[state=open]:animate-[fade-in_200ms_ease-out]',
				className,
			)
		"
		:force-mount="forceMount"
	/>
</template>

<script setup lang="ts">
import { twMerge } from "tailwind-merge";
import { DialogOverlay } from "reka-ui";

const { class: className = "", forceMount = false } = defineProps<{
	class?: string;
	forceMount?: boolean;
}>();
</script>
