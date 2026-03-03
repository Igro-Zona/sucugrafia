<template>
	<Primitive
		:as="as"
		:as-child="asChild"
		:class="!unstyled && 'relative flex flex-col lg:grid lg:grid-cols-10 lg:gap-10'"
	>
		<div class="lg:col-span-8">
			<slot />
		</div>

		<aside class="border-l-default hidden border-l lg:col-span-2 lg:-ml-4 lg:block lg:pl-4">
			<slot name="right" />
		</aside>
	</Primitive>
</template>

<script setup lang="ts">
import type { StyledPrimitiveComponentProps } from "~/types/Components";

defineProps<StyledPrimitiveComponentProps>();
</script>
