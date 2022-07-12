<script lang="ts">
    import type {Project as ProjectData} from '$lib/projects.ts';

    import Project from "../lib/Project.svelte";

    export let projects: ProjectData[] = [];
    console.log(projects);
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Svelte demo app"/>
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
