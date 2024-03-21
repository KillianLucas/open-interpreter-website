<script>
	import Icon from '@iconify/svelte';
	export let url = '';
	export let href = '';
	export let alt = '';
	export let title = '';
	export let targetBlank = false;
</script>

<a
	{href}
	target={targetBlank ? '_blank' : undefined}
	class="absolute bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col items-center justify-end bg-black p-5 opacity-0 group-hover:opacity-100"
>
	<div class="flex w-full items-center gap-1">
		<p class="text-2xl font-bold text-white">{title}</p>

		{#if title !== 'Coming Soon...'}
			<Icon icon="ci:arrow-up-right-md" class="h-8 w-8 translate-y-0.5 text-white" />
		{/if}
	</div>
</a>
<img src={url} {alt} class="h-full w-full object-cover" />
<slot />
