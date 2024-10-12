<script lang="ts">
  import {NumberInput} from '$lib/index.js';
</script>

<NumberInput.Root>
  <NumberInput.Label>Enter Amount</NumberInput.Label>
  <NumberInput.Scrubber />
  <NumberInput.ValueText />
  <NumberInput.Control>
    <NumberInput.Input />
    <NumberInput.IncrementTrigger>+</NumberInput.IncrementTrigger>
    <NumberInput.DecrementTrigger>-</NumberInput.DecrementTrigger>
  </NumberInput.Control>
</NumberInput.Root>
