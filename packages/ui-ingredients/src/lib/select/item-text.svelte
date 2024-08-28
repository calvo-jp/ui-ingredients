<script lang="ts" module>
  import type {GenericHtmlProps, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';

  export interface SelectItemTextProps extends HtmlProps<'div'> {
    asChild?: Snippet<[attrs: Omit<GenericHtmlProps, 'children'>]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {selectContext, selectItemPropsContext} from './context.svelte.js';

  let {asChild, children, ...props}: SelectItemTextProps = $props();

  let select = selectContext.get();
  let itemProps = selectItemPropsContext.get();

  let attrs = $derived(mergeProps(props, select.getItemTextProps(itemProps)));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {#if children}
      {@render children?.()}
    {:else}
      {select.collection.stringifyItem(itemProps.item)}
    {/if}
  </div>
{/if}
