<script lang="ts">
    import * as Sidebar from "$lib/components/ui/sidebar/index.js";
    import AppSidebar from "$lib/components/app-sidebar.svelte";
    
    let { children } = $props();
</script>

<Sidebar.Provider>
    <AppSidebar />
    <main class="w-full">
        <Sidebar.Trigger />
        <div class="p-4 md:p-6 lg:p-8">
            {@render children?.()}
        </div>
    </main>
</Sidebar.Provider>
