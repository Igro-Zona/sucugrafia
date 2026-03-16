<template>
	<div class="relative my-5">
		<pre
			v-bind="$attrs"
			class="group border-muted bg-muted **:[.line.highlight]:bg-accented/50! overflow-x-auto rounded-md border px-4 py-3 font-mono text-sm/6 wrap-break-word whitespace-pre-wrap focus:outline-none **:[.line]:block **:[.line.highlight]:-mx-4 **:[.line.highlight]:px-4"
		>
        	<slot />
    	</pre>
	</div>
</template>
