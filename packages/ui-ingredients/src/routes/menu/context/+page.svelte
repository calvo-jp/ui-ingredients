<script lang="ts">
  import {Menu} from '$lib/index.js';
  import {Button} from '../../shared/index.js';

  let items = [
    {value: '1', label: 'Item 1'},
    {value: '2', label: 'Item 2'},
    {value: '3', label: 'Item 3'},
    {value: '4', label: 'Item 4'},
    {value: '5', label: 'Item 5', disabled: true},
  ];
</script>

<Menu.Root>
  <Menu.ContextTrigger>
    {#snippet asChild(attrs)}
      <Button class="border-dashed" variant="outline" {...attrs}>
        Right click
      </Button>
    {/snippet}
  </Menu.ContextTrigger>

  <Menu.Positioner>
    <Menu.Content
      class="bg-light data-open:animate-fade-in data-closed:animate-fade-out rounded border p-2"
    >
      {#each items as item}
        <Menu.Item
          class="data-highlighted:bg-lighter/50 data-disabled:cursor-not-allowed data-disabled:opacity-75 flex w-32 cursor-default items-center rounded px-2.5 py-1"
          value={item.value}
          disabled={item.disabled}
        >
          {item.label}
        </Menu.Item>
      {/each}
    </Menu.Content>
  </Menu.Positioner>
</Menu.Root>
