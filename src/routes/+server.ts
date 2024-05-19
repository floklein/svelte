import { TMDB_API } from '$env/static/private';
import { json, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	const { query } = await request.json();
	const { results: movies } = await (
		await fetch(
			query.length
				? `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${TMDB_API}`
				: `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API}`
		)
	).json();
	return json(movies);
};
