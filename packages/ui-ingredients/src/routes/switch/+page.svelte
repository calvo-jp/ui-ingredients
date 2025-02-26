<script lang="ts">
  import {Switch} from '$lib/index.js';

  let checked = $state(false);

  $inspect({checked});
</script>

<Switch.Root
  {checked}
  onCheckedChange={(detail) => {
    checked = detail.checked;
  }}
>
  {#snippet children(context)}
    <Switch.Control>
      <Switch.Thumb />
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
