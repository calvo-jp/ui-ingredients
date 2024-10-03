<script lang="ts">
  import {Select} from '$lib/index.js';

  interface Item {
    value: string;
    label: string;
    disabled?: boolean;
  }

  interface Props {
    items: Item[];
  }

  let {items}: Props = $props();
</script>

<Select.Root {items}>
  <Select.Control>
    <Select.Label>Label</Select.Label>
    <Select.Trigger>
      <Select.ValueText />
      <Select.Indicator />
    </Select.Trigger>
    <Select.ClearTrigger>Clear</Select.ClearTrigger>
  </Select.Control>

  <Select.Positioner>
    <Select.Content>
      <Select.List>
        <Select.ItemGroup>
          <Select.ItemGroupLabel>Group Label</Select.ItemGroupLabel>

          {#each items as item}
            <Select.Item {item}>
              <Select.ItemText />
              <Select.ItemIndicator />
            </Select.Item>
          {/each}
        </Select.ItemGroup>
      </Select.List>
    </Select.Content>
  </Select.Positioner>
</Select.Root>
