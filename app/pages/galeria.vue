<template>
	<UiContainer class="py-4">
		<UiSection :title>
			<p class="lg:text-xl">{{ description }}</p>

			<GalleryPagination
				v-model:page="page"
				class="flex justify-center"
				:default-page="page"
				:sibling-count="1"
				:total="pageCount"
			/>

			<GalleryArea
				:page="page"
				:pages-max="pageCount"
				:images="images"
				@infinite-scroll="handleInfiniteScroll"
			/>

			<GalleryPagination
				v-model:page="page"
				class="flex justify-center"
				:default-page="page"
				:sibling-count="1"
				:total="pageCount"
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

const { pageCount } = usePageCount();

const page = ref(1);
const images = ref(await useImages(48, page.value));

let isWatching = true;
watch(page, async (newPage, oldPage) => {
	if (newPage !== oldPage && isWatching) {
		await loadMore(true);
	}
});

const loading = ref(false);
async function loadMore(reset = false) {
	if (loading.value) return;
	loading.value = true;

	if (reset) images.value = [];

	const loadedImages = await $fetch("/api/cloudinary-images", { query: { page: page.value, limit: 50 } });
	images.value.push(...loadedImages);
	loading.value = false;
}

async function handleInfiniteScroll() {
	isWatching = false;
	page.value++;
	await loadMore();
	isWatching = true;
}
</script>
