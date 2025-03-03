<script lang="ts">
  import {RadioGroup} from '$lib/index.js';

  let items = [
    {value: '1', label: 'Item 1'},
    {value: '2', label: 'Item 2'},
    {value: '3', label: 'Item 3'},
  ];

  let value: string | null = $state('1');

  $inspect({value});
</script>

<RadioGroup.Root
  {value}
  onValueChange={(detail) => {
    value = detail.value;
  }}
>
  <RadioGroup.Label>Choose one</RadioGroup.Label>

  {#each items as { value, label }}
    <RadioGroup.Item {value}>
      <RadioGroup.ItemHiddenInput />
      <RadioGroup.ItemControl>
        <RadioGroup.Indicator />
      </RadioGroup.ItemControl>
      <RadioGroup.ItemText>{label}</RadioGroup.ItemText>
    </RadioGroup.Item>
  {/each}
</RadioGroup.Root>

<style>
  :global([data-scope='radio-group'][data-part='label']) {
    display: block;
    margin-bottom: 4px;
  }

  :global([data-scope='radio-group'][data-part='item']) {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  :global([data-scope='radio-group'][data-part='item-control']) {
    height: 16px;
    width: 16px;
    border: 1px solid var(--border-default);
    border-radius: 9999px;
  }

  :global(
    [data-scope='radio-group'][data-part='item-control'][data-state='checked']
  ) {
    border-color: oklch(0.746 0.16 232.661);
    background: oklch(0.746 0.16 232.661);
    outline: 3px solid white;
    outline-offset: -4px;
  }
</style>
