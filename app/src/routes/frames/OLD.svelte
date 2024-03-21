<script>
	import SvelteSeo from 'svelte-seo';

	import { onMount } from 'svelte';
	import {
		assignedFrame,
		availableFrames,
		displayedFrame,
		getAvailableFrames
	} from '../../stores/frames';
	import { setImg, imgUrl } from '../../stores/img';
	import Icon from '@iconify/svelte';
	// import { imgUrl, setImg } from '../../stores/img';

	let frameDoesNotExist = false;

	onMount(async () => {
		// let number = $page.url.searchParams.get('frame')
		// console.log(number);
		// if(number){
		// 	console.log("FRAME NUMBER SET");
		// 	imgUrl.set("https://neyguovvcjxfzhqpkicj.supabase.co/storage/v1/object/public/video-files/pre/" + number + ".jpg")
		// }
		await getAvailableFrames();
		console.log('available frames: ', $availableFrames);

		if ($assignedFrame) {
			displayedFrame.set($availableFrames.indexOf($assignedFrame) + 1);
			console.log(
				'(has assigned frame) setting frame to ' + ($availableFrames.indexOf($assignedFrame) + 1)
			);
		} else {
			const randomFrame = $availableFrames[Math.floor(Math.random() * $availableFrames.length)];
			console.log('assigned to: ' + randomFrame);

			assignedFrame.set(randomFrame);
			displayedFrame.set($availableFrames.indexOf(randomFrame) + 1);
			// setImg($availableFrames.indexOf(randomFrame) + 1);
			console.log('initial setting frame to' + $displayedFrame);

			// $page.url.searchParams.set('frame', randomFrame.toString());
			// goto('?' + $page.url.searchParams.toString(), { replaceState: true });
		}
	});

	let lastDisplayedFrame = 10000;

	$: {
		console.log($imgUrl);
		if ($displayedFrame !== lastDisplayedFrame && $displayedFrame !== 0) {
			setImg($displayedFrame);
			lastDisplayedFrame = $displayedFrame;
		}
	}
</script>

<SvelteSeo
	title="01 Video Project"
	description="Crowd-sourced video frames for the 01 launch video"
	canonical="https://openinterpreter.com"
	keywords="code interpreter, open source, programming, development"
	openGraph={{
		title: '01 Video Project',
		description: 'Crowd-sourced video frames for the 01 launch video',
		url: 'https://openinterpreter.com/frames',
		type: 'website',
		images: [
			{
				url: '/assets/thumbnail.png',
				width: 1200,
				height: 627,
				alt: 'Open Interpreter Thumbnail'
			}
		],
		site_name: 'Open Interpreter'
	}}
	twitter={{
		card: 'summary_large_image',
		title: '01 Video Project',
		description: 'Crowd-sourced video frames for the 01 launch video',
		image: 'https://openinterpreter.com/assets/thumbnail.png'
	}}
/>
<div class="relative h-screen cursor-default bg-white selection:bg-black selection:text-white">
	<section class="z-10 h-full">
		<div id="hero" class="flex h-full flex-col items-center justify-center pt-24">
			{#if frameDoesNotExist}
				<p class="text-lg font-bold text-black">Frame does not exist</p>
			{/if}

			{#if $displayedFrame === 0}
				<div class="fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center">
					<Icon icon="mingcute:loading-fill" class="h-12 w-12 animate-spin text-black" />
				</div>
			{:else}
				<img
					src={$imgUrl}
					alt="Frame"
					on:error={() => (frameDoesNotExist = true)}
					on:load={() => (frameDoesNotExist = false)}
					class={frameDoesNotExist ? 'hidden' : ''}
				/>
			{/if}
		</div>
	</section>
</div>
