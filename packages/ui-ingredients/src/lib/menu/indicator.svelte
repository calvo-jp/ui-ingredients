<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface MenuIndicatorProps extends HTMLProps<'span'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {menuContext} from './context.svelte.js';

  let {asChild, children, ...props}: MenuIndicatorProps = $props();

  let menu = menuContext.get();

  let mergedProps = $derived(mergeProps(props, menu.getIndicatorProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
