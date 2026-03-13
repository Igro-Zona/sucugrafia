<template>
	<UiGrid
		v-if="surround"
		:as="as"
		:as-child="asChild"
		:unstyled="unstyled"
		:class="!unstyled && 'lg:grid-cols-2!'"
	>
		<UiCard
			v-if="surround[0]"
			unstyled
			class="group ring-default hover:bg-default/70 bg-default focus-within:ring-primary relative flex min-h-30 items-center gap-4 overflow-hidden rounded-lg px-4 py-4 ring transition-colors focus-within:ring-2"
		>
			<template #content>
				<div
					class="bg-elevated ring-accented group-hover:bg-primary/10 group-hover:ring-primary/50 inline-flex items-center rounded-full p-1.5 ring transition"
				>
					<Icon
						name="i-lucide-chevron-left"
						class="group-hover:text-primary transition-colors"
					/>
				</div>

				<div>
					<p class="text-highlighted mb-1 text-right text-[15px] font-medium">
						<UiLink
							v-if="surround[0].path"
							:to="surround[0].path"
							class="relative z-10 focus-visible:outline-none!"
						>
							<template #icon>
								<span class="line-clamp-1"> {{ surround[0].title }}</span>
							</template>
						</UiLink>
						<span
							v-else
							class="line-clamp-1"
						>
							{{ surround[0].title }}
						</span>
					</p>

					<p class="text-muted line-clamp-3 text-right text-sm text-balance">
						{{ surround[0].description }}
					</p>
				</div>

				<UiLink
					:to="surround[0].path"
					aria-hidden="true"
					tabindex="-1"
					class="absolute inset-0 z-0"
				/>
			</template>
		</UiCard>
		<div
			v-else
			class="border-default bg-default block rounded-lg border"
		/>

		<UiCard
			v-if="surround[1]"
			unstyled
			class="group ring-default hover:bg-default/70 bg-default focus-within:ring-primary relative flex min-h-30 items-center gap-4 overflow-hidden rounded-lg px-4 py-4 ring transition-colors focus-within:ring-2"
		>
			<template #content>
				<div>
					<p class="text-highlighted mb-1 text-[15px] font-medium">
						<UiLink
							v-if="surround[1].path"
							:to="surround[1].path"
							class="relative z-10 focus-visible:outline-none!"
						>
							<template #icon>
								<span class="line-clamp-1"> {{ surround[1].title }}</span>
							</template>
						</UiLink>
						<span
							v-else
							class="line-clamp-1"
						>
							{{ surround[1].title }}
						</span>
					</p>

					<p class="text-muted line-clamp-3 text-sm text-balance">
						{{ surround[1].description }}
					</p>
				</div>

				<div
					class="bg-elevated ring-accented group-hover:bg-primary/10 group-hover:ring-primary/50 inline-flex items-center rounded-full p-1.5 ring transition"
				>
					<Icon
						name="i-lucide-chevron-right"
						class="group-hover:text-primary transition-colors"
					/>
				</div>

				<UiLink
					:to="surround[1].path"
					aria-hidden="true"
					tabindex="-1"
					class="absolute inset-0 z-0"
				/>
			</template>
		</UiCard>
		<div
			v-else
			class="border-default bg-default block rounded-lg border"
		/>
	</UiGrid>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import type { StyledPrimitiveComponentProps } from "~/types/Components";

export interface ContentSurroundLink extends ContentNavigationItem {
	description?: string;
	icon?: string | IconProps;
	class?: HTMLAttributes["class"];
}
export interface ArticlesSurroundProps extends StyledPrimitiveComponentProps {
	surround?: ContentSurroundLink[];
}

defineProps<ArticlesSurroundProps>();
</script>
