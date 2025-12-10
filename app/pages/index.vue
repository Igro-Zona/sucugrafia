<template>
	<UiContainer class="space-y-8">
		<HeroMarquee>
			<UPageHero
				as="section"
				:title
				:description
				:links="links"
				class="relative z-10"
				:ui="{
					container: 'py-24',
					title: 'sm:text-6xl md:text-7xl',
					description: 'font-latto text-violet-200 font-semibold',
				}"
			/>
		</HeroMarquee>

		<p class="lg:text-lg">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi consequatur eius illo tenetur voluptates
			beatae possimus velit minima itaque, impedit, et quis dolorem maxime fugiat magnam, hic reiciendis
			consequuntur error? Lorem ipsum dolor sit amet consectetur adipisicing elit. In reprehenderit, quidem iure
			sunt voluptatem quas possimus, quo expedita numquam exercitationem sequi repellendus vitae dolorum!
			Blanditiis eius odit quas recusandae quaerat.
		</p>

		<UiSection title="Abre Sucúa desde nuevo punto de vista:">
			<UiGrid>
				<UPageCard
					v-for="(card, index) in cards"
					:key="index"
					v-bind="card"
				/>
			</UiGrid>
		</UiSection>

		<p class="lg:text-lg">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi consequatur eius illo tenetur voluptates
			beatae possimus velit minima itaque, impedit, et quis dolorem maxime fugiat magnam, hic reiciendis
			consequuntur error? Lorem ipsum dolor sit amet consectetur adipisicing elit. In reprehenderit, quidem iure
			sunt voluptatem quas possimus, quo expedita numquam exercitationem sequi repellendus vitae dolorum!
			Blanditiis eius odit quas recusandae quaerat.
		</p>

		<p class="lg:text-lg">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi consequatur eius illo tenetur voluptates
			beatae possimus velit minima itaque, impedit, et quis dolorem maxime fugiat magnam, hic reiciendis
			consequuntur error? Lorem ipsum dolor sit amet consectetur adipisicing elit. In reprehenderit, quidem iure
			sunt voluptatem quas possimus, quo expedita numquam exercitationem sequi repellendus vitae dolorum!
			Blanditiis eius odit quas recusandae quaerat.
		</p>
	</UiContainer>
</template>

<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui";

const title = "Sucugrafia - Mejor forma para conocer a cantón Sucúa";
const description =
	"Descubre Sucugrafia: historia, cultura y tradición en un solo lugar. Explora una galería vibrante y artículos únicos que revelan la esencia del cantón Sucúa, donde cada imagen y relato conecta con sus raíces amazónicas y su riqueza cultural.";
const links = ref<ButtonProps[]>([
	{
		label: "Ver galeria",
		to: "/galery",
		icon: "i-lucide-image",
	},
	{
		label: "Leer articulos",
		to: "/articles",
		variant: "subtle",
		color: "neutral",
		trailingIcon: "i-lucide-arrow-right",
	},
]);

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
