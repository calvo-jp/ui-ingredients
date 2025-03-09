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

<style>
  :global([data-scope='switch'][data-part='root']) {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  :global([data-scope='switch'][data-part='control']) {
    width: 40px;
    height: 26px;
    border-radius: 9999px;
    padding: 1px;
    background: oklch(0.922 0 0);
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  :global([data-scope='switch'][data-part='control'][data-state='checked']) {
    background: oklch(0.746 0.16 232.661);
  }

  :global([data-scope='switch'][data-part='thumb']) {
    width: 22px;
    aspect-ratio: 1/1;
    border-radius: 100%;
    background: white;
    transition: all 250ms;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  :global([data-scope='switch'][data-part='thumb'][data-state='checked']) {
    transform: translateX(16px);
  }
</style>
