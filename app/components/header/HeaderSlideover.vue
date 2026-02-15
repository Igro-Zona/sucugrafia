<template>
	<UiModalRoot
		v-slot="{ close }"
		v-bind="rootProps"
	>
		<UiModalPortal>
			<UiModalOverlay
				class="bg-elevated/75 fixed inset-0 data-[state=closed]:animate-[fade-out_200ms_ease-in] data-[state=open]:animate-[fade-in_200ms_ease-out] lg:hidden"
			/>

			<UiModalContent
				v-bind="{ ...props, open: undefined }"
				class="bg-default divide-default ring-default fixed top-0 right-0 bottom-0 left-auto flex w-full max-w-md translate-x-0 translate-y-0 flex-col divide-y shadow-none focus:outline-none data-[state=closed]:animate-[slide-out-to-right_200ms_ease-in-out] data-[state=open]:animate-[slide-in-from-right_200ms_ease-in-out] sm:shadow-lg sm:ring lg:hidden"
			>
				<slot :close="close" />
			</UiModalContent>
		</UiModalPortal>
	</UiModalRoot>
</template>

<script setup lang="ts">
import { useForwardPropsEmits } from "reka-ui";
import type { UiModalContentProps } from "../ui/modal/UiModalContent.vue";

export interface HeaderSlideoverProps extends UiModalContentProps {
	open?: boolean;
}
const emits = defineEmits(["update:open"]);
const props = defineProps<HeaderSlideoverProps>();
const rootProps = useForwardPropsEmits(props, emits);
</script>
