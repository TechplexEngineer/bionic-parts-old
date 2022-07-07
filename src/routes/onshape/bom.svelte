<svelte:head>
    <title>Projects</title>
    <meta name="description" content="Onshape"/>
</svelte:head>

<script lang="ts">
    import Project from '$lib/Project.svelte';
    import {Modal} from "sveltestrap";
    import {enhance} from '$lib/form';
    import type {GetBillOfMaterialsResponse} from "../../lib/onshape/GetBillOfMaterialsResponse";

    // populated with data from the get endpoint
    export let bom: GetBillOfMaterialsResponse;

    const headers = bom.bomTable.headers; //.filter(h=>h.visible);
    // console.log(bom);



    let textareaValue = "";
</script>


<section>
    <div class="row">
        <div class="col-2">
            <!-- Some Other Action -->
        </div>
        <div class="col-8">
            <h1>Onshape BOM</h1>
        </div>
        <div class="col-2">
        </div>
    </div>

    <h2>Bom: {bom.bomTable.name}</h2>
<!--    <ul>-->
<!--        <li>did: {doc.id}</li>-->
<!--        <li>wid: {doc.defaultWorkspace.id}</li>-->
<!--    </ul>-->

    <table class="table table-striped">
        <thead>
            <tr>
                {#each headers as hdr}
                    <th>
                        {hdr.name}
                    </th>
                {/each}
            </tr>
        </thead>
        <tbody>
            {#each bom.bomTable.items as item, idx}
                <tr>
                    {#each headers as hdr}
                        <td>
                            {#if typeof item[hdr.propertyName] == 'object'}
                                <pre>{JSON.stringify(item[hdr.propertyName], null, 4)}</pre>
                            {:else}
                                {item[hdr.propertyName]}
                            {/if}
                        </td>
                    {/each}
                </tr>
            {/each}
        </tbody>
    </table>

</section>

<style>

</style>
