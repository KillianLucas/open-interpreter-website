import { createClient } from '@supabase/supabase-js';
import { json } from '@sveltejs/kit';
import { SUPABASE_URL, SUPABASE_SERVICE_KEY } from '$env/static/private';

export async function POST({ request }) {
	console.log(SUPABASE_URL);
	console.log(SUPABASE_SERVICE_KEY);

	const supabaseAdmin = createClient(SUPABASE_URL as string, SUPABASE_SERVICE_KEY as string);
	// Deno.env.get('SUPABASE_URL') as string,
	// Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') as string
	const { fileNumber } = await request.json();

	console.log(fileNumber);

	const { data, error } = await supabaseAdmin.storage
		.from('video-files')
		.download(fileNumber + '.jpg');
	if (error) {
		console.log(error);

		return json({ error }, { status: 400 });
	}

	console.log(data);

	return json({ data }, { status: 200 });
}
