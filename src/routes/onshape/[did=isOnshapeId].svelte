<svelte:head>
    <title>Projects</title>
    <meta name="description" content="Onshape"/>
</svelte:head>

<script lang="ts">
    import Project from '$lib/Project.svelte';
    import {Modal} from "sveltestrap";
    import {enhance} from '$lib/form';
    import type {GetDocumentResponse} from "$lib/onshape/GetDocumentResponse";
    import type {GetElementsInDocumentResponse} from '$lib/onshape/GetElementsInDocument';

    // populated with data from the get endpoint

    export let doc: GetDocumentResponse;
    export let elements: GetElementsInDocumentResponse;


    let elementsByType = elements.reduce((prev, cur) => {

        let type = cur.type;
        if (cur.type.toLowerCase() == "application" && cur.dataType == "onshape-app/drawing") {
            type = "Drawing";
        }

        if (!(type in prev)) {
            prev[type] = [];
        }

        prev[type].push(cur)
        return prev
    }, {});

    const defaultHidden = ["Bill Of Materials", "Part Studio", "Application"];

    const filters: { [key: string]: boolean } = Object.keys(elementsByType).reduce((prev, type) => {
        prev[type] = false;
        // return {[type]: false}
        return prev
    }, {});
    console.log(filters);
    for (let filterType in filters) {
        filters[filterType] = !defaultHidden.includes(filterType);
    }

    let newProjectModalOpen = false;
    const newProjectModalToggle = () => (newProjectModalOpen = !newProjectModalOpen);

    let textareaValue = "";
</script>


<section>
    <div class="row">
        <div class="col-2">
            <!-- Some Other Action -->
        </div>
        <div class="col-8">
            <h1>Onshape</h1>
        </div>
        <div class="col-2">
            <div class="btn btn-success" on:click={newProjectModalToggle}>New Project</div>
        </div>
    </div>


    <h2>Doc: {doc.name}</h2>
    <ul>
        <li>did: {doc.id}</li>
        <li>wid: {doc.defaultWorkspace.id}</li>
    </ul>

    <div>
        <h3>Filters</h3>
        <div class="row">
            {#each Object.keys(elementsByType) as type, idx}
                <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="check-{idx}" bind:checked={filters[type]}>
                        <label class="form-check-label" for="check-{idx}">
                            {type}
                        </label>
                    </div>
                </div>
            {/each}
        </div>
    </div>

    <div class="row">

        <div class="col">

            {#each [...new Map(Object.entries(elementsByType))] as [key, elements]}
                {#if filters[key]}
                    <h3>{key}</h3>
                    <ul>
                        {#each elements as element}
                            <li class="mt-2">
                                <button class="btn btn-sm btn-secondary" on:click={()=>{
                                textareaValue = JSON.stringify(element, null, 4)
                            }}
                                >Inspect
                                </button>
                                {#if key == "Assembly"}
                                    <a href="/onshape/bom?did={doc.id}&wid={doc.defaultWorkspace.id}&eid={element.id}"
                                       class="btn btn-primary btn-sm">Bom</a>
                                {:else if key == "Drawing"}
                                    <a href="/onshape/drawing?did={doc.id}&wid={doc.defaultWorkspace.id}&eid={element.id}"
                                       class="btn btn-primary btn-sm">View</a>
                                    <a href="/onshape/drawing/download?did={doc.id}&wid={doc.defaultWorkspace.id}&eid={element.id}"
                                       class="btn btn-warning btn-sm">Download</a>
                                {/if}
                                {element.name}
                            </li>
                        {/each}
                    </ul>
                {/if}
            {/each}
        </div>
        <div class="col" style="min-height: 60vh;">
            <textarea class="form-control w-100 h-100" disabled bind:value={textareaValue}></textarea>
        </div>
    </div>

    <Modal body header="Create new Project" isOpen={newProjectModalOpen} toggle={newProjectModalToggle}>
        <form
                class="new"
                action="/projects"
                method="post"
                enctype="multipart/form-data"
                use:enhance={{
                result: async ({ form }) => {
                    console.log("result", form);
                    form.reset();
                    newProjectModalToggle();
                }
            }}
        >
            <div class="mb-3">
                <label for="projectName" class="form-label">Name *</label>
                <input type="text" class="form-control" id="projectName" name="projectName" required>
            </div>

            <div class="mb-3">
                <label for="partPrefix" class="form-label">Part Number Prefix *</label>
                <input type="text" class="form-control" id="partPrefix" name="partPrefix" required>
            </div>

            <div class="mb-3">
                <label for="projectPhoto" class="form-label">Cover Image</label>
                <input class="form-control" type="file" name="projectPhoto" id="projectPhoto">
            </div>

            <div class="col-auto">
                <button type="submit" class="btn btn-success mb-3 float-end">Create</button>
            </div>

        </form>
    </Modal>
</section>

<style>

</style>
