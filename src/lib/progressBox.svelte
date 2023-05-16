<script>
    export let ttl;
    export let txt;
</script>

<div class="box">
    <div class="progressBar">
        <div class="walkProgressBar"></div>
        <h1>{ttl}</h1>
        <h2>{txt}</h2>
    </div>
</div>

<style>
    .box {
        width: 18%;
        height: 100%;
        margin: 0 1em 0 1em;
        display: flex;
        justify-content: center;
        color: rgb(175, 175, 175);
    }
    .progressBar {
        border-radius: 5px;
        margin-top: 1em;
        width: 90%;
        height: 4%;
        background-color: #76b900;
        display: flex;
        flex-direction: column;
    }
    h1 {
        font-size: 1.1rem;
        margin-top: 2em;
    }
    h2 {
        margin-top: 0.7em;
        text-overflow: ellipsis;
        max-width: 190px;
    }

    .box:hover {
        cursor: pointer;
        color: white;
    }
</style>
