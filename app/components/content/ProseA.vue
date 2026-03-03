<template>
	<UiLink
		v-bind="props"
		:to="href"
		unstyled
		class="text-primary hover:border-primary focus-visible:outline-primary hover:[&>code]:border-primary hover:[&>code]:text-primary focus-visible:[&>code]:border-primary focus-visible:[&>code]:text-primary border-b border-transparent font-medium transition-colors focus-visible:has-[>code]:outline-0 [&>code]:border-dashed [&>code]:transition-colors"
	>
		<slot />
	</UiLink>
</template>

<script setup lang="ts">
import type { UiLinkProps } from "../ui/UiLink.vue";

const props = defineProps<{ href: string } & Omit<UiLinkProps, "to">>();
</script>
