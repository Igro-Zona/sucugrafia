<template>
	<section
		:aria-label="title"
		class="relative z-9 space-y-8 px-4 py-24 backdrop-blur-xs transition-all duration-1000 hover:backdrop-blur-none sm:px-6 sm:py-32 lg:px-8 lg:py-40"
	>
		<hgroup class="text-center">
			<h2 class="text-primary text-4xl font-semibold tracking-tighter sm:text-6xl md:text-7xl">
				{{ title }}
			</h2>
			<p class="text-highlighted mt-6 tracking-tight text-balance sm:text-xl sm:font-semibold">
				{{ description }}
			</p>
		</hgroup>

		<div class="flex flex-wrap items-center justify-center gap-6">
			<UiLink
				to="/galeria"
				class="text-inverted! bg-primary hover:bg-primary/75 active:bg-primary/75 cursor-pointer items-center gap-2 rounded-md px-3 py-2"
			>
				<Icon name="i-lucide-image" />
				<span>Ver galeria</span>
			</UiLink>

			<UiLink
				to="/articulos"
				class="text-default! bg-muted border-accented hover:bg-muted/75 active:bg-muted/75 cursor-pointer items-center gap-2 rounded-md border px-3 py-2"
			>
				<span>Leer articulos</span>
				<Icon name="i-lucide-arrow-right" />
			</UiLink>
		</div>
	</section>
</template>

<script setup lang="ts">
const { title, description } = defineProps<{
	title: string;
	description: string;
}>();
</script>
