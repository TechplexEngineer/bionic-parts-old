<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Project from '$lib/Project.svelte';

	let projects = [
		{
			name: "Rapid React",
			partNumberPrefix: "22",
			onshapeDID: "ef5af647c02e3b8511615776"
		},
		{
			name: "Infinite Recharge v2",
			partNumberPrefix: "21",
			onshapeDID: "1333577c52d5bda83cdec384"
		}
		// {
		// 	name: "N.E.R.D.",
		// 	partNumberPrefix: "NERD"
		// },
		// {
		// 	name: "TShirt Cannon",
		// 	partNumberPrefix: "TSHIRT"
		// },
		// {
		// 	name: "Powder Coating Oven",
		// 	partNumberPrefix: "oven"
		// }
	];
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		Projects
	</h1>

	<div class="row">
		{#each projects as project}
		<div class="col mb-2" style="max-width: 330px">
			<Project {project}/>
		</div>
		{/each}
	</div>


</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}
</style>
