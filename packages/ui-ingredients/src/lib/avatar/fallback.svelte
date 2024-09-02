<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface AvatarFallbackProps extends HTMLProps<'span'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getAvatarContext} from './context.svelte.js';

  let {asChild, children, ...props}: AvatarFallbackProps = $props();

  let avatar = getAvatarContext();

  let mergedProps = $derived(mergeProps(props, avatar.getFallbackProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
