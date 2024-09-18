<script lang="ts">
  import {Menu} from '$lib/index.js';

  interface Item {
    value: string;
    label: string;
  }

  let {items}: {items: Item[]} = $props();
</script>

<Menu.Root>
  <Menu.Trigger>Trigger <Menu.Indicator /></Menu.Trigger>
  <Menu.ContextTrigger>Context Trigger</Menu.ContextTrigger>

  <Menu.Positioner>
    <Menu.Content>
      <Menu.Arrow>
        <Menu.ArrowTip />
      </Menu.Arrow>

      {#each items as item (item.value)}
        <Menu.OptionItem type="checkbox" value={item.value} checked>
          <Menu.OptionItemIndicator>✔</Menu.OptionItemIndicator>
          <Menu.OptionItemText>{item.label}</Menu.OptionItemText>
        </Menu.OptionItem>
      {/each}

      <Menu.Separator />

      <Menu.ItemGroup>
        <Menu.ItemGroupLabel>Group</Menu.ItemGroupLabel>
        {#each items as item (item.value)}
          <Menu.Item value={item.value}>
            {item.label}
          </Menu.Item>
        {/each}
      </Menu.ItemGroup>

      <Menu.Separator />

      <Menu.Root>
        <Menu.TriggerItem>Item Trigger</Menu.TriggerItem>
        <Menu.Positioner>
          <Menu.Content>
            {#each items as item (item.value)}
              <Menu.Item value={item.value}>
                {item.label}
              </Menu.Item>
            {/each}
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    </Menu.Content>
  </Menu.Positioner>
</Menu.Root>
