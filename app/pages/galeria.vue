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
				ref="area"
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

const seoDescription =
	"Explora la galería de Sucugrafia y déjate llevar por las imágenes que cuentan la historia de Sucúa, aquí cada fotografía está pensada para ti";
useSeoMeta({
	title,
	description: seoDescription,
	twitterTitle: title,
	twitterDescription: seoDescription,
});
const { pageCount } = usePageCount();
const { imageStore, setPage } = useImagesStore();

const page = ref(1);
const images = ref<Image[]>([]);

watchEffect(() => {
	const nextImages = imageStore.value.find((obj) => obj.id === page.value)?.images || [];
	if (nextImages.length) {
		images.value.push(...nextImages);
	}
});

const infiniteScroll = ref(false);
const area = useTemplateRef("area");
watch(page, (newPage, oldPage) => {
	if (newPage === oldPage) return;

	if (infiniteScroll.value) {
		setPage(newPage);
		infiniteScroll.value = false;
	} else {
		images.value = [];
		setPage(newPage);
		area.value?.toTop();
	}
});

function handleInfiniteScroll() {
	if (page.value !== pageCount.value) {
		infiniteScroll.value = true;
		page.value++;
	}
}
</script>
