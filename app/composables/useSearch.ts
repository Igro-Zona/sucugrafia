import type { ArticleCommandPaletteItem } from "~/components/articles/ArticleCommandPalette.vue";

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
	function mapNavigationItems(children: ContentNavigationItem[], files: ContentSearchFile[]): ArticleCommandPaletteItem[] {
		return children.flatMap((link) => {
			if (link.children?.length) return mapNavigationItems(link.children, files);

			return files
				.filter((file) => file.id === link.path || file.id.startsWith(`${link.path}#`))
				.map((file) => ({
					label: file.id === link.path ? link.title : file.title,
					suffix: file.content.replaceAll("<", "&lt;").replaceAll(">", "&gt;"),
					to: file.id,
					level: file.level,
				}));
		});
	}

	function postFilter(searchTerm: string, items: ArticleCommandPaletteItem[]): ArticleCommandPaletteItem[] {
		if (!searchTerm) return items?.filter((item) => item.level === 1);
		return items;
	}

	return { open, mapNavigationItems, postFilter };
}
