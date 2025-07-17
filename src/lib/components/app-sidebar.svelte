<script lang="ts">
 
 import {
  HouseIcon,
  SquarePen,
  Tally1,
  Tally2,
  Tally3,
  SquareMousePointer, 
  TvMinimalPlay, 
  RectangleEllipsis,
  ChevronDown,
  ChevronUp,
 } from "@lucide/svelte";

 import * as Sidebar from "$lib/components/ui/sidebar/index.js";
 import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";

 // Menu items.
  const items = [
  // {
  //  title: "Halaman Depan",
  //  url: "/",
  //  icon: HouseIcon,
  // },

  {
    title: "Edit Banner 1",
    url: "/dashboard/banner-1",
    icon: Tally1,
  },
  {
    title: "Edit Banner 2",
    url: "/dashboard/banner-2",
    icon: Tally2,
  },
  {
    title: "Edit Banner 3",
    url: "/dashboard/banner-3",
    icon: Tally3
  },
  {
    title: "Edit Grup Tombol",
    url: "/dashboard/edit-button",
    icon: SquareMousePointer,
  },
  {
    title: "Edit Slideshow",
    url: "/dashboard/slideshow",
    icon: TvMinimalPlay,
  },
  {
    title: "Edit Teks Berjalan",
    url: "/dashboard/running-text",
    icon: RectangleEllipsis,
  },
  ];
</script>

<Sidebar.Root>
  <Sidebar.Header>
    <Sidebar.Menu>
      <Sidebar.MenuItem>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            {#snippet child({ props })}
              <Sidebar.MenuButton {...props}>
                Dashboard Web Lobby
              </Sidebar.MenuButton>
            {/snippet}
          </DropdownMenu.Trigger>
        </DropdownMenu.Root>
      </Sidebar.MenuItem>
    </Sidebar.Menu>
  </Sidebar.Header>

  <Sidebar.Content>
    <Sidebar.Group>
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
                Nama Akun
                <ChevronUp class="ml-auto" />
              </Sidebar.MenuButton>
            {/snippet}
          </DropdownMenu.Trigger>
          <DropdownMenu.Content
            side="top"
            class="w-(--bits-dropdown-menu-anchor-width)"
          >
            <DropdownMenu.Item>
              <span>Sign out</span>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </Sidebar.MenuItem>
    </Sidebar.Menu>
  </Sidebar.Footer>
</Sidebar.Root>