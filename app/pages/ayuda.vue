<template>
	<UiContainer class="py-4">
		<UiSection
			:title="title"
			class="space-y-4"
		>
			<p
				class="text-pretty sm:text-lg lg:text-xl"
				data-aos="fade-left"
			>
				En esta sección encontrarás <b class="text-primary">respuestas claras</b> y directas a las preguntas más comunes que
				nuestros usuarios suelen tener. La idea es que puedas <b class="text-primary">resolver tus dudas</b> rápidamente y sentir
				confianza al usar nuestra plataforma, sin necesidad de buscar en otros apartados. Además, queremos que este espacio sea tu
				punto de referencia: un lugar donde cada explicación esté pensada para ser
				<b class="text-primary">sencilla, útil y accesible</b>, ayudándote a aprovechar al máximo todas las posibilidades que
				ofrecemos con nuestra
				<UiLink
					class="text-highlighted hover:text-primary active:hover:text-primary/75 rounded-xs font-bold"
					to="/galeria"
					>galeria</UiLink
				>.
			</p>

			<UiAccordion
				:items="items"
				data-aos="zoom-in-up"
			/>

			<p
				class="text-pretty sm:text-lg lg:text-xl"
				data-aos="fade-right"
			>
				Visión de
				<UiLink
					class="text-highlighted hover:text-primary active:hover:text-primary/75 rounded-xs font-bold"
					to="/"
					>Sucugrafia</UiLink
				>
				- Ser el espejo visual de Sucúa: un espacio digital donde las imágenes capturan la
				<b class="text-primary">esencia</b> de su gente, paisajes y cultura. Unir <b class="text-primary">técnica y emoción</b>:
				cada fotografía y cada línea de código trabajan juntas para ofrecer una experiencia estética impecable y accesible. Inspirar
				orgullo local y <b class="text-primary">curiosidad global</b>: mostrar al mundo la riqueza visual de Sucúa, mientras conecta
				a la comunidad con su propia identidad. Convertir visitas en experiencias memorables: que cada usuario sienta que no solo
				vio <b class="text-primary">imágenes</b> y
				<UiLink
					class="text-highlighted hover:text-primary active:hover:text-primary/75 rounded-xs font-bold"
					to="/articulos"
					>articulos</UiLink
				>, sino que vivió un relato visual envolvente.
			</p>
		</UiSection>
	</UiContainer>
</template>

<script setup lang="ts">
import type { UiAccordionItem } from "~/components/ui/UiAccordion.vue";

const title = "Preguntas frecuentes";
const description =
	"En esta sección encontrarás respuestas claras y directas a las preguntas más comunes que nuestros usuarios suelen tener. La idea es que puedas resolver tus dudas rápidamente y sentir confianza al usar nuestra plataforma, sin necesidad de buscar en otros apartados.";

useSeoMeta({
	description,
	ogTitle: title,
	twitterTitle: title,
	twitterDescription: description,
});

const items: UiAccordionItem[] = [
	{
		label: "¿Qué es Sucugrafia?",
		icon: "lucide:image",
		trailingIcon: "lucide:chevron-down",
		content:
			"Sucugrafia es una galería digital inspirada en el cantón Sucúa. Su propósito es mostrar imágenes que reflejan la esencia de su gente, paisajes y cultura, combinando técnica y emoción para crear una experiencia visual única.",
	},
	{
		label: "¿Por qué el nombre Sucugrafia?",
		icon: "lucide:type",
		trailingIcon: "lucide:chevron-down",
		content:
			"El nombre nace de la unión entre 'Sucúa' y 'grafía', que significa escritura o representación. Es nuestra manera de decir que cada imagen es una forma de escribir la historia visual del cantón.",
	},
	{
		label: "¿Sucugrafia es accesible para todos?",
		icon: "lucide:eye",
		trailingIcon: "lucide:chevron-down",
		content:
			"Por supuesto. Usamos prácticas de accesibilidad como ARIA y HTML semántico para garantizar que cualquier persona, sin importar sus capacidades, pueda disfrutar plenamente de la galería.",
	},
	{
		label: "¿Puedo compartir las imágenes?",
		icon: "lucide:share",
		trailingIcon: "lucide:chevron-down",
		content:
			"Sí, puedes compartir las imágenes en redes sociales directamente desde la plataforma. Nuestro objetivo es que la riqueza visual de Sucúa llegue a más personas.",
	},

	{
		label: "¿Qué hace diferente a Sucugrafia de otras galerías?",
		icon: "lucide:star",
		trailingIcon: "lucide:chevron-down",
		content:
			"No buscamos solo mostrar fotos bonitas. Cada imagen está pensada para transmitir identidad, emoción y pertenencia, convirtiendo la galería en un relato visual de la comunidad.",
	},
	{
		label: "¿Sucugrafia es solo para la gente de Sucúa?",
		icon: "lucide:globe",
		trailingIcon: "lucide:chevron-down",
		content:
			"No. Aunque nace en Sucúa, la galería está pensada para que cualquier persona, en cualquier parte del mundo, pueda descubrir y apreciar la riqueza visual de nuestra tierra.",
	},
	{
		label: "¿Qué emociones busca despertar Sucugrafia?",
		icon: "lucide:heart",
		trailingIcon: "lucide:chevron-down",
		content:
			"Queremos que cada visitante sienta orgullo, curiosidad y cercanía. Que no solo vea imágenes, sino que viva un relato que lo conecte con la cultura y la naturaleza de Sucúa.",
	},
	{
		label: "¿Qué sueña lograr Sucugrafia en el futuro?",
		icon: "lucide:sparkles",
		trailingIcon: "lucide:chevron-down",
		content:
			"Convertirse en un referente cultural digital, donde cada visita sea una experiencia memorable y cada imagen un puente entre la comunidad local y el mundo.",
	},
];
</script>
