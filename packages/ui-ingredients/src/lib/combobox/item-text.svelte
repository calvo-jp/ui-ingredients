<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ComboboxItemTextProps extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {comboboxContext, comboboxItemPropsContext} from './context.svelte.js';

  let {children, ...props}: ComboboxItemTextProps = $props();

  let context = comboboxContext.get();

  let itemProps = comboboxItemPropsContext.get();

  let attrs = $derived(mergeProps(props, context.getItemTextProps(itemProps)));
</script>

<span {...attrs}>
  {#if children}
    {@render children?.()}
  {:else}
    {context.collection.stringifyItem(itemProps.item)}
  {/if}
</span>
