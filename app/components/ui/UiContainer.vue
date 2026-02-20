<template>
	<div :class="{ 'mx-auto w-full max-w-(--ui-container) px-4 sm:px-6 lg:px-8': !unstyled }">
		<slot />
	</div>
</template>

<script setup lang="ts">
import type { StyledComponentProps } from "~/types/Components";

defineProps<StyledComponentProps>();
</script>
