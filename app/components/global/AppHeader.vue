<template>
	<UHeader
		title="Sucugrafia"
		class="border-primary shadow-primary-500/20 shadow-2xl backdrop-blur-xs"
		mode="slideover"
		:toggle="{ color: 'primary', variant: 'link', class: 'cursor-pointer' }"
	>
		<template #title>
			<UIcon
				name="i-custom-book"
				class="text-primary-500 size-8 lg:size-10"
			/>
			<h1 class="font-main text-primary-500 text-xl font-black lg:text-2xl">Sucugrafia</h1>
		</template>

		<UNavigationMenu :items />

		<template #body>
			<UNavigationMenu
				:items
				orientation="vertical"
				class="-mx-2.5"
			/>
		</template>
	</UHeader>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items = ref<NavigationMenuItem[]>([
	{
		label: "Inicio",
		icon: "i-lucide-flag",
		to: "/",
		class: "text-md",
	},
	{
		label: "Galeria",
		icon: "i-lucide-images",
		to: "/galery",
		class: "text-md",
	},
	{
		label: "Leer",
		icon: "i-lucide-clipboard-list",
		to: "/article",
		class: "text-md",
	},
	{
		label: "Referencias",
		icon: "i-lucide-text-select",
		to: "/about",
		class: "text-md",
	},
]);
</script>
