<template>
	<DialogPortal v-bind="props">
		<slot />
	</DialogPortal>
</template>

<script setup lang="ts">
import { DialogPortal } from "reka-ui";

export interface UiModalPortalProps {
	to?: string | HTMLElement;
	forceMount?: boolean;
	disabled?: boolean;
	defer?: boolean;
}

const props = withDefaults(defineProps<UiModalPortalProps>(), {
	to: "body",
	forceMount: false,
	disabled: false,
	defer: true,
});
</script>
