import type { RouteLocationNormalizedLoadedGeneric } from "vue-router";
import type { MaybeComputedElementRef, MaybeElement } from "@vueuse/core";

declare global {
	type MaybeArray<T> = T[] | T;
	type TemplateRef = MaybeComputedElementRef | MaybeRefOrGetter<MaybeElement[]> | MaybeComputedElementRef[];
	type Route = RouteLocationNormalizedLoadedGeneric & {};
}

export {};
