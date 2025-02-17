<script lang="ts">
  import {Portal, Select} from '$lib/index.js';

  let collection = Select.collection({
    items: [
      {value: '1', label: 'Option 1'},
      {value: '2', label: 'Option 2'},
      {value: '3', label: 'Option 3'},
      {value: '4', label: 'Option 4', disabled: true},
      {value: '5', label: 'Option 5'},
    ],
  });

  let value: string[] = $state([]);
</script>

<Select.Root
  {collection}
  {value}
  onValueChange={(detail) => {
    value = detail.value;
  }}
  positioning={{
    sameWidth: true,
  }}
  lazyMount
  keepMounted={false}
  deselectable
>
  <Select.Control>
    <Select.Label>Label</Select.Label>
    <Select.Trigger>
      <Select.ValueText placeholder="Please Select" />
      <Select.Indicator>🔻</Select.Indicator>
    </Select.Trigger>
    <Select.ClearTrigger>Clear</Select.ClearTrigger>
  </Select.Control>

  <Portal>
    <Select.Positioner>
      <Select.Content>
        {#each collection.items as item}
          <Select.Item {item}>
            <Select.ItemText />
            <Select.ItemIndicator>✅</Select.ItemIndicator>
          </Select.Item>
        {/each}
      </Select.Content>
    </Select.Positioner>
  </Portal>
</Select.Root>
