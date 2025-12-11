<template>
	<UiContainer class="space-y-8">
		<HeroMarquee>
			<HeroContent
				:title
				:description
			/>
		</HeroMarquee>

		<p class="text-pretty sm:text-lg lg:text-xl">
			Sucugrafia es una plataforma digital dedicada a difundir el patrimonio cultural, histórico y natural de
			Sucúa. Nuestro sitio ofrece contenidos cuidadosamente elaborados que permiten al visitante conocer de manera
			organizada y confiable la riqueza de la región amazónica. Cada publicación está orientada a resaltar la
			identidad local y a proyectar el valor de la comunidad hacia un público más amplio.
		</p>

		<UiSection title="Abre Sucúa desde nuevo punto de vista:">
			<UiGrid class="gap-4 sm:gap-6 [&>*:nth-child(n+4)]:hidden sm:[&>*:nth-child(n+4)]:block">
				<UPageCard
					v-for="(card, index) in cards"
					:key="index"
					v-bind="card"
				/>
			</UiGrid>
		</UiSection>

		<p class="text-pretty sm:text-lg lg:text-xl">
			El contenido de Sucugrafia abarca relatos, fotografías, artículos y proyectos que documentan tradiciones,
			paisajes y expresiones artísticas propias de Sucúa. La presentación se realiza con criterios profesionales
			de comunicación y diseño, garantizando una experiencia informativa y visualmente atractiva. De esta manera,
			el usuario accede a información relevante y de calidad que refleja la autenticidad de la región.
		</p>

		<p class="text-pretty sm:text-lg lg:text-xl">
			Sucugrafia se consolida como un espacio de referencia para la preservación y difusión de la memoria
			colectiva. Al destacar la historia, las costumbres y las manifestaciones culturales de Sucúa, nuestro sitio
			contribuye a fortalecer la identidad amazónica y a transmitirla a nuevas generaciones. Así, se convierte en
			una herramienta que une tradición y conocimiento, proyectando el legado cultural de la comunidad hacia el
			futuro.
		</p>
	</UiContainer>
</template>

<script setup lang="ts">
const title = "Sucugrafia - Mejor forma para conocer a cantón Sucúa";
const description =
	"Descubre Sucugrafia: historia, cultura y tradición en un solo lugar. Explora una galería vibrante y artículos únicos que revelan la esencia del cantón Sucúa, donde cada imagen y relato conecta con sus raíces amazónicas y su riqueza cultural.";

useSeoMeta({
	description,
	ogTitle: title,
	twitterTitle: title,
	twitterDescription: description,
});

useHead({
	link: [
		{
			rel: "icon",
			type: "image/ico",
			href: "/favicon.ico",
		},
	],
});
const cards = ref([
	{
		title: "Lorem",
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae minima, porro temporibus nesciunt cum architecto.",
		icon: "i-lucide-smile",
	},
	{
		title: "Lorem",
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae minima, porro temporibus nesciunt cum architecto.",
		icon: "i-lucide-a-large-small",
	},
	{
		title: "Lorem",
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae minima, porro temporibus nesciunt cum architecto.",
		icon: "i-lucide-sun-moon",
	},
	{
		title: "Lorem",
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae minima, porro temporibus nesciunt cum architecto.",
		icon: "i-lucide-smile",
	},
	{
		title: "Lorem",
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae minima, porro temporibus nesciunt cum architecto.",
		icon: "i-lucide-a-large-small",
	},
	{
		title: "Lorem",
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae minima, porro temporibus nesciunt cum architecto.",
		icon: "i-lucide-sun-moon",
	},
]);
</script>
