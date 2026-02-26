import { useIntersectionObserver } from "@vueuse/core";

export default function (target: TemplateRef) {
	const isVisible = ref(false);
	useIntersectionObserver(target, ([entry], _) => {
		isVisible.value = entry?.isIntersecting || false;
	});
	return { isVisible };
}
