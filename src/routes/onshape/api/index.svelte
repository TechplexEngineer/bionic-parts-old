<svelte:head>
    <title>Projects</title>
    <meta name="description" content="Onshape"/>
</svelte:head>

<script lang="ts">
    import {page} from "$app/stores";
    import Select from 'svelte-select';

    //bound to the text area
    let textareaValue = "";

    let resourceItems = ["documents"];//.map(i=>({value:i, label:i}))
    let resourceValue;

    let wvmItems = [
        {value: 'w', label: 'W'},
        {value: 'v', label: 'V'},
        {value: 'm', label: 'M'},
    ];
    let wvmValue = "w";

    let reqTypeItems = ["get", "post"];
    let reqTypeValue = "get";

    let inputBodyValue = "{}";
</script>


<div class="container-fluid">
    <div class="row">
        <div class="col-2">
            <a href="/onshape/{$page.url.searchParams.get('did')}" class="btn btn-info">Back to Document</a>
        </div>
        <div class="col-8">
            <h1>Onshape API Tester</h1>
        </div>
        <div class="col-2">
            <!-- Some Other Action -->
        </div>
    </div>

<!--    <h2>Doc: {doc.name}</h2>-->
<!--    <ul>-->
<!--        <li>did: {doc.id}</li>-->
<!--        <li>wid: {doc.defaultWorkspace.id}</li>-->
<!--    </ul>-->

    <div class="row">

        <div class="col-md-2">
            <label for="SubResourceInput" class="form-label">Resource</label>
            <Select items={resourceItems} bind:value={resourceValue} isCreatable={true}></Select>
        </div>
        <div class="col-md-2">
            <label for="didInput" class="form-label">DocumentID</label>
            <input type="email" class="form-control" id="didInput">
        </div>
        <div class="col-md-2">
            <label class="form-label">W-V-M</label>
            <Select items={wvmItems} bind:value={wvmValue}></Select>
        </div>
        <div class="col-md-2">
            <label for="wvmidInput" class="form-label">WvmID</label>
            <input type="email" class="form-control" id="wvmidInput">
        </div>
        <div class="col-md-2">
            <label for="exampleFormControlInput1" class="form-label">ElementID</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
        </div>
        <div class="col-md-2">
            <label for="SubResourceInput" class="form-label">SubResource</label>
            <input type="email" class="form-control" id="SubResourceInput">
        </div>
    </div>
    <div class="row">
        <div class="col">
            <label class="form-label">Request Type</label>
            <Select items={reqTypeItems} bind:value={reqTypeValue}></Select>
        </div>
        <div class="col">
            <label class="form-label">&nbsp;</label>
            <div class="btn btn-success d-block">Send It</div>
        </div>

    </div>

    <div class="row">
        <div class="col">
            <label class="form-label">Body</label>
            <textarea class="form-control w-100 h-100" bind:value={inputBodyValue}></textarea>
        </div>
        <div class="col" style="min-height: 60vh;">
            <label class="form-label">Output</label>
            <textarea class="form-control w-100 h-100" disabled bind:value={textareaValue}></textarea>
        </div>
    </div>


</div>

<style>

</style>
