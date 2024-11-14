<script lang="ts">
  import {Button} from '$lib/ui';
  import {ChevronDownIcon} from '@untitled-theme/icons-svelte';
  import {Menu, Portal} from 'ui-ingredients';

  let items = [
    {value: 'Item 1'},
    {value: 'Item 2'},
    {value: 'Item 3'},
    {value: 'Item 4'},
    {value: 'Item 5', disabled: true},
  ];
</script>

<Menu.Root
  lazyMount
  positioning={{
    placement: 'bottom',
  }}
>
  <Menu.Trigger>
    {#snippet asChild(attrs)}
      <Button class="mx-auto w-auto" variant="outline" size="sm" {...attrs}>
        <span>Toggle menu</span>
        <Menu.Indicator
          class="transition-transform duration-150 data-open:rotate-180"
        >
          <ChevronDownIcon class="size-5" />
        </Menu.Indicator>
      </Button>
    {/snippet}
  </Menu.Trigger>

  <Portal>
    <Menu.Positioner>
      <Menu.Content
        class="rounded border border-neutral-800 bg-neutral-900 p-2 data-open:animate-fade-in data-closed:animate-fade-out"
      >
        {#each items as item (item.value)}
          <Menu.Item
            class="flex w-32 cursor-default items-center rounded px-2.5 py-1 data-disabled:cursor-not-allowed data-disabled:opacity-75 data-highlighted:bg-neutral-800/50"
            value={item.value}
            disabled={item.disabled}
          >
            {item.value}
          </Menu.Item>
        {/each}
      </Menu.Content>
    </Menu.Positioner>
  </Portal>
</Menu.Root>
