import type { MaybeComputedElementRef, MaybeElement } from "@vueuse/core";
export {};

declare global {
	type MaybeArray<T> = T[] | T;
	type TemplateRef = MaybeComputedElementRef | MaybeRefOrGetter<MaybeElement[]> | MaybeComputedElementRef[];
}
