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

    const colFilters: { [propertyId: string]: Header } = headers.reduce((prev, cur)=>{
        if (hiddenProperty.includes(cur.name.toLowerCase())) {
            return prev;
        }
        cur.visible = startingVisible.includes(cur.name.toLowerCase())
        prev[cur.propertyId] = cur;

        return prev
    }, {});

    const validStatuses = [
        "Design in progress",
        "Waiting for materials",
        "Ready to manufacture",
        "Manufacturing in progress",
        "Waiting for assembly",
        "Done",

    ]


    let filters = [
        {
            name: "Assemblies Only",
            enabled: false
        },
        {
            name: "COTS only",
            enabled: false
        }
    ];
    filters = filters.concat(validStatuses.map(s => ({name: `Status: ${s}`, enabled: false})))
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
        <h3>Column Filters</h3>
        <div class="row">
            {#each Object.values(colFilters) as {name, visible, propertyId}, idx}
                <div class="col-md-3">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="col-check-{idx}" bind:checked={colFilters[propertyId].visible}>
                        <label class="form-check-label" for="col-check-{idx}">
                            {name}
                        </label>
                    </div>
                </div>
            {/each}
        </div>
    </div>

    <div>
        <h3>Filters</h3>
        <div class="row">
        {#each filters as f, idx}
            <div class="col-md-4">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="check-{idx}" bind:checked={f.enabled}>
                    <label class="form-check-label" for="check-{idx}">
                        {f.name}
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
                    {#if colFilters[hdr.propertyId]?.visible}
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
                        {#if colFilters[hdr.propertyId]?.visible} <!--could be written as a filter-->
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
