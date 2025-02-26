<script lang="ts">
  import {Toggle} from '$lib/index.js';

  let pressed = $state(false);
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
