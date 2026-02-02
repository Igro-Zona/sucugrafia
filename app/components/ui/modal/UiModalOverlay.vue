<template>
	<DialogOverlay
		:class="
			twMerge(
				'bg-elevated/75 fixed inset-0 data-[state=closed]:animate-[fade-out_200ms_ease-in] data-[state=open]:animate-[fade-in_200ms_ease-out]',
				props.class,
			)
		"
	/>
</template>

<script setup lang="ts">
import { twMerge, type ClassNameValue } from "tailwind-merge";
import { DialogOverlay } from "reka-ui";

export interface UiModalOverlayProps {
	forceMount?: boolean;
	class?: ClassNameValue;
}

const props = withDefaults(defineProps<UiModalOverlayProps>(), {
	forceMount: false,
	class: undefined,
});
</script>
