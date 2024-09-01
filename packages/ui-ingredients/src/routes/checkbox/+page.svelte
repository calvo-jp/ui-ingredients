<script lang="ts">
  import {Checkbox, Field} from '$lib/index.js';
  import {CheckIcon} from '@untitled-theme/icons-svelte';

  let checked = $state(false);

  $inspect(checked);
</script>

<Field.Root>
  <Checkbox.Root
    class="flex items-center gap-2"
    {checked}
    onCheckedChange={(detail) => {
      if (detail.checked === 'indeterminate') return;

      checked = detail.checked;
    }}
  >
    <Checkbox.Control
      class="data-checked:border-accent data-checked:bg-accent group flex size-6 items-center justify-center rounded border transition-colors duration-200"
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
