<template>
	<footer class="border-primary border-t">
		<UiContainer>
			<AppFooterMenu :columns="columns" />
		</UiContainer>

		<UiSeparator color="muted" />

		<UiContainer class="flex flex-col items-center justify-between gap-3 py-4 lg:flex-row">
			<div class="flex flex-col items-center gap-3 lg:flex-row">
				<div class="flex items-center gap-6">
					<UiLink
						to="/"
						:events="true"
					>
						<UiLogo v-bind="logo" />
					</UiLink>

					<UiLink
						to="https://github.com/Igro-Zona/sucugrafia"
						aria-label="Abrir en GitHub"
						class="hover:bg-muted hover:text-highlighted active:bg-accented rounded-lg p-2 transition-colors lg:hidden"
						:external-icon="false"
					>
						<Icon
							name="i-simple-icons-github"
							:size="30"
						/>
					</UiLink>
				</div>

				<p class="text-muted text-[13px] sm:text-sm">
					Copyright © {{ new Date().getFullYear() }} | Todos los derechos reservados.
				</p>
			</div>

			<UiLink
				to="https://github.com/Igro-Zona/sucugrafia"
				aria-label="Abrir en GitHub"
				class="hover:bg-muted hover:text-highlighted active:bg-accented hidden rounded-lg p-2 transition-colors lg:inline-flex"
				:external-icon="false"
			>
				<Icon
					name="i-simple-icons-github"
					:size="30"
				/>
			</UiLink>
		</UiContainer>
	</footer>
</template>

<script setup lang="ts">
import type { UiLogoProps } from "~/components/ui/UiLogo.vue";
import type { FooterColumn } from "./AppFooterMenu.vue";

const logo: UiLogoProps = {
	as: "div",
	icon: {
		name: "sucua:book",
		size: 34,
	},
};

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
