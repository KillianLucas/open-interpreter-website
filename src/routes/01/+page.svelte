<script>
	import Nav from '../../components/01light/Nav.svelte';
</script>

<svelte:head>
	<title>The Open Interpreter Project</title>

	<meta property="og:title" content="The Open Interpreter Project" />
	<meta property="og:image" content="https://openinterpreter.com/assets/thumbnail.jpg" />
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
	<meta name="twitter:image" content="https://openinterpreter.com/assets/thumbnail.jpg" />
</svelte:head>

<div class="relative h-screen cursor-default selection:bg-black selection:text-black">
	<!-- <video
		class="pointer-events-none absolute left-1/2 top-1/2 -z-10 max-h-full min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 transform object-cover opacity-[25%] invert"
		autoplay
		loop
		muted
		playsinline
		poster="https://openinterpreter.com/assets/computer_api.png"
	>
		<source src="https://openinterpreter.com/assets/ncu_short.mp4" type="video/mp4" />
		Your browser does not support the video tag.
	</video> -->
	<div class="absolute left-0 top-0 -z-30 h-full w-full bg-black"></div>
	<div class="absolute left-0 top-0 -z-20 h-full w-full opacity-100">
		<img src="TEST2.jpg" alt="" class="h-full w-full object-cover" />
	</div>
	<Nav />
	<section class="z-50 h-screen pb-24 sm:pb-0">
		<div
			class="absolute left-0 top-0 -z-20 h-full w-full bg-gradient-to-t from-black/40 via-transparent to-transparent"
		></div>
		<div id="hero" class="flex h-full flex-col justify-end p-6 text-white sm:p-12">
			<div class="mb-4 text-5xl font-light sm:w-auto sm:text-7xl md:max-w-4xl">Introducing 01</div>
			<span class="mb-6 text-xl font-light"
				>The <span class="font-medium">01 Light</span> is a voice interface for your home computer.</span
			>

			<div class="flex flex-wrap justify-between text-lg">
				<!-- Container for the two left buttons -->
				<div class="mb-4 mr-4 flex items-center space-x-6 md:mb-0">
					<a
						href="https://github.com/KillianLucas/open-interpreter/"
						class="h-min rounded-full border border-white px-3 py-1 text-white hover:bg-white hover:text-black"
						>Pre-order the <span class="">Light</span></a
					>
					<a
						href="https://github.com/OpenInterpreter/01"
						class="flex h-min items-center space-x-1 border-b border-white text-white hover:border-transparent"
					>
						<span>Build your own</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1"
							stroke="currentColor"
							class="h-5 w-5"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
							></path>
						</svg>
					</a>
				</div>

				<!-- Right button -->
				<a
					href="/01-light"
					class="align-center flex h-min items-center justify-center gap-1.5 rounded border border-white px-2 py-1 align-middle text-white hover:bg-white hover:text-black"
					>Watch the video
					<svg
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
						class="h-3 w-3"
						viewBox="0 0 24 24"><path d="M2 24v-24l20 12-20 12z" /></svg
					>
				</a>
			</div>
		</div>
	</section>
</div>
