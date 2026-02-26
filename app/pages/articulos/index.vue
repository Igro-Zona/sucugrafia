<template>
	<UiContainer class="py-4">
		<UiSection
			title="Nuestros articulos"
			data-aos="zoom-in"
		>
			<UiButton
				class="bg-default ring-muted focus-visible:bg-muted hover:bg-default/50 active:bg-muted items-center px-2.5 text-lg ring focus-visible:outline-offset-0!"
				:icon="{ name: 'lucide:search', size: 20 }"
				label="Buscar"
				@click="open = true"
			>
				<template #trailingIcon>
					<UiKbd
						:value="['meta', 'k']"
						aria-describedby="shortcut-desc"
					/>
					<p
						id="shortcut-desc"
						class="hidden"
					>
						Presiona Ctrl + K para abrir el menú de busqueda
					</p>
				</template>
			</UiButton>

			<LazyArticlesSearch
				:files="files"
				:navigation="navigation"
				:fuse="{ resultLimit: 42 }"
			/>

			<UiGrid>
				<ArticlesPost
					v-for="(article, index) in articles"
					:key="article.id"
					:title="article.title"
					:description="article.description"
					:date="article.meta.date"
					:new="isNew(article.meta.date)"
					:image="article.meta.thumbnail"
					:author="{
						name: article.meta.author,
						description: 'Creador',
					}"
					:link="{
						to: article.path,
					}"
					:index="index"
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
