<template>
	<UiLink
		v-bind="link"
		class="group focus-visible:outline-offset-1!"
	>
		<article
			class="bg-default ring-default hover:bg-elevated/50 relative flex flex-col overflow-hidden rounded-lg ring transition"
		>
			<div
				v-if="image"
				class="overflow-hidden"
			>
				<ArticlesPostImage :src="image" />
			</div>

			<div class="flex min-w-0 flex-1 flex-col justify-between p-4 sm:p-6">
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
						{{ title }}
					</h3>

					<p
						v-if="description"
						class="text-muted mt-1 text-base text-pretty"
					>
						{{ description }}
					</p>
				</div>

				<div
					v-if="authors"
					class="flex flex-wrap gap-x-3 gap-y-1.5 pt-4"
				>
					<div
						v-for="(author, index) in authors"
						:key="index"
						class="relative flex flex-col"
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
			</div>
		</article>
	</UiLink>
</template>

<script setup lang="ts">
import type { UiLinkProps } from "../ui/UiLink.vue";

export type AuthorType = {
	name: string;
	description?: string;
};
export interface ArticlesPostProps {
	date?: string;
	new?: boolean;
	title: string;
	description?: string;
	authors?: AuthorType[];
	link?: UiLinkProps;
	image?: string;
}

const props = defineProps<ArticlesPostProps>();
const datetime = computed(() => {
	if (!props.date) {
		return;
	}
	try {
		return new Date(props.date)?.toISOString();
	} catch {
		return void 0;
	}
});
</script>
