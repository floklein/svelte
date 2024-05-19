<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<header>
	<nav></nav>
	<h1>Movies</h1>
</header>
<main>
	<section>
		<input type="search" placeholder="Search..." on:input={async (event) => {
			data.movies = await (await fetch('/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ query: event.target.value })
			})).json();
		}} />
	</section>
	<hr />
	<section>
		{#each data.movies as movie}
			<aside>
				<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
				<h2>{movie.title}</h2>
				<p>{movie.overview}</p>
			</aside>
		{/each}
	</section>
</main>
