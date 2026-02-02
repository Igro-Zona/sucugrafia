import type { AsTag } from "reka-ui";

declare global {
	interface IconProps {
		name: string;
		mode?: "svg" | "css";
		size?: string | number;
		customize?: (content: string, name?: string, prefix?: string, provider?: string) => string;
	}

	type AsPropDefault = AsTag | Component;
	type AsPropWithHeadings = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | Component;
}
