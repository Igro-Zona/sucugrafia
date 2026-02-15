import { useAppConfig } from "#imports";
import type { ContentNavigationItem } from "@nuxt/content";
import type { ContentSearchFile, ContentSearchItem } from "@nuxt/ui";
const open = ref(false);

export default function () {
	const appConfig = useAppConfig();
	function mapFile(
		file: ContentSearchFile,
		link: ContentNavigationItem,
		parent: ContentNavigationItem,
	): ContentSearchItem {
		const prefix = [...new Set([parent?.title, ...file.titles].filter(Boolean))];
		return {
			prefix: prefix?.length ? prefix.join(" > ") + " >" : void 0,
			label: file.id === link.path ? link.title : file.title,
			suffix: file.content.replaceAll("<", "&lt;").replaceAll(">", "&gt;"),
			to: file.id,
			icon: link.icon || parent?.icon || (file.level > 1 ? appConfig.ui.icons.hash : appConfig.ui.icons.file),
			level: file.level,
		};
	}
	function mapNavigationItems(
		children: ContentNavigationItem[],
		files: ContentSearchFile[],
		parent: ContentNavigationItem,
	): ContentSearchItem[] {
		return children.flatMap((link) => {
			if (link.children?.length) {
				return mapNavigationItems(link.children, files, link);
			}
			return (
				files
					?.filter((file) => file.id === link.path || file.id.startsWith(`${link.path}#`))
					?.map((file) => mapFile(file, link, parent)) || []
			);
		});
	}
	function postFilter(query: string, items: ContentSearchItem[]): ContentSearchItem[] {
		if (!query) {
			return items?.filter((item) => item.level === 1);
		}
		return items;
	}
	return {
		open,
		mapFile,
		mapNavigationItems,
		postFilter,
	};
}
