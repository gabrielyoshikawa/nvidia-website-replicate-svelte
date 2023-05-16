<script>
    import ClickCarouselCard from "./clickCarouselCard.svelte";
</script>

<div class="content">
    <div class="navBar">
        <div class="areaTtl">
            <h1>Recommended</h1>
            <i class="fas fa-cog" />
        </div>
        <div class="buttons">
            <div class="leftbtn">
                <i class="fas fa-angle-left" />
            </div>
            <div class="rightbtn">
                <i class="fas fa-angle-right" />
            </div>
        </div>
    </div>
    <div class="areaCards">
        <div class="cards">
            <ClickCarouselCard />
            <ClickCarouselCard />
            <ClickCarouselCard />
            <ClickCarouselCard />
            <ClickCarouselCard />
        </div>
    </div>
</div>

<style>
    .content {
        width: 100%;
        height: 58%;
        background-color: rgba(0, 0, 0, 0.94);
    }

    .areaTtl {
        width: 25%;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        margin-left: 5em;
    }

    .navBar {
        width: 100%;
        height: 20%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    h1 {
        color: white;
        font-size: 3.5rem;
        font-weight: 900;
    }

    .areaTtl i {
        margin: 0;
        padding: 0;
        margin-left: -4em;
        color: white;
        font-size: 2rem;
    }

    .buttons {
        margin-right: 10em;
        width: 5%;
        height: 55%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .leftbtn {
        width: 40%;
        height: 70%;
        background-color: #76b900;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .rightbtn {
        width: 40%;
        background-color: #76b900;
        height: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .rightbtn:hover,
    .leftbtn:hover {
        background-color: #6aa700;
        cursor: pointer;
    }

    .rightbtn:hover i {
        transform: translate(3px);
        transition-duration: 1s;
    }
    .leftbtn:hover i {
        transform: translate(-3px);
        transition-duration: 1s;
    }

    i {
        color: white;
        font-size: 2rem;
    }

    .areaCards {
        max-width: 100%;
        height: 80%;
        display: flex;
        margin-top: -2em;
        overflow-x: hidden;
    }

    .cards {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        margin-left: 10em;
    }
</style>
