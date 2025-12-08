<template>
	<UPage v-if="data">
		<template #right>
			<UPageAside class="border-l-default border-l">
				<UContentToc
					class="top-0"
					title="Contenido"
					color="secondary"
					:links="data.body.toc?.links"
				/>

				<div class="flex flex-col justify-between gap-2">
					<UButton
						class="w-full hover:cursor-pointer"
						icon="material-symbols:share"
						variant="subtle"
						color="neutral"
						size="xl"
						@click="share"
						>Compartir</UButton
					>

					<UButton
						class="w-full hover:cursor-pointer"
						icon="mdi:link-variant"
						variant="subtle"
						color="neutral"
						size="xl"
						:trailing-icon="isLinkCopied ? 'i-lucide-check' : undefined"
						@click="copyLink"
					>
						{{ isLinkCopied ? "Copiado" : "Copiar URL" }}</UButton
					>
				</div>
			</UPageAside>
		</template>

		<UPageHeader
			class="text-center"
			:title="data?.title"
			:description="data?.description"
		>
			<div class="mt-4 flex flex-wrap items-center justify-between gap-4">
				<div class="flex flex-wrap items-center gap-2">
					<UBadge
						v-for="tag in data?.meta.tags"
						:key="tag"
						color="secondary"
						variant="soft"
						size="xl"
						>{{ tag }}</UBadge
					>
				</div>
				<div class="flex gap-4">
					<p class="flex items-center gap-1">
						<UIcon
							name="material-symbols:calendar-today-rounded"
							class="text-secondary"
						/>
						{{ formattedDate }}
					</p>
					<p class="flex items-center gap-1">
						<UIcon
							name="material-symbols:alarm-rounded"
							class="text-secondary"
						/>
						{{ readingTimeText }}
					</p>
				</div>
			</div>
		</UPageHeader>

		<UContentToc
			class="lg:hidden"
			title="Contenido"
			color="secondary"
			:links="data.body.toc?.links"
			highlight
			:ui="{
				container: 'border-solid',
			}"
		/>

		<UPageBody>
			<div class="flex gap-2 lg:hidden">
				<UButton
					class="hover:cursor-pointer"
					icon="material-symbols:share"
					variant="subtle"
					color="neutral"
					size="xl"
					@click="share"
					>Compartir</UButton
				>

				<UButton
					class="hover:cursor-pointer"
					icon="mdi:link-variant"
					variant="subtle"
					color="neutral"
					size="xl"
					:trailing-icon="isLinkCopied ? 'i-lucide-check' : undefined"
					@click="copyLink"
				>
					{{ isLinkCopied ? "Copiado" : "Copiar URL" }}</UButton
				>
			</div>

			<ContentRenderer :value="data" />

			<USeparator color="secondary" />

			<p class="font-latto text-2xl font-semibold">Articulos relacionados:</p>
			<UBlogPosts>
				<UBlogPost
					v-for="article in links"
					:key="article.id"
					:title="article.title"
					:image="article.meta.thumbnail"
					:badge="
						Math.abs(new Date().getTime() - new Date(article?.meta.date).getTime()) < 8.64e7 * 7
							? { label: 'New', color: 'primary' }
							: undefined
					"
					:date="article.meta.date"
					:to="article.path"
					variant="outline"
				/>
			</UBlogPosts>

			<USeparator color="secondary" />

			<UContentSurround
				prev-icon="i-lucide-chevron-left"
				next-icon="i-lucide-chevron-right"
				:surround="surround"
			/>
		</UPageBody>
	</UPage>
</template>

<script lang="ts" setup>
import l from "lodash";
import type { Article } from "./../../../content.config";
import dayjs from "dayjs";

const route = useRoute();
const readingTimeText = computed(() => data.value?.meta.readingTime?.text);
const formattedDate = computed(() => (data.value?.meta?.date ? dayjs(data.value.meta.date).format("DD MMM YYYY") : ""));

const { data } = await useAsyncData(
	route.path,
	() => queryCollection("articles").path(route.path).first() as Promise<Article>,
);
const { data: links } = await useAsyncData(`linked-${route.path}`, async () => {
	const res = (await queryCollection("articles").where("path", "NOT LIKE", data.value?.path).all()) as Article[];
	return l.orderBy(res, (a) => l.intersection(a.meta.tags, data.value?.meta.tags).length, "desc").slice(0, 5);
});
const { data: surround } = await useAsyncData(`${route.path}-surround`, () => {
	return queryCollectionItemSurroundings("articles", route.path, {
		fields: ["description"],
	});
});

async function share() {
	await navigator.share({ url: route.fullPath });
}

const url = useRequestURL();
const isLinkCopied = ref(false);
const fullUrl = computed(() => `${url.origin}${route.fullPath}`);
async function copyLink() {
	await navigator.clipboard.writeText(fullUrl.value);
	isLinkCopied.value = true;
}
</script>
