import type { AsTag } from "reka-ui";
import type { HTMLAttributes } from "vue";
export {};
export interface StyledComponentProps {
	unstyled?: boolean;
}
export interface PrimitiveComponentProps {
	as?: AsPropDefault;
	asChild?: boolean;
}
export interface StyledPrimitiveComponentProps extends StyledComponentProps, PrimitiveComponentProps {}

declare global {
	interface IconProps extends HTMLAttributes {
		name: string;
		mode?: "svg" | "css";
		size?: string | number;
		customize?: (content: string, name?: string, prefix?: string, provider?: string) => string;
	}
	type AsPropDefault = AsTag | Component;
	type AsPropWithHeadings = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | Component;
	type SemanticColor = "default" | "primary" | "secondary" | "accent" | "muted" | "highlight" | "success" | "warning" | "error" | "info";
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
