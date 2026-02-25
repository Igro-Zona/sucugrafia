<template>
	<Primitive
		:as="as"
		:as-child="asChild"
		aria-busy="true"
		aria-label="loading"
		aria-live="polite"
		role="alert"
		:class="!unstyled && 'bg-elevated animate-pulse rounded-md'"
	>
		<slot />
	</Primitive>
</template>

<script setup lang="ts">
import type { StyledPrimitiveComponentProps } from "~/types/Components";

defineProps<StyledPrimitiveComponentProps>();
</script>
