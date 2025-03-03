<script lang="ts">
  import {Menu} from '$lib/index.js';
  import ChevronDownIcon from '../chevron-down-icon.svelte';

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
    Click me
    <Menu.Indicator>
      <ChevronDownIcon style="width:20px;height:20px;" />
    </Menu.Indicator>
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
