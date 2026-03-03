<template>
	<DialogRoot
		v-slot="{ close }"
		:open="open"
		:default-open="defaultOpen"
		:modal="modal"
		v-bind="{ $attrs, class: undefined }"
		@update:open="updateOpen"
	>
		<DialogPortal
			:to="to"
			:force-mount="forceMount"
			:disabled="disabled"
			:defer="defer"
		>
			<DialogOverlay
				v-if="overlay"
				class="bg-elevated/75 fixed inset-0 data-[state=closed]:animate-[fade-animation-out_200ms_ease-in] data-[state=open]:animate-[fade-animation-in_200ms_ease-out]"
			/>

			<DialogContent
				:as="as"
				:as-child="asChild"
				:class="[
					!unstyled &&
						'bg-default ring-default fixed top-1/2 left-1/2 flex max-h-[calc(100dvh-1rem)] min-h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 flex-col rounded-lg shadow-lg ring data-[state=closed]:animate-[scale-animation-out_200ms_ease-in] data-[state=open]:animate-[scale-animation-in_200ms_ease-out]',
					$attrs.class,
				]"
				@after-enter="emit('after:enter')"
				@after-leave="emit('after:leave')"
				@pointer-down-outside="pointerDownOutside"
			>
				<DialogTitle
					v-if="title"
					class="sr-only"
				>
					{{ title }}
				</DialogTitle>

				<DialogDescription
					v-if="description"
					class="sr-only"
				>
					{{ description }}
				</DialogDescription>

				<slot :close="close" />
			</DialogContent>
		</DialogPortal>
	</DialogRoot>
</template>

<script setup lang="ts">
import type { PointerDownOutsideEvent } from "reka-ui";
import type { StyledPrimitiveComponentProps } from "~/types/Components";

export interface UiModalProps extends StyledPrimitiveComponentProps {
	open?: boolean;
	defaultOpen?: boolean;
	modal?: boolean;
	to?: string | HTMLElement;
	forceMount?: boolean;
	disabled?: boolean;
	defer?: boolean;
	overlay?: boolean;
	title?: string;
	description?: string;
}

defineOptions({ inheritAttrs: false });
const emit = defineEmits(["update:open", "after:enter", "after:leave"]);
function updateOpen(value: boolean) {
	emit("update:open", value);
}

withDefaults(defineProps<UiModalProps>(), {
	open: false,
	defaultOpen: false,
	modal: true,
	to: "body",
	forceMount: false,
	disabled: false,
	defer: true,
	overlay: true,
	title: undefined,
	description: undefined,
});

function pointerDownOutside(e: PointerDownOutsideEvent) {
	const target = e.detail.originalEvent.target as HTMLElement;
	if (target?.isConnected) return;
	e.preventDefault();
}
</script>
