<template>
	<div
		role="group"
		:aria-label="title"
		:class="twMerge('bg-default border-default relative space-y-4 rounded-md border p-4 sm:p-6', props.class)"
	>
		<div class="flex items-center gap-4">
			<Icon
				v-if="icon?.name"
				v-bind="icon"
				class="text-primary"
			/>

			<Primitive
				:as
				class="text-highlighted font-semibold text-pretty sm:text-lg"
			>
				{{ title }}
			</Primitive>
		</div>

		<p
			v-if="description"
			class="text-muted text-sm text-pretty sm:text-base"
		>
			{{ description }}
		</p>

		<slot />
	</div>
</template>

<script setup lang="ts">
import { Primitive } from "reka-ui";
import { twMerge, type ClassNameValue } from "tailwind-merge";

export interface UiCardProps {
	title?: string;
	description?: string;
	icon?: IconProps;
	as?: AsPropWithHeadings;
	class?: ClassNameValue;
}

const props = withDefaults(defineProps<UiCardProps>(), {
	title: "Sin titulo",
	description: undefined,
	icon: undefined,
	as: "p",
	class: undefined,
});
</script>
