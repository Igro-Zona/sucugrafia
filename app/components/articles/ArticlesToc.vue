<template>
	<DefineListTemplate v-slot="{ vlinks, level }">
		<ul :class="level > 0 ? 'ms-3' : 'border-default ms-2.5 min-w-0 border-s ps-4'">
			<li
				v-for="(link, index) in vlinks"
				:key="index"
				:class="!link.children?.length && '-ms-px min-w-0'"
			>
				<a
					:href="`#${link.id}`"
					:class="[
						'group focus-visible:outline-primary relative flex items-center py-1 text-sm',
						activeHeadings.includes(link.id) ? 'text-primary' : 'text-muted hover:text-default transition-colors',
						link.class,
					]"
					:active="activeHeadings.includes(link.id)"
					@click.prevent="scrollToHeading(link.id)"
				>
					<span class="truncate">{{ link.text }}</span>
				</a>

				<ReuseListTemplate
					v-if="link.children?.length"
					:vlinks="link.children"
					:level="level + 1"
				/>
			</li>
		</ul>
	</DefineListTemplate>

	<DefineTriggerTemplate>
		<span class="truncate">{{ title }}</span>
		<span class="ms-auto inline-flex items-center gap-1.5">
			<Icon v-bind="iconProps" />
		</span>
	</DefineTriggerTemplate>

	<CollapsibleRoot
		v-bind="$attrs"
		as="nav"
		:default-open="defaultOpen"
		:class="
			!unstyled && 'border-default max-h-[calc(100vh-calc(var(--ui-header-height)*6))] overflow-y-auto border-y px-2 lg:border-none'
		"
		style="scrollbar-gutter: stable"
		@update:open="$emit('update:open')"
	>
		<div
			v-if="links?.length"
			class="flex flex-col"
		>
			<CollapsibleTrigger
				class="group focus-visible:outline-primary -mt-1.5 flex flex-1 cursor-pointer items-center gap-1.5 pt-6 pb-4 text-sm font-semibold lg:hidden"
			>
				<ReuseTriggerTemplate />
			</CollapsibleTrigger>

			<CollapsibleContent
				class="relative overflow-hidden focus:outline-none data-[state=closed]:animate-[collapsible-up_200ms_ease-out] data-[state=open]:animate-[collapsible-down_200ms_ease-out] lg:hidden"
			>
				<div
					class="bg-primary absolute ms-2.5 h-(--indicator-size) w-px translate-y-(--indicator-position) rounded-full transition-[translate,height] duration-200"
					:style="indicatorStyle"
				/>

				<ReuseListTemplate
					:vlinks="links"
					:level="0"
				/>
			</CollapsibleContent>

			<p class="group focus-visible:outline-primary hidden flex-1 items-center gap-1.5 text-sm font-semibold lg:flex">
				<ReuseTriggerTemplate />
			</p>

			<div
				class="relative hidden overflow-hidden focus:outline-none data-[state=closed]:animate-[collapsible-up_200ms_ease-out] data-[state=open]:animate-[collapsible-down_200ms_ease-out] lg:flex"
			>
				<div
					class="bg-primary absolute ms-2.5 h-(--indicator-size) w-px translate-y-(--indicator-position) rounded-full transition-[translate,height] duration-200"
					:style="indicatorStyle"
				/>

				<ReuseListTemplate
					:vlinks="links"
					:level="0"
				/>
			</div>
		</div>
	</CollapsibleRoot>
</template>

<script setup lang="ts">
import type { HtmlHTMLAttributes } from "vue";
import type { TocLink } from "@nuxt/content";
import type { StyledComponentProps } from "~/types/Components";
import { createReusableTemplate } from "@vueuse/core";

export interface ArticlesTocLink extends TocLink {
	class?: HtmlHTMLAttributes["class"];
}
export interface ArticlesTocProps extends StyledComponentProps {
	links?: ArticlesTocLink[];
	defaultOpen?: boolean;
	title: string;
}

defineOptions({ inheritAttrs: false });
const emits = defineEmits(["update:open", "move"]);
const props = defineProps<ArticlesTocProps>();

const { iconProps } = useIcon({
	name: "lucide:chevron-down",
	size: 20,
	class: "shrink-0 transform transition-transform duration-200 group-data-[state=open]:rotate-180 lg:hidden",
});
const [DefineListTemplate, ReuseListTemplate] = createReusableTemplate<{ vlinks: ArticlesTocLink[]; level: number }>();
const [DefineTriggerTemplate, ReuseTriggerTemplate] = createReusableTemplate();

const { activeHeadings, updateHeadings } = useScrollspy();

function flattenLinks(links: ArticlesTocLink[]): ArticlesTocLink[] {
	return links.flatMap((link) => [link, ...(link.children ? flattenLinks(link.children) : [])]);
}

const indicatorStyle = computed(() => {
	if (!activeHeadings.value?.length) {
		return;
	}

	const flatLinks = flattenLinks(props.links || []);
	const activeIndex = flatLinks.findIndex((link) => activeHeadings.value.includes(link.id));
	const linkHeight = 1.75;

	return {
		"--indicator-size": `${linkHeight * activeHeadings.value.length}rem`,
		"--indicator-position": activeIndex >= 0 ? `${activeIndex * linkHeight}rem` : "0rem",
	};
});

const router = useRouter();
function scrollToHeading(id: string) {
	const encodedId = encodeURIComponent(id);
	router.push(`#${encodedId}`);
	emits("move", id);
}

const nuxtApp = useNuxtApp();
nuxtApp.hooks.hook("page:loading:end", () => {
	const headings = Array.from(document.querySelectorAll("h2, h3, h4"));
	updateHeadings(headings);
});
nuxtApp.hooks.hook("page:transition:finish", () => {
	const headings = Array.from(document.querySelectorAll("h2, h3, h4"));
	updateHeadings(headings);
});
</script>
