<script lang="ts">
  import {Menu} from '$lib/index.js';
  import {cx} from '../../shared/utils.js';

  let menuItemStyle = cx(
    'w-32',
    'flex',
    'items-center',
    'cursor-default',
    'data-disabled:cursor-not-allowed',
    'data-disabled:opacity-75',
  );

  let menuContentStyle = cx(
    'px-3',
    'py-2',
    'border',
    'bg-neutral-800',
    'data-open:animate-fade-in',
    'data-closed:animate-fade-out',
  );
</script>

<Menu.Root>
  <Menu.Trigger class="flex h-11 items-center gap-2 border px-3.5">
    Open
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
        <Menu.TriggerItem class={menuItemStyle}>Three</Menu.TriggerItem>
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
