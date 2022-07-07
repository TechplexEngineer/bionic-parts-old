<svelte:head>
    <title>Projects</title>
    <meta name="description" content="Onshape"/>
</svelte:head>

<script lang="ts">
    import Project from '$lib/Project.svelte';
    import {Modal} from "sveltestrap";
    import {enhance} from '$lib/form';
    import type {GetDocumentResponse} from "$lib/onshape/GetDocumentResponse";
    import type { GetElementsInDocumentResponse } from '$lib/onshape/GetElementsInDocument';

    // populated with data from the get endpoint

    export let doc:GetDocumentResponse;
    export let elements: GetElementsInDocumentResponse;

    let elementsByType = elements.reduce((prev, cur)=>{

        let type = cur.type;
        if (cur.type.toLowerCase() == "application" && cur.dataType == "onshape-app/drawing") {
            type = "Drawing";
        }

        if (! (type in prev)) {
            prev[type] = [];
        }

        prev[type].push(cur)
        return prev
    }, {})

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




    <div class="row">
<!--        <div class="col">-->
<!--            <ul>-->
<!--                {#each elements as element}-->
<!--                    <li class="mt-2">-->
<!--                        {element.name} &#45;&#45; {element.type} &#45;&#45;-->
<!--                        <button class="btn btn-sm btn-secondary" on:click={()=>{-->
<!--                            textareaValue = JSON.stringify(element, null, 4)-->
<!--                        }}>Inspect</button>-->
<!--                    </li>-->
<!--                {/each}-->
<!--            </ul>-->
<!--        </div>-->
        <div class="col">

            {#each [...new Map(Object.entries(elementsByType))] as [key, elements]}
                <h3>{key}</h3>
                <ul>
                    {#each elements as element}
                    <li class="mt-2">
                        <button class="btn btn-sm btn-secondary" on:click={()=>{
                            textareaValue = JSON.stringify(element, null, 4)
                        }}>Inspect</button>
                        <a href="/onshape/bom?did={doc.id}&wid={doc.defaultWorkspace.id}&eid={element.id}" class="btn btn-primary btn-sm">Bom</a>
                        {element.name}
                    </li>
                {/each}
                </ul>
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
