<script lang="ts">
  import {Switch} from '$lib/index.js';

  let checked = $state(false);
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
      class="data-checked:bg-accent bg-disabled relative h-10 w-16 rounded-full transition-colors duration-150"
    >
      <Switch.Thumb
        class="absolute left-1 top-1 h-8 w-8 rounded-full bg-white shadow-md transition-all duration-150 data-checked:translate-x-[calc(100%-theme(spacing.2))]"
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
