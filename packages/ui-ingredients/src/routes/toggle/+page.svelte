<script lang="ts">
  import {Toggle} from '$lib/index.js';
  import {Bell02Icon, BellOff02Icon} from '@untitled-theme/icons-svelte';
  import {IconButton} from '../shared/index.js';

  let pressed = $state(false);
</script>

<Toggle.Root
  {pressed}
  onPressedChange={() => {
    pressed = !pressed;
  }}
  pressedControlled
>
  {#snippet asChild(attrs, api)}
    <IconButton class="aria-pressed:bg-light/25" {...attrs}>
      {#if api.pressed}
        <BellOff02Icon />
      {:else}
        <Bell02Icon />
      {/if}
    </IconButton>
  {/snippet}
</Toggle.Root>
