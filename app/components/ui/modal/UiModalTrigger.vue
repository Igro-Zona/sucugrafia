<template>
	<DialogTrigger
		as-child
		:class="props.class"
	>
		<slot />
	</DialogTrigger>
</template>

<script setup lang="ts">
import { DialogTrigger } from "reka-ui";

const props = defineProps<{
	class?: string;
}>();
</script>
