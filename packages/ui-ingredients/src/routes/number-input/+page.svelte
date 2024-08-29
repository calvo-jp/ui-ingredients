<script lang="ts">
  import {NumberInput} from '$lib/index.js';
  import {ChevronDownIcon, ChevronUpIcon} from '@untitled-theme/icons-svelte';
  import {Input, Label} from '../shared/index.js';

  let value = $state('0');

  $inspect(value);
</script>

<NumberInput.Root
  min={0}
  max={100}
  {value}
  onValueChange={(detail) => {
    value = detail.value;
  }}
>
  <NumberInput.Label>
    {#snippet asChild(mergedProps)}
      <Label {...mergedProps}>Enter Amount</Label>
    {/snippet}
  </NumberInput.Label>

  <NumberInput.Control class="flex w-full lg:max-w-[24rem]">
    <NumberInput.Input class="rounded-r-none">
      {#snippet asChild(mergedProps)}
        <Input {...mergedProps} />
      {/snippet}
    </NumberInput.Input>

    <div class="flex h-full shrink-0 flex-col">
      <NumberInput.IncrementTrigger
        class="flex size-6 items-center justify-center rounded-tr border border-l-0"
      >
        <ChevronUpIcon class="size-4" />
      </NumberInput.IncrementTrigger>
      <NumberInput.DecrementTrigger
        class="flex size-6 items-center justify-center rounded-br border border-l-0 border-t-0"
      >
        <ChevronDownIcon class="size-4" />
      </NumberInput.DecrementTrigger>
    </div>
  </NumberInput.Control>
</NumberInput.Root>
