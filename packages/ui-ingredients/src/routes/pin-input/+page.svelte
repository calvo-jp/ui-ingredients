<script lang="ts">
  import {PinInput} from '$lib/index.js';

  let value: string[] = $state([]);

  $inspect({value});
</script>

<PinInput.Root
  placeholder=""
  {value}
  onValueChange={(detail) => {
    value = detail.value;
  }}
>
  <PinInput.Label>Label</PinInput.Label>
  <PinInput.HiddenInput />
  <PinInput.Control>
    {#each Array.from({length: 6}) as _, i}
      <PinInput.Input index={i} />
    {/each}
  </PinInput.Control>
</PinInput.Root>

<style>
  :global([data-scope='pin-input'][data-part='label']) {
    display: block;
    margin-bottom: 4px;
  }

  :global([data-scope='pin-input'][data-part='control']) {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 6px;
    max-width: 275px;
  }

  :global([data-scope='pin-input'][data-part='input']) {
    border: 1px solid var(--border-default);
    width: 100%;
    text-align: center;
    aspect-ratio: 1 / 1;
  }
</style>
