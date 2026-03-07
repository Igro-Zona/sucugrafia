type CookieData = { limit: number; images: string[] };

export default async function (limit = 48, page = 1) {
	const firstPageImagesCookie = useCookie<CookieData | null>("initial_images", { default: () => null, maxAge: 86400 });

	if (page === 1 && firstPageImagesCookie.value?.limit === limit) return firstPageImagesCookie.value.images;

	const data = await $fetch("/api/cloudinary-images", { query: { limit, page } });
	const images = data ?? [];

	if (page === 1) firstPageImagesCookie.value = { limit, images };

	return images;
}
