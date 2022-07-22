<script lang="ts">

    import Select from "svelte-select";
    import type {Project} from "../../lib/projects";
    import type {GetBillOfMaterialsResponse, Item} from "$lib/OnshapeAPI/GetBillOfMaterialsResponse";

    export let project: Project;
    export let bom: GetBillOfMaterialsResponse;
    // console.log(bom);

    const statePropertyName = "title1"; //state
    const mfgMethodPropertyName = "title2"; //title1

    const itemsByStatus: { [status: string]: Item[] } = bom.bomTable.items.reduce((previousValue, currentValue) => {
        if (!Array.isArray(previousValue[currentValue[statePropertyName]])) {
            previousValue[currentValue[statePropertyName]] = [];
        }
        previousValue[currentValue[statePropertyName]].push(currentValue)
        return previousValue
    }, {});

    console.log("itemsByStatus", itemsByStatus);

    let partStatuses = [
        "Design",             // ____, doing, review, done // todo state is missing as card does not exist until part is created
        "Order",              // todo, doing(ordered), done
        "Manufacturing",      // todo, doing, finishing?, done
        "Assembly",           // todo, doing, done
        "Done",
        "Invalid Status" // if someone typo's one of the statuses
    ];

    let partStatuses2 = [
        {
            status: "Design", // ____, doing, review, done // todo state is missing as card does not exist until part is created
            substatus: [
                "Doing",
                "Review",
                // "done"
            ],
        },
        {
            status: "Order",  // todo, doing(ordered), done
            substatus: [
                "Todo",
                "Ordered",
                // "done"
            ],
        },
        {
            status: "Manufacturing",      // todo, doing, finishing?, done
            substatus: [
                "Todo",
                "Doing",
                "Finishing",
                // "Done"
            ],
        },
        {
            status: "Assembly", // todo, doing, done
            substatus: [
                "Todo",
                "Doing",
                // "Done"
            ],
        },
        {
            status: "Done",
            substatus: [],
        },
        {
            status: "Invalid Status",
            substatus: [],
        } // if someone typo's one of the statuses
    ];

    // concept of linked kanbans. When complete by first works tation, moves to next work station

    // partStatuses = Object.keys(itemsByStatus) // for testing. Or we will want to sort them

    let assemblies = []
    let selectedAssembly;

    const isPart = (item): boolean => {
        return item.bomBehavior == 'N/A'
    }

    const getItems = (status) => {
        if (status == "Design") {
            return (itemsByStatus[status] || []).concat(itemsByStatus[""])
        }
        if (status == "Invalid Status") {
            let invalidStatuses = Object.keys(itemsByStatus).filter(s => (!partStatuses.includes(s) && s != ""));
            return invalidStatuses.map(s => itemsByStatus[s]).flat();
        }
        return itemsByStatus[status] || []
    }
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
    <div class="col">
        Show as: Tree, individual
        Show only: parts, assemblies
    </div>
</div>

<!--
    Goals:
        - Show parts for mfg team
        - auto generate part numbers
            - project property on part studio is part number prefix
            - intake-1234 in the case of many part studios
            - intake-ps1-1234
        - overall progress tracking for team
            - show progress by subsytem
            - by assembly
            - by any property
            - definition of progress:
                - parts and their status for that subystem
-->


<div class="row">
    {#each partStatuses as status, idx}
        <div class="col px-1">
            <div class="card text-dark bg-light mb-3">
                <div class="card-header">{idx + 1}: {status}</div>
                <div class="card-body">

                    {#each getItems(status) as item}
                        <div class="card text-dark bg-light mb-3">
                            <div class="card-header">{isPart(item) ? "Part" : "Asm"} / {item.item}
                                <span class="float-end">{item.partNumber}</span>
                            </div>
                            <div class="card-body">

                                {#if isPart(item)}
                                    <ul>
                                        <li>Name: {item.name}</li>
                                        <li>Material:
                                            {#if item.material.libraryName}
                                                {item.material.libraryName}
                                                :{item.material.displayName}
                                            {:else}
                                                Unset
                                            {/if}
                                        </li>
                                        <li>PN: {item.partNumber}</li>
                                        {#if item[mfgMethodPropertyName]}
                                            <li>MFG: {item[mfgMethodPropertyName]}</li>
                                        {/if}
                                    </ul>
                                    <a class="btn btn-primary btn-sm" target="_blank" href="{item.itemSource.viewHref}">Open
                                        In
                                        Onshape</a>
                                {:else}
                                    <strong>Asm</strong>  {item.name} --
                                    {item.partNumber}
                                    {item[mfgMethodPropertyName]}
                                {/if}
                            </div>
                            {#if status == "Invalid Status"}
                                <div class="card-footer">
                                    ERROR - Invalid Status:<br>{item[statePropertyName]}
                                </div>
                            {/if}
                        </div>
                    {/each}


                </div>
            </div>
        </div>
    {/each}
</div>