<template>
	<main
		v-spotlight
		class="box-border min-h-[calc(100vh-var(--ui-header-height)+1px)] pb-8"
	>
		<div class="relative z-9 overflow-hidden">
			<slot />
		</div>
	</main>
</template>
