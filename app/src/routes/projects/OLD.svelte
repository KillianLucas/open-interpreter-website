<script>
	import { goto, pushState } from '$app/navigation';
	import BentoGrid from '../../components/bento/BentoGrid.svelte';
	// import SvelteSeo from 'svelte-seo';
</script>

<!-- 
<SvelteSeo
	title="01OS"
	description="An Open Source Operating System with a LLM in the driver seat. A foundation for the next generation of AI devices."
	canonical="https://openinterpreter.com/01"
	keywords="01OS, operating system, code interpreter, open source, programming, development"
	openGraph={{
		title: '01OS',
		description:
			'An Open Source Operating System with a LLM in the driver seat. A foundation for the next generation of AI devices.',
		url: 'https://openinterpreter.com/01',
		type: 'website',
		images: [
			{
				url: 'https://openinterpreter.com/assets/thumbnail.png',
				width: 1200,
				height: 627,
				alt: 'Open Interpreter Thumbnail'
			}
		],
		site_name: 'Open Interpreter'
	}}
	twitter={{
		card: 'summary_large_image',
		title: '01OS',
		description:
			'An Open Source Operating System with a LLM in the driver seat. A foundation for the next generation of AI devices.',
		image: 'https://openinterpreter.com/assets/thumbnail.png'
	}}
/> -->
<div class="relative h-screen cursor-default bg-black selection:bg-black selection:text-white">
	<BentoGrid />
</div>
