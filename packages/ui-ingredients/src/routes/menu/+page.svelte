<script lang="ts">
  import {Menu} from '$lib/index.js';

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
