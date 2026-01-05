<template>
	<DialogContent
		:class="
			twMerge(
				'bg-default flexmax-h-[calc(100dvh-1rem)] ring-default fixed top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 flex-col shadow-lg ring focus:outline-none data-[state=closed]:animate-[scale-out_200ms_ease-in] data-[state=open]:animate-[scale-in_200ms_ease-out] sm:w-[calc(100vw-2rem)]',
				props.class,
			)
		"
	>
		<VisuallyHidden v-if="title || description">
			<DialogTitle v-if="title">
				{{ title }}
			</DialogTitle>

			<DialogDescription v-if="description">
				{{ description }}
			</DialogDescription>
		</VisuallyHidden>

		<slot />
	</DialogContent>
</template>

<script setup lang="ts">
import { twMerge } from "tailwind-merge";
import { DialogContent, DialogDescription, DialogTitle, VisuallyHidden } from "reka-ui";

const props = defineProps<{
	class?: string;
	title?: string;
	description?: string;
}>();
</script>
