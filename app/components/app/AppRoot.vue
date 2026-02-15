<template>
	<ConfigProvider
		:use-id="() => useId()"
		:dir="locale?.dir"
		:locale="locale?.code"
		:scroll-body="scrollBody"
	>
		<NuxtLoadingIndicator
			color="#00dc82"
			:height="4"
		/>
		<AppOverlay />

		<slot />
	</ConfigProvider>
</template>

<script setup lang="ts">
import { ConfigProvider } from "reka-ui";

export type Locale<T> = {
	name: string;
	code: string;
	dir: "rtl" | "ltr";
	messages: T;
};
export interface AppRootProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	locale?: Locale<any>;
	scrollBody?:
		| boolean
		| {
				padding?: string | number | boolean;

				margin?: string | number | boolean;
		  };
}

defineProps<AppRootProps>();
</script>
