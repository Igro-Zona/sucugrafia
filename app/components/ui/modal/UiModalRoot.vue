<template>
	<DialogRoot
		v-slot="{ open: _open, close }"
		v-bind="props"
		@update:open="updateOpen"
	>
		<slot
			:open="_open"
			:close="close"
		/>
	</DialogRoot>
</template>

<script setup lang="ts">
import { DialogRoot } from "reka-ui";

export interface UiModalRootProps {
	defaultOpen?: boolean;
	modal?: boolean;
	open?: boolean;
}

const props = withDefaults(defineProps<UiModalRootProps>(), {
	defaultOpen: false,
	modal: true,
	open: false,
});

const emit = defineEmits(["update:open"]);
function updateOpen(value: boolean) {
	emit("update:open", value);
}
</script>
