<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface SelectItemGroupLabelProps extends HTMLProps<'span'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {selectContext, selectItemGroupPropsContext} from './context.svelte.js';

  let {asChild, children, ...props}: SelectItemGroupLabelProps = $props();

  let select = selectContext.get();
  let itemGroupProps = selectItemGroupPropsContext.get();

  let attrs = $derived(
    mergeProps(props, select.getItemGroupLabelProps({htmlFor: itemGroupProps.id})),
  );
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <span {...attrs}>
    {@render children?.()}
  </span>
{/if}
