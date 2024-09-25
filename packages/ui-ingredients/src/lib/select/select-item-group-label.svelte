<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SelectItemGroupLabelProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getSelectContext,
    getSelectItemGroupPropsContext,
  } from './select-context.svelte.js';

  let {
    this: e,
    asChild,
    children,
    ...props
  }: SelectItemGroupLabelProps = $props();

  let select = getSelectContext();

  let itemGroupProps = getSelectItemGroupPropsContext();

  let mergedProps = $derived(
    mergeProps(
      props,
      select.getItemGroupLabelProps({htmlFor: itemGroupProps.id}),
    ),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={e} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
