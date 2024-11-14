<script lang="ts">
  import {Switch} from 'ui-ingredients';
</script>

<Switch.Root class="mx-auto w-fit">
  <Switch.Control
    class="relative h-10 w-16 rounded-full bg-neutral-800 transition-colors duration-150 data-checked:bg-indigo-500"
  >
    <Switch.Thumb
      class="absolute left-1 top-1 h-8 w-8 rounded-full bg-white shadow-md transition-all duration-200 data-checked:translate-x-[calc(100%-theme(spacing.2))]"
    />
  </Switch.Control>
  <Switch.HiddenInput />
</Switch.Root>
