import { TMDB_API } from '$env/static/private';
import { json, type RequestEvent } from '@sveltejs/kit';

export async function POST({ request }: RequestEvent) {
	const { query } = await request.json();
	const { results: movies } = await (
		await fetch(
			query.length
				? `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${TMDB_API}`
				: `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API}`
		)
	).json();
	return json(movies);
}
