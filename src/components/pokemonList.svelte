<script lang="ts">
	import { fetchPokemon, pokemon } from '../stores/pokemonStore';
	import PokemonCard from './pokemonCard.svelte';
	let promise = fetchPokemon({ limit: 10000 });
</script>

{#await promise}
	<strong>Loading</strong>
{:then _}
	{#if $pokemon.length}
		<div class="p-3 grid grid-cols-8 gap-8">
			{#each $pokemon as poke}
				<PokemonCard {poke} />
			{/each}
		</div>
	{:else}
		<p>No Pokémon found!</p>
	{/if}
{:catch err}
	<strong style="color: red">{err}</strong>
{/await}
