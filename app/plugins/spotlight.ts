import { useMouseInElement } from "@vueuse/core";

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.directive("spotlight", {
		mounted(el) {
			if (!window.matchMedia("(hover: hover)").matches) return;

			const spotlightDiv = document.createElement("div");
			spotlightDiv.classList.add("pointer-events-none", "absolute", "inset-0", "transition-opacity", "duration-300");
			el.classList.add("relative");
			el.appendChild(spotlightDiv);

			const { elementX, elementY } = useMouseInElement(el);
			watch([elementX, elementY], () => {
				spotlightDiv.style.background = `radial-gradient(circle 20rem at ${elementX.value}px ${elementY.value}px, color-mix(in srgb, var(--color-primary) 15%, transparent) 0%, transparent 20rem)`;
			});
		},
	});
});
