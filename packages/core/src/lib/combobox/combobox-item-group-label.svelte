<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface ComboboxItemGroupLabelProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
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
      combobox.getItemGroupLabelProps({
        htmlFor: itemGroupProps.id,
      }),
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
