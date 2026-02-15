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
					:files="files"
					shortcut="meta_k"
					:navigation="navigation"
					:fuse="{ resultLimit: 42 }"
				/>
			</ClientOnly>
			<UiGrid>
				<UBlogPost
					v-for="article in articles"
					:key="article.id"
					:title="article.title"
					:description="article.description"
					:date="article.meta.date"
					:badge="
						isNew(article.meta.date) ? { label: 'Nuevo', color: 'primary', variant: 'solid' } : undefined
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
			</UiGrid>
		</UiSection>
	</UiContainer>
</template>

<script setup lang="ts">
const { data: articles } = await useAsyncData("articles-home", () => queryCollection("articles").all());
const { data: navigation } = await useAsyncData("navigation", () => queryCollectionNavigation("articles"));
const { data: files } = await useAsyncData("search", () => queryCollectionSearchSections("articles"), {
	server: false,
});
</script>
