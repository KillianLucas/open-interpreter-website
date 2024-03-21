<script>
	import { fade } from 'svelte/transition';
	let loaded = false; // Tracks if the image has loaded
</script>

<!-- LEFT SIDE (CONSUMER) -->
<div class="relative flex h-full min-h-screen w-full flex-col justify-between md:w-1/2">
	<!-- SECTION 1 -->
	<div class="flex w-full flex-col pt-10 md:flex-row">
		<!-- LEFT -->
		<div class="w-full">
			<h1 class="text-center text-5xl text-white">01 Light</h1>
		</div>
	</div>

	<div class="absolute bottom-0 left-0 right-0 top-0 -z-10 h-full w-[101%] bg-black">
		<img
			on:load={() => {
				loaded = true;
			}}
			class="h-full w-full object-cover {loaded ? 'fade-fast' : 'opacity-100'}"
			src="/01-light-in-hand.jpg"
			alt="01 light"
		/>
	</div>

	<!-- SECTION 2 -->
	<!-- <div class="flex h-[26rem] w-full flex-col md:h-[32rem] md:flex-row"> -->
	<!-- LEFT -->
	<!-- <div class="w-full">
			<div class=" w-full">
				
				<img
					on:load={() => {
						loaded = true;
					}}
					class="h-auto w-full -translate-y-20 {loaded ? 'fade-fast' : 'opacity-100'}"
					src="/hand.png"
					alt="01 light"
				/>
			</div>
		</div> -->
	<!-- </div> -->
	<!-- </div> -->
	<!-- SECTION 3 -->
	<div class="z-50 mb-8 flex w-full flex-col text-white md:flex-row">
		<!-- LEFT -->
		<div class="w-full">
			<p class="text-center">Limited stock of 100 units, order now</p>
			<div class="flex w-full justify-center px-5">
				<a
					class="z-5 mt-4 h-min cursor-pointer rounded-full border border-white px-6 py-2 text-xl text-white transition hover:bg-white hover:text-black"
					href="https://0ggfznkwh4j.typeform.com/to/UvODRiEO"
					target="_blank"
					rel="noopener noreferrer">Pre-Order</a
				>
			</div>
		</div>
	</div>
</div>
