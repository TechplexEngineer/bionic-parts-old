<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Project from '$lib/Project.svelte';

	let projects = [
		{
			name: "Rapid React",
			partNumberPrefix: "22"
		},
		{
			name: "N.E.R.D.",
			partNumberPrefix: "NERD"
		},
		{
			name: "TShirt Cannon",
			partNumberPrefix: "TSHIRT"
		},
		{
			name: "Powder Coating Oven",
			partNumberPrefix: "oven"
		}
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

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
