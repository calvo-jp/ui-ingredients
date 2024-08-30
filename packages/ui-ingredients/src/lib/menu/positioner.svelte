<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface MenuPositionerProps extends HTMLProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {menuContext} from './context.svelte.js';

  let {asChild, children, ...props}: MenuPositionerProps = $props();

  let menu = menuContext.get();

  let mergedProps = $derived(mergeProps(props, menu.getPositionerProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
