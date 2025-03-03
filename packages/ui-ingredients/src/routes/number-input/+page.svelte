<script lang="ts">
  import {NumberInput} from '$lib/index.js';
  import ChevronDownIcon from '../chevron-down-icon.svelte';
  import ChevronUpIcon from '../chevron-up-icon.svelte';

  let value = $state('0');

  $inspect({value});
</script>

<NumberInput.Root
  min={0}
  max={100}
  {value}
  onValueChange={(detail) => {
    value = detail.value;
  }}
>
  <NumberInput.Label>Label</NumberInput.Label>
  <NumberInput.Control>
    <NumberInput.Input />
    <NumberInput.IncrementTrigger>
      <ChevronUpIcon style="width:16px;height:16px;" />
    </NumberInput.IncrementTrigger>
    <NumberInput.DecrementTrigger>
      <ChevronDownIcon style="width:16px;height:16px;" />
    </NumberInput.DecrementTrigger>
  </NumberInput.Control>
</NumberInput.Root>

<style>
  :global([data-scope='number-input'][data-part='label']) {
    display: block;
    margin-bottom: 4px;
  }

  :global([data-scope='number-input'][data-part='control']) {
    max-width: 400px;
    display: grid;
    grid-template-columns: 1fr 32px;
    grid-template-rows: 1fr 1fr;
    border: 1px solid var(--border-default);
    height: 44px;
  }

  :global([data-scope='number-input'][data-part='input']) {
    padding-left: 14px;
    padding-right: 14px;
    height: 100%;
    width: 100%;
    border-right: 1px solid var(--border-default);
    grid-row: span 2 / span 2;
  }

  :global([data-scope='number-input'][data-part='increment-trigger']),
  :global([data-scope='number-input'][data-part='decrement-trigger']) {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  :global([data-scope='number-input'][data-part='increment-trigger']) {
    border-bottom: 1px solid var(--border-default);
  }
</style>
