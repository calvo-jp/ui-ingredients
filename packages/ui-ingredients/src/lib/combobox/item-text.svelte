<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ComboboxItemTextProps extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {
    useComboboxContext,
    useComboboxItemContext,
  } from './context.svelte.js';

  let {children, ...props}: ComboboxItemTextProps = $props();

  let context = useComboboxContext();
  let itemContext = useComboboxItemContext();

  let attrs = $derived(
    mergeProps(props, context.getItemTextProps(itemContext)),
  );
</script>

<span {...attrs}>
  {#if children}
    {@render children?.()}
  {:else}
    {context.collection.stringifyItem(itemContext.item)}
  {/if}
</span>
