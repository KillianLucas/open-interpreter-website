<script>
	import Icon from '@iconify/svelte';
</script>

<!-- RIGHT SIDE (DEVELOPERS) -->
<div class="flex h-full min-h-screen w-full flex-col justify-between bg-neutral-900 md:w-1/2">
	<!-- SECTION 1 -->
	<div class="flex w-full flex-col pt-10 md:flex-row">
		<!-- RIGHT -->
		<div class="w-full">
			<h1 class="text-center text-5xl text-white">Developer Preview</h1>
		</div>
	</div>

	<!-- SECTION 2 -->
	<div class="flex w-full flex-1 flex-col md:flex-row">
		<!-- RIGHT -->
		<div class="w-full px-10 pt-10 md:px-8 lg:px-16 xl:px-24">
			<div class="flex w-full flex-col justify-center">
				<p class=" text-white">
					Welcome to the developer preview of the 01 Light. At the heart of it all is the 01OS
					server, a robust platform designed to power and manage your 01 Light's functionalities
					seamlessly.
				</p>

				<ul class="my-4 list-disc space-y-2 px-4 text-white">
					<li>Access to all CAD files and hardware materials required for device assembly</li>
					<li>Comprehensive documentation for 01OS server integration</li>
					<li>Community support and resources for developers</li>
				</ul>
				<p class=" text-white">
					Whether you're looking to create custom applications or explore the hardware's
					capabilities, our developer preview has everything you need to get started.
				</p>
			</div>

			<h2 class="mt-10 text-3xl text-white">Guides</h2>
			<div class="grid w-full grid-cols-2 items-center gap-4">
				<a
					href="https://github.com/KillianLucas/01"
					class="z-5 group relative mt-4 flex h-full w-full cursor-pointer flex-col gap-1 border border-white px-3 py-2 text-white transition hover:bg-white hover:text-black"
				>
					<h3 class="text-lg font-semibold">Hardware</h3>
					<p class="text-sm">Everything you need to build an 01 Light in an afternoon</p>
					<Icon
						icon="ci:arrow-up-right-md"
						class="absolute right-1 top-1 h-6 w-6  text-white group-hover:text-black"
					/>
				</a>
				<a
					href="https://github.com/KillianLucas/01"
					class="z-5 group relative mt-4 flex h-full w-full cursor-pointer flex-col gap-1 border border-white px-3 py-2 text-white transition hover:bg-white hover:text-black"
				>
					<h3 class="text-lg font-semibold">Software</h3>
					<p class="text-sm">Get 01OS up and running on a variety of devices in no time</p>
					<Icon
						icon="ci:arrow-up-right-md"
						class="absolute right-1 top-1 h-6 w-6  text-white group-hover:text-black"
					/>
				</a>
			</div>
		</div>
	</div>

	<!-- SECTION 3 -->
	<div class="mb-8 flex w-full flex-col md:flex-row">
		<!-- RIGHT -->
		<div class="w-full">
			<div class="flex w-full flex-col items-center justify-center px-5">
				<div class="w-fit">
					<p class=" invisible text-white">a</p>
					<div class=" flex items-center justify-center gap-4">
						<a
							class="z-5 mt-4 flex h-min cursor-pointer items-center gap-2 border border-white px-6 py-2 text-xl text-white transition hover:bg-white hover:text-black"
							href="https://discord.gg/Hvz9Axh84z"
							target="_blank"
							rel="noopener noreferrer"
						>
							<!-- <Icon icon="ic:round-discord" class="h-5 w-5" />  -->
							Join Discord
						</a>
						<a
							class="z-5 mt-4 flex h-min cursor-pointer items-center gap-2 border border-white px-6 py-2 text-xl text-white transition hover:bg-white hover:text-black"
							href="https://github.com/KillianLucas/01"
							target="_blank"
							rel="noopener noreferrer"
						>
							<!-- <Icon icon="fa:github" class="h-5 w-5" />  -->
							Github
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
