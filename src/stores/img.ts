import { writable } from 'svelte/store';
import { derived } from 'svelte/store';

export const imgUrl = writable('');

export const fileNumber = derived(imgUrl, ($imgUrl) => {
	const matches = $imgUrl.match(/\/(\d+)\.jpg$/);
	return matches ? matches[1] : null;
});

export const setImg = (frame) => {
	imgUrl.set(
		'https://neyguovvcjxfzhqpkicj.supabase.co/storage/v1/object/public/video-files/initial/' +
			frame +
			'.jpg'
	);
	console.log(
		'imgUrl',
		'https://neyguovvcjxfzhqpkicj.supabase.co/storage/v1/object/public/video-files/initial/' +
			frame +
			'.jpg'
	);
};
