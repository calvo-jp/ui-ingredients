<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface SelectItemGroupLabelProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {
    getSelectContext,
    getSelectItemGroupPropsContext,
  } from './select-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: SelectItemGroupLabelProps = $props();

  let select = getSelectContext();

  let itemGroupProps = getSelectItemGroupPropsContext();

  let mergedProps = $derived(
    mergeProps(
      select.getItemGroupLabelProps({htmlFor: itemGroupProps.id}),
      props,
    ),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
