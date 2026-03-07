import type { UiLinkProps } from "~/components/ui/UiLink.vue";

export interface ContentFilteredItem extends UiLinkProps {
	label?: string;
	suffix?: string;
	level?: number;
}
export interface ContentSearchFile {
	id: string;
	title: string;
	titles: string[];
	level: number;
	content: string;
}
export interface ContentNavigationItem {
	title: string;
	path: string;
	stem?: string;
	children?: ContentNavigationItem[];
	page?: false;
	[key: string]: unknown;
}

const open = ref(false);
export default function () {
	function mapNavigationItems(children: ContentNavigationItem[], files: ContentSearchFile[]): ContentFilteredItem[] {
		return children.flatMap((link) =>
			link.children?.length
				? mapNavigationItems(link.children, files)
				: files
						.filter((file) => file.id === link.path || file.id.startsWith(`${link.path}#`))
						.map((file) => ({
							label: file.id === link.path ? link.title : file.title,
							suffix: file.content.replaceAll("<", "&lt;").replaceAll(">", "&gt;"),
							to: file.id,
							level: file.level,
						})),
		);
	}

	function postFilter(searchTerm: string, items: ContentFilteredItem[]): ContentFilteredItem[] {
		return searchTerm ? items : items?.filter((item) => item.level === 1);
	}

	return { open, mapNavigationItems, postFilter };
}
