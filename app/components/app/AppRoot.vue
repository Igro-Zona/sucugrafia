<template>
	<ConfigProvider :use-id="() => useId()">
		<NuxtLoadingIndicator
			color="#00dc82"
			:height="4"
		/>
		<AppOverlay />

		<slot />
	</ConfigProvider>
</template>
