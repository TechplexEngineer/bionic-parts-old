<script lang="ts">

    import Select from "svelte-select";
    import type {Project} from "../../lib/projects";

    export let project: Project;

    let partStatuses = [
        "Design",
        "Waiting on Materials",
        "Waiting on Mfg.",
        "Mfg. in Progress",
        "Waiting for Assembly",
        "Done"
    ];

    let assemblies = []
    let selectedAssembly;
</script>


<div class="row mb-2">
    <div class="col-3">
        <div>
            <label>Assembly Chooser</label>
            <Select items={assemblies} value={selectedAssembly}></Select>
        </div>
    </div>
    <div class="col-6">
        <h1><small>Project Status:</small> {project.name}</h1>
    </div>
    <div class="col-3">
        <!-- Some Other Action -->
    </div>
</div>


<div class="row">
    {#each partStatuses as status, idx}
        <div class="col px-1">
            <div class="card text-dark bg-light mb-3">
                <div class="card-header">{idx + 1}: {status}</div>
                <div class="card-body">

                </div>
            </div>
        </div>
    {/each}
</div>