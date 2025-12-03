<template>
	<footer
		class="border-muted mt-4 border-t lg:mt-8"
		aria-labelledby="footer-label"
	>
		<h2
			id="footer-label"
			class="sr-only"
		>
			Pie de página
		</h2>

		<UiContainer class="flex auto-cols-fr grid-flow-col flex-col gap-8 lg:grid xl:col-span-2">
			<UFooterColumns
				:columns
				class="py-8 text-sm lg:py-12"
			/>
		</UiContainer>

		<USeparator color="primary" />

		<UiContainer class="flex auto-cols-fr grid-flow-col flex-col gap-8 lg:grid xl:col-span-2">
			<FooterColumn
				v-for="(column, index) in columns"
				:key="index"
				:label="column.label"
				:children="column.children"
			/>
		</UiContainer>

		<USeparator color="primary" />

		<UiContainer class="flex flex-col items-center justify-between gap-3 py-4 lg:flex-row">
			<div class="flex flex-col items-center gap-3 lg:flex-row">
				<div class="flex items-center gap-6">
					<UiLink
						to="/"
						:styled="false"
					>
						<UiLogo />
					</UiLink>

					<UiLink
						to="https://github.com/Igro-Zona/sucugrafia"
						:styled="false"
						class="hover:bg-muted active:bg-accented rounded-lg p-2 lg:hidden"
					>
						<Icon name="i-simple-icons-github" />
					</UiLink>
				</div>

				<p class="text-muted text-sm">
					Copyright © {{ new Date().getFullYear() }} | Todos los derechos reservados.
				</p>
			</div>

			<UiLink
				to="https://github.com/Igro-Zona/sucugrafia"
				:styled="false"
				class="hover:bg-muted active:bg-accented hidden rounded-lg p-2 transition-colors lg:inline-flex"
			>
				<Icon name="i-simple-icons-github" />
			</UiLink>
		</UiContainer>
	</footer>
</template>

<script setup lang="ts">
const columns = [
	{
		label: "Community",
		children: [
			{
				label: "Nuxters",
				to: "https://nuxters.nuxt.com",
				target: "_blank",
			},
			{
				label: "Video Courses",
				to: "https://masteringnuxt.com/nuxt3?ref=nuxt",
			},
			{
				label: "Nuxt on GitHub",
				to: "https://github.com/nuxt",
			},
		],
	},
	{
		label: "Solutions",
		children: [
			{
				label: "Nuxt Content",
				to: "https://content.nuxt.com/",
			},
			{
				label: "Nuxt DevTools",
				to: "https://devtools.nuxt.com/",
			},
			{
				label: "Nuxt Image",
				to: "https://image.nuxt.com/",
			},
			{
				label: "Nuxt UI",
				to: "https://ui.nuxt.com/",
			},
		],
	},
];
</script>
