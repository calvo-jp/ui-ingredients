<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface SelectItemTextProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {selectContext, selectItemPropsContext} from './context.svelte.js';

  let {children, ...props}: SelectItemTextProps = $props();

  let select = selectContext.get();
  let itemProps = selectItemPropsContext.get();

  let attrs = $derived(mergeProps(props, select.getItemTextProps(itemProps)));
</script>

<div {...attrs}>
  {#if children}
    {@render children?.()}
  {:else}
    {select.collection.stringifyItem(itemProps.item)}
  {/if}
</div>
