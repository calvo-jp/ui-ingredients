<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface ComboboxItemGroupProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
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

  let uid = $props.id();

  let combobox = getComboboxContext();
  let comboboxItemGroupProps = $derived({id: id ?? uid});
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
