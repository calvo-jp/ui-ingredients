<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface AvatarImageProps extends HTMLProps<'img'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getAvatarContext} from './context.svelte.js';

  let {asChild, ...props}: AvatarImageProps = $props();

  let avatar = getAvatarContext();

  let mergedProps = $derived(mergeProps(props, avatar.getImageProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <img {...mergedProps} />
{/if}
