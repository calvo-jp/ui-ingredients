<script lang="ts">
  import {PinInput} from '$lib/index.js';
</script>

<PinInput.Root>
  <PinInput.Label>Label</PinInput.Label>
  <PinInput.HiddenInput />
  <PinInput.Control>
    <PinInput.Input index={0} />
    <PinInput.Input index={1} />
    <PinInput.Input index={2} />
    <PinInput.Input index={3} />
  </PinInput.Control>
</PinInput.Root>
