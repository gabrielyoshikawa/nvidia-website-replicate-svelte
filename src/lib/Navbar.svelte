<script>
    
</script>

<div class="navBar">
    <div class="navContent">
        <div class="navEsq">
            <a href="http://10.150.5.179:6544/">
                <img src="/images/nvidia-logo.png" alt="nvidia-logo" />
            </a>
            <p class="navItems">Products</p>
            <p class="navItems">Solutions</p>
            <p class="navItems">Industries</p>
            <p class="navItems">For You</p>
        </div>
        <div class="navMei">
            <p>Shop</p>
            <p>Drivers</p>
            <p>Support</p>
        </div>
        <div class="navDir">
            <i class="fas fa-search" id="search-icon" />
            <i class="fas fa-user-circle" />
        </div>
    </div>
</div>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Instrument+Sans&display=swap");

    .navBar {
        position: fixed;
        top: 0;
        width: 100%;
        height: 6%;
        background-color: white;
    }

    .navBar:hover {
        cursor: pointer;
    }

    .navContent {
        width: 100%;
        min-height: 100%;
        display: flex;
    }

    .navEsq {
        display: flex;
        width: 45%;
        align-items: center;
        justify-content: center;
    }

    .navMei {
        display: flex;
        width: 40%;
        align-items: center;
        justify-content: end;
    }

    p {
        margin: 0 0.5em 0 1em;
        font-size: 1.6rem;
        font-family: "Instrument Sans", sans-serif;
        color: #1a1a1a;
        transition: color 0.5s;
    }

    i {
        font-size: 1.8rem;
        margin: 0 0 0 0.7em;
        color: #666;
    }

    #search-icon {
        margin: 0 0 0 3em;
    }

    .navMei p {
        font-size: 1.4rem;
        margin: 0 0 0 2em;
    }

    .navDir {
        width: 15%;
        display: flex;
        justify-content: start;
        align-items: center;
    }

    img {
        width: 120px;
        height: 45px;
    }

    p:hover {
        color: #666;
    }
</style>
