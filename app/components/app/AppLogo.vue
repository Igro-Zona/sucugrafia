<template>
	<UiLink
		to="/"
		:events="true"
	>
		<Primitive
			:as="as"
			class="text-highlighted flex items-center gap-1 text-2xl font-semibold"
		>
			<Icon
				name="sucua:book"
				:size="34"
				class="text-primary"
			/>
			<span>Sucu<span class="text-primary">grafia</span></span>
		</Primitive>
	</UiLink>
</template>

<script setup lang="ts">
defineProps<{
	as?: AsPropDefault;
}>();
</script>
