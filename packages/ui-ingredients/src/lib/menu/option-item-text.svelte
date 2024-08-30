<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface MenuOptionItemTextProps extends HTMLProps<'span'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {menuContext, menuOptionItemPropsContext} from './context.svelte.js';

  let {asChild, children, ...props}: MenuOptionItemTextProps = $props();

  let menu = menuContext.get();

  let itemProps = menuOptionItemPropsContext.get();

  let mergedProps = $derived(mergeProps(props, menu.getItemTextProps(itemProps)));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span {...mergedProps}>
    {#if children}
      {@render children()}
    {:else}
      {itemProps.valueText}
    {/if}
  </span>
{/if}
