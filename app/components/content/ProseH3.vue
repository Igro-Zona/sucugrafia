<template>
	<h3
		:id="id"
		class="text-highlighted [&>a]:focus-visible:outline-primary hover:[&>a>code]:border-primary hover:[&>a>code]:text-primary relative mt-8 mb-3 scroll-mt-[calc(32px+45px+var(--ui-header-height))] text-xl font-bold lg:scroll-mt-[calc(32px+var(--ui-header-height))] [&>a>code]:border-dashed [&>a>code]:text-lg/6 [&>a>code]:font-bold [&>a>code]:transition-colors"
	>
		<a
			v-if="id"
			:href="`#${id}`"
			class="group lg:-ms-2 lg:ps-2"
		>
			<span
				class="bg-elevated hover:text-primary text-muted absolute top-0.5 -ms-8 hidden rounded-md p-1 opacity-0 transition group-hover:opacity-100 group-focus:opacity-100 lg:flex"
			>
				<Icon
					name="lucide:hash"
					class="size-4 shrink-0"
				/>
			</span>

			<slot />
		</a>
		<slot v-else />
	</h3>
</template>

<script setup lang="ts">
defineProps<{ id?: string }>();
</script>
