<template>
	<DialogTrigger
		as-child
		v-bind="props"
	>
		<slot />
	</DialogTrigger>
</template>

<script setup lang="ts">
import type { ClassNameValue } from "tailwind-merge";
import { DialogTrigger } from "reka-ui";

export interface UiModalTriggerProps {
	class?: ClassNameValue;
}

const props = withDefaults(defineProps<UiModalTriggerProps>(), {
	class: undefined,
});
</script>
