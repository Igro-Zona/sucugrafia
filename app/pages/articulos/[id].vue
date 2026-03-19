<template>
	<UiContainer>
		<ArticlesPage v-if="data">
			<template #right>
				<div class="sticky top-[calc(var(--ui-header-height)+2rem)] right-0">
					<div class="flex flex-col gap-2">
						<ArticlesToc
							title="Contenido"
							:links="data.body.toc?.links"
						/>

						<UiButton
							icon="lucide:share"
							class="ring-accented bg-elevated hover:bg-default/50 active:bg-default/50 focus-visible:ring-primary gap-2! px-3 py-1.75 ring focus:outline-none focus-visible:ring-2"
							@click="share"
						>
							Compartir
						</UiButton>

						<UiButton
							icon="lucide:link"
							:trailing-icon="isLinkCopied ? { name: 'lucide:check', class: 'ml-auto' } : undefined"
							class="ring-accented bg-elevated hover:bg-default/50 active:bg-default/50 focus-visible:ring-primary gap-2! px-3 py-1.75 ring focus:outline-none focus-visible:ring-2"
							@click="copyLink"
						>
							{{ isLinkCopied ? "Copiado" : "Copiar URL" }}
						</UiButton>
					</div>
				</div>
			</template>

			<div class="relative py-8">
				<div
					v-if="data.title"
					class="flex flex-col items-center justify-center gap-4 lg:flex-row"
				>
					<h2 class="text-highlighted font-latto text-4xl font-bold text-pretty sm:text-5xl">
						{{ data.title }}
					</h2>
				</div>

				<div
					v-if="data.meta.contentDescription"
					class="text-muted font-latto mt-4 text-lg text-pretty"
				>
					{{ data.meta.contentDescription }}
				</div>

				<div class="mt-4 flex flex-wrap items-center justify-between gap-4">
					<div class="flex flex-wrap items-center gap-2">
						<span
							v-for="tag in data?.meta.tags"
							:key="tag"
							class="bg-primary/10 text-primary inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-base font-medium"
							>{{ tag }}</span
						>
					</div>
					<div class="flex gap-4">
						<p class="flex items-center gap-1">
							<Icon
								name="sucua:calendar"
								class="text-primary"
							/>
							{{ formattedDate }}
						</p>
						<p class="flex items-center gap-1">
							<Icon
								name="sucua:alarm"
								class="text-primary"
							/>
							{{ readingTimeText }}
						</p>
					</div>
				</div>
			</div>

			<ArticlesToc
				class="bg-default/75 sticky top-(--ui-header-height) z-100 -mx-6 backdrop-blur-xs transition-[top] lg:hidden"
				:class="isFooterVisible && 'top-0!'"
				title="Contenido"
				:links="data.body.toc?.links"
			/>

			<div class="mt-8">
				<div class="flex gap-2 lg:hidden">
					<UiButton
						icon="lucide:share"
						class="ring-accented bg-elevated hover:bg-default/50 active:bg-default/50 focus-visible:ring-primary gap-2! px-3 py-1.75 ring focus:outline-none focus-visible:ring-2"
						@click="share"
					>
						Compartir
					</UiButton>

					<UiButton
						icon="lucide:link"
						:trailing-icon="isLinkCopied ? { name: 'lucide:check', class: 'ml-auto' } : undefined"
						class="ring-accented bg-elevated hover:bg-default/50 active:bg-default/50 focus-visible:ring-primary gap-2! px-3 py-1.75 ring focus:outline-none focus-visible:ring-2"
						@click="copyLink"
					>
						{{ isLinkCopied ? "Copiado" : "Copiar URL" }}
					</UiButton>
				</div>

				<ContentRenderer :value="data" />

				<div class="border-default border-y py-12">
					<p class="font-latto mb-4 text-2xl font-semibold">Articulos relacionados:</p>

					<UiGrid v-if="links">
						<ArticlesPost
							v-for="article in links"
							:key="article.id"
							:title="article.title"
							:image="article.meta.thumbnail"
							:new="isNew(article.meta.date)"
							:date="article.meta.date"
							:link="{
								to: article.path,
							}"
						/>
					</UiGrid>
				</div>

				<ArticlesSurround
					class="mt-8"
					:surround="surround"
				/>
			</div>
		</ArticlesPage>
	</UiContainer>
</template>

<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts" setup>
import useArticleActions from "~/composables/useArticleActions";
const route = useRoute();
const { data } = await useAsyncData(route.path, () => queryCollection("articles").path(route.path).first());
useHead({ ...(data.value?.head as any) });
useSeoMeta({
	...data.value?.seo,
	twitterTitle: data.value?.seo.title,
	twitterDescription: data.value?.seo.description,
});
useSchemaOrg([
	defineArticle({
		headline: data.value?.title,
		datePublished: data.value?.meta.date,
		description: data.value?.description,
		author: { "@type": "Person", "name": data.value?.meta.author },
		keywords: data.value?.meta.tags,
	}),
]);

const { data: links } = await useAsyncData(`linked-${route.path}`, async () => {
	const res = await queryCollection("articles").where("path", "NOT LIKE", data.value?.path).all();
	return orderBy(res, (a) => intersection(a.meta.tags, data.value?.meta.tags).length, "desc").slice(0, 5);
});
const { data: surround } = await useAsyncData(`${route.path}-surround`, () => {
	return queryCollectionItemSurroundings("articles", route.path, { fields: ["description"] });
});

const isFooterVisible = inject("is-footer-visible");

const readingTimeText = computed(() => toReadingTime(data.value?.meta.readingTime?.minutes));
const formattedDate = computed(() => formatDate(data.value?.meta.date));

const { isLinkCopied, copyLink, share } = useArticleActions(route);
</script>
