<template>
	<footer class="border-primary mt-4 border-t lg:mt-8">
		<UiContainer>
			<UFooterColumns
				:columns
				class="py-8 lg:py-12"
			/>
		</UiContainer>
		<UiContainer class="border-muted flex flex-col gap-3 border-t py-4 lg:flex-row">
			<p class="text-muted text-sm">
				Copyright © {{ new Date().getFullYear() }} | Todos los derechos reservados.
			</p>
		</UiContainer>
	</footer>
</template>

<script setup lang="ts">
import type { FooterColumn } from "@nuxt/ui";

const columns: FooterColumn[] = [
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
				target: "_blank",
			},
			{
				label: "Nuxt on GitHub",
				to: "https://github.com/nuxt",
				target: "_blank",
			},
		],
	},
	{
		label: "Solutions",
		children: [
			{
				label: "Nuxt Content",
				to: "https://content.nuxt.com/",
				target: "_blank",
			},
			{
				label: "Nuxt DevTools",
				to: "https://devtools.nuxt.com/",
				target: "_blank",
			},
			{
				label: "Nuxt Image",
				to: "https://image.nuxt.com/",
				target: "_blank",
			},
			{
				label: "Nuxt UI",
				to: "https://ui.nuxt.com/",
				target: "_blank",
			},
		],
	},
];
</script>
