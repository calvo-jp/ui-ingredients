<script lang="ts">
  import {Menu} from '$lib/index.js';

  let items = [
    {value: '1', label: 'Item 1'},
    {value: '2', label: 'Item 2'},
    {value: '3', label: 'Item 3'},
    {value: '4', label: 'Item 4'},
    {value: '5', label: 'Item 5', disabled: true},
  ];
</script>

<Menu.Root>
  <Menu.ContextTrigger>Right click</Menu.ContextTrigger>

  <Menu.Positioner>
    <Menu.Content>
      {#each items as item}
        <Menu.Item value={item.value} disabled={item.disabled}>
          {item.label}
        </Menu.Item>
      {/each}
    </Menu.Content>
  </Menu.Positioner>
</Menu.Root>
