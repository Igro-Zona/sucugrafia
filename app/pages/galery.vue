<template>
	<AppPage title="Nuestra galeria">
		<ScrollAreaRoot
			class="h-[80dvh]"
			style="--scrollbar-size: 10px"
		>
			<ScrollAreaViewport
				class="my-4 grid h-full grid-cols-1 gap-4 px-4 lg:grid-cols-2"
				:as-child="true"
			>
				<div
					v-for="tag in tags"
					:key="tag"
					class="text-mauve12 border-t-mauve6 bg-muted h-80 px-4 pt-2.5 text-xs leading-[18px]"
				>
					{{ tag }}
				</div>
			</ScrollAreaViewport>
			<ScrollAreaScrollbar class="bg-muted w-2.5 rounded-2xl p-[1.5px]">
				<ScrollAreaThumb class="bg-secondary translate-x-px cursor-grab rounded-2xl" />
			</ScrollAreaScrollbar>
		</ScrollAreaRoot>
	</AppPage>
</template>

<script setup lang="ts">
import { ScrollAreaRoot, ScrollAreaScrollbar, ScrollAreaThumb, ScrollAreaViewport } from "reka-ui";

const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);
</script>
