<script>
	import { openModal } from '../../components/modals/svelte-modals/modalsStore';
	import UploadModal from '../../components/modals/UploadModal.svelte';
	import DownloadModal from '../../components/modals/DownloadModal.svelte';
	import ImgPicker from '../../components/imgPicker.svelte';
	import { displayPicker } from '../../stores/frames';
</script>

<svelte:head>
	<!-- <title>The 01 Video Project</title>

	<meta property="og:title" content="The Open Interpreter Project" />
	<meta property="og:image" content="https://openinterpreter.com/assets/thumbnail.png" />
	<meta
		property="og:description"
		content="Open Interpreter is a free, open-source code interpreter."
	/>
	<meta property="og:url" content="https://openinterpreter.com" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="627" />
	<meta property="og:type" content="website" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="The Open Interpreter Project" />
	<meta
		name="twitter:description"
		content="Open Interpreter is a free, open-source code interpreter."
	/>
	<meta name="twitter:image" content="https://openinterpreter.com/assets/thumbnail.png" /> -->
</svelte:head>
<nav class="fixed top-0 z-50 flex h-20 w-full items-center justify-between bg-black/90 px-5">
	<div class="flex items-center space-x-4">
		<!-- <div class="h-5 w-5 rounded-full bg-white saturate-200"></div> -->
		<!-- <div class="hidden text-xl text-white md:block">Open Interpreter</div> -->

		<p class="text-white">
			The
			<a class="underline" href="https://github.com/KillianLucas/01" target="__blank">
				01 Project
			</a> is launching soon. We need your help to create the launch animation. Download a frame to get
			started ➜
		</p>
	</div>
	<div class="z-10 flex items-center space-x-4">
		<button
			on:click={() => {
				openModal(DownloadModal, null, { replace: true });
			}}
			class="z-50 h-min cursor-pointer border border-white px-3 py-2 text-white transition hover:bg-white hover:text-black"
			>Download Frame</button
		>
		<button
			on:click={() => {
				openModal(UploadModal, null, { replace: true });
			}}
			class="z-50 h-min cursor-pointer border border-white px-3 py-2 text-white transition hover:bg-white hover:text-black"
			>Upload Frame</button
		>
	</div>
</nav>
<slot />

{#if $displayPicker}
	<ImgPicker />
{:else}
	<div class="fixed bottom-0 left-0 right-0 flex items-center justify-center pb-2">
		<div class="z-50 h-min border border-black bg-white px-3 py-2 text-black opacity-75 transition">
			<p class="text-italic text-center text-xs">
				Please upload your downloaded frame before working on a new frame
			</p>
		</div>
	</div>
{/if}
