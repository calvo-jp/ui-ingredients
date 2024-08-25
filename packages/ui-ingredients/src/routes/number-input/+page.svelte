<script lang="ts">
  import {NumberInput} from '$lib/index.js';

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
  <NumberInput.Label class="mb-1 inline-block text-neutral-400">Enter Amount</NumberInput.Label>
  <NumberInput.Control class="flex max-w-[20rem]">
    <NumberInput.Input class="h-11 grow border px-3" />
    <div class="flex h-full shrink-0 flex-col">
      <NumberInput.IncrementTrigger
        class="size-5.5 flex items-center justify-center border border-l-0"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="size-4.5"
        >
          <path d="M18 15L12 9L6 15"></path>
        </svg>
      </NumberInput.IncrementTrigger>
      <NumberInput.DecrementTrigger
        class="size-5.5 flex items-center justify-center border border-l-0 border-t-0"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="size-4.5"
        >
          <path d="M6 9L12 15L18 9"></path>
        </svg>
      </NumberInput.DecrementTrigger>
    </div>
  </NumberInput.Control>
</NumberInput.Root>
