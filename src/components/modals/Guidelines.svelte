<script>
	import Icon from '@iconify/svelte';
	import { availableFrames } from '../../stores/frames';
	export let upload = false;
</script>

<div class="flex flex-col gap-3">
	<p class="text-white">
		We are assembling the community in the final week of the project to create a colorful,
		explosive, and uplifting animation that honors the past and future of intelligent devices.
	</p>

	{#if !upload}
		<p class="text-white">
			We have a reference image for each frame of the <span class="font-bold opacity-75">
				({$availableFrames.length} remaining)</span
			>
			which contains the basic layout of objects, text, and people that will appear. past and future
			of intelligent devices.
		</p>

		<p class="text-white">We need your help to redraw these reference images by hand.</p>

		<p class="text-white">
			Please draw only over the people, text, and devices in the frame. Ignore all other shapes.
			Please also do not draw the logos of the devices in the reference frame (e.g. "Sony").
		</p>

		<p class="text-white">
			Feel free to add your own text, motion lines, and flair. We recommend holding a piece of paper
			over your computer screen and using mixed media (pencil, paint, glitter, stickers— anything)
			to redraw the image.
		</p>

		<p class="text-white">
			You can then photograph / scan the frame and upload it here. Try to align it as precisely as
			possible to the originally downloaded image.
		</p>

		<p class="text-white">To recap:</p>
	{/if}
	<ol class="list-inside list-decimal space-y-2 pl-5 text-white">
		<li>
			Download the reference frame Physically (not digitally) hand-draw the people, text, and
			devices in the frame, excluding all other objects and logos
		</li>
		<li>Upload the fully hand-drawn frame here (none of the reference image should be included)</li>
	</ol>

	<p class="mt-2 text-white">Please send questions to killian@openinterpreter.com.</p>
</div>
