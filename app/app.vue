<template>
	<AppRoot>
		<AppHeader :class="isFooterVisible && '-translate-y-full'" />

		<AppMain>
			<NuxtPage />
		</AppMain>

		<AppFooter ref="footer" />
	</AppRoot>
</template>

<script setup lang="ts">
useHead({
	link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
});

const url = useRequestURL();
const ogImage = `${url.origin}/og-image.png`;
useSeoMeta({
	ogImage,
	twitterImage: ogImage,
	ogImageWidth: 1200,
	ogImageHeight: 600,
});

const footer = useTemplateRef("footer");
const { isVisible: isFooterVisible } = useElementVisibility(footer);
</script>
