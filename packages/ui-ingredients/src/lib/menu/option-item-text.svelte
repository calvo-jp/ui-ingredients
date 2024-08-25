<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface MenuOptionItemTextProps extends HtmlProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {menuContext, menuOptionItemPropsContext} from './context.svelte.js';

  let {children, ...props}: MenuOptionItemTextProps = $props();

  let menu = menuContext.get();
  let optionItemProps = menuOptionItemPropsContext.get();

  let attrs = $derived(mergeProps(props, menu.getItemTextProps(optionItemProps)));
</script>

<span {...attrs}>
  {#if children}
    {@render children()}
  {:else}
    {optionItemProps.valueText}
  {/if}
</span>
