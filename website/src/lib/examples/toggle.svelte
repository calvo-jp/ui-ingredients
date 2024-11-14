<script lang="ts">
  import {IconButton} from '$lib/ui';
  import {Bell02Icon, BellOff02Icon} from '@untitled-theme/icons-svelte';
  import {Toggle} from 'ui-ingredients';
</script>

<Toggle.Root>
  {#snippet asChild(attrs, api)}
    <IconButton class="mx-auto" {...attrs}>
      {#if api.pressed}
        <BellOff02Icon />
      {:else}
        <Bell02Icon />
      {/if}
    </IconButton>
  {/snippet}
</Toggle.Root>
