<script lang="ts">
  import {Input, Label} from '$lib/ui';
  import {ChevronDownIcon, ChevronUpIcon} from '@untitled-theme/icons-svelte';
  import {NumberInput} from 'ui-ingredients';
  import Container from './container.svelte';
</script>

<Container>
  <NumberInput.Root value="0" class="mx-auto max-w-[20rem]">
    <NumberInput.Label>
      {#snippet asChild(attrs)}
        <Label {...attrs}>Label</Label>
      {/snippet}
    </NumberInput.Label>

    <NumberInput.Control class="flex">
      <NumberInput.Input class="rounded-r-none">
        {#snippet asChild(attrs)}
          <Input {...attrs} />
        {/snippet}
      </NumberInput.Input>

      <div class="flex h-full shrink-0 flex-col">
        <NumberInput.IncrementTrigger
          class="flex size-6 items-center justify-center rounded-tr border border-l-0 border-neutral-200 bg-white dark:border-neutral-700 dark:bg-transparent"
        >
          <ChevronUpIcon class="size-4" />
        </NumberInput.IncrementTrigger>
        <NumberInput.DecrementTrigger
          class="flex size-6 items-center justify-center rounded-br border border-l-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-700 dark:bg-transparent"
        >
          <ChevronDownIcon class="size-4" />
        </NumberInput.DecrementTrigger>
      </div>
    </NumberInput.Control>
  </NumberInput.Root>
</Container>
