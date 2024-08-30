<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface ComboboxItemTextProps extends HTMLProps<'span'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {comboboxContext, comboboxItemPropsContext} from './context.svelte.js';

  let {asChild, children, ...props}: ComboboxItemTextProps = $props();

  let combobox = comboboxContext.get();
  let itemProps = comboboxItemPropsContext.get();

  let mergedProps = $derived(
    mergeProps(props, combobox.getItemTextProps(itemProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span {...mergedProps}>
    {#if children}
      {@render children?.()}
    {:else}
      {combobox.collection.stringifyItem(itemProps.item)}
    {/if}
  </span>
{/if}
