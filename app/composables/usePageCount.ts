export default function () {
	const pageCountCookie = useCookie<number | null>("pages_max", { default: () => null, maxAge: 86400 });

	const { data, pending, error, refresh, status, clear } = useFetch("/api/cloudinary-folders", { immediate: !pageCountCookie.value });

	watchEffect(() => data.value && (pageCountCookie.value = data.value));

	const pageCount = computed(() => pageCountCookie.value ?? data.value);

	return { pageCount, pending, error, refresh, status, clear };
}
