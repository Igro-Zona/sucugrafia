<template>
	<UiContainer>
		<UiSection
			:title
			class="mt-4"
		>
			<p class="lg: text-xl">{{ description }}</p>

			<GalleryPagination
				v-model:page="page"
				class="flex justify-center"
				:default-page="queryPage"
				:sibling-count="1"
				:total="pagesMax"
			/>

			<GalleryArea
				v-model:page="page"
				:pages-max="pagesMax"
				:images="images"
			/>

			<GalleryPagination
				v-model:page="page"
				class="flex justify-center"
				:default-page="queryPage"
				:sibling-count="1"
				:total="pagesMax"
			/>
		</UiSection>
	</UiContainer>
</template>

<script setup lang="ts">
const title = "Nuestra galeria";
const description =
	"Explora la galería de Sucugrafia y déjate llevar por las imágenes que cuentan la historia de Sucúa: aquí cada fotografía está pensada para ti, para que descubras la cultura, la naturaleza y la vida de nuestra comunidad de una manera cercana y envolvente; haz clic en las que más te llamen la atención y disfruta cada detalle como si estuvieras caminando por sus calles y paisajes.";

useSeoMeta({
	description,
	ogTitle: title,
	twitterTitle: title,
	twitterDescription: description,
});

const route = useRoute();
const queryPage = computed(() => Number(route.query.page ?? 1));

const page = ref(queryPage.value);
const pagesMax = await usePageCount();
const images = ref(await useImages(48, page.value));

watch([queryPage, page], async ([newQuery, newPage], [oldQuery, oldPage]) => {
	if (newQuery !== oldQuery) {
		page.value = newQuery;
		await loadMore(true);
	}

	if (newPage !== oldPage) {
		await loadMore(false);
	}
});

const loading = ref(false);
async function loadMore(reset = false) {
	if (loading.value) return;
	loading.value = true;

	if (reset) {
		images.value = [];
	}

	const loadedImages = await $fetch("/api/cloudinary-images", {
		query: {
			page: page.value,
			limit: 50,
		},
	});
	images.value.push(...loadedImages);
	loading.value = false;
}
</script>
