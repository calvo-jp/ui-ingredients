<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface ComboboxItemGroupProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {createUniqueId} from '../create-unique-id.js';
  import {
    getComboboxContext,
    setComboboxItemGroupPropsContext,
  } from './combobox-context.svelte.js';

  let {
    id,
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: ComboboxItemGroupProps = $props();

  let combobox = getComboboxContext();

  let id_ = createUniqueId();

  let comboboxItemGroupProps = $derived({
    id: id ?? id_,
  });

  let mergedProps = $derived(
    mergeProps(combobox.getItemGroupProps(comboboxItemGroupProps), props),
  );

  setComboboxItemGroupPropsContext(() => comboboxItemGroupProps);
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
