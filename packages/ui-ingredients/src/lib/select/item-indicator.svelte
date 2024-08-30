<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface SelectItemIndicatorProps extends HTMLProps<'span'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {selectContext, selectItemPropsContext} from './context.svelte.js';

  let {asChild, children, ...props}: SelectItemIndicatorProps = $props();

  let select = selectContext.get();
  let itemProps = selectItemPropsContext.get();

  let mergedProps = $derived(
    mergeProps(props, select.getItemIndicatorProps(itemProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
