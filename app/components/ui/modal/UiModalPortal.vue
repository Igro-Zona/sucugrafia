<template>
	<DialogPortal
		:to
		:force-mount
		:disabled
		:defer
	>
		<slot />
	</DialogPortal>
</template>

<script setup lang="ts">
import { DialogPortal } from "reka-ui";

const {
	to = "body",
	forceMount = false,
	disabled = false,
	defer = true,
} = defineProps<{
	to?: string | HTMLElement;
	forceMount?: boolean;
	disabled?: boolean;
	defer?: boolean;
}>();
</script>
