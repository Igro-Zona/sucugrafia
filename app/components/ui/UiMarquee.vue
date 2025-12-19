<template>
	<Primitive
		:as
		:class="twMerge('flex flex-col items-center gap-8', className)"
	>
		<div
			v-for="i in repeat"
			:key="i"
			class="flex h-fit min-w-max shrink-0 animate-[marquee-animation_40s_linear_infinite] flex-col items-center justify-around gap-8 backface-hidden"
			:class="reverse ? '[animation-direction:reverse]' : ''"
		>
			<slot />
		</div>
	</Primitive>
</template>

<script setup lang="ts">
import type { AsTag } from "reka-ui";
import { Primitive } from "reka-ui";
import { twMerge } from "tailwind-merge";
const {
	class: className = "",
	as = "div",
	repeat = 3,
	reverse = false,
} = defineProps<{
	class?: string;
	as?: AsTag | Component;
	repeat?: number;
	reverse?: boolean;
}>();
</script>
