<template>
	<UApp>
		<AppHeader />

		<UError
			as="main"
			:error="error"
			:clear="{
				color: 'neutral',
				size: 'xl',
				icon: 'i-lucide-arrow-left',
				class: 'rounded-full',
			}"
		/>

		<AppFooter />
	</UApp>
</template>

<script setup lang="ts">
import type { NuxtError } from "#app";

const { error } = defineProps<{
	error: NuxtError;
}>();
</script>
