<script lang="ts">
	import { fetchPokemon, pokemon } from '../stores/pokemonStore';
	let promise = fetchPokemon();
</script>

{#await promise}
	<strong>Loading</strong>
{:then _}
	{#if $pokemon.length}
		{#each $pokemon as singlePokemon}
			<p>
				{singlePokemon.name} | <a href={singlePokemon.url} target="_blank">{singlePokemon.url}</a>
			</p>
		{/each}
	{:else}
		<p>No Pokémon found!</p>
	{/if}
{:catch err}
	<strong style="color: red">{err}</strong>
{/await}
