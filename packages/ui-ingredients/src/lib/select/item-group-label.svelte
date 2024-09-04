<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SelectItemGroupLabelProps
    extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getSelectContext,
    getSelectItemGroupPropsContext,
  } from './context.svelte.js';

  let {asChild, children, ...props}: SelectItemGroupLabelProps = $props();

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
  <span {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
