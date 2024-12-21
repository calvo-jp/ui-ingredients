<script lang="ts">
  import {Button} from '$lib/ui';
  import {ChevronDownIcon} from '@untitled-theme/icons-svelte';
  import {Menu, Portal} from 'ui-ingredients';
  import Container from './container.svelte';

  let items = [
    {value: 'Item 1'},
    {value: 'Item 2'},
    {value: 'Item 3'},
    {value: 'Item 4'},
    {value: 'Item 5', disabled: true},
  ];
</script>

<Container>
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
            class="transition-transform duration-150 ui-open:rotate-180"
          >
            <ChevronDownIcon class="size-5" />
          </Menu.Indicator>
        </Button>
      {/snippet}
    </Menu.Trigger>

    <Portal>
      <Menu.Positioner>
        <Menu.Content
          class="rounded border border-neutral-200 bg-white p-2 ui-open:animate-fade-in ui-closed:animate-fade-out dark:border-neutral-800 dark:bg-neutral-900"
        >
          {#each items as item (item.value)}
            <Menu.Item
              class="flex w-32 cursor-default items-center rounded px-2.5 py-1 ui-disabled:cursor-not-allowed ui-disabled:text-neutral-400 ui-highlighted:bg-neutral-50 dark:ui-disabled:text-neutral-500 dark:ui-highlighted:bg-neutral-800/50"
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
</Container>
