<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface ComboboxItemTextProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {comboboxContext, comboboxItemPropsContext} from './context.svelte.js';

  let {children, ...props}: ComboboxItemTextProps = $props();

  let combobox = comboboxContext.get();
  let itemProps = comboboxItemPropsContext.get();

  let attrs = $derived(mergeProps(props, combobox.getItemTextProps(itemProps)));
</script>

<div {...attrs}>
  {#if children}
    {@render children?.()}
  {:else}
    {combobox.collection.stringifyItem(itemProps.item)}
  {/if}
</div>
