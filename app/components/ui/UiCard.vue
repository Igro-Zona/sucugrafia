<template>
	<div
		role="group"
		:aria-label="props.title"
		:class="twMerge('bg-default border-default relative space-y-4 rounded-md border p-4 sm:p-6', props.class)"
	>
		<div class="flex items-center gap-4">
			<Icon
				v-if="props.icon"
				:name="props.icon"
				class="text-primary"
				size="24"
			/>

			<Primitive
				:as="as ? as : 'p'"
				class="text-highlighted font-semibold text-pretty sm:text-lg"
			>
				{{ props.title }}
			</Primitive>
		</div>

		<p
			v-if="description"
			class="text-muted text-sm text-pretty sm:text-base"
		>
			{{ props.description }}
		</p>

		<slot />
	</div>
</template>

<script setup lang="ts">
import { twMerge } from "tailwind-merge";
import { Primitive } from "reka-ui";

const props = defineProps<{
	title: string;
	class?: string;
	icon?: string;
	description?: string;
	as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | Component;
}>();
</script>
