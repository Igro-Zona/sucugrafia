<template>
	<header
		aria-label="Encabezado"
		v-bind="$attrs"
		:class="
			twMerge(
				'bg-default/75 border-primary shadow-primary/40 sticky top-0 z-50 h-(--ui-header-height) border-b shadow-2xl backdrop-blur-xs transition-transform',
				props.class,
			)
		"
	>
		<UiContainer class="flex h-full items-center justify-between gap-3">
			<div class="flex items-center gap-1.5 lg:flex-1">
				<UiLink
					to="/"
					:events="true"
				>
					<UiLogo v-bind="logo" />
				</UiLink>
			</div>

			<div class="hidden lg:flex">
				<HeaderMenu :items />
			</div>

			<div class="flex items-center justify-end gap-1.5 lg:flex-1">
				<UButton
					color="primary"
					variant="link"
					:aria-label="open ? 'Cerrar menú' : 'Abrir menú'"
					:icon="open ? 'lucide:x' : 'lucide:menu'"
					class="-me-1.5 cursor-pointer lg:hidden"
					@click="toggleOpen"
				/>
			</div>
		</UiContainer>
	</header>

	<USlideover
		v-model:open="open"
		title="Sucugrafia"
		:ui="{
			overlay: 'lg:hidden',
			content: 'lg:hidden',
		}"
	>
		<template #content>
			<div class="flex h-(--ui-header-height) items-center justify-between gap-3 px-4 sm:px-6">
				<UiLogo v-bind="logo" />

				<UButton
					color="primary"
					variant="link"
					:aria-label="open ? 'Cerrar menú' : 'Abrir menú'"
					:icon="open ? 'lucide:x' : 'lucide:menu'"
					class="-me-1.5 cursor-pointer lg:hidden"
					@click="toggleOpen"
				/>
			</div>

			<div class="overflow-y-auto p-4 sm:p-6">
				<HeaderMenu
					:items
					orientation="vertical"
					class="-mx-2.5"
				/>
			</div>
		</template>
	</USlideover>
</template>

<script setup lang="ts">
import type { UiLogoProps } from "../ui/UiLogo.vue";
import type { HeaderMenuItem } from "../header/HeaderMenu.vue";
import { twMerge, type ClassNameValue } from "tailwind-merge";

export interface AppHeaderProps {
	class?: ClassNameValue;
}

const props = withDefaults(defineProps<AppHeaderProps>(), {
	class: undefined,
});

const logo: UiLogoProps = {
	as: "h1",
	icon: {
		name: "sucua:book",
		size: 34,
	},
};

const items: HeaderMenuItem[] = [
	{
		label: "Inicio",
		icon: {
			name: "lucide:flag",
		},
		to: "/",
		class: "text-md",
	},
	{
		label: "Galeria",
		icon: {
			name: "lucide:images",
		},
		to: "/galeria",
		class: "text-md",
	},
	{
		label: "Leer",
		icon: {
			name: "lucide:clipboard-list",
		},
		to: "/articulos",
		class: "text-md",
	},
	{
		label: "FAQ",
		icon: {
			name: "lucide:text-select",
		},
		to: "/ayuda",
		class: "text-md",
	},
];

const open = defineModel("open", { type: Boolean, ...{ default: false } });
function toggleOpen() {
	open.value = !open.value;
}
</script>
