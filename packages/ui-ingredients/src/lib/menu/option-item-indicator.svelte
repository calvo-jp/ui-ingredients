<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface MenuOptionItemIndicatorProps extends HtmlProps<'span'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {menuContext, menuOptionItemPropsContext} from './context.svelte.js';

  let {asChild, children, ...props}: MenuOptionItemIndicatorProps = $props();

  let menu = menuContext.get();
  let optionItemProps = menuOptionItemPropsContext.get();

  let attrs = $derived(mergeProps(props, menu.getItemIndicatorProps(optionItemProps)));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <span {...attrs}>
    {@render children?.()}
  </span>
{/if}
