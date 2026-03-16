<template>
	<h4
		:id="id"
		class="text-highlighted [&>a]:focus-visible:outline-primary mt-6 mb-2 scroll-mt-[calc(24px+45px+var(--ui-header-height))] text-lg font-bold lg:scroll-mt-[calc(24px+var(--ui-header-height))]"
	>
		<a
			v-if="id"
			:href="`#${id}`"
		>
			<slot />
		</a>
		<slot v-else />
	</h4>
</template>

<script setup lang="ts">
defineProps<{ id?: string }>();
</script>
