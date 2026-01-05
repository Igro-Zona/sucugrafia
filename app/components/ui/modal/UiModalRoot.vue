<template>
	<DialogRoot
		v-slot="{ open, close }"
		:default-open
		:modal
	>
		<slot
			:open="open"
			:close="close"
		/>
	</DialogRoot>
</template>

<script setup lang="ts">
import { DialogRoot } from "reka-ui";

const { defaultOpen = false, modal = true } = defineProps<{
	defaultOpen?: boolean;
	modal?: boolean;
}>();
</script>
