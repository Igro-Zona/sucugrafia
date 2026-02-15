import type { AsTag } from "reka-ui";
import type { ClassNameValue } from "tailwind-merge";
import type { NuxtLinkProps } from "#app";
export {};

declare global {
	interface IconProps {
		name: string;
		mode?: "svg" | "css";
		size?: string | number;
		customize?: (content: string, name?: string, prefix?: string, provider?: string) => string;
		class?: ClassNameValue;
	}

	type AsPropDefault = AsTag | Component;
	type AsPropWithHeadings = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | Component;

	type LinkProps = {
		label: string;
	} & NuxtLinkProps;
	type SemanticColor =
		| "default"
		| "primary"
		| "secondary"
		| "accent"
		| "muted"
		| "highlight"
		| "success"
		| "warning"
		| "error"
		| "info";
	type KbdKey =
		| "meta"
		| "option"
		| "shift"
		| "ctrl"
		| "alt"
		| "win"
		| "command"
		| "control"
		| "enter"
		| "delete"
		| "backspace"
		| "escape"
		| "tab"
		| "capslock"
		| "arrowup"
		| "arrowright"
		| "arrowdown"
		| "arrowleft"
		| "pageup"
		| "pagedown"
		| "home"
		| "end";
}
