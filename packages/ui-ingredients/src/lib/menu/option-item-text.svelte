<script lang="ts" module>
  import type {GenericHtmlProps, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';

  export interface MenuOptionItemTextProps extends HtmlProps<'div'> {
    asChild?: Snippet<[attrs: Omit<GenericHtmlProps, 'children'>]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {menuContext, menuOptionItemPropsContext} from './context.svelte.js';

  let {asChild, children, ...props}: MenuOptionItemTextProps = $props();

  let menu = menuContext.get();
  let optionItemProps = menuOptionItemPropsContext.get();

  let attrs = $derived(mergeProps(props, menu.getItemTextProps(optionItemProps)));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {#if children}
      {@render children()}
    {:else}
      {optionItemProps.valueText}
    {/if}
  </div>
{/if}
