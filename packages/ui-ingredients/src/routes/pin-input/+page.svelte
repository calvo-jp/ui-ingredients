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
