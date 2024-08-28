<script lang="ts" module>
  import type {GenericHtmlProps, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';

  export interface SelectItemGroupLabelProps extends HtmlProps<'div'> {
    asChild?: Snippet<[attrs: Omit<GenericHtmlProps, 'children'>]>;
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
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
