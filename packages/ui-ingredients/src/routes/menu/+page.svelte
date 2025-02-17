<script lang="ts">
  import {Menu} from '$lib/index.js';

  let items = [
    {value: 'Item 1'},
    {value: 'Item 2'},
    {value: 'Item 3'},
    {value: 'Item 4'},
    {value: 'Item 5', disabled: true},
  ];

  let selected: string[] = $state([]);
</script>

<div>
  <Menu.Root
    lazyMount
    onSelect={(details) => {
      console.log(details.value);
    }}
  >
    <Menu.Trigger>
      Open
      <Menu.Indicator>🔻</Menu.Indicator>
    </Menu.Trigger>

    <Menu.Positioner>
      <Menu.Content>
        {#each items as item (item.value)}
          <Menu.Item value={item.value} disabled={item.disabled}>
            {item.value}
          </Menu.Item>
        {/each}
      </Menu.Content>
    </Menu.Positioner>
  </Menu.Root>

  <Menu.Root lazyMount>
    <Menu.Trigger>
      Open
      <Menu.Indicator>🔻</Menu.Indicator>
    </Menu.Trigger>

    <Menu.Positioner>
      <Menu.Content>
        {#each items as item (item.value)}
          <Menu.OptionItem
            type="checkbox"
            value={item.value}
            valueText={item.value}
            disabled={item.disabled}
            closeOnSelect={false}
            checked={selected.includes(item.value)}
            onCheckedChange={(checked) => {
              selected = checked
                ? [...selected, item.value]
                : [...selected].filter((value) => value !== item.value);
            }}
          >
            <Menu.OptionItemIndicator>✅</Menu.OptionItemIndicator>
            <Menu.OptionItemText />
          </Menu.OptionItem>
        {/each}
      </Menu.Content>
    </Menu.Positioner>
  </Menu.Root>
</div>
