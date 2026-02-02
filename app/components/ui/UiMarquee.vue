<template>
	<Primitive :class="twMerge('flex flex-col items-center gap-8', props.class)">
		<div
			v-for="i in repeat"
			:key="i"
			class="flex h-fit min-w-max shrink-0 animate-[marquee-animation_40s_linear_infinite] flex-col items-center justify-around gap-8 backface-hidden"
			:class="reverse && '[animation-direction:reverse]'"
		>
			<slot />
		</div>
	</Primitive>
</template>

<script setup lang="ts">
import { Primitive, type PrimitiveProps } from "reka-ui";
import { twMerge, type ClassNameValue } from "tailwind-merge";

export interface UiMarqueeProps extends PrimitiveProps {
	as?: AsPropDefault;
	repeat?: number;
	reverse?: boolean;
	class?: ClassNameValue;
}

const props = withDefaults(defineProps<UiMarqueeProps>(), {
	as: "div",
	repeat: 2,
	reverse: false,
	class: undefined,
});
</script>
