<script lang="ts">
  import {Switch} from 'ui-ingredients';
</script>

<Switch.Root class="m-0 flex justify-center">
  <Switch.Control
    class="relative h-10 w-16 rounded-full bg-neutral-300 transition-colors duration-150 ui-checked:bg-indigo-600 dark:bg-neutral-800 dark:ui-checked:bg-indigo-500"
  >
    <Switch.Thumb
      class="absolute left-1 top-1 h-8 w-8 rounded-full bg-white shadow-md transition-all duration-150 ui-checked:translate-x-[calc(100%---spacing(2))]"
    />
  </Switch.Control>
  <Switch.HiddenInput />
</Switch.Root>
