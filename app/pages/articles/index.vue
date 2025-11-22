<template>
	<AppPage title="Nuestros articulos">
		<UBlogPosts class="mt-4">
			<UBlogPost
				v-for="article in articles"
				:key="article.id"
				:title="article.title"
				:description="article.description"
				:date="article.meta.date"
				:badge="
					Math.abs(new Date().getTime() - new Date(article.meta.date).getTime()) < 8.64e7 * 7
						? { label: 'New', color: 'secondary', variant: 'solid' }
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
	</AppPage>
</template>

<script setup lang="ts">
import type { Article } from "./../../../content.config";

const { data: articles } = await useAsyncData(
	"articles-home",
	() => queryCollection("articles").all() as Promise<Article[]>,
);
console.log();
</script>
