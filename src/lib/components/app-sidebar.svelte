<script lang="ts">
 import CalendarIcon from "@lucide/svelte/icons/calendar";
 import HouseIcon from "@lucide/svelte/icons/house";
 import InboxIcon from "@lucide/svelte/icons/inbox";
 import SearchIcon from "@lucide/svelte/icons/search";
 import SettingsIcon from "@lucide/svelte/icons/settings";
 import * as Sidebar from "$lib/components/ui/sidebar/index.js";

 import PlusIcon from "@lucide/svelte/icons/plus";
 import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  
 // Menu items.
 const items = [
  {
   title: "Edit Banner 1",
   url: "/dashboard/banner-1",
  //  icon: HouseIcon,
  },
  {
   title: "Edit Banner 2",
   url: "/dashboard/banner-2",
  //  icon: HouseIcon,
  },
  {
   title: "Edit Banner 3",
   url: "/dashboard/banner-3",
  //  icon: HouseIcon,
  },
  {
   title: "Edit Grup Tombol",
   url: "/dashboard/edit-button",
  //  icon: HouseIcon,
  },
  {
   title: "Edit Slideshow",
   url: "/dashboard/slideshow",
  //  icon: HouseIcon,
  },
  {
   title: "Edit Teks Berjalan",
   url: "/dashboard/running-text",
  //  icon: HouseIcon,
  },
 ];
</script>
 
<Sidebar.Root>
  <Sidebar.Header>
    <!-- <Sidebar.Menu>
      <Sidebar.MenuItem>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            {#snippet child({ props })}
              <Sidebar.MenuButton {...props}>
                Select Workspace
                <ChevronDown class="ml-auto" />
              </Sidebar.MenuButton>
            {/snippet}
          </DropdownMenu.Trigger>
          <DropdownMenu.Content class="w-(--bits-dropdown-menu-anchor-width)">
            <DropdownMenu.Item>
              <span>Acme Inc</span>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <span>Acme Corp.</span>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </Sidebar.MenuItem>
    </Sidebar.Menu> -->
  </Sidebar.Header>

 <Sidebar.Content>
  <Sidebar.Group>
   <Sidebar.GroupLabel>Application</Sidebar.GroupLabel>
   <Sidebar.GroupContent>
    <Sidebar.Menu>
     {#each items as item (item.title)}
      <Sidebar.MenuItem>
       <Sidebar.MenuButton>
        {#snippet child({ props })}
         <a href={item.url} {...props}>
          <!-- <item.icon /> -->
          <span>{item.title}</span>
         </a>
        {/snippet}
       </Sidebar.MenuButton>
      </Sidebar.MenuItem>
     {/each}
    </Sidebar.Menu>
   </Sidebar.GroupContent>
  </Sidebar.Group>
 </Sidebar.Content>

    <Sidebar.Footer>
    </Sidebar.Footer>
</Sidebar.Root>