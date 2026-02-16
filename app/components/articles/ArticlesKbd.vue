<template>
	<kbd
		class="ring-accented text-default bg-elevated inline-flex h-5 min-w-5 items-center justify-center rounded-sm px-1 font-sans text-[11px] font-medium uppercase ring ring-inset"
	>
		{{ getKbdKey(value) }}
	</kbd>
</template>

<script setup lang="ts">
export interface ArticleKbdProps {
	value: KbdKey | string;
}

defineProps<ArticleKbdProps>();
const { getKbdKey } = useKbdkey();
</script>
