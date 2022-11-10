<script>
    let yes = false;
    let lol = [
        "cupcake",
        "dark",
    ];
</script>

<div class="navbar rounded-3xl bg-primary">
    <div class="flex-1">
        <div class="dropdown dropdown-hover shadow rounded-box">
            <label class="btn m-1 rounded-3xl">Click</label>
            <ul class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li>About Me</li>
                <li>My Projects</li>
                <li>Learn With Me</li>
            </ul>
        </div>
    </div>
    <div class="flex-1">
        <button class="btn btn-ghost normal-case text-xl"><h1>APK</h1></button>
    </div>
    <div class="flex-2">
        <input type="checkbox" class="toggle rounded-xl" bind:checked={yes}/>
    </div>
</div>