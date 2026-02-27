<template>
	<main
		v-spotlight
		:class="!unstyled && 'box-border min-h-[calc(100vh-var(--ui-header-height)+1px)] pb-4 sm:pb-8'"
	>
		<div class="relative z-1">
			<slot />
		</div>
	</main>
</template>

<script setup lang="ts">
import type { StyledComponentProps } from "~/types/Components";

defineProps<StyledComponentProps>();
</script>
