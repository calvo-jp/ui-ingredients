<script lang="ts">
  import {Switch} from '$lib/index.js';

  let checked = $state(false);

  $inspect(checked);
</script>

<Switch.Root
  {checked}
  onCheckedChange={(detail) => {
    checked = detail.checked;
  }}
  class="flex items-center gap-2.5"
>
  <Switch.Control
    class="w-16 h-10 relative bg-gray-200 rounded-full data-checked:bg-sky-400 transition-colors duration-200"
  >
    <Switch.Thumb
      class="bg-white w-8 absolute top-1 left-1 h-8 shadow-md rounded-full transition-all duration-200 data-checked:translate-x-[calc(100%-theme(spacing.2))]"
    />
  </Switch.Control>
  <Switch.Label>Press me</Switch.Label>
  <Switch.HiddenInput />
</Switch.Root>
