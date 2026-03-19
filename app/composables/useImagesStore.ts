export interface Image {
	src: string;
	title?: string;
	description?: string;
}
export interface ImagesObj {
	id: number;
	images: Image[];
}

const page = ref<number>(1);
const imageStore = ref<ImagesObj[]>([]);
export default function () {
	const initialImagesCookie = useCookie<Image[] | null>("initial_images", { default: () => null, maxAge: 86400 });
	const { data, refresh } = useFetch("/api/cloudinary-images", {
		query: { page },
		watch: false,
		immediate: !initialImagesCookie.value,
		onResponse: ({ response }) => {
			const data = response._data;
			if (imageStore.value?.some((obj) => obj.id === page.value) && !data) return;

			imageStore.value.push({ id: page.value, images: toRaw(data || []) });
		},
	});

	watchEffect(() => {
		if (data.value && page.value === 1) {
			initialImagesCookie.value = data.value;
		}
		if (initialImagesCookie.value && !imageStore.value.some((obj) => obj.id === 1)) {
			imageStore.value.push({ id: 1, images: toRaw(initialImagesCookie.value) });
		}
	});

	function setPage(value: number) {
		if (imageStore.value.some((obj) => obj.id === value) || page.value === value) return;
		page.value = value;
		refresh();
	}

	return { imageStore, setPage };
}
