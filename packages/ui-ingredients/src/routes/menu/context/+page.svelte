<script lang="ts">
  import {Menu} from '$lib/index.js';

  let items0 = [
    /**/
    'React',
    'Svelte',
    'Solid',
    'Vue',
    'Angular',
  ];

  let items1 = [
    /**/
    'Laravel',
    'Symfony',
    'Express',
    'Django',
  ];
</script>

<Menu.Root>
  <Menu.ContextTrigger
    class="flex h-11 items-center gap-2 border border-dashed px-3.5"
  >
    Right click
  </Menu.ContextTrigger>

  <Menu.Positioner>
    <Menu.Content
      class="data-open:animate-fade-in data-closed:animate-fade-out border bg-neutral-800 px-3 py-2"
    >
      <Menu.ItemGroup>
        <Menu.ItemGroupLabel class="text-sm opacity-80"
          >Frontend</Menu.ItemGroupLabel
        >

        {#each items0 as item}
          <Menu.Item
            class="data-disabled:cursor-not-allowed data-disabled:opacity-75 flex w-32 cursor-default items-center"
            value={item}
            disabled={item === 'Angular'}
          >
            {item}
          </Menu.Item>
        {/each}
      </Menu.ItemGroup>
      <Menu.Separator class="my-2 w-full border-b" />
      <Menu.ItemGroup>
        <Menu.ItemGroupLabel class="text-sm opacity-80"
          >Backend</Menu.ItemGroupLabel
        >

        {#each items1 as item}
          <Menu.Item
            class="data-disabled:cursor-not-allowed data-disabled:opacity-75 flex w-32 cursor-default items-center"
            value={item}
            disabled={item === 'Express'}
          >
            {item}
          </Menu.Item>
        {/each}
      </Menu.ItemGroup>
    </Menu.Content>
  </Menu.Positioner>
</Menu.Root>
