<script lang="ts">
  import {NumberInput} from '$lib/index.js';

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
    <NumberInput.IncrementTrigger>⬆️</NumberInput.IncrementTrigger>
    <NumberInput.DecrementTrigger>⬇️</NumberInput.DecrementTrigger>
  </NumberInput.Control>
</NumberInput.Root>
