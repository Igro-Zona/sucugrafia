<template>
	<Primitive
		:as="as"
		:as-child="asChild"
		:class="!unstyled && 'flex flex-col items-center gap-8'"
	>
		<div
			v-for="i in repeat ?? 2"
			:key="i"
			class="flex h-fit min-w-max shrink-0 animate-[marquee-animation_40s_linear_infinite] flex-col items-center justify-around gap-8 backface-hidden"
			:class="reverse && '[animation-direction:reverse]'"
		>
			<slot />
		</div>
	</Primitive>
</template>

<script setup lang="ts">
import type { StyledPrimitiveComponentProps } from "~/types/Components";

export interface UiMarqueeProps extends StyledPrimitiveComponentProps {
	repeat?: number;
	reverse?: boolean;
}

defineProps<UiMarqueeProps>();
</script>
