<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ComboboxItemGroupLabelProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getComboboxContext,
    getComboboxItemGroupPropsContext,
  } from './combobox-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: ComboboxItemGroupLabelProps = $props();

  let combobox = getComboboxContext();
  let itemGroupProps = getComboboxItemGroupPropsContext();

  let mergedProps = $derived(
    mergeProps(
      props,
      combobox.getItemGroupLabelProps({
        htmlFor: itemGroupProps.id,
      }),
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
