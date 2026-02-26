<template>
	<article
		:class="
			!unstyled &&
			'bg-default group ring-default hover:bg-default/50 active:bg-muted/75 focus-within:ring-primary! relative flex flex-col overflow-hidden rounded-lg ring transition focus-within:ring-3!'
		"
	>
		<div
			v-if="image"
			class="overflow-hidden"
		>
			<ArticlesPostImage
				:src="image"
				:index="index"
			/>
		</div>

		<div class="flex flex-1 flex-col p-4 sm:p-6">
			<div
				v-if="date || props.new"
				class="mb-2 flex items-center gap-2"
			>
				<span
					v-if="props.new"
					class="bg-primary text-inverted inline-flex items-center gap-1 truncate rounded-lg px-2 py-1 text-sm font-medium"
				>
					Nuevo
				</span>

				<time
					v-if="date"
					class="text-toned text-sm"
					:datetime="datetime"
				>
					{{ formatDate(date) }}
				</time>
			</div>

			<div>
				<h3 class="text-highlighted text-xl font-semibold text-pretty">
					<UiLink
						v-if="link?.to"
						v-bind="link"
						class="relative z-10 focus-visible:outline-none!"
					>
						<template #icon>
							{{ title }}
						</template>
					</UiLink>
					<span v-else>
						{{ title }}
					</span>
				</h3>

				<p
					v-if="description"
					class="text-muted mt-1 text-base text-pretty"
				>
					{{ description }}
				</p>
			</div>

			<div
				v-if="author?.name"
				class="relative mt-auto flex flex-col pt-4"
			>
				<p class="text-highlighted text-sm font-medium">{{ author.name }}</p>
				<p
					v-if="author.description"
					class="text-muted text-xs"
				>
					{{ author.description }}
				</p>
			</div>
		</div>
		<UiLink
			v-if="link?.to"
			v-bind="link"
			aria-hidden="true"
			tabindex="-1"
			class="absolute inset-0 z-0"
		/>
	</article>
</template>

<script setup lang="ts">
import type { StyledComponentProps } from "~/types/Components";
import type { UiLinkProps } from "../ui/UiLink.vue";

export type AuthorType = {
	name: string;
	description?: string;
};
export interface ArticlesPostProps extends StyledComponentProps {
	date?: string;
	new?: boolean;
	title: string;
	description?: string;
	author?: AuthorType;
	link?: UiLinkProps;
	image?: string;
	index?: number;
}

const props = defineProps<ArticlesPostProps>();
const datetime = computed(() => {
	if (!props.date) {
		return;
	}
	try {
		return new Date(props.date)?.toISOString();
	} catch {
		return undefined;
	}
});
</script>
