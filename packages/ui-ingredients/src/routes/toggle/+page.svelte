<script lang="ts">
  import {Toggle} from '$lib/index.js';

  let pressed = $state(false);

  $inspect({pressed});
</script>

<Toggle.Root
  {pressed}
  onPressedChange={(value) => {
    pressed = value;
  }}
>
  {#snippet children(api)}
    {#if api.pressed}
      Pressed
    {:else}
      Press
    {/if}
  {/snippet}
</Toggle.Root>

<style>
  :global([data-scope='toggle'][data-part='root']) {
    height: 36px;
    padding: 0px 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    color: oklch(0.439 0 0);
    background: oklch(0.97 0 0);
    font-weight: 600;
    cursor: pointer;
    transition: all 250ms;
  }

  :global([data-scope='toggle'][data-part='root'][data-state='on']) {
    background: oklch(0.746 0.16 232.661);
    color: white;
  }
</style>
