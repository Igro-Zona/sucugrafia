<template>
	<div>
		<div class="relative h-[600px] w-full overflow-hidden">
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
			<UMarquee
				reverse
				orientation="vertical"
				:overlay="false"
				:ui="{
					root: '[--duration:40s] absolute w-[460px] -left-[120px] -top-[800px] h-[2000px] transform-3d rotate-x-55 rotate-y-0 rotate-z-30',
				}"
			>
				<NuxtPicture
					v-for="src in images"
					:key="src"
					provider="cloudinary"
					:src="`${src}`"
					width="460"
					height="258"
					class="border-default block aspect-video overflow-hidden rounded-lg object-cover blur-[1px] brightness-50 filter"
					:img-attrs="{ alt: 'Gallery image', loading: 'lazy' }"
				/>
			</UMarquee>
			<UMarquee
				orientation="vertical"
				:overlay="false"
				:ui="{
					root: '[--duration:40s] absolute w-[460px] -top-[820px] left-[480px] h-[2000px] transform-3d rotate-x-55 rotate-y-0 rotate-z-30',
				}"
			>
				<NuxtPicture
					v-for="src in images"
					:key="src"
					provider="cloudinary"
					:src="`${src}`"
					width="460"
					height="258"
					class="border-default block aspect-video overflow-hidden rounded-lg object-cover blur-[1px] brightness-50 filter"
					:img-attrs="{ alt: 'Gallery image', loading: 'lazy' }"
				/>
			</UMarquee>
			<UMarquee
				reverse
				orientation="vertical"
				:overlay="false"
				:ui="{
					root: 'hidden md:flex [--duration:40s] absolute w-[460px] -top-[780px] left-[1020px] h-[2000px] transform-3d rotate-x-55 rotate-y-0 rotate-z-30',
				}"
			>
				<NuxtPicture
					v-for="src in images"
					:key="src"
					provider="cloudinary"
					:src="`${src}`"
					width="460"
					height="258"
					class="border-default block aspect-video overflow-hidden rounded-lg object-cover blur-[1px] brightness-50 filter"
					:img-attrs="{ alt: 'Gallery image', loading: 'lazy' }"
				/>
			</UMarquee>
		</div>

		<p class="font-main mt-8 text-lg">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi consequatur eius illo tenetur voluptates
			beatae possimus velit minima itaque, impedit, et quis dolorem maxime fugiat magnam, hic reiciendis
			consequuntur error? Lorem ipsum dolor sit amet consectetur adipisicing elit. In reprehenderit, quidem iure
			sunt voluptatem quas possimus, quo expedita numquam exercitationem sequi repellendus vitae dolorum!
			Blanditiis eius odit quas recusandae quaerat.
		</p>

		<UPageGrid class="mt-8">
			<UPageCard
				v-for="(card, index) in cards"
				:key="index"
				v-bind="card"
			/>
		</UPageGrid>

		<p class="font-main mt-8 text-lg">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi consequatur eius illo tenetur voluptates
			beatae possimus velit minima itaque, impedit, et quis dolorem maxime fugiat magnam, hic reiciendis
			consequuntur error? Lorem ipsum dolor sit amet consectetur adipisicing elit. In reprehenderit, quidem iure
			sunt voluptatem quas possimus, quo expedita numquam exercitationem sequi repellendus vitae dolorum!
			Blanditiis eius odit quas recusandae quaerat.
		</p>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
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

const images = Array.from({ length: 8 }, (_, i) => `img${i + 1}.jpg`);
</script>
