<script>
    import { base } from '$app/paths';
</script>

<div class="navbar bg-base-300">
    <div class="flex-1">
        <div class="dropdown dropdown-hover shadow rounded-box">
            <a href="{base}" class="btn btn-ghost normal-case text-xl text-base-300 bg-warning hover:text-warning ">APK</a>
            <ul class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <nav>
                    <li>
                        <a href="{base}/about" class="hover:text-error">About Me</a>
                    </li>
                    <li>
                        <a href="{base}/projects" class="hover:text-error">Projects</a>
                    </li>
                    <li>
                        <a href="{base}/learning" class="hover:text-error">Learning</a>
                    </li>
                </nav>
            </ul>
        </div>
    </div>
    <div class="flex-2">
        <input type="checkbox" class="toggle rounded-xl"/>
    </div>
</div>