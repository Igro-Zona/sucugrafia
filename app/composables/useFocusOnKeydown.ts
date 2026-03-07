import { useFocusTrap } from "@vueuse/integrations/useFocusTrap";

export default function (target: TemplateRef) {
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
