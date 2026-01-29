<template>
	<UiContainer>
		<UiSection
			title="Preguntas frecuentes "
			class="mt-4"
		>
			<p class="mt-2 sm:text-lg">
				En esta sección encontrarás respuestas claras y directas a las preguntas más comunes que nuestros
				usuarios suelen tener. La idea es que puedas resolver tus dudas rápidamente y sentir confianza al usar
				nuestra plataforma, sin necesidad de buscar en otros apartados.
			</p>
			<UAccordion :items="items" />
			<p class="mt-4 sm:text-lg">
				Visión de Sucugrafía - Ser el espejo visual de Sucúa: un espacio digital donde las imágenes capturan la
				esencia de su gente, paisajes y cultura. Unir técnica y emoción: cada fotografía y cada línea de código
				trabajan juntas para ofrecer una experiencia estética impecable y accesible. Inspirar orgullo local y
				curiosidad global: mostrar al mundo la riqueza visual de Sucúa, mientras conecta a la comunidad con su
				propia identidad. Convertir visitas en experiencias memorables: que cada usuario sienta que no solo vio
				imágenes, sino que vivió un relato visual envolvente.
			</p>
		</UiSection>
	</UiContainer>
</template>

<script setup lang="ts">
import type { AccordionItem } from "@nuxt/ui";

const items = ref<AccordionItem[]>([
	{
		label: "¿Qué es Sucugrafía?",
		icon: "i-lucide-image",
		content:
			"Sucugrafía es una galería digital inspirada en el cantón Sucúa. Su propósito es mostrar imágenes que reflejan la esencia de su gente, paisajes y cultura, combinando técnica y emoción para crear una experiencia visual única.",
	},
	{
		label: "¿Por qué el nombre Sucugrafía?",
		icon: "i-lucide-type",
		content:
			"El nombre nace de la unión entre 'Sucúa' y 'grafía', que significa escritura o representación. Es nuestra manera de decir que cada imagen es una forma de escribir la historia visual del cantón.",
	},
	{
		label: "¿Sucugrafía es accesible para todos?",
		icon: "i-lucide-eye",
		content:
			"Por supuesto. Usamos prácticas de accesibilidad como ARIA y HTML semántico para garantizar que cualquier persona, sin importar sus capacidades, pueda disfrutar plenamente de la galería.",
	},
	{
		label: "¿Puedo compartir las imágenes?",
		icon: "i-lucide-share",
		content:
			"Sí, puedes compartir las imágenes en redes sociales directamente desde la plataforma. Nuestro objetivo es que la riqueza visual de Sucúa llegue a más personas.",
	},

	{
		label: "¿Qué hace diferente a Sucugrafía de otras galerías?",
		icon: "i-lucide-star",
		content:
			"No buscamos solo mostrar fotos bonitas. Cada imagen está pensada para transmitir identidad, emoción y pertenencia, convirtiendo la galería en un relato visual de la comunidad.",
	},
	{
		label: "¿Sucugrafía es solo para la gente de Sucúa?",
		icon: "i-lucide-globe",
		content:
			"No. Aunque nace en Sucúa, la galería está pensada para que cualquier persona, en cualquier parte del mundo, pueda descubrir y apreciar la riqueza visual de nuestra tierra.",
	},
	{
		label: "¿Qué emociones busca despertar Sucugrafía?",
		icon: "i-lucide-heart",
		content:
			"Queremos que cada visitante sienta orgullo, curiosidad y cercanía. Que no solo vea imágenes, sino que viva un relato que lo conecte con la cultura y la naturaleza de Sucúa.",
	},
	{
		label: "¿Qué sueña lograr Sucugrafía en el futuro?",
		icon: "i-lucide-sparkles",
		content:
			"Convertirse en un referente cultural digital, donde cada visita sea una experiencia memorable y cada imagen un puente entre la comunidad local y el mundo.",
	},
]);
</script>
