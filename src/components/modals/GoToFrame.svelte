<script lang="ts">
	import { fade } from 'svelte/transition';
	import Icon from '@iconify/svelte';
	import { closeModal } from './svelte-modals/modalsStore';

	export let isOpen = true;
</script>

{#if isOpen}
	<div
		role="dialog"
		class="transition-fade pointer-events-none fixed inset-0 z-[500] flex items-center justify-center"
		transition:fade|global
		
	>
		<div
			class="pointer-events-auto relative flex h-[20vh] w-[30vw] min-w-[240px] flex-col justify-between overflow-auto rounded-[6px] px-12 py-6 bg-black"
		>
			<button
				class="absolute right-2 top-2 cursor-default rounded-full p-2 transition hover:bg-neutral-700 group"
				on:click|preventDefault={() => closeModal()}
			>
				<Icon
					icon="fa-solid:times"
					class="h-6 w-6 text-neutral-500 transition group-hover:text-white"
				/>
			</button>

			<h1 class="mb-4 text-3xl font-bold text-white">Upload Frame</h1>

			<section class="mb-8">

              <div class="flex w-full items-center justify-center">  <button on:click={closeModal} class="h-min z-50 border cursor-pointer border-white px-3 py-2 transition text-white hover:bg-white hover:text-black">Upload Frame</button></div>
			</section>
		</div>
	</div>
{/if}
