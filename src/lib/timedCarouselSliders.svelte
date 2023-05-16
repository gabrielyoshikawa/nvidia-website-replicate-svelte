<script>
    import SliderComponent from "./sliderComponent.svelte";

</script>

<div class="content" id="content">
    <div class="above-img">
        <div class="cima" />
        <div class="baixo">
            <SliderComponent />
        </div>
    </div>
</div>

<style>
    .content {
        max-width: 100%;
        height: 100%;
        background-image: url("../../images/background-img-slider.png");
        /* background-image: url("../../images/logo-background.png"); */
        background-size: 100% 90%;
        background-repeat: no-repeat;
        margin-top: 3%;
    }

    .above-img {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .cima {
        width: 100%;
        display: flex;
        height: 85%;
    }

    .baixo {
        width: 100%;
        height: 15%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
