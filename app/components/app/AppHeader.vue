<template>
	<UHeader
		title="Sucugrafia"
		class="border-primary shadow-primary/40 shadow-2xl backdrop-blur-xs"
		mode="slideover"
		:toggle="{ color: 'primary', variant: 'link', class: 'cursor-pointer' }"
	>
		<template #title>
			<UiLogo v-bind="logo" />
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
import type { UiLogoProps } from "../ui/UiLogo.vue";
import type { NavigationMenuItem } from "@nuxt/ui";

const logo: UiLogoProps = {
	as: "h1",
	icon: {
		name: "sucua:book",
		size: 34,
	},
};

const items: NavigationMenuItem[] = [
	{
		label: "Inicio",
		icon: "i-lucide-flag",
		to: "/",
		class: "text-md",
	},
	{
		label: "Galeria",
		icon: "i-lucide-images",
		to: "/galeria",
		class: "text-md",
	},
	{
		label: "Leer",
		icon: "i-lucide-clipboard-list",
		to: "/articulos",
		class: "text-md",
	},
	{
		label: "FAQ",
		icon: "i-lucide-text-select",
		to: "/ayuda",
		class: "text-md",
	},
];
</script>
