<template>
	<Primitive
		:as="as"
		:as-child="asChild"
		:class="!unstyled && 'mx-auto w-full max-w-(--ui-container) px-4 sm:px-6 lg:px-8'"
	>
		<slot />
	</Primitive>
</template>

<script setup lang="ts">
import type { StyledPrimitiveComponentProps } from "~/types/Components";

defineProps<StyledPrimitiveComponentProps>();
</script>
