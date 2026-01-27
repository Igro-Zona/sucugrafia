export default async function () {
	const maxPagesCookie = useCookie<number | null>("pages_max", {
		default: () => null,
		maxAge: 86400,
	});
	const maxPagesCount = ref(maxPagesCookie.value);
	if (!maxPagesCount.value) {
		const { data } = await useFetch("/api/cloudinary-folders");
		maxPagesCount.value = data.value ?? 1;
		maxPagesCookie.value = maxPagesCount.value;
	}

	return maxPagesCount as Ref<number>;
}
