<svelte:head>
    <title>Projects</title>
    <meta name="description" content="Onshape"/>
</svelte:head>

<script lang="ts">
    import Project from '$lib/Project.svelte';
    import {Modal} from "sveltestrap";
    import {enhance} from '$lib/form';
    import type {GetBillOfMaterialsResponse, Header} from "../../lib/onshape/GetBillOfMaterialsResponse";
    import {page} from "$app/stores";

    // populated with data from the get endpoint
    export let bom: GetBillOfMaterialsResponse;

    const headers = bom.bomTable.headers; //.filter(h=>h.visible);
    // console.log(bom);

    const hiddenProperty = [
        "Not Revision Managed",
        "Appearance",
        "Unit of measure",
        "Subassembly BOM behavior",
        "Tessellation quality",
        "State", //need to be pro to use
    ].map(i => i.toLowerCase());

    const startingVisible = [
        "Item",
        "Quantity",
        "Part number",
        "Name",
        "Material",
        "Vendor"
    ].map(i => i.toLowerCase());

    const filters: { [propertyId: string]: Header } = headers.reduce((prev, cur)=>{
        if (hiddenProperty.includes(cur.name.toLowerCase())) {
            return prev;
        }
        cur.visible = startingVisible.includes(cur.name.toLowerCase())
        prev[cur.propertyId] = cur;

        return prev
    }, {});





    let textareaValue = "";
</script>


<section>
    <div class="row">
        <div class="col-2">
            <a href="/onshape/{$page.url.searchParams.get('did')}" class="btn btn-info">Back to Document</a>

        </div>
        <div class="col-8">
            <h1>Onshape BOM</h1>
        </div>
        <div class="col-2">
            <!-- Some Other Action -->
        </div>
    </div>

    <div>
        <h3>Filters</h3>
        <div class="row">
            {#each Object.values(filters) as {name, visible, propertyId}, idx}
                <div class="col">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="check-{idx}" bind:checked={filters[propertyId].visible}>
                        <label class="form-check-label" for="check-{idx}">
                            {name}
                        </label>
                    </div>
                </div>
            {/each}
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
                    {#if filters[hdr.propertyId]?.visible}
                    <th title="{hdr.propertyName}">
                        {hdr.name}
                    </th>
                    {/if}
                {/each}
            </tr>
        </thead>
        <tbody>
            {#each bom.bomTable.items as item, idx}
                <tr>
                    {#each headers as hdr}
                        {#if filters[hdr.propertyId]?.visible} <!--could be written as a filter-->
                        <td>
                            {#if hdr.propertyName == "material" && item[hdr.propertyName] != "N/A"}
                                <abbr title="{item[hdr.propertyName].libraryName}">{item[hdr.propertyName].displayName}</abbr>
                            {:else if typeof item[hdr.propertyName] == 'object'}
                                <pre>{JSON.stringify(item[hdr.propertyName], null, 4)}</pre>
                            {:else}
                                {item[hdr.propertyName]||""}
                            {/if}
                        </td>
                        {/if}
                    {/each}
                </tr>
            {/each}
        </tbody>
    </table>

</section>

<style>

</style>
