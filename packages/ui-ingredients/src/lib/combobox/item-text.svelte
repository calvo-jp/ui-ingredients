<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface ComboboxItemTextProps extends HtmlProps<'span'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {comboboxContext, comboboxItemPropsContext} from './context.svelte.js';

  let {asChild, children, ...props}: ComboboxItemTextProps = $props();

  let combobox = comboboxContext.get();
  let itemProps = comboboxItemPropsContext.get();

  let attrs = $derived(mergeProps(props, combobox.getItemTextProps(itemProps)));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <span {...attrs}>
    {#if children}
      {@render children?.()}
    {:else}
      {combobox.collection.stringifyItem(itemProps.item)}
    {/if}
  </span>
{/if}
