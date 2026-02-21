<template>
	<Primitive
		:as="as"
		:as-child="asChild"
		:aria-label="title"
		:class="{ 'bg-default border-default space-y-4 rounded-md border p-4 sm:p-6': !unstyled }"
		role="group"
	>
		<div class="flex items-center gap-4">
			<slot name="icon">
				<Icon
					v-if="icon"
					v-bind="iconProps"
					class="text-primary"
				/>
			</slot>

			<slot name="title">
				<h3
					v-if="title"
					class="text-highlighted font-bold text-pretty sm:text-lg"
				>
					{{ title }}
				</h3>
			</slot>
		</div>

		<slot>
			<p
				v-if="description"
				class="text-muted text-sm text-pretty sm:text-base"
			>
				{{ description }}
			</p>
		</slot>
	</Primitive>
</template>

<script setup lang="ts">
import { Primitive } from "reka-ui";
import type { StyledPrimitiveComponentProps } from "~/types/Components";

export interface UiCardProps extends StyledPrimitiveComponentProps {
	title?: string;
	description?: string;
	icon?: string | IconProps;
}

const props = defineProps<UiCardProps>();
const { iconProps } = useIcon(props.icon);
</script>
