<script lang="ts">
  import {CheckIcon} from '@untitled-theme/icons-svelte';
  import {Checkbox, Field} from 'ui-ingredients';
</script>

<Field.Root class="mx-auto w-fit">
  <Checkbox.Root class="flex items-center gap-3">
    <Checkbox.Control
      class="group flex size-5 items-center justify-center rounded border border-neutral-700 transition-colors duration-200 data-checked:border-indigo-500 data-checked:bg-indigo-500"
    >
      <Checkbox.Indicator
        class="animate-fade-out group-data-checked:animate-fade-in"
      >
        <CheckIcon class="size-4 text-white" />
      </Checkbox.Indicator>
    </Checkbox.Control>
    <Checkbox.Label class="font-medium text-neutral-300">Label</Checkbox.Label>
    <Checkbox.HiddenInput />
  </Checkbox.Root>
</Field.Root>
