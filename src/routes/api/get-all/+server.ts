import { createClient } from '@supabase/supabase-js';
import { json } from '@sveltejs/kit';
import { SUPABASE_URL, SUPABASE_SERVICE_KEY } from '$env/static/private';

export async function GET({ url }) {
	const bucket = url.searchParams.get('bucket') || 'pre'; // Check for 'bucket' URL parameter, default to 'pre'
	const supabaseAdmin = createClient(SUPABASE_URL as string, SUPABASE_SERVICE_KEY as string);

	const { data, error } = await supabaseAdmin.storage.from('video-files').list(bucket, {
		limit: 1000,
		offset: 0,
		sortBy: { column: 'name', order: 'asc' }
	});

	if (error) {
		console.log(error);

		return json({ error }, { status: 400 });
	}

	return json({ data: data.map((item) => parseInt(item.name.split('.')[0])) }, { status: 200 });
}
