import type { RouteLocationNormalizedLoadedGeneric } from "vue-router";

export default function (route: RouteLocationNormalizedLoadedGeneric) {
	const url = useRequestURL();
	const fullUrl = computed(() => `${url.origin}${route.fullPath}`);

	const isLinkCopied = ref(false);
	async function copyLink() {
		await navigator.clipboard.writeText(fullUrl.value);
		isLinkCopied.value = true;
	}

	async function share() {
		await navigator.share({ url: route.fullPath });
	}

	return { isLinkCopied, copyLink, share };
}
