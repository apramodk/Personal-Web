<script>
    let tabs = [
        "Introduction",
        "Behavioral",
        "Technical",
        "Resume",
    ]

    let activeTab = 0;
</script>

<main>
    <div class="card card-side w-screen h-screen bg-secondary shadow-md">

        <div class="menu w-52 bg-base-200 text-primary">
            {#each tabs as tab, index}
                <li><button on:click={()=>activeTab = index} class="focus:bg-primary-content focus:text-primary-focus hover:bg-base-300">{tab}</button></li>
            {/each}
        </div>

        <div class="card-body text-primary bg-primary-content">
            <div class="card-body overflow-auto object-cover" class:hidden={activeTab != 0}>
                <div class="hero max-h-screen bg-base-200 rounded-lg">
                    <div class="hero-content text-center">
                        <div class="max-w-md">
                            <h1 class="text-5xl font-bold text-neutral-content">Introduction</h1>
                            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button class="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card-body overflow-auto" class:hidden={activeTab != 1}>
                <div class="hero max-h-screen bg-base-200 rounded-lg">
                    <div class="hero-content text-center">
                        <div class="max-w-md">
                            <h1 class="text-5xl font-bold text-neutral-content">Behavioral</h1>
                            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button class="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card-body overflow-auto" class:hidden={activeTab != 2}>
                <div class="hero max-h-screen bg-base-200 rounded-lg">
                    <div class="hero-content text-center">
                        <div class="max-w-md">
                            <h1 class="text-5xl font-bold text-neutral-content">Technical</h1>
                            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button class="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card-body overflow-auto" class:hidden={activeTab != 3}>
                <div class="hero max-h-screen bg-base-200 rounded-lg">
                    <div class="hero-content text-center">
                        <div class="max-w-md">
                            <h1 class="text-5xl font-bold text-neutral-content">Resume</h1>
                            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button class="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

<style>
    main{
        width: 100vw;
        max-height: 93.4vh;
        /* padding-top: 50px; */
        /* padding-left: 20px; */
        /* padding-right: 20px; */
        overflow: hidden;
        display: flex;
        justify-content: center;
    }
</style>