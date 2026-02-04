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
import { twMerge, type ClassNameValue } from "tailwind-merge";

export interface AppMainProps {
	class?: ClassNameValue;
}

const props = withDefaults(defineProps<AppMainProps>(), {
	class: undefined,
});
</script>
