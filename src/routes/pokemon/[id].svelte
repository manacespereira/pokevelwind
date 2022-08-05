<script lang="ts">
	import { page } from '$app/stores';

	import { fetchPoke } from '../../stores/pokemonStore';
	const id = Number($page.params.id);

	export const prerender = true;
	let promise = fetchPoke(id);
</script>

<h1>Detalhes Poke from {id}</h1>
