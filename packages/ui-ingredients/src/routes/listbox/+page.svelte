<script lang="ts">
  import {Listbox} from '$lib/index.js';
  import CheckIcon from '../check-icon.svelte';

  let collection = Listbox.collection({
    items: [
      {label: 'Item 1', value: 'item-1'},
      {label: 'Item 2', value: 'item-2'},
      {label: 'Item 3', value: 'item-3'},
    ],
  });
</script>

<Listbox.Root {collection}>
  <Listbox.ItemGroup>
    <Listbox.ItemGroupLabel>Group</Listbox.ItemGroupLabel>
    {#each collection.items as item}
      <Listbox.Item {item}>
        <Listbox.ItemText>{item.label}</Listbox.ItemText>
        <Listbox.ItemIndicator>
          <CheckIcon style="width:20px;height:20px;" />
        </Listbox.ItemIndicator>
      </Listbox.Item>
    {/each}
  </Listbox.ItemGroup>
</Listbox.Root>

<style>
  :global([data-scope='listbox'][data-part='item']) {
    display: flex;
    align-items: center;
    gap: 4px;
  }
</style>
