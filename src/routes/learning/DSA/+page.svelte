<script>
    let tabs = [
        "Introduction",
        "Programming Language",
        "Data Structures",
        "Algorithims",
    ]

    let activeTab = 2;
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
                            <p class="py-6">
                                In order to fully understand Data Structures and Algorithims, you must have some fundemental knowledge about the way computers work. 
                                In this section I will provide a quick overlay about some general information, which will be built upon further as we go on.
                            </p>
                            <button class="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card-body overflow-auto" class:hidden={activeTab != 1}>
                <div class="hero max-h-screen bg-base-200 rounded-lg">
                    <div class="hero-content text-center">
                        <div class="max-w-md">
                            <h1 class="text-5xl font-bold text-neutral-content">Programming Language</h1>
                            <p class="py-6">
                                Choosing a programming language can seem like a daunting task. While there's not neccesarily a wrong language to choose, for our purposes,
                                using a lower level language such as C or Java will help in providing a much more indepth understanding of the way everything works under the hood. 
                                <br/>
                                <br/>
                                For the purpose of this course, everything will be in C.
                            </p>
                            <button class="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card-body overflow-auto" class:hidden={activeTab != 2}>
                <div class="hero max-h-screen bg-base-200 rounded-lg">
                    <div class="hero-content text-center">
                        <div class="max-w-md">
                            <h1 class="text-5xl font-bold text-neutral-content">Data Structures</h1>
                            <p class="py-6">
                                
                            </p>
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