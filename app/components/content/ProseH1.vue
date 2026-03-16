<template>
	<h1
		:id="id"
		class="text-highlighted mb-8 scroll-mt-[calc(45px+var(--ui-header-height))] text-4xl font-bold lg:scroll-mt-(--ui-header-height)"
	>
		<a
			v-if="id"
			:href="`#${id}`"
			class="inline-flex items-center gap-2"
		>
			<slot />
		</a>
		<slot v-else />
	</h1>
</template>

<script setup lang="ts">
defineProps<{ id?: string }>();
</script>
