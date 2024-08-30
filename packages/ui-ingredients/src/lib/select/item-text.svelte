<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface SelectItemTextProps extends HTMLProps<'span'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {selectContext, selectItemPropsContext} from './context.svelte.js';

  let {asChild, children, ...props}: SelectItemTextProps = $props();

  let select = selectContext.get();
  let itemProps = selectItemPropsContext.get();

  let mergedProps = $derived(
    mergeProps(props, select.getItemTextProps(itemProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span {...mergedProps}>
    {#if children}
      {@render children?.()}
    {:else}
      {select.collection.stringifyItem(itemProps.item)}
    {/if}
  </span>
{/if}
