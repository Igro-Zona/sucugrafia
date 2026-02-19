type Overlay = {
	isMounted: boolean;
	component: Component | null;
	props: ExtractPropTypes<Component>;
};

const overlay = reactive<Overlay>({
	isMounted: false,
	component: null,
	props: {},
});

export default function () {
	function open(component: Component, props?: ExtractPropTypes<Component>) {
		overlay.component = markRaw(component);
		overlay.props = { ...props };
		overlay.isMounted = true;
	}
	function close() {
		overlay.isMounted = false;
		overlay.component = null;
		overlay.props = {};
	}
	function patch(props: Partial<ExtractPropTypes<Component>>) {
		overlay.props = { ...overlay.props, ...props };
	}
	return {
		overlay,
		open,
		close,
		patch,
	};
}
