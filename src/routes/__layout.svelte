<script>
	import '../app.css';
</script>

<nav class="w-full bg-gray-200 p-3 rounded-b-full shadow-xl flex flex-row justify-center space-x-4">
	{#each [{ title: 'Home', url: '/' }, { title: 'About', url: '/about' }] as link}
		<a
			class="bg-gray-400 hover:bg-gray-500 p-2 px-7 rounded-md border-black border-b-2 cursor-pointer text-white"
			href={link.url}
		>
			{link.title}
		</a>
	{/each}
</nav>

<div class="container mx-auto p-5">
	<slot />
</div>
