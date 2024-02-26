<script>
    import { Navbar } from '$lib/index';

</script>

<main>
    <div class="navbar">
        <Navbar/>
    </div>
    <div class="content-safearea">
        <slot/>
    </div>
</main>

<style>
    main {
        height: 100vh;
        widows: 100vw;
    }
    .navbar {
        display: flex;
        justify-content: center;
        width: 100%;
        position: fixed top;
        /* position: ; */
    }
    .content-safearea {
        min-height: 80%;
        width: 100vw;
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>