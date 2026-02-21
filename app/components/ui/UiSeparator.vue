<template>
	<Separator
		:as="as"
		:as-child="asChild"
		:decorative="decorative"
		:orientation="orientation"
		:class="{ 'w-full border-t': !unstyled }"
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
