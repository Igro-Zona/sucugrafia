<template>
	<nav>
		<ul
			class="flex items-center gap-1"
			:class="{ 'flex-col': orientation === 'vertical' }"
		>
			<li
				v-for="(link, index) in links"
				:key="index"
				class="w-full"
				:class="{ 'py-2': orientation === 'horizontal' }"
			>
				<UiLink
					v-bind="link"
					class="hover:bg-muted/50 text-dimmed! hover:text-default! data-[active=true]:bg-muted data-[active=true]:text-primary! focus-visible:text-muted! w-full items-center px-2.5 py-1.5 focus-visible:outline-offset-0! data-[active=false]:outline-white!"
				/>
			</li>
		</ul>
	</nav>
</template>

<script setup lang="ts">
import type { UiLinkProps } from "~/components/ui/UiLink.vue";

export interface HeaderMenuProps {
	links: UiLinkProps[];
	orientation?: "horizontal" | "vertical";
}

withDefaults(defineProps<HeaderMenuProps>(), {
	orientation: "horizontal",
});
</script>
