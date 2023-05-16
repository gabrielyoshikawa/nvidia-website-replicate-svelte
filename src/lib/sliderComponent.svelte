<script>
    import ProgressBox from "./progressBox.svelte";

    let infoObject = [
        {'ttl': 'Keynote Event', 'txt': 'Jensen Huang at Knowledge 2023.'},
        {'ttl': 'Keynote Event', 'txt': 'See Jensen Huang Live on Stage at Computex.'},
        {'ttl': 'AI', 'txt': 'Available Now: NVIDIA NeMo Guardrail for LLMs.'},
        {'ttl': 'Simulation', 'txt': 'Siemens and NVIDIA Collaboration Showcased.'},
        {'ttl': 'Gaming Hardware', 'txt': 'Introducing the NVIDIA GeForce RTX 4070.'},
        {'ttl': 'AI', 'txt': 'NVIDIA Taker Inference to New Heights in MLPerf.'}
    ]

</script>

<div class="box">
    {#each infoObject as cardInformation}
        <ProgressBox ttl= { cardInformation.ttl } txt= { cardInformation.txt }/>
    {/each}
</div>

<style>
    .box {
        width: 88%;
        height: 100%;
        display: flex;
    }
</style>
