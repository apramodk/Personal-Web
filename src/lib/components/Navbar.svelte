<script lang="ts">
    import { base } from '$app/paths';
</script>

<main class="NavBar">
    <div class="Nav_wrapper">
        <div class="Web_name">
            <a href={base+"/"}><h1>Akash Pramod Kumar</h1></a>
        </div>
        <div class="NavLinks">
            <a href={base+"/HCI"}>HCI Blog</a>
            <!-- <a href="/">Contact</a> -->
        </div>
    </div>
</main>

<style>
    .NavBar {
        background-color: black;
        width: 88rem;
        position: fixed;
        display: flex;
        justify-content: center;
    }
    .Nav_wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        width: 100%;
        margin: 0 auto;
    }

</style>
