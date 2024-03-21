<script>
	import { clickOutside } from '$lib/clickoutside';

	let isDocsOpen = false;

	function toggleDocs() {
		if (isDocsOpen) {
			isDocsOpen = false;
		}
		// isDocsOpen = !isDocsOpen;
	}
</script>

<nav
	class="fixed top-0 z-10 flex w-full items-center justify-between px-6 py-6 text-white sm:px-12"
>
	<div class="flex items-center space-x-4">
		<div class="h-8 w-8 rounded-full bg-white saturate-200"></div>
	</div>
	<div class="hidden text-xl md:block">Open Interpreter</div>
	<div class="flex flex-col text-lg md:flex-row md:space-x-12">
		<a href="https://discord.gg/Hvz9Axh84z" class="hover:underline">Discord</a>
		<div use:clickOutside on:click_outside={toggleDocs} class="relative">
			<button
				on:click={() => {
					isDocsOpen = !isDocsOpen;
				}}
				class="hover:underline">Docs</button
			>
			{#if isDocsOpen}
				<div
					class="absolute -left-40 -top-3 flex flex-col items-end gap-2 text-white md:left-0 md:top-8 md:mt-2 md:items-start"
				>
					<a href="https://01.openinterpreter.com/" class="hover:underline">01 Project</a>
					<a
						href="https://docs.openinterpreter.com/getting-started/introduction"
						class="whitespace-nowrap hover:underline">Open Interpreter</a
					>
				</div>
			{/if}
		</div>
		<a href="https://twitter.com/hellokillian" class="hover:underline">Contact</a><a
			href="https://0ggfznkwh4j.typeform.com/to/W5At4fmF"
			class="rounded border px-2 hover:underline">Careers</a
		>
	</div>
</nav>
