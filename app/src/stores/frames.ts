import { get, writable } from 'svelte/store';
import { persisted } from 'svelte-persisted-store';
import { setImg } from './img';

export const totalFrames = writable(134);
export const availableFrames = writable([]);
export const displayedFrame = writable(0);
export const assignedFrame = persisted('assignedFrame', null);
export const displayPicker = persisted('displayPicker', true);
export function updateAssignedFrameFromIndex(index) {
	const actualIndex = get(availableFrames)[index - 1];
	console.log('assigned: ', actualIndex);
	console.log('displayed: ', index);

	// Subtract 1 because array indices are 0-based but user input is 1-based
	assignedFrame.set(actualIndex);
	setImg(actualIndex);
}
export const getAvailableFrames = async () => {
	const response = await fetch('/api/get-all', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	});

	let { data: uploadedFrames } = await response.json();
	// console.log('uploaded frames in func: ', uploadedFrames);

	if (uploadedFrames.length > 0) {
		console.log(uploadedFrames);

		let freeFrames = Array.from({ length: get(totalFrames) }, (_, i) => i + 1).filter(
			(frame) => !uploadedFrames.includes(frame)
		);
		// console.log(freeFrames);
		// console.log(freeFrames.length);

		if (freeFrames.length === 0) {
			console.log('No available frames, using extra bucket...');

			// If there are no available frames, check the extra bucket
			const response = await fetch('/api/get-all?bucket=extra', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const extraData = await response.json();
			uploadedFrames = extraData.data;
			// Assuming the extra bucket could also have frames that are not in the original set
			// Recalculate freeFrames based on extra bucket data if necessary
			freeFrames = Array.from({ length: get(totalFrames) }, (_, i) => i + 1).filter(
				(frame) => !uploadedFrames.includes(frame)
			);
		}
		// console.log(freeFrames);

		availableFrames.set(freeFrames);
	}
};
