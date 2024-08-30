<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface MenuOptionItemIndicatorProps extends HTMLProps<'span'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {menuContext, menuOptionItemPropsContext} from './context.svelte.js';

  let {asChild, children, ...props}: MenuOptionItemIndicatorProps = $props();

  let menu = menuContext.get();

  let itemProps = menuOptionItemPropsContext.get();

  let mergedProps = $derived(
    mergeProps(props, menu.getItemIndicatorProps(itemProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
