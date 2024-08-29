<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface AvatarFallbackProps extends HTMLProps<'span'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {avatarContext} from './context.svelte.js';

  let {asChild, children, ...props}: AvatarFallbackProps = $props();

  let avatar = avatarContext.get();

  let attrs = $derived(mergeProps(props, avatar.getFallbackProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <span {...attrs}>
    {@render children?.()}
  </span>
{/if}
