<template>
	<Primitive
		:as="as"
		:as-child="asChild"
		:class="!unstyled && 'grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'"
	>
		<slot />
	</Primitive>
</template>

<script setup lang="ts">
import type { StyledPrimitiveComponentProps } from "~/types/Components";

defineProps<StyledPrimitiveComponentProps>();
</script>
