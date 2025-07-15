<script lang="ts">
 import CalendarIcon from "@lucide/svelte/icons/calendar";
 import HouseIcon from "@lucide/svelte/icons/house";
 import InboxIcon from "@lucide/svelte/icons/inbox";
 import SearchIcon from "@lucide/svelte/icons/search";
 import SettingsIcon from "@lucide/svelte/icons/settings";
 import * as Sidebar from "$lib/components/ui/sidebar/index.js";

 import PlusIcon from "@lucide/svelte/icons/plus";
//  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";

  
 // Menu items.
 const items = [
  {
   title: "Home",
   url: "#",
   icon: HouseIcon,
  },
  {
   title: "Inbox",
   url: "#",
   icon: InboxIcon,
  },
  {
   title: "Calendar",
   url: "#",
   icon: CalendarIcon,
  },
  {
   title: "Search",
   url: "#",
   icon: SearchIcon,
  },
  {
   title: "Settings",
   url: "#",
   icon: SettingsIcon,
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
          <item.icon />
          <span>{item.title}</span>
         </a>
        {/snippet}
       </Sidebar.MenuButton>
      </Sidebar.MenuItem>
     {/each}
    </Sidebar.Menu>
   </Sidebar.GroupContent>
  </Sidebar.Group>
  <Sidebar.Group>
   <Sidebar.GroupLabel>Projects</Sidebar.GroupLabel>
   <Sidebar.GroupAction title="Add Project">
    <PlusIcon /> <span class="sr-only">Add Project</span>
   </Sidebar.GroupAction>
   <Sidebar.GroupContent />
  </Sidebar.Group>
 </Sidebar.Content>
     <Sidebar.Footer>
      <Sidebar.Menu>
        <Sidebar.MenuItem>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              {#snippet child({ props })}
                <Sidebar.MenuButton
                  {...props}
                  class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  Username
                  <ChevronUp class="ml-auto" />
                </Sidebar.MenuButton>
              {/snippet}
            </DropdownMenu.Trigger>
            <DropdownMenu.Content
              side="top"
              class="w-(--bits-dropdown-menu-anchor-width)"
            >
              <DropdownMenu.Item>
                <span>Account</span>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <span>Billing</span>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <span>Sign out</span>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </Sidebar.MenuItem>
      </Sidebar.Menu>
    </Sidebar.Footer>
  </Sidebar.Root>
  <Sidebar.Inset>
    <header class="flex h-12 items-center justify-between px-4">
      <Sidebar.Trigger />
    </header>
  </Sidebar.Inset>
