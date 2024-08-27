<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface MenuOptionItemTextProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {menuContext, menuOptionItemPropsContext} from './context.svelte.js';

  let {children, ...props}: MenuOptionItemTextProps = $props();

  let menu = menuContext.get();
  let optionItemProps = menuOptionItemPropsContext.get();

  let attrs = $derived(mergeProps(props, menu.getItemTextProps(optionItemProps)));
</script>

<div {...attrs}>
  {#if children}
    {@render children()}
  {:else}
    {optionItemProps.valueText}
  {/if}
</div>
