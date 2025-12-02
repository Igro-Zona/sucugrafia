<template>
	<Primitive
		:class="twMerge('font-main text-primary flex items-center gap-1 text-2xl font-semibold', className)"
		:as
	>
		<Icon
			mode="svg"
			name="i-sucua-book"
			class="text-primary"
			size="34"
		/>
		<span><span class="text-default">Sucu</span>grafia</span>
	</Primitive>
</template>

<script setup lang="ts">
import type { AsTag } from "reka-ui";
import { Primitive } from "reka-ui";
import { twMerge } from "tailwind-merge";

const { class: className = "", as = "div" } = defineProps<{
	class?: string;
	as?: AsTag | Component;
}>();
</script>
