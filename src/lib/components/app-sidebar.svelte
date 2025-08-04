<script lang="ts">

  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
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

 // Menu items.
  const items = [
  {
    title: "Edit Banner 1",
    url: "/dashboard/1-profil-fik",
    icon: Tally1,
  },
  {
    title: "Edit Banner 2",
    url: "/dashboard/2-presma",
    icon: Tally2,
  },
  {
    title: "Edit Banner 3",
    url: "/dashboard/3-qr-code-layanan",
    icon: Tally3
  },
  {
    title: "Edit Grup Tombol",
    url: "/dashboard/4-edit-button",
    icon: SquareMousePointer,
  },
  {
    title: "Edit Slideshow",
    url: "/dashboard/5-slideshow",
    icon: TvMinimalPlay,
  },
  {
    title: "Edit Teks Berjalan",
    url: "/dashboard/6-running-text",
    icon: RectangleEllipsis,
  },
  // {
  //   title: "Testing Page",
  //   url: "/dashboard/tests",
  //   icon: RectangleEllipsis,
  // },
  ];
</script>

<Sidebar.Root>
  <Sidebar.Header>
    <Sidebar.GroupLabel>
      Dashboard Web Lobby
    </Sidebar.GroupLabel>
  </Sidebar.Header>

  <Sidebar.Content style="margin: 10px">
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