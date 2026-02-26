<template>
	<footer class="border-primary border-t">
		<UiContainer>
			<AppFooterMenu :columns="columns" />
		</UiContainer>

		<UiSeparator class="border-muted" />

		<UiContainer class="flex flex-col items-center justify-between gap-3 py-4 lg:flex-row">
			<div class="flex items-center gap-6 lg:gap-3">
				<AppLogo as="div" />

				<p class="text-muted hidden text-center text-sm lg:inline">
					Copyright © {{ new Date().getFullYear() }} | Todos los derechos reservados.
				</p>

				<UiLink
					to="https://github.com/Igro-Zona/sucugrafia"
					aria-label="Abrir en GitHub"
					class="hover:bg-muted active:text-highlighted! text-muted hover:text-default! p-2 transition-colors focus-visible:outline-offset-0! lg:hidden"
					:icon="{ name: 'simple-icons:github', size: 30, class: 'transition-colors' }"
					:external-icon="false"
				/>
			</div>

			<p class="text-muted text-center text-sm lg:hidden">
				Copyright © {{ new Date().getFullYear() }} | Todos los derechos reservados.
			</p>

			<UiLink
				to="https://github.com/Igro-Zona/sucugrafia"
				aria-label="Abrir en GitHub"
				class="hover:bg-muted active:text-highlighted! text-muted hover:text-default! hidden! p-2 transition-colors focus-visible:outline-offset-0! lg:inline-flex!"
				:icon="{ name: 'simple-icons:github', size: 30, class: 'transition-colors' }"
				:external-icon="false"
			/>
		</UiContainer>
	</footer>
</template>

<script setup lang="ts">
import type { FooterColumn } from "./AppFooterMenu.vue";

const columns: FooterColumn[] = [
	{
		columnLabel: "Navegación",
		links: [
			{
				label: "Página de Inicio",
				to: "/",
			},
			{
				label: "Nuestra Galeria",
				to: "/galeria",
			},
			{
				label: "Leer los Articulos",
				to: "/articulos",
			},
			{
				label: "Preguntas frecuentes",
				to: "/ayuda",
			},
		],
	},
];
</script>
