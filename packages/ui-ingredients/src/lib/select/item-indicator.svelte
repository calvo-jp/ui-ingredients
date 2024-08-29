<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface SelectItemIndicatorProps extends HtmlProps<'span'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {selectContext, selectItemPropsContext} from './context.svelte.js';

  let {asChild, children, ...props}: SelectItemIndicatorProps = $props();

  let select = selectContext.get();
  let itemProps = selectItemPropsContext.get();

  let attrs = $derived(mergeProps(props, select.getItemIndicatorProps(itemProps)));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <span {...attrs}>
    {@render children?.()}
  </span>
{/if}
