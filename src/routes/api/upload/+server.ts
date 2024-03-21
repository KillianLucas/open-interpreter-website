import { createClient } from '@supabase/supabase-js';
import { json } from '@sveltejs/kit';
import { SUPABASE_URL, SUPABASE_SERVICE_KEY } from '$env/static/private';
import { decode } from 'base64-arraybuffer';

export async function POST({ request }) {
	const supabaseAdmin = createClient(SUPABASE_URL as string, SUPABASE_SERVICE_KEY as string);
	const data = await request.json();
	let base64FileData = data.base64FileData;
	const fileNumber = data.fileNumber;
	let uploadAttempt = 0;
	let uploadSuccess = false;

	// Strip the data URL scheme if present
	const base64Pattern = /^data:image\/[a-z]+;base64,/;
	if (base64Pattern.test(base64FileData)) {
		base64FileData = base64FileData.split(',')[1];
	}
	while (!uploadSuccess) {
		const fileName = `pre/${fileNumber}${uploadAttempt > 0 ? `-${uploadAttempt}` : ''}.jpg`;
		const { data, error } = await supabaseAdmin.storage
			.from('video-files')
			.upload(fileName, decode(base64FileData), {
				contentType: 'image/jpg'
			});

		if (error) {
			if (error.message === 'The resource already exists') {
				console.log(`File ${fileName} exists. Retrying with a new filename...`);
				uploadAttempt++;
			} else {
				console.log(error);
				return json({ status: 'error', message: error.message }, { status: 500 });
			}
		} else {
			console.log(`Upload successful: ${data.path}`);
			uploadSuccess = true;
			return json({ status: 'success', fileName: fileName }, { status: 200 });
		}
	}
}
