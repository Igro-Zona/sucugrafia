export default function () {
	const pageCountCookie = useCookie<number | null>("pages_max", { default: () => null, maxAge: 86400 });

	const { data, pending, error, refresh, status, clear } = useFetch("/api/cloudinary-folders", {
		default: () => 1,
		immediate: !pageCountCookie.value,
	});

	watch(data, (newPageCount) => newPageCount && (pageCountCookie.value = newPageCount));
	const pageCount = computed(() => pageCountCookie.value ?? data.value ?? 1);

	return { pageCount, pending, error, refresh, status, clear };
}
