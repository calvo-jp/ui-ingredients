<script lang="ts">
  import {PinInput} from '$lib/index.js';
  import {Input, Label} from '../shared/index.js';

  let value: string[] = $state([]);

  $inspect(value);
</script>

<PinInput.Root
  placeholder=""
  {value}
  onValueChange={(detail) => {
    value = detail.value;
  }}
  class="w-full lg:max-w-[24rem]"
>
  <PinInput.Label>
    {#snippet asChild(mergedProps)}
      <Label {...mergedProps}>Enter OTP</Label>
    {/snippet}
  </PinInput.Label>

  <PinInput.HiddenInput />

  <div class="grid grid-cols-6 gap-2">
    {#each Array.from({length: 6}) as _, i}
      <PinInput.Input
        index={i}
        class="aspect-square h-auto w-full text-center text-xl font-bold"
      >
        {#snippet asChild(mergedProps)}
          <Input {...mergedProps} />
        {/snippet}
      </PinInput.Input>
    {/each}
  </div>
</PinInput.Root>
