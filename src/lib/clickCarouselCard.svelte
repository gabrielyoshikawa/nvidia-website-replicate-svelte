<script>

</script>

<div class="card">
    <div class="img"></div>
    <div class="info">
        <div class="category">Games | News </div>
        <div class="ttl">RTX. It's On.</div>
    </div>
</div>

<style>

    .card {
        min-width: 20%;
        height: 70%;
        background-color: #eee;
        margin-right: 3em;
    }

   .card:hover{
    cursor: pointer;
   } 
    .img {
        width: 100%;
        height: 55%;
        background-color: royalblue;
    }
    .info {
        width: calc(100%-2em);
        height: 45%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-left: 2em;
    }

    .category {
        width: 100%;
        height: 20%;
        font-size: 1.2rem;
        font-weight: 700;
        display: flex;
        align-items: center;
    }
    .ttl {
        width: 100%;
        height: 40%;
        font-size: 1.5rem;
        font-weight: 900;
        display: flex;
        align-items: center;
    }

</style>