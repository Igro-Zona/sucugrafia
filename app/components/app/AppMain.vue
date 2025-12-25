<template>
	<main
		v-spotlight
		:class="twMerge('box-border min-h-[calc(100vh-var(--ui-header-height)+1px)] pb-8', props.class)"
	>
		<div class="relative z-9 overflow-hidden">
			<slot />
		</div>
	</main>
</template>

<script setup lang="ts">
import { twMerge } from "tailwind-merge";

const props = defineProps<{
	class?: string;
}>();
</script>
