export default async function (limit: number = 50, page: number = 1) {
	const firstPageImagesCookie = useCookie<string[] | null>("initial_images", {
		default: () => null,
		maxAge: 86400,
	});
	const images = ref(page === 1 ? firstPageImagesCookie.value : null);
	if (!images.value) {
		const { data } = await useFetch<string[]>("/api/cloudinary-images", {
			query: { limit, page },
		});
		images.value = data.value ?? [];
		if (page === 1) {
			firstPageImagesCookie.value = images.value;
		}
	}

	return images.value;
}
