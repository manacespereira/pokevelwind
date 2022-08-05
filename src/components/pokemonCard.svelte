<script lang="ts">
	import type { Pokemon } from 'src/stores/pokemonStore';

	export let poke: Pokemon;
</script>

<a
	class="p-6 bg-gray-200 shadow-lg text-center rounded-lg border-b-4 border-gray-400"
	href={`/pokemon/${poke.id}`}
>
	{poke.name}
</a>
