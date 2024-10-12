<script lang="ts">
  import {Combobox} from '$lib/index.js';

  interface Item {
    label: string;
    value: string;
  }

  let {items}: {items: Item[]} = $props();
</script>

<Combobox.Root {items}>
  <Combobox.Label>Label</Combobox.Label>

  <Combobox.Control>
    <Combobox.Input />
    <Combobox.Trigger>Trigger</Combobox.Trigger>
    <Combobox.ClearTrigger>Close</Combobox.ClearTrigger>
  </Combobox.Control>

  <Combobox.Positioner>
    <Combobox.Content>
      <Combobox.List>
        <Combobox.ItemGroup>
          <Combobox.ItemGroupLabel>Group</Combobox.ItemGroupLabel>

          {#each items as item (item.value)}
            <Combobox.Item {item}>
              <Combobox.ItemText>{item.label}</Combobox.ItemText>
              <Combobox.ItemIndicator>✔</Combobox.ItemIndicator>
            </Combobox.Item>
          {/each}
        </Combobox.ItemGroup>
      </Combobox.List>
    </Combobox.Content>
  </Combobox.Positioner>
</Combobox.Root>
