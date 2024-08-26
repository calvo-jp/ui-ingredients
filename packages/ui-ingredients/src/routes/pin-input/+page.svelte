<script lang="ts">
  import {PinInput} from '$lib/index.js';

  let value: string[] = $state([]);

  $inspect(value);
</script>

<PinInput.Root
  placeholder=""
  {value}
  onValueChange={(detail) => {
    value = detail.value;
  }}
>
  <PinInput.Label class="mb-1 inline-block text-neutral-400">Enter OTP</PinInput.Label>
  <PinInput.HiddenInput />

  <div class="flex gap-1">
    {#each Array.from({length: 6}) as _, i}
      <PinInput.Input index={i} class="size-11 border text-center" />
    {/each}
  </div>
</PinInput.Root>
