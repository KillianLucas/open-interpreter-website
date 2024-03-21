<script>
	import {
		assignedFrame,
		totalFrames,
		availableFrames,
		updateAssignedFrameFromIndex,
		displayedFrame
	} from '../stores/frames';
	import { Popover } from 'flowbite-svelte';

	let frameToGoTo = $availableFrames.indexOf($assignedFrame) + 1;

	let lastDisplayedFrame = 10000;

	$: {
		if (lastDisplayedFrame !== $displayedFrame) {
			frameToGoTo = $displayedFrame;
			lastDisplayedFrame = $displayedFrame;
		}
	}
</script>

<div
	class=" fixed bottom-0 left-0 right-0 flex items-center justify-center pb-2 transition duration-500 {$availableFrames.length >
	1
		? 'opacity-100'
		: 'opacity-0'}"
>
	<Popover
		class="w-fit px-4 py-2 text-sm font-light"
		triggeredBy=".popover-trigger"
		trigger="click"
	>
		<p class="mb-4 text-lg">Go to Frame:</p>
		<div class="flex gap-2">
			<input
				min={1}
				max={$availableFrames.length}
				bind:value={frameToGoTo}
				on:change={(e) => {
					// const newValue = parseInt(e.target.value);
					// if (!$availableFrames.includes(newValue)) {
					// 	const closest = $availableFrames.reduce((prev, curr) => {
					// 		return Math.abs(curr - newValue) < Math.abs(prev - newValue) ? curr : prev;
					// 	});
					// 	frameToGoTo = closest;
					// } else {
					// 	frameToGoTo = newValue;
					// }
				}}
				type="number"
				class="h-8 w-28 rounded-md border border-black px-2"
			/>
			<button
				id="click"
				on:click={() => {
					updateAssignedFrameFromIndex(frameToGoTo);
				}}
				class="popover-trigger rounded-md bg-black px-4 text-white">Go</button
			>
		</div>
	</Popover>

	<button
		class="popover-trigger flex w-fit items-center gap-2 border border-black bg-white px-4 py-1 transition"
	>
		<p class="select-none">{frameToGoTo} / {$availableFrames.length}</p>
	</button>
</div>
