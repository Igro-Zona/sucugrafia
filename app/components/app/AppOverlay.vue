<template>
	<component
		:is="overlay.component"
		v-bind="overlay.props"
		v-model:open="overlay.isMounted"
		@close="close"
		@after:leave="close"
	/>
</template>

<script setup lang="ts">
const { overlay, close } = useAppOverlay();
</script>
