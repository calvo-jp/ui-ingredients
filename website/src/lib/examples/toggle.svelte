<script lang="ts">
  import {IconButton} from '$lib/ui';
  import {Bell02Icon, BellOff02Icon} from '@untitled-theme/icons-svelte';
  import {Toggle} from 'ui-ingredients';

  let pressed = $state(false);
</script>

<Toggle.Root
  {pressed}
  onPressedChange={(detail) => {
    pressed = detail.pressed;
  }}
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
