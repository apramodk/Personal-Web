<script>
    import { Navbar } from '$lib/index';

</script>

<main>
    <Navbar/>
    <slot/>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        widows: 100vw;
    }
</style>