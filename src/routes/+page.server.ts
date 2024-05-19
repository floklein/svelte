import { TMDB_API } from '$env/static/private';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const { results: movies } = await (
		await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API}`)
	).json();
	return {
		movies
	};
};
