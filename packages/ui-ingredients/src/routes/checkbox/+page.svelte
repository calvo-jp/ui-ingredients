<script lang="ts">
  import {Checkbox} from '$lib/index.js';

  let checked = $state(false);
</script>

<Checkbox.Root
  class="flex items-center gap-2"
  {checked}
  onCheckedChange={(detail) => {
    if (detail.checked === 'indeterminate') return;

    checked = detail.checked;
  }}
>
  <Checkbox.Control
    class="data-checked:border-green-600 data-checked:bg-green-600 flex h-5 w-5 items-center justify-center border transition-colors duration-150"
  >
    <Checkbox.Indicator>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-4.5 w-4.5 text-white"
      >
        <path d="M20 6L9 17L4 12"></path>
      </svg>
    </Checkbox.Indicator>
  </Checkbox.Control>
  <Checkbox.Label>I accept the terms and conditions</Checkbox.Label>
  <Checkbox.HiddenInput />
</Checkbox.Root>
