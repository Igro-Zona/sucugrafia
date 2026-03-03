<template>
	<h2
		class="text-highlighted [&>a]:focus-visible:outline-primary hover:[&>a>code]:border-primary hover:[&>a>code]:text-primary relative mt-12 mb-6 scroll-mt-[calc(48px+45px+var(--ui-header-height))] text-2xl font-bold lg:scroll-mt-[calc(48px+var(--ui-header-height))] [&>a>code]:border-dashed [&>a>code]:text-xl/7 [&>a>code]:font-bold [&>a>code]:transition-colors"
	>
		<slot />
	</h2>
</template>
