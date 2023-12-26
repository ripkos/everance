<script lang="ts">
	import { onMount } from "svelte";

    export let sp: number;
    let spText = '';
    const amounts = [
        {value: 0, label: "0-5m"},
        {value: 5000000, label: "5m-50m (20% penalty)"},
        {value: 50000000, label: "50m-80m (40% penalty)"},
        {value: 80000000, label: "80m+ (70% penalty)"},

    ];
    function updateSP (n: number) {
        sp = n;
        try{
            localStorage.setItem('sp',sp.toFixed(0))
        }
        catch (e) {
            // TODO implement
            console.log('Quota error');
            console.log(e);
        }
        spText=sp.toLocaleString();
    }
    function convertTextToSP() {
        let n = spText;
        n = n.replaceAll(',','.').replaceAll(/s/g, '');
        const parsed = parseInt(n);
        if (isNaN(parsed)) {
            updateSP(0);
        }
        else {
            updateSP(n.toLowerCase().includes('m') ? parsed * 1000000 : parsed)
        }
    }
    onMount(()=>{
        spText=sp.toLocaleString();
    });
</script>
<section>
    <h2>SP Amount:</h2>
    {#each amounts as amount}
        <button on:click={()=>{updateSP(amount.value)}}>{amount.label}</button>
    {/each}
    <input type='text' bind:value={spText} on:change={convertTextToSP} placeholder="5.47m">
</section>