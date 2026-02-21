export default function (value?: MaybeRef<string | IconProps>) {
	function normalizeIconProps(props: string | IconProps) {
		return typeof props === "string" ? { name: props } : props;
	}

	const iconProps = computed(() => {
		const input = unref(value);
		return normalizeIconProps(input ?? "");
	});

	return { iconProps, normalizeIconProps };
}
