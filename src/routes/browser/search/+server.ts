// src/routes/v0/browser/search/+server.js

import { json } from '@sveltejs/kit';
import { PERPLEXITY_API_KEY } from '$env/static/private';
import { RateLimiter } from 'sveltekit-rate-limiter/server';
export const config = {
	runtime: 'edge'
};
// Initialize the rate limiter with desired limits
const limiter = new RateLimiter({
	IP: [300, 'h'], // Limit: 10 requests per IP per hour
	IPUA: [10000, 'm'] // Limit: 5 requests per IP+UserAgent per minute
});

export async function GET(event) {
	// Check if the request is limited
	if (await limiter.isLimited(event)) {
		// Respond with 429 Too Many Requests if the rate limit is exceeded
		return json({ error: 'Rate limit exceeded' }, { status: 429 });
	}

	const query = event.url.searchParams.get('q');
	if (!query) {
		return json({ error: 'Query parameter is required' }, { status: 400 });
	}

	const apiUrl = 'https://api.perplexity.ai/chat/completions';
	const payload = {
		model: 'pplx-70b-online',
		messages: [{ role: 'user', content: query }],
		max_tokens: 1000
	};
	const headers = {
		accept: 'application/json',
		'content-type': 'application/json',
		authorization: `Bearer ${PERPLEXITY_API_KEY}`
	};

	try {
		const response = await fetch(apiUrl, {
			method: 'POST',
			headers: headers,
			body: JSON.stringify(payload)
		});

		if (!response.ok) {
			throw new Error(`Failed to fetch data: ${response.statusText}`);
		}

		const data = await response.json();
		return json({ result: data.choices[0].message.content }, { status: 200 });
	} catch (error) {
		return json({ error: error.message }, { status: 500 });
	}
}
