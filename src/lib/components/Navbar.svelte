<script>
    import { base } from '$app/paths';
</script>

<div class="navbar bg-base-300">
    <div class="flex-1">
        <a href="{base}/" class="btn btn-ghost normal-case text-xl text-primary hover:text-secondary hover:bg-primary">APK</a>
    </div>
    <div class="flex-none">
        <nav>
                <a href="{base}/about"    class="btn btn-ghost normal-case text-primary hover:text-secondary hover:bg-primary">About Me</a>
                <a href="{base}/projects" class="btn btn-ghost normal-case text-primary hover:text-secondary hover:bg-primary">Projects</a>
                <a href="{base}/learning" class="btn btn-ghost normal-case text-primary hover:text-secondary hover:bg-primary">Learning</a>
        </nav>
    </div>
</div>