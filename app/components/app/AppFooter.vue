<template>
	<footer
		:class="twMerge('border-primary border-t', props.class)"
		aria-labelledby="footer-label"
	>
		<h2
			id="footer-label"
			class="sr-only"
		>
			Pie de página
		</h2>

		<UiContainer>
			<nav
				aria-label="Navegación"
				class="grid grid-cols-1 gap-8 py-8 text-sm sm:grid-cols-2 lg:grid-cols-3 lg:py-12"
			>
				<FooterColumn
					v-for="(column, index) in columns"
					:key="index"
					:column-label="column.columnLabel"
					:links="column.links"
				/>
			</nav>
		</UiContainer>

		<UiSeparator color="muted" />

		<UiContainer class="flex flex-col items-center justify-between gap-3 py-4 lg:flex-row">
			<div class="flex flex-col items-center gap-3 lg:flex-row">
				<div class="flex items-center gap-6">
					<UiLink
						to="/"
						:events="true"
					>
						<UiLogo
							v-bind="logo"
							class="text-highlighted"
						/>
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
import type { UiLogoProps } from "../ui/UiLogo.vue";
import type { FooterColumnProps } from "../footer/FooterColumn.vue";
import { twMerge, type ClassNameValue } from "tailwind-merge";

export interface AppFooterProps {
	class?: ClassNameValue;
}

const props = withDefaults(defineProps<AppFooterProps>(), {
	class: undefined,
});

const logo: UiLogoProps = {
	as: "h1",
	icon: {
		name: "sucua:book",
		size: 34,
	},
};

const columns: FooterColumnProps[] = [
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
