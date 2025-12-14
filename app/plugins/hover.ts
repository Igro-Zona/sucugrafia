import { useMouseInElement } from "@vueuse/core";

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.directive("hover", {
		mounted(el) {
			if (!window.matchMedia("(hover: hover)").matches) return;

			el.classList.add("transition-transform", "duration-250", "ease-out");

			const { elementX, elementY, elementWidth, elementHeight, isOutside } = useMouseInElement(el);

			watch([elementX, elementY, isOutside], () => {
				if (isOutside.value) {
					el.style.transform = `perspective(${elementWidth.value}px) rotateX(0) rotateY(0)`;
					return;
				}

				const rotateX = 5 - (elementY.value / elementHeight.value) * 10;
				const rotateY = (elementX.value / elementWidth.value) * 10 - 5;

				el.style.transform = `perspective(${elementWidth.value}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
			});
		},
	});
});
