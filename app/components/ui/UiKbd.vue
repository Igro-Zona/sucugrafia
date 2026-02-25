<template>
	<kbd
		:class="
			!unstyled &&
			'ring-accented bg-muted inline-flex h-5 min-w-5 items-center justify-center rounded-sm px-1.5 font-sans text-[0.68rem] font-medium uppercase ring'
		"
	>
		<slot
			:get-kbd-key="getKbdKey"
			:mac-os="macOS"
		>
			{{ getKbdKey(value) }}
		</slot>
	</kbd>
</template>

<script setup lang="ts">
import type { StyledComponentProps } from "~/types/Components";

export interface ArticleKbdProps extends StyledComponentProps {
	value: MaybeArray<KbdKey | string>;
}

defineProps<ArticleKbdProps>();
const { macOS, getKbdKey } = useKbdkey();
</script>
