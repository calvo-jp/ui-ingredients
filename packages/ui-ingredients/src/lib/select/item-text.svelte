<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SelectItemTextProps extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {selectContext, selectItemPropsContext} from './context.svelte.js';

  let {children, ...props}: SelectItemTextProps = $props();

  let context = selectContext.get();

  let itemProps = selectItemPropsContext.get();

  let attrs = $derived(mergeProps(props, context.getItemTextProps(itemProps)));
</script>

<span {...attrs}>
  {#if children}
    {@render children?.()}
  {:else}
    {context.collection.stringifyItem(itemProps.item)}
  {/if}
</span>
