<template>
	<DialogRoot v-slot="{ open, close }">
		<slot
			:open="open"
			:close="close"
		/>
	</DialogRoot>
</template>

<script setup lang="ts">
import { DialogRoot } from "reka-ui";

export interface UiModalRootProps {
	defaultOpen?: boolean;
	modal?: boolean;
}

withDefaults(defineProps<UiModalRootProps>(), {
	defaultOpen: false,
	modal: true,
});
</script>
