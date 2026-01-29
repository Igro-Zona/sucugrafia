<template>
	<UHeader
		title="Sucugrafia"
		class="border-primary shadow-primary/40 shadow-2xl backdrop-blur-xs"
		mode="slideover"
		:toggle="{ color: 'primary', variant: 'link', class: 'cursor-pointer' }"
	>
		<template #title>
			<UiLogo as="h1" />
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
		to: "/gallery",
		class: "text-md",
	},
	{
		label: "Leer",
		icon: "i-lucide-clipboard-list",
		to: "/articles",
		class: "text-md",
	},
	{
		label: "FAQ",
		icon: "i-lucide-text-select",
		to: "/about",
		class: "text-md",
	},
]);
</script>
