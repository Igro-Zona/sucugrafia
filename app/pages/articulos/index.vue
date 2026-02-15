<template>
	<UiContainer>
		<UiSection
			title="Nuestros articulos "
			class="mt-4"
		>
			<button
				type="button"
				class="ring-accented font-latto bg-muted hover:bg-default/75 active:bg-muted/75 focus-visible:ring-primary inline-flex cursor-pointer items-center gap-1.5 rounded-md px-2.5 py-1.5 text-lg font-normal ring transition-colors ring-inset focus:outline-none focus-visible:ring-2"
				@click="open = true"
			>
				<Icon
					name="lucide:search"
					size="20"
				/>
				Buscar
				<span class="inline-flex items-center">
					<ArticleKbd value="meta" />
					<ArticleKbd value="k" />
				</span>
			</button>
			<ClientOnly>
				<LazyUContentSearch
					:files="files"
					shortcut="meta_k"
					:navigation="navigation"
					:fuse="{ resultLimit: 42 }"
				/>
			</ClientOnly>
			<UiGrid class="mb-2">
				<ArticlesPost
					v-for="article in articles"
					:key="article.id"
					:title="article.title"
					:description="article.description"
					:date="article.meta.date"
					:new="isNew(article.meta.date)"
					:image="article.meta.thumbnail"
					:authors="[
						{
							name: article.meta.author,
							description: 'Creador',
						},
					]"
					:link="{
						to: article.path,
					}"
				/>
			</UiGrid>
		</UiSection>
	</UiContainer>
</template>

<script setup lang="ts">
const { open } = useSearch();
const { data: articles } = await useAsyncData("articles-home", () => queryCollection("articles").all());
const { data: navigation } = await useAsyncData("navigation", () => queryCollectionNavigation("articles"));
const { data: files } = await useAsyncData("search", () => queryCollectionSearchSections("articles"), {
	server: false,
});
</script>
