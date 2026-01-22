export default async function () {
	const maxPagesCookie = useCookie<number>("pages_max", {
		default: () => 1,
		maxAge: 86400,
	});
	const maxPagesCount = ref(maxPagesCookie.value);
	if (!maxPagesCount.value) {
		const { data } = await useFetch("/api/cloudinary-folders");
		maxPagesCount.value = data.value ?? 1;
		maxPagesCookie.value = maxPagesCount.value;
	}

	return maxPagesCount;
}
