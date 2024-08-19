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
  {#snippet children(context)}
    <Switch.Control
      class="w-16 h-10 relative bg-neutral-600 rounded-full data-checked:bg-indigo-500 transition-colors duration-200"
    >
      <Switch.Thumb
        class="bg-white w-8 absolute top-1 left-1 h-8 shadow-md rounded-full transition-all duration-200 data-checked:translate-x-[calc(100%-theme(spacing.2))]"
      />
    </Switch.Control>
    <Switch.Label>
      {#if context.checked}
        Checked
      {:else}
        Unchecked
      {/if}
    </Switch.Label>
    <Switch.HiddenInput />
  {/snippet}
</Switch.Root>
