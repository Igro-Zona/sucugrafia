<template>
	<UiContainer>
		<ArticlesPage v-if="data">
			<template #right>
				<div class="sticky top-[calc(var(--ui-header-height)+2rem)] right-0">
					<!-- <UContentToc
						class="top-0"
						title="Contenido"
						color="secondary"
						:links="data.body.toc?.links"
					/> -->
					<div class="flex flex-col justify-between gap-2">
						<button
							class="ring-accented bg-elevated hover:bg-default/50 active:bg-default/50 focus-visible:ring-primary inline-flex w-full items-center gap-2 rounded-md px-3 py-2 font-medium ring transition-colors ring-inset hover:cursor-pointer focus:outline-none focus-visible:ring-2"
							@click="share"
						>
							<Icon name="lucide:share" />
							<span>Compartir</span>
						</button>

						<button
							class="ring-accented bg-elevated hover:bg-default/50 active:bg-default/50 focus-visible:ring-primary inline-flex w-full items-center justify-between gap-2 rounded-md px-3 py-2 font-medium ring transition-colors ring-inset hover:cursor-pointer focus:outline-none focus-visible:ring-2"
							@click="copyLink"
						>
							<span class="inline-flex items-center gap-2">
								<Icon name="lucide:link" />
								<span>{{ isLinkCopied ? "Copiado" : "Copiar URL" }}</span>
							</span>

							<Icon
								v-if="isLinkCopied"
								name="lucide:check"
							/>
						</button>
					</div>
				</div>
			</template>

			<div class="border-default relative border-b py-8">
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

			<!-- <UContentToc
				class="lg:hidden"
				title="Contenido"
				color="primary"
				:links="data.body.toc?.links"
				highlight
				:ui="{
					container: 'border-solid',
				}"
			/> -->

			<div class="mt-8">
				<div class="flex gap-2 lg:hidden">
					<button
						class="ring-accented bg-elevated hover:bg-default/50 active:bg-default/50 focus-visible:ring-primary inline-flex items-center gap-2 rounded-md px-3 py-2 font-medium ring transition-colors ring-inset hover:cursor-pointer focus:outline-none focus-visible:ring-2"
						@click="share"
					>
						<Icon name="lucide:share" />
						<span>Compartir</span>
					</button>

					<button
						class="ring-accented bg-elevated hover:bg-default/50 active:bg-default/50 focus-visible:ring-primary inline-flex items-center justify-between gap-2 rounded-md px-3 py-2 font-medium ring transition-colors ring-inset hover:cursor-pointer focus:outline-none focus-visible:ring-2"
						@click="copyLink"
					>
						<span class="inline-flex items-center gap-2">
							<Icon name="lucide:link" />
							<span>{{ isLinkCopied ? "Copiado" : "Copiar URL" }}</span>
						</span>

						<Icon
							v-if="isLinkCopied"
							name="lucide:check"
						/>
					</button>
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

				<ArticlesSurround :surround="surround" />
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

const readingTimeText = computed(() => data.value?.meta.readingTime?.text);
const formattedDate = computed(() => formatDate(data.value?.meta.date));

const { isLinkCopied, copyLink, share } = useArticleActions(route);
</script>
