<script lang="ts">
  import {Label} from '$lib/ui';
  import {CheckIcon} from '@untitled-theme/icons-svelte';
  import {Checkbox} from 'ui-ingredients';
  import Container from './container.svelte';
</script>

<Container>
  <Checkbox.Root class="flex items-center justify-center gap-3">
    <Checkbox.Control
      class="group flex size-5 items-center justify-center rounded border border-neutral-200 bg-white transition-colors duration-150 data-checked:border-indigo-600 data-checked:bg-indigo-600 dark:border-neutral-700 dark:bg-transparent dark:data-checked:border-indigo-500 dark:data-checked:bg-indigo-500"
    >
      <Checkbox.Indicator
        class="animate-fade-out group-data-checked:animate-fade-in"
      >
        <CheckIcon class="size-4 text-white" />
      </Checkbox.Indicator>
    </Checkbox.Control>
    <Checkbox.Label>
      {#snippet asChild(attrs)}
        <Label {...attrs} class="mb-0">Label</Label>
      {/snippet}
    </Checkbox.Label>
    <Checkbox.HiddenInput />
  </Checkbox.Root>
</Container>
