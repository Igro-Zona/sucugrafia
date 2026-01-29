<template>
	<UiContainer>
		<UiSection
			title="Nuestros articulos "
			class="mt-4"
		>
			<UContentSearchButton
				variant="subtle"
				:collapsed="false"
				class="p2 cursor-pointer text-lg"
			>
				Buscar
			</UContentSearchButton>
			<ClientOnly>
				<LazyUContentSearch
					v-model:search-term="searchTerm"
					:files="files"
					shortcut="meta_k"
					:navigation="navigation"
					:fuse="{ resultLimit: 42 }"
				/>
			</ClientOnly>
			<UBlogPosts>
				<UBlogPost
					v-for="article in articles"
					:key="article.id"
					class="hover:bg-muted"
					:title="article.title"
					:description="article.description"
					:date="article.meta.date"
					:badge="
						Math.abs(new Date().getTime() - new Date(article.meta.date).getTime()) < 8.64e7 * 7
							? { label: 'Nuevo', color: 'primary', variant: 'solid' }
							: undefined
					"
					:image="article.meta.thumbnail"
					:authors="[
						{
							name: article.meta.author,
							description: 'Creador',
						},
					]"
					:to="article.path"
				/>
			</UBlogPosts>
		</UiSection>
	</UiContainer>
</template>

<script setup lang="ts">
const { data: articles } = await useAsyncData("articles-home", () => queryCollection("articles").all());
const { data: navigation } = await useAsyncData("navigation", () => queryCollectionNavigation("articles"));
const { data: files } = useLazyAsyncData("search", () => queryCollectionSearchSections("articles"), {
	server: false,
});

const searchTerm = ref("");
</script>
