<template>
	<header
		v-bind="$attrs"
		:class="
			!unstyled &&
			'bg-default/80 border-primary shadow-primary/40 sticky top-0 z-2 h-(--ui-header-height) border-b shadow-2xl backdrop-blur-xs transition-transform'
		"
	>
		<UiContainer class="flex h-full items-center justify-between gap-3">
			<div class="flex flex-1 items-center">
				<AppLogo :as="$route.path === '/' ? 'h1' : 'div'" />
			</div>

			<div class="hidden items-center lg:flex">
				<AppHeaderMenu :links="links" />
			</div>

			<div class="flex items-center lg:flex-1">
				<UiButton
					class="text-primary hover:text-primary/75 active:text-primary/75 -me-2 focus:outline-offset-0! lg:hidden"
					:aria-label="open ? 'Cerrar menú' : 'Abrir menú'"
					aria-controls="slideover"
					:aria-expanded="open"
					:icon="open ? 'lucide:x' : 'lucide:menu'"
					@click="toggleOpen"
				/>
			</div>
		</UiContainer>
	</header>

	<UiModal
		id="slideover"
		v-model:open="open"
		title="Menú"
		description="lol"
		unstyled
		class="bg-default divide-default ring-default fixed top-0 right-0 bottom-0 left-auto flex w-full max-w-md flex-col divide-y data-[state=closed]:animate-[slide-animation-out-to-right_200ms_ease-in-out] data-[state=open]:animate-[slide-animation-in-from-right_200ms_ease-in-out] sm:shadow-lg sm:ring"
	>
		<aside>
			<div class="flex h-(--ui-header-height) flex-row-reverse items-center justify-between gap-3 px-4 sm:px-6">
				<UiButton
					class="text-primary hover:text-primary/75 active:text-primary/75 focus:outline-offset-0!"
					:aria-label="open ? 'Cerrar menú' : 'Abrir menú'"
					aria-controls="slideover"
					:aria-expanded="open"
					:icon="open ? 'lucide:x' : 'lucide:menu'"
					@click="toggleOpen"
				/>

				<AppLogo :as="$route.path === '/' ? 'h1' : 'div'" />
			</div>

			<div class="overflow-y-auto p-4 sm:p-6">
				<AppHeaderMenu
					:links="links"
					orientation="vertical"
					class="-mx-2.5"
				/>
			</div>
		</aside>
	</UiModal>
</template>

<script setup lang="ts">
import type { StyledComponentProps } from "~/types/Components";
import type { UiLinkProps } from "~/components/ui/UiLink.vue";

defineProps<StyledComponentProps>();

const links: UiLinkProps[] = [
	{
		label: "Inicio",
		icon: {
			name: "lucide:flag",
			size: 20,
		},
		to: "/",
	},
	{
		label: "Galeria",
		icon: {
			name: "lucide:images",
			size: 20,
		},
		to: "/galeria",
	},
	{
		label: "Leer",
		icon: {
			name: "lucide:clipboard-list",
			size: 20,
		},
		to: "/articulos",
	},
	{
		label: "FAQ",
		icon: {
			name: "lucide:text-select",
			size: 20,
		},
		to: "/ayuda",
	},
];

const open = defineModel<boolean>("open", { default: false });
function toggleOpen() {
	open.value = !open.value;
}
</script>
