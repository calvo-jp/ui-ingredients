<script lang="ts">
  import {Portal, Select} from '$lib/index.js';
  import CheckIcon from '../check-icon.svelte';
  import ChevronDownIcon from '../chevron-down-icon.svelte';
  import XIcon from '../x-icon.svelte';

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

  $inspect({value});
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
  <Select.Label>Label</Select.Label>

  <Select.Control>
    <Select.Trigger>
      <Select.ValueText placeholder="Please Select" />
      <Select.Indicator>
        <ChevronDownIcon style="width:20px;height:20px;" />
      </Select.Indicator>
    </Select.Trigger>
    <Select.ClearTrigger>
      <XIcon style="width:20px;height:20px;" />
    </Select.ClearTrigger>
  </Select.Control>

  <Portal>
    <Select.Positioner>
      <Select.Content>
        {#each collection.items as item}
          <Select.Item {item}>
            <Select.ItemText />
            <Select.ItemIndicator>
              <CheckIcon
                style="width:16px;height:16px;color:var(--color-success);"
              />
            </Select.ItemIndicator>
          </Select.Item>
        {/each}
      </Select.Content>
    </Select.Positioner>
  </Portal>
</Select.Root>

<style>
  :global([data-scope='select'][data-part='label']) {
    display: block;
    margin-bottom: 4px;
  }

  :global([data-scope='select'][data-part='control']) {
    max-width: 325px;
    display: flex;
    gap: 6px;
  }

  :global([data-scope='select'][data-part='trigger']) {
    display: flex;
    flex-grow: 1;
    align-items: center;
    padding: 0px 14px;
    height: 40px;
    border: 1px solid var(--border-default);
    gap: 4px;
    text-align: left;
  }

  :global([data-scope='select'][data-part='clear-trigger']) {
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--border-default);
  }

  :global([data-scope='select'][data-part='value-text']) {
    flex-grow: 1;
  }

  :global([data-scope='select'][data-part='indicator']) {
    display: flex;
    transition: transform 150ms;
  }

  :global([data-scope='select'][data-part='indicator'][data-state='open']) {
    transform: rotate(180deg);
  }

  :global([data-scope='select'][data-part='content']) {
    padding: 4px;
    border: 1px solid var(--border-default);
    background: white;
  }

  :global([data-scope='select'][data-part='content'][data-state='open']) {
    animation: fade-in 250ms;
  }

  :global([data-scope='select'][data-part='content'][data-state='closed']) {
    animation: fade-out 150ms;
  }

  :global([data-scope='select'][data-part='item']) {
    min-width: 125px;
    padding: 4px 6px;
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: default;
    text-align: left;
  }

  :global([data-scope='select'][data-part='item'][data-disabled]) {
    opacity: 0.65;
    cursor: not-allowed;
  }

  :global([data-scope='select'][data-part='item-indicator']) {
    display: flex;
  }

  :global([data-scope='select'][data-part='item-text']) {
    flex-grow: 1;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
</style>
