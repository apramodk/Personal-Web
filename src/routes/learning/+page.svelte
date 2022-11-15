<script>
    import { base } from '$app/paths';
</script>

<main>
    <div class="grid grid-cols-3 gap-4">
        <div class="grid w-72 h-24 btn border card bg-base-300 place-items-center">Picking A Language</div>
        <a href="{base}/learning/Interview" class="grid w-72 h-24 btn border card bg-base-300 place-items-center">Interview Prep</a>
        <div class="grid w-72 h-24 btn border card bg-base-300 place-items-center">Data Structs and Algorithims</div>
        <div class="grid w-72 h-24 btn border card bg-base-300 place-items-center">Web Development</div>
        <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0" class="grid w-72 h-24 btn border card bg-base-300 place-items-center">Machine Learning</a>

    </div>
</main>

<style>
    main{
        width: 100vw;
        padding-top: 50px;
        display: flex;
        justify-content: center;
    }
</style>