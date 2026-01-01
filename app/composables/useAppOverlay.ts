import type { ComponentProps } from "vue-component-type-helpers";

type Overlay = {
	isMounted: boolean;
	component: Component | null;
	props: ComponentProps<Component>;
};

const overlay = reactive<Overlay>({
	isMounted: false,
	component: null,
	props: {},
});

export default function () {
	function open(component: Component, props?: ComponentProps<Component>) {
		overlay.component = markRaw(component);
		overlay.props = { ...props };
		overlay.isMounted = true;
	}
	function close() {
		overlay.isMounted = false;
		overlay.component = null;
		overlay.props = {};
	}
	function patch(props: Partial<ComponentProps<Component>>) {
		overlay.props = { ...overlay.props, ...props };
	}
	return {
		overlay,
		open,
		close,
		patch,
	};
}
