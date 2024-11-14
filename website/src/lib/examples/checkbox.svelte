<script lang="ts">
  import {CheckIcon} from '@untitled-theme/icons-svelte';
  import {Checkbox, Field} from 'ui-ingredients';

  let checked = $state(false);
</script>

<Field.Root class="mx-auto w-fit">
  <Checkbox.Root
    class="flex items-center gap-3"
    {checked}
    onCheckedChange={(detail) => {
      if (detail.checked === 'indeterminate') return;

      checked = detail.checked;
    }}
  >
    <Checkbox.Control
      class="group flex size-6 items-center justify-center rounded border border-neutral-700 transition-colors duration-200 data-checked:border-indigo-500 data-checked:bg-indigo-500"
    >
      <Checkbox.Indicator
        class="animate-fade-out group-data-checked:animate-fade-in"
      >
        <CheckIcon class="size-4 text-white" />
      </Checkbox.Indicator>
    </Checkbox.Control>
    <Checkbox.Label>I accept the terms and conditions</Checkbox.Label>
    <Checkbox.HiddenInput />
  </Checkbox.Root>
</Field.Root>
