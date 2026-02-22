<template>
	<Separator
		:as="as"
		:as-child="asChild"
		:decorative="decorative"
		:orientation="orientation"
		:class="!unstyled && 'w-full border-t'"
	/>
</template>

<script setup lang="ts">
import type { StyledPrimitiveComponentProps } from "~/types/Components";

export interface UiSeparatorProps extends StyledPrimitiveComponentProps {
	decorative?: boolean;
	orientation?: "vertical" | "horizontal";
}

defineProps<UiSeparatorProps>();
</script>
