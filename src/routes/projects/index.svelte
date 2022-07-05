<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Project from '$lib/Project.svelte';

	// populated with data from the get endpoint
	export let projects;
</script>

<svelte:head>
	<title>Projects</title>
	<meta name="description" content="Robotics Team Projects" />
</svelte:head>

<section>
	<h1>Projects</h1>

	<div class="row">
		{#each projects as project}
			<div class="col mb-2" style="max-width: 330px">
				<Project {project} />
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
