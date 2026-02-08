import { useFocusTrap } from "@vueuse/integrations/useFocusTrap";
import type { ComponentPublicInstance, TemplateRef } from "vue";

export default function (target: TemplateRef<ComponentPublicInstance>) {
	const { activate } = useFocusTrap(target);
	const trapActive = ref(false);
	function handleKeydown(e: KeyboardEvent) {
		if (e.key === "Enter") {
			trapActive.value = true;
			activate();
		} else if (e.key === "Escape") {
			trapActive.value = false;
		}
	}
	return { trapActive, handleKeydown };
}
