<svelte:head>
    <title>Onshape</title>
    <meta name="description" content="Onshape"/>
</svelte:head>

<script lang="ts">
    import Project from '$lib/Project.svelte';
    import {Modal} from "sveltestrap";
    import {enhance} from '$lib/form';
    import type {GetDocumentResponse} from "$lib/onshape/GetDocumentResponse";
    import type { GetElementsInDocumentResponse } from '$lib/onshape/GetElementsInDocument';

    // populated with data from the get endpoint

    // export let doc:GetDocumentResponse;
    // export let elements: GetElementsInDocumentResponse;
    //
    // let elementsByType = elements.reduce((prev, cur)=>{
    //
    //     let type = cur.type;
    //     if (cur.type.toLowerCase() == "application" && cur.dataType == "onshape-app/drawing") {
    //         type = "Drawing";
    //     }
    //
    //     if (! (type in prev)) {
    //         prev[type] = [];
    //     }
    //
    //     prev[type].push(cur)
    //     return prev
    // }, {})
    //
    // let newProjectModalOpen = false;
    // const newProjectModalToggle = () => (newProjectModalOpen = !newProjectModalOpen);
    //
    // let textareaValue = "";

    let links = [
        {
            name: "Toolbox Organizer",
            did: "f2dd281fff1cee4d67627c2e"
        }, {
            name: "Putney Shed",
            did: "62e5c91a5ef9c6c7cc872683"
        }, {
            name: "2022 Rapid React Robot - Top Level",
            did: "ef5af647c02e3b8511615776"
        }, {
            name: "Earrings & Merch",
            did: "5ef9baf0427d5ecee3945852"
        }
    ]
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

        </div>
    </div>

    <ul>
        {#each links as link}
            <li><a href="/onshape/{link.did}">{link.name}</a></li>
        {/each}
    </ul>


</section>

<style>

</style>
