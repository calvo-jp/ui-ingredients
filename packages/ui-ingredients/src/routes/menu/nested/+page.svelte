<script lang="ts">
  import {Menu} from '$lib/index.js';
  import {ChevronRightIcon} from '@untitled-theme/icons-svelte';
  import {twMerge} from 'tailwind-merge';
  import {Button} from '../../shared/index.js';

  let menuItemStyle = twMerge(
    'w-32',
    'px-2.5',
    'py-1',
    'flex',
    'items-center',
    'text-left',
    'rounded',
    'cursor-default',
    'data-highlighted:bg-lighter/50',
    'data-disabled:cursor-not-allowed',
    'data-disabled:opacity-75',
  );

  let menuContentStyle = twMerge(
    'p-2',
    'border',
    'rounded',
    'bg-neutral-800',
    'data-open:animate-fade-in',
    'data-closed:animate-fade-out',
  );
</script>

<Menu.Root>
  <Menu.Trigger>
    {#snippet asChild(attrs)}
      <Button {...attrs}>Click me</Button>
    {/snippet}
  </Menu.Trigger>

  <Menu.Positioner>
    <Menu.Content class={menuContentStyle}>
      <Menu.Item class={menuItemStyle} value="1">One</Menu.Item>
      <Menu.Item class={menuItemStyle} value="2">Two</Menu.Item>
      <Menu.Root
        positioning={{
          placement: 'right',
        }}
      >
        <Menu.TriggerItem class={menuItemStyle}>
          <span class="grow">Three</span>
          <ChevronRightIcon />
        </Menu.TriggerItem>
        <Menu.Positioner>
          <Menu.Content class={menuContentStyle}>
            <Menu.Item class={menuItemStyle} value="4">Four</Menu.Item>
            <Menu.Item class={menuItemStyle} value="5">Five</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    </Menu.Content>
  </Menu.Positioner>
</Menu.Root>
