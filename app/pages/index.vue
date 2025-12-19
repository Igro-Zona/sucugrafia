<template>
	<div class="space-y-8 lg:space-y-12">
		<UiContainer class="relative px-0 sm:px-0 lg:px-0">
			<HeroContent
				:title
				:description
			/>
			<HeroMarquee />
		</UiContainer>

		<UiContainer class="space-y-8 lg:space-y-12">
			<p class="text-pretty sm:text-lg lg:text-xl">
				<b class="text-primary">Sucugrafia</b> es una plataforma digital dedicada a difundir el patrimonio
				cultural, histórico y natural de Sucúa. Nuestro sitio ofrece contenidos
				<b class="text-primary">cuidadosamente elaborados</b> que permiten al visitante conocer de manera
				organizada y confiable la riqueza de la región amazónica. Cada publicación está orientada a resaltar la
				<b class="text-primary">identidad local</b>
				y a proyectar el valor de la comunidad hacia un público más amplio.
			</p>

			<UiSection title="Abre Sucúa desde nuevo punto de vista:">
				<UiGrid class="gap-4 sm:gap-6 [&>*:nth-child(n+4)]:hidden sm:[&>*:nth-child(n+4)]:block">
					<UiCard
						v-for="(card, index) in cards"
						:key="index"
						v-hover
						v-bind="card"
						as="h3"
					/>
				</UiGrid>
			</UiSection>

			<p class="text-pretty sm:text-lg lg:text-xl">
				El contenido de Sucugrafia abarca
				<b class="text-primary">relatos, fotografías, artículos y proyectos</b> que documentan tradiciones,
				paisajes y expresiones artísticas propias de Sucúa. La presentación se realiza con criterios
				profesionales de comunicación y diseño, garantizando una
				<b class="text-primary">experiencia informativa y visualmente atractiva</b>. De esta manera, el usuario
				accede a información relevante y de calidad que refleja la autenticidad de la región.
			</p>

			<p class="text-pretty sm:text-lg lg:text-xl">
				<b class="text-primary">Sucugrafia</b> se consolida como un espacio de referencia para la preservación y
				difusión de la memoria colectiva. Al destacar la historia, las costumbres y las manifestaciones
				culturales de Sucúa, nuestro sitio contribuye a fortalecer la
				<b class="text-primary">identidad amazónica</b> y a transmitirla a nuevas generaciones. Así, se
				convierte en una herramienta que une tradición y conocimiento, proyectando el legado cultural de la
				comunidad <b class="text-primary">hacia el futuro</b>.
			</p>
		</UiContainer>
	</div>
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

const cards = ref([
	{
		title: "Galeria maravillosa",
		description:
			"Una colección visual única que muestra lo mejor de nuestro proyecto. Cada imagen transmite emoción y creatividad.",
		icon: "i-lucide-image",
	},
	{
		title: "Moderno e Innovador",
		description:
			"Un sitio web con diseño actual y soluciones innovadoras. Pensado para ofrecer una experiencia fresca y atractiva.",
		icon: "i-lucide-lightbulb",
	},
	{
		title: "Espiritu de la Amazonia",
		description:
			"Reflejamos la esencia cultural y natural de Sucúa. Un espacio que conecta con nuestras raíces amazónicas.",
		icon: "i-lucide-leaf",
	},
	{
		title: "Veloz y facil",
		description:
			"Navegación rápida y sencilla para todos los usuarios. Compatible con cualquier dispositivo y pensado para la comodidad.",
		icon: "i-lucide-rocket",
	},
	{
		title: "Informacion segura",
		description:
			"El contenido de nuestro sitio es confiable. Compartimos información honesta que refleja transparencia y credibilidad.",
		icon: "i-lucide-shield-check",
	},
	{
		title: "Mejor guia",
		description:
			"Un recurso claro y práctico para orientarte en cada paso. Te acompañamos con información útil y accesible.",
		icon: "i-lucide-map",
	},
]);
</script>
