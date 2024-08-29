<script lang="ts">
  import {Menu} from '$lib/index.js';
  import {Button} from '../../shared/index.js';

  let items = [
    /**/
    'React',
    'Svelte',
    'Solid',
    'Vue',
    'Angular',
  ];
</script>

<Menu.Root>
  <Menu.ContextTrigger class="border-dashed">
    {#snippet asChild(mergedProps)}
      <Button {...mergedProps}>Right click</Button>
    {/snippet}
  </Menu.ContextTrigger>

  <Menu.Positioner>
    <Menu.Content
      class="data-open:animate-fade-in data-closed:animate-fade-out bg-light rounded border p-2"
    >
      {#each items as item}
        <Menu.Item
          class="data-disabled:cursor-not-allowed data-disabled:opacity-75 data-highlighted:bg-lighter/50 flex w-32 cursor-default items-center rounded px-2.5 py-1"
          value={item}
          disabled={item === 'Angular'}
        >
          {item}
        </Menu.Item>
      {/each}
    </Menu.Content>
  </Menu.Positioner>
</Menu.Root>
