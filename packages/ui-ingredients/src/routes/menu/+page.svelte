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

  let items = [
    /**/
    ...items0,
    ...items1,
  ];

  let selected: string[] = $state([]);
</script>

<Menu.Root>
  <Menu.Trigger class="flex h-11 items-center gap-2 border px-3.5">
    <span>Open</span>
    <Menu.Indicator
      class="data-open:rotate-180 transition-transform duration-200"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M6 9L12 15L18 9"></path>
      </svg>
    </Menu.Indicator>
  </Menu.Trigger>

  <Menu.Positioner>
    <Menu.Content
      class="data-open:animate-fade-in data-closed:animate-fade-out border bg-neutral-800 px-3 py-2"
    >
      <Menu.ItemGroup>
        <Menu.ItemGroupLabel class="text-sm opacity-80">
          Frontend
        </Menu.ItemGroupLabel>

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
        <Menu.ItemGroupLabel class="text-sm opacity-80">
          Backend
        </Menu.ItemGroupLabel>

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

<Menu.Root>
  <Menu.Trigger class="mt-5 flex h-11 items-center gap-2 border px-3.5">
    <span>Open</span>
    <Menu.Indicator
      class="data-open:rotate-180 transition-transform duration-200"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M6 9L12 15L18 9"></path>
      </svg>
    </Menu.Indicator>
  </Menu.Trigger>

  <Menu.Positioner>
    <Menu.Content
      class="data-open:animate-fade-in data-closed:animate-fade-out border bg-neutral-800 px-3 py-2"
    >
      {#each items as item}
        <Menu.OptionItem
          class="data-disabled:cursor-not-allowed data-disabled:opacity-75 group flex w-32 cursor-default items-center gap-2"
          value={item}
          valueText={item}
          closeOnSelect={false}
          checked={selected.includes(item)}
          onCheckedChange={(checked) => {
            selected = checked
              ? [...selected, item]
              : selected.filter((i) => i !== item);
          }}
        >
          <div
            class="group-data-checked:border-indigo-500 group-data-checked:bg-indigo-500 flex size-4 items-center justify-center border-2"
          >
            <Menu.OptionItemIndicator>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="size-3 text-white"
              >
                <path d="M20 6L9 17L4 12"></path>
              </svg>
            </Menu.OptionItemIndicator>
          </div>
          <Menu.OptionItemText />
        </Menu.OptionItem>
      {/each}
    </Menu.Content>
  </Menu.Positioner>
</Menu.Root>
