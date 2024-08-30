<script lang="ts">
  import {Menu} from '$lib/index.js';
  import {Button} from '../../shared/index.js';
  import {cx} from '../../shared/utils.js';

  let menuItemStyle = cx(
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

  let menuContentStyle = cx(
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
      <Button {...attrs}>Open</Button>
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
            <path d="M9 18L15 12L9 6"></path>
          </svg>
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
